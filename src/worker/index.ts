import { Hono } from "hono";
import { queryD1 } from "./lib/d1-read";

type Bindings = {
  BUCKET_GALERI: R2Bucket;
  D1_READ_TOKEN: string;
  CF_ACCOUNT_ID: string;   // ← tambah
  CF_DATABASE_ID: string;  // ← tambah
};
const app = new Hono<{ Bindings: Bindings }>();

app.get("/api/", (c) => {
  return c.json({ name: "Hono Backend Aktif!" });
});

// --- ENDPOINT BERITA (read-only via Cloudflare API) ---
app.get("/api/berita", async (c) => {
  try {
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

    const { results } = await queryD1(
  c.env.D1_READ_TOKEN,
  c.env.CF_ACCOUNT_ID,
  c.env.CF_DATABASE_ID,
  query
);

    return c.json(results);
  } catch (error) {
    console.error("Database Error:", error);
    return c.json({ error: "Gagal mengambil data berita dari database." }, 500);
  }
});

// --- ENDPOINT R2 (tidak berubah) ---
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
