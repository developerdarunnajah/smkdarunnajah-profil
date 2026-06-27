import React from "react";

interface BerandaProps {
  setHalaman: (halaman: string) => void;
}

const Beranda: React.FC<BerandaProps> = ({ setHalaman }) => {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <h2>Selamat Datang di</h2>
        <h1>SMKS DARUN NAJAH</h1>
        <p>Mewujudkan Generasi Unggul, Cerdas, Terampil, dan Berakhlak Mulia berlandaskan IMTAQ dan IPTEK.</p>
        <button 
          onClick={() => setHalaman("ppdb")} 
          className="btn-primary" 
          style={{ border: "none", cursor: "pointer" }}
        >
          Daftar
        </button>
      </div>
    </header>
  );
};

export default Beranda;