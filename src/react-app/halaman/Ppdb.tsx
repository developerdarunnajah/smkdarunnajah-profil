import React, { useState } from "react";

const Ppdb: React.FC = () => {
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [terkirim, setTerkirim] = useState(false);

  const handleDaftar = (e: React.FormEvent) => {
    e.preventDefault();
    if (nama && jurusan) {
      setTerkirim(true);
    }
  };

  return (
    <section className="section">
      <div className="section-title">
        <h2>Penerimaan Peserta Didik Baru (PPDB)</h2>
        <div className="underline"></div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "50px", marginTop: "20px" }}>
        <div>
          <h3 style={{ color: "var(--primary-color)", marginBottom: "15px" }}>Persyaratan Pendaftaran</h3>
          <ul style={{ paddingLeft: "20px", lineHeight: "2", color: "#444" }}>
            <li>Fotokopi Ijazah / Surat Keterangan Lulus (SKL) SMP/MTs sederajat.</li>
            <li>Fotokopi Kartu Keluarga (KK) dan Akta Kelahiran.</li>
            <li>Pasfoto terbaru ukuran 3x4 (3 lembar).</li>
            <li>Mengikuti seleksi minat bakat untuk program keahlian terkait.</li>
          </ul>
        </div>

        <div style={{ background: "#f5f5f5", padding: "30px", borderRadius: "10px" }}>
          <h3 style={{ color: "var(--primary-color)", marginBottom: "20px" }}>Formulir Minat PPDB Online</h3>
          {terkirim ? (
            <div style={{ background: "#e8f5e9", color: "#2e7d32", padding: "20px", borderRadius: "6px", border: "1px solid #c8e6c9" }}>
              <strong>Pendaftaran Berhasil!</strong><br /> Halo {nama}, data pengajuan awal Anda untuk Program Keahlian {jurusan} sudah kami terima. Tim panitia PPDB akan segera menghubungi Anda.
            </div>
          ) : (
            <form onSubmit={handleDaftar} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "600" }}>Nama Calon Siswa:</label>
                <input 
                  type="text" 
                  value={nama} 
                  onChange={(e) => setNama(e.target.value)} 
                  required 
                  style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} 
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "600" }}>Pilihan Kompetensi Keahlian:</label>
                <select 
                  value={jurusan} 
                  onChange={(e) => setJurusan(e.target.value)} 
                  required 
                  style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", background: "#fff" }}
                >
                  <option value="">-- Pilih Jurusan --</option>
                  <option value="Teknik Komputer & Jaringan">Teknik Komputer & Jaringan (TKJ)</option>
                  <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak (RPL)</option>
                  <option value="Desain Komunikasi Visual">Desain Komunikasi Visual (DKV)</option>
                </select>
              </div>
              <button type="submit" className="btn-primary" style={{ border: "none", cursor: "pointer", width: "100%", marginTop: "10px" }}>
                Kirim Berkas Pendaftaran
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Ppdb;