import songkokDbImg from '../assets/songkok-datukbandar.jpeg';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px' }}>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Buatan Tangan Warisan Pekan Rabu
          </div>
          <h1 className="hero-title">
            Seni Songkok <br />
            <span className="gold-text-grad">Datuk Bandar</span>
          </h1>
          <p className="hero-subtitle">
            Mahakarya eksklusif sentuhan pembuat songkok pembesar, raja-raja dan tetamu VIP negara. Memancarkan wibawa, keunikan, serta keperibadian unggul seorang pemimpin.
          </p>
          <div className="hero-cta-group">
            <a href="#tempahan" className="btn-gold">
              Tempah Sekarang
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#warisan" className="btn-outline">Lihat Warisan</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-glow-back"></div>
          <div className="hero-img-box">
            <img src={songkokDbImg} alt="Songkok Datuk Bandar Premium" />
            <div className="hero-img-overlay">
              <h3 className="vip-label">Songkok Datuk Bandar</h3>
              <p className="vip-text">Eksklusif • Baldu Premium VIP • Jahitan Tangan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
