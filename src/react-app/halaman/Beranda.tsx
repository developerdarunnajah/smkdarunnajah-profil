// src/react-app/halaman/Beranda.tsx
import React from "react";

// Import halaman lain yang ingin ditampilkan di Beranda
import Profil from "./Profil";
import ProgramKeahlian from "./ProgramKeahlian";
import Berita from "./Berita";
import Galeri from "./Galeri";

interface BerandaProps {
  setHalaman: (halaman: string) => void;
}

const Beranda: React.FC<BerandaProps> = ({ setHalaman }) => {
  // Fungsi tambahan untuk scroll halus saat tombol diklik
  const scrollKePpdb = () => {
    // Scroll ke bagian profil yang ada di halaman beranda ini
    const elemenPpdb = document.getElementById("ppdb-beranda");
    if (elemenPpdb) {
      elemenPpdb.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback jika tidak ditemukan (pindah halaman murni)
      setHalaman("ppdb");
    }
  };

  return (
    <>
      {/* 1. Bagian Banner / Hero */}
      <header className="hero-section">
        <div className="hero-content">
          <h2>Selamat Datang di</h2>
          <h1>SMKS DARUN NAJAH</h1>
          <p>Mewujudkan Generasi Unggul, Cerdas, Terampil, dan Berakhlak Mulia berlandaskan IMTAQ dan IPTEK.</p>
          <button 
            onClick={scrollKePpdb} 
            className="btn-primary" 
          >
            Daftar Sekarang
          </button>
        </div>
      </header>

      {/* 2. Bagian Profil */}
      <div id="profil-beranda">
        <Profil />
      </div>

      {/* 3. Bagian Program Keahlian / Jurusan */}
      <div style={{ backgroundColor: "var(--bg-light)" }}>
        <ProgramKeahlian />
      </div>

      {/* 4. Bagian Berita */}
      <Berita />

      {/* 5. Bagian Galeri */}
      <div style={{ backgroundColor: "var(--bg-light)", paddingBottom: "40px" }}>
        <Galeri />
      </div>
      
    </>
  );
};

export default Beranda;