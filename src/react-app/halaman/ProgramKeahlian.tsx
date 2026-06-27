import React from "react";

const ProgramKeahlian: React.FC = () => {
  const daftarJurusan = [
    { nama: "Teknik Komputer & Jaringan", singkatan: "TKJ", deskripsi: "Fokus pada perakitan komputer, troubleshooting jaringan LAN/WAN, administrasi server Linux/Windows, serta penanganan infrastruktur cloud." },
    { nama: "Desain dan Produksi Busana", singkatan: "DPB", deskripsi: "Mempunyai kemampuan pengetahuan dan keterampilan dalam pembuatan busana, pengelolaan dan penyelenggaraan usaha busana serta mampu berkompetisi dalam mengembangkan sikap profesional dalam bidang busana." }
  ];

  return (
    <section className="section jurusan-section">
      <div className="section-title">
        <h2>Program Keahlian</h2>
        <div className="underline"></div>
      </div>
      <p style={{ textAlign: "center", marginBottom: "40px", color: "#666" }}>
        SMKS Darun Najah menyediakan kompetensi keahlian unggulan yang dirancang siap menghadapi tantangan era transformasi digital.
      </p>
      <div className="jurusan-grid">
        {daftarJurusan.map((jurusan, index) => (
          <div className="jurusan-card" key={index}>
            <div className="jurusan-icon">{jurusan.singkatan}</div>
            <h3>{jurusan.nama}</h3>
            <p>{jurusan.deskripsi}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramKeahlian;