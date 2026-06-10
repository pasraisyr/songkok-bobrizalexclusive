
export default function Keunikan() {
  return (
    <section id="keunikan" className="section section-black">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Mengapa Memilih Kami</span>
          <h2 className="section-title">Keunikan & Kualiti Songkok Datuk Bandar</h2>
          <div className="section-divider"></div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Baldu Premium VIP</h3>
            <p>Menggunakan fabrik baldu diraja yang diimport dengan ketumpatan tinggi. Sangat pekat hitamnya, tidak berhabuk, dan memberikan efek eksklusif berkilau apabila terkena cahaya.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <h3>Ketelitian Jahitan Dalam</h3>
            <p>Mempunyai lapisan dalam satin yang dijahit rapi dengan stiker label hologram keaslian Bob Riezal Exclusive. Memberikan ventilasi udara yang baik agar tidak panas.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 11.08 22 12 12 22 2 12 12 2 19 9"></polyline>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Simbol Kehormat Pemimpin</h3>
            <p>Ketinggian dan kecondongan bentuk songkok dilaraskan khas untuk memberikan postur tampan dan gagah, sesuai dipakai dalam majlis rasmi, parlimen, mahupun ibadah harian.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
