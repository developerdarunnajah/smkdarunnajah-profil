import React from "react";

const Kontak: React.FC = () => {
  return (
    <section className="section">
      <div className="section-title">
        <h2>Hubungi Kontak Kami</h2>
        <div className="underline"></div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
        <div>
          <h3 style={{ color: "var(--primary-color)", marginBottom: "20px" }}>Informasi Sekretariat</h3>
          <p style={{ marginBottom: "12px" }}>📍 <strong>Alamat Kantor:</strong> Jl. KH Musthofa No 05 Desa Petahunan Kecamatan Sumbersuko Lumajang</p>
          <p style={{ marginBottom: "12px" }}>📞 <strong>No. Telp/WA:</strong> </p>
          <p style={{ marginBottom: "12px" }}>✉️ <strong>Surel Resmi:</strong> smkdanalmj@gmail.com</p>
          <p style={{ marginBottom: "12px" }}>⏰ <strong>Pelayanan Administrasi:</strong> Sabtu s.d. Kamis (Pukul 07.00 - 13.00 WIB)</p>
        </div>

        <div>
          <h3 style={{ color: "var(--primary-color)", marginBottom: "20px" }}>Peta Google Maps</h3>
          <div style={{ width: "100%", height: "250px", background: "#e5e5e5", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#666", border: "1px solid #ddd" }}>
            <span>[Integrasi Peta Lokasi SMKS Darun Najah]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;