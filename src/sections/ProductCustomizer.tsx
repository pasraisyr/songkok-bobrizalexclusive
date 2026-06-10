import { useState } from 'react';
import { sizes, heights, productImages } from '../data/productData';

interface ProductCustomizerProps {
  onAddToCart: (size: string, height: string, qty: number) => void;
  onOpenSizeGuide: () => void;
  addedFeedback: boolean;
}

export default function ProductCustomizer({
  onAddToCart,
  onOpenSizeGuide,
  addedFeedback
}: ProductCustomizerProps) {
  // Configurator states
  const [selectedSize, setSelectedSize] = useState("22");
  const [selectedHeight, setSelectedHeight] = useState("4 inci (Standard)");
  const [qty, setQty] = useState(1);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handleAddClick = () => {
    onAddToCart(selectedSize, selectedHeight, qty);
    setQty(1); // reset qty stepper after adding
  };

  return (
    <section id="tempahan" className="section section-dark">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Buat Pilihan Anda</span>
          <h2 className="section-title">Konfigurasi Songkok Datuk Bandar</h2>
          <div className="section-divider"></div>
        </div>

        <div className="product-booking-grid">
          {/* Media Gallery (Left) */}
          <div className="gallery-panel">
            <div className="main-preview-box">
              <img src={productImages[activeImgIndex].src} className="main-preview-img" alt={productImages[activeImgIndex].label} />
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                background: 'rgba(0,0,0,0.7)',
                padding: '6px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                color: 'var(--color-gold-light)',
                border: '1px solid rgba(197,160,89,0.3)',
                fontFamily: 'var(--font-royal)'
              }}>
                {productImages[activeImgIndex].label}
              </div>
            </div>

            <div className="gallery-thumbs-row">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  className={`thumb-btn ${index === activeImgIndex ? 'active' : ''}`}
                  onClick={() => setActiveImgIndex(index)}
                  aria-label={`Lihat gambar ${img.label}`}
                >
                  <img src={img.src} alt={img.label} />
                </button>
              ))}
            </div>
          </div>

          {/* Order Options Configurator (Right) */}
          <div className="booking-panel">
            <div className="promo-tag">Tawaran Promosi Pembukaan</div>
            <h3 className="prod-title">Songkok Datuk Bandar</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
              Hasil kerja tangan eksklusif warisan Pekan Rabu. Setiap pembelian disertakan dengan Kotak Premium Bob Riezal.
            </p>

            <div className="price-row">
              <span className="price-current">RM 150.00</span>
              <span className="price-original">RM 250.00</span>
            </div>

            {/* Size Selection */}
            <div className="selector-group">
              <div className="selector-header">
                <span className="selector-label">Saiz Songkok (Lilitan Kepala - Inci)</span>
                <button className="selector-guide-btn" onClick={onOpenSizeGuide}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  Panduan Ukur Saiz
                </button>
              </div>
              <div className="pills-grid">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    className={`pill-btn ${selectedSize === sz ? 'active' : ''}`}
                    onClick={() => setSelectedSize(sz)}
                  >
                    {sz}"
                  </button>
                ))}
              </div>
            </div>

            {/* Height Selection */}
            <div className="selector-group" style={{ marginTop: '25px' }}>
              <div className="selector-header">
                <span className="selector-label">Tinggi Songkok</span>
              </div>
              <div className="pills-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {heights.map((ht) => (
                  <button
                    key={ht}
                    className={`pill-btn ${selectedHeight === ht ? 'active' : ''}`}
                    onClick={() => setSelectedHeight(ht)}
                  >
                    {ht}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and CTA Button */}
            <div className="quantity-cta-row">
              <div className="qty-counter">
                <button className="qty-btn" onClick={() => qty > 1 && setQty(qty - 1)} aria-label="Kurangkan kuantiti">-</button>
                <span className="qty-val">{qty}</span>
                <button className="qty-btn" onClick={() => setQty(qty + 1)} aria-label="Tambah kuantiti">+</button>
              </div>

              <button className="btn-add-cart" onClick={handleAddClick}>
                {addedFeedback ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Ditambah Ke Bakul!
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Masukkan Ke Bakul
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
