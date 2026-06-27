import { Hono } from "hono";

type Bindings = {
  BUCKET_GALERI: R2Bucket;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/api/", (c) => {
  return c.json({ name: "Hono Backend Aktif!" });
});

// --- ENDPOINT R2 YANG DIPERBAIKI (MENDUKUNG FOLDER) ---
// Menggunakan wildcard (*) agar bisa menangkap URL yang ada garis miringnya (/)
app.get("/api/assets/*", async (c) => {
  // Ambil URL lengkap yang diminta
  const url = new URL(c.req.url);
  
  // Hapus tulisan '/api/assets/' dari depan URL untuk mendapatkan nama/path asli di R2
  // Contoh: /api/assets/galeri/kegiatan.jpg -> menjadi "galeri/kegiatan.jpg"
  const objectKey = decodeURIComponent(url.pathname.replace("/api/assets/", ""));

  // Cari object berdasarkan path (termasuk foldernya)
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