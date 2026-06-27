import { Hono } from "hono";

type Bindings = {
  BUCKET_GALERI: R2Bucket;
  DB: D1Database; // Menambahkan binding untuk Cloudflare D1 Database
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/api/", (c) => {
  return c.json({ name: "Hono Backend Aktif!" });
});

// --- ENDPOINT BARU UNTUK MENGAMBIL BERITA ---
app.get("/api/berita", async (c) => {
  try {
    // Query untuk mengambil artikel milik lembaga_id = 1
    // Menggunakan sub-query ke tabel 'baris' (urutan pertama) untuk dijadikan ringkasan text
    const query = `
      SELECT 
        a.artikel_id as id, 
        a.judul_artikel as judul, 
        a.tanggal_dibuat as tanggal,
        (SELECT isi FROM baris WHERE artikel_id = a.artikel_id ORDER BY urutan ASC LIMIT 1) as ringkasan
      FROM artikel a
      WHERE a.lembaga_id = 1
      ORDER BY a.tanggal_dibuat DESC
    `;
    
    // Mengeksekusi query di Cloudflare D1
    const { results } = await c.env.DB.prepare(query).all();
    
    // Mengembalikan data sebagai JSON
    return c.json(results);
  } catch (error) {
    console.error("Database Error:", error);
    return c.json({ error: "Gagal mengambil data berita dari database." }, 500);
  }
});

// --- ENDPOINT R2 YANG DIPERBAIKI (MENDUKUNG FOLDER) ---
app.get("/api/assets/*", async (c) => {
  const url = new URL(c.req.url);
  const objectKey = decodeURIComponent(url.pathname.replace("/api/assets/", ""));
  const object = await c.env.BUCKET_GALERI.get(objectKey);

  if (object === null) {
    return c.text(`Gambar tidak ditemukan di path: ${objectKey}`, 404);
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);

  return new Response(object.body, { headers });
});

export default app;