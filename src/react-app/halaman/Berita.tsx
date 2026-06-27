import React, { useState, useEffect } from "react";

const Berita: React.FC = () => {
  const [apiData, setApiData] = useState<string>("Memuat informasi backend...");

  useEffect(() => {
    // Menghubungkan komponen berita ini ke API Hono & Cloudflare Workers Anda
    fetch("/api/")
      .then((res) => res.json() as Promise<{ name: string }>)
      .then((data) => setApiData(`Koneksi Backend Aktif: ${data.name}`))
      .catch(() => setApiData("Gagal memuat info API"));
  }, []);

  const kumpulanBerita = [
    { id: 1, judul: "SMKS Darun Najah Raih Penghargaan Sekolah Vokasi Berprestasi", tanggal: "26 Juni 2026", ringkasan: "Penghargaan ini diberikan atas inovasi sekolah dalam mengintegrasikan kurikulum industri dengan pendidikan karakter." },
    { id: 2, judul: "Kunjungan Industri Siswa RPL ke Perusahaan Cloud Global", tanggal: "18 Juni 2026", ringkasan: "Para siswa dibekali pemahaman mendalam terkait alur kerja developer profesional dan implementasi arsitektur cloud server." },
    { id: 3, judul: "Workshop Desain Kreatif Bersama Praktisi Agensi DKV", tanggal: "05 Juni 2026", ringkasan: "Meningkatkan portofolio siswa kelas XI dengan pengujian langsung oleh pengarah seni dari industri kreatif nasional." }
  ];

  return (
    <section className="section">
      <div className="section-title">
        <h2>Berita & Kegiatan</h2>
        <div className="underline"></div>
      </div>

      <div className="api-status" style={{ marginBottom: "30px" }}>
        <p><strong>Status Sinkronisasi Server:</strong> {apiData}</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        {kumpulanBerita.map((item) => (
          <div key={item.id} style={{ padding: "25px", border: "1px solid #eee", borderRadius: "8px", background: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.02)" }}>
            <span style={{ fontSize: "0.85rem", color: "#888" }}>📅 {item.tanggal}</span>
            <h3 style={{ color: "var(--primary-color)", margin: "8px 0 12px 0" }}>{item.judul}</h3>
            <p style={{ color: "#555" }}>{item.ringkasan}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Berita;