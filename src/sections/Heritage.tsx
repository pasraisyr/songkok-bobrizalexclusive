import ybSongkokImg from '../assets/yb-songkok.jpeg';

export default function Heritage() {
  return (
    <section id="warisan" className="section section-dark">
      <div className="section-container">
        <div className="heritage-grid">
          <div className="heritage-image-wrapper">
            <div className="heritage-img-decor">
              <img src={ybSongkokImg} className="heritage-img" alt="Warisan Pembuatan Songkok VIP" />
            </div>
          </div>

          <div className="heritage-content">
            <span className="section-subtitle">Warisan Turun Temurun Pekan Rabu</span>
            <h2 className="section-title">Sentuhan Seni Pembuatan Pihak VIP & Pembesar</h2>
            <p>
              Songkok Datuk Bandar ini merupakan rekaan khas daripada Syarikat Bobriezal Exclusive yang merupakan usahawan turun temurun di Kompleks Pekan Rabu, Alor Setar. Bobriezal Exclusive dikenali sebagai pusat pembuatan songkok terpilih bagi memenuhi sentuhan kelengkapan busana tradisional pembesar-pembesar negeri serta tetamu kehormat VIP.
            </p>
            <p>
              Setiap songkok direka khas bagi menonjolkan identiti kepimpinan, keunikan serta nilai eksklusif seorang pemimpin, dengan sentuhan seni warisan Melayu Kedah yang menggabungkan ketelitian jahitan, kehalusan hasil tangan, serta simbol penghormatan tinggi terhadap pemakaian songkok sebagai lambang kewibawaan.
            </p>

            <div className="heritage-highlights">
              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="highlight-title">100% Buatan Tangan</h4>
                  <p className="highlight-desc">Setiap songkok dijahit halus satu demi satu untuk kekemasan maksima.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                    <line x1="12" y1="22" x2="12" y2="12.5"></line>
                    <line x1="22" y1="8.5" x2="12" y2="12.5"></line>
                    <line x1="2" y1="8.5" x2="12" y2="12.5"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="highlight-title">Kekemasan Selesa</h4>
                  <p className="highlight-desc">Menggunakan acuan tradisional yang memberikan cengkaman selesa di dahi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
