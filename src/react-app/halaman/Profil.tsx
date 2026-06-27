import React from "react";

const Profil: React.FC = () => {
  return (
    <section className="section">
      <div className="section-title">
        <h2>Profil Lembaga</h2>
        <div className="underline"></div>
      </div>
      
      <div className="sambutan-content" style={{ marginBottom: "50px" }}>
        <div className="foto-placeholder">
          <img src="/api/assets/galeri/bukhal.jpeg" alt="Kepala Sekolah" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
        </div>
        <div className="teks-sambutan">
          <h3>Sambutan Kepala Sekolah</h3>
          <p>Assalamu'alaikum Wr. Wb.</p>
          <p>
            Puji syukur senantiasa kita panjatkan kehadirat Allah SWT. Selamat datang di platform website resmi <strong>SMKS Darun Najah</strong>. 
            Melalui halaman ini, kami berupaya memberikan keterbukaan informasi mengenai visi, misi, serta dinamika perkembangan sekolah kami kepada masyarakat luas.
          </p>
          <p className="nama-kepsek">- Kepala SMKS Darun Najah</p>
        </div>
      </div>

      <div className="visi-misi" style={{ background: "#f9f9f9", padding: "30px", borderRadius: "10px" }}>
        <h3 style={{ color: "var(--primary-color)", marginBottom: "15px" }}>Visi & Misi</h3>
        <p><strong>Visi:</strong> Menjadi lembaga pendidikan kejuruan yang unggul dalam menghasilkan lulusan Islami, profesional, handal, dan berdaya saing global.</p>
        <br />
        <p><strong>Misi:</strong></p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>Menanamkan nilai-nilai keagamaan dan akhlak mulia dalam setiap aspek kehidupan sekolah.</li>
          <li>Menyelenggarakan proses pembelajaran berbasis kompetensi teknologi yang selaras dengan kebutuhan dunia kerja.</li>
          <li>Membangun kerja sama yang produktif dengan Dunia Usaha, Dunia Industri, dan Dunia Kerja (DUDIKA).</li>
        </ul>
      </div>
    </section>
  );
};

export default Profil;