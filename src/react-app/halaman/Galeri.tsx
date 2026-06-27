// src/react-app/halaman/Galeri.tsx

import React, { useState } from "react";

const Galeri: React.FC = () => {
  // CARA PAKAI: Anda tinggal copy-paste link/URL tempat gambar berada ke dalam array di bawah ini.
  // Gunakan tanda kutip dan pisahkan dengan koma seperti contoh berikut.
  const kumpulanGambar = [
    "/api/assets/galeri/dpblab.jpeg", // Contoh gambar sekolah 1
    "/api/assets/galeri/galeri2.jpeg", // Contoh gambar sekolah 2
    "/api/assets/galeri/galeri3.jpeg", // Contoh gambar sekolah 3
    "/api/assets/galeri/placeholder1.jpeg", // Contoh placeholder
    "/api/assets/galeri/placeholder2.jpeg",
    "/api/assets/galeri/placeholder3.jpeg",
    "/api/assets/galeri/galeri3.jpeg", // Contoh gambar sekolah 3
    "/api/assets/galeri/placeholder1.jpeg", // Contoh placeholder
    "/api/assets/galeri/placeholder2.jpeg",
    "/api/assets/galeri/placeholder3.jpeg",
  ];
// --- LOGIKA PAGINASI (SLIDER) ---
  const [halamanSaatIni, setHalamanSaatIni] = useState(1);
  const gambarPerHalaman = 8; // 2 baris x 4 kolom = 8 gambar

  // Hitung total halaman yang tersedia
  const totalHalaman = Math.ceil(kumpulanGambar.length / gambarPerHalaman);

  // Potong array gambar untuk hanya menampilkan 8 gambar sesuai halaman saat ini
  const indexTerakhir = halamanSaatIni * gambarPerHalaman;
  const indexPertama = indexTerakhir - gambarPerHalaman;
  const gambarTampil = kumpulanGambar.slice(indexPertama, indexTerakhir);

  // Fungsi navigasi slide
  const keHalamanSelanjutnya = () => {
    if (halamanSaatIni < totalHalaman) setHalamanSaatIni(halamanSaatIni + 1);
  };

  const keHalamanSebelumnya = () => {
    if (halamanSaatIni > 1) setHalamanSaatIni(halamanSaatIni - 1);
  };

  return (
    <section className="section">
      <div className="section-title">
        <h2>Galeri Foto Kegiatan</h2>
        <div className="underline"></div>
      </div>
      <p style={{ textAlign: "center", marginBottom: "40px", color: "#666" }}>
        Dokumentasi aktivitas, fasilitas, dan kilas balik momentum berharga di SMKS Darun Najah.
      </p>

      {/* Grid Galeri yang sudah dipotong (maksimal 8 gambar) */}
      <div className="galeri-grid">
        {gambarTampil.map((linkGambar, index) => (
          <div className="galeri-item" key={index}>
            <img 
              src={linkGambar} 
              alt={`Dokumentasi SMKS Darun Najah ${indexPertama + index + 1}`} 
              loading="lazy" 
            />
          </div>
        ))}
      </div>

      {/* --- KONTROL NAVIGASI SLIDE --- */}
      {totalHalaman > 1 && (
        <div className="galeri-navigasi">
          <button 
            onClick={keHalamanSebelumnya} 
            disabled={halamanSaatIni === 1}
            className="btn-navigasi"
          >
            &#8592; Sebelumnya
          </button>
          
          <span className="info-halaman">
            Slide {halamanSaatIni} dari {totalHalaman}
          </span>
          
          <button 
            onClick={keHalamanSelanjutnya} 
            disabled={halamanSaatIni === totalHalaman}
            className="btn-navigasi"
          >
            Selanjutnya &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default Galeri;