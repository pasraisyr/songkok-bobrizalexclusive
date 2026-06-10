import { useState } from 'react';

interface NavbarProps {
  totalItems: number;
  onCartOpen: () => void;
}

export default function Navbar({ totalItems, onCartOpen }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <span className="brand-name">BOB RIEZAL</span>
          <span className="brand-tagline">Exclusive Pekan Rabu</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#hero">Laman Utama</a></li>
          <li><a href="#warisan">Warisan</a></li>
          <li><a href="#keunikan">Keunikan</a></li>
          <li><a href="#tempahan">Tempahan</a></li>
          <li><a href="#faq">Soalan Lazim</a></li>
        </ul>

        <div className="nav-actions">
          {/* Cart Trigger */}
          <button className="cart-trigger" onClick={onCartOpen} aria-label="Buka bakul belanja">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu navigasi">
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-dropdown">
          <a href="#hero" className="mobile-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Laman Utama</a>
          <a href="#warisan" className="mobile-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Warisan</a>
          <a href="#keunikan" className="mobile-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Keunikan</a>
          <a href="#tempahan" className="mobile-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Tempahan</a>
          <a href="#faq" className="mobile-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Soalan Lazim</a>
        </div>
      )}
    </header>
  );
}
