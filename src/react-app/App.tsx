// src/react-app/App.tsx
import { useState } from "react";
import "./App.css";

// Import halaman-halaman dari folder halaman
import Beranda from "./halaman/Beranda";
import Profil from "./halaman/Profil";
import ProgramKeahlian from "./halaman/ProgramKeahlian";
import Berita from "./halaman/Berita";
import Galeri from "./halaman/Galeri"; // <-- Import Halaman Galeri Baru
import Ppdb from "./halaman/Ppdb";
import Kontak from "./halaman/Kontak";

function App() {
  const [halamanAktif, setHalamanAktif] = useState<string>("beranda");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navigasiKe = (halaman: string) => {
    setHalamanAktif(halaman);
    setIsMobileMenuOpen(false);
  };

  const renderKontenHalaman = () => {
    switch (halamanAktif) {
      case "beranda":
        return <Beranda setHalaman={navigasiKe} />;
      case "profil":
        return <Profil />;
      case "jurusan":
        return <ProgramKeahlian />;
      case "berita":
        return <Berita />;
      case "galeri": // <-- Route untuk halaman galeri
        return <Galeri />;
      case "ppdb":
        return <Ppdb />;
      case "kontak":
        return <Kontak />;
      default:
        return <Beranda setHalaman={navigasiKe} />;
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo-container" style={{ cursor: "pointer" }} onClick={() => navigasiKe("beranda")}>
          <h1 className="logo-text">SMKS DARUN NAJAH</h1>
        </div>

        <div className="hamburger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? "sidebar-aktif" : ""}`}>
          <li>
            <button onClick={() => navigasiKe("beranda")} className={`nav-btn ${halamanAktif === "beranda" ? "active" : ""}`}>
              Beranda
            </button>
          </li>
          <li>
            <button onClick={() => navigasiKe("profil")} className={`nav-btn ${halamanAktif === "profil" ? "active" : ""}`}>
              Profil
            </button>
          </li>
          <li>
            <button onClick={() => navigasiKe("jurusan")} className={`nav-btn ${halamanAktif === "jurusan" ? "active" : ""}`}>
              Program Keahlian
            </button>
          </li>
          <li>
            <button onClick={() => navigasiKe("berita")} className={`nav-btn ${halamanAktif === "berita" ? "active" : ""}`}>
              Berita
            </button>
          </li>
          {/* Tombol Galeri diletakkan di samping Berita */}
          <li>
            <button onClick={() => navigasiKe("galeri")} className={`nav-btn ${halamanAktif === "galeri" ? "active" : ""}`}>
              Galeri
            </button>
          </li>
          <li>
            <button onClick={() => navigasiKe("ppdb")} className={`nav-btn ${halamanAktif === "ppdb" ? "active" : ""}`}>
              PPDB
            </button>
          </li>
          <li>
            <button onClick={() => navigasiKe("kontak")} className={`nav-btn ${halamanAktif === "kontak" ? "active" : ""}`}>
              Kontak
            </button>
          </li>
        </ul>
      </nav>

      {isMobileMenuOpen && (
        <div className="sidebar-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      <main style={{ minHeight: "75vh" }}>
        {renderKontenHalaman()}
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>SMKS DARUN NAJAH</h3>
            <p>Lembaga pendidikan kejuruan yang mengedepankan kualitas keterampilan vokasi teknis dan nilai moralitas religius islami.</p>
          </div>
          <div className="footer-contact">
            <h3>Hubungi Kami</h3>
            <p> Jl. KH Musthofa No 05 Desa Petahunan Kecamatan Sumbersuko Lumajang</p>
            <p>WA : 08123456789</p>
            <p>Email: smkdanalmj@gmail.com</p>
          </div>
          <div className="footer-links">
            <h3>Tautan Navigasi</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <li><button onClick={() => navigasiKe("beranda")} className="footer-link-btn">Beranda</button></li>
              <li><button onClick={() => navigasiKe("profil")} className="footer-link-btn">Profil</button></li>
              <li><button onClick={() => navigasiKe("galeri")} className="footer-link-btn">Galeri</button></li>
              <li><button onClick={() => navigasiKe("ppdb")} className="footer-link-btn">PPDB</button></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SMKS Darun Najah.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;