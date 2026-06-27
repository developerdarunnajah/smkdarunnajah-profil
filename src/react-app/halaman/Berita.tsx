import React, { useState, useEffect } from "react";

// Struktur data yang diharapkan dari API Worker / D1
interface BeritaItem {
  id: number;
  judul: string;
  tanggal: string;
  ringkasan: string | null;
}

const Berita: React.FC = () => {
  const [daftarBerita, setDaftarBerita] = useState<BeritaItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Mengambil data berita dari endpoint API Worker (D1)
    fetch("/api/berita")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal mengambil data dari server");
        return res.json() as Promise<BeritaItem[]>;
      })
      .then((data) => {
        setDaftarBerita(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Gagal memuat daftar berita.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="section">
      <div className="section-title">
        <h2>Berita & Kegiatan</h2>
        <div className="underline"></div>
      </div>

      {loading && <p style={{ textAlign: "center", color: "#666" }}>Memuat berita dari database...</p>}
      
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {!loading && !error && daftarBerita.length === 0 && (
        <p style={{ textAlign: "center", color: "#666" }}>Belum ada artikel untuk lembaga ini.</p>
      )}

      {!loading && !error && daftarBerita.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          {daftarBerita.map((item) => {
            // Memformat format tanggal dari database (YYYY-MM-DD) ke format lokal Indonesia
            const tanggalLokal = new Date(item.tanggal).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });

            // Memotong string ringkasan jika terlalu panjang
            const maxKarakter = 150;
            const ringkasanTeks = item.ringkasan 
              ? (item.ringkasan.length > maxKarakter ? item.ringkasan.substring(0, maxKarakter) + "..." : item.ringkasan)
              : "Tidak ada ringkasan tersedia.";

            return (
              <div key={item.id} style={{ padding: "25px", border: "1px solid #eee", borderRadius: "8px", background: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.02)" }}>
                <span style={{ fontSize: "0.85rem", color: "#888" }}>📅 {tanggalLokal}</span>
                <h3 style={{ color: "var(--primary-color)", margin: "8px 0 12px 0" }}>{item.judul}</h3>
                <p style={{ color: "#555", lineHeight: "1.6" }}>{ringkasanTeks}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Berita;