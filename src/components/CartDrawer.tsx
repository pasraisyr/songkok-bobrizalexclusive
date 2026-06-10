import React, { useState } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  updateCartQty: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  onSubmitCheckout: (orderDetails: {
    name: string;
    phone: string;
    deliveryMethod: 'postage' | 'pickup';
    address: string;
    postcode: string;
    city: string;
    stateName: string;
  }) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  totalItems,
  totalPrice,
  updateCartQty,
  removeFromCart,
  onSubmitCheckout
}: CartDrawerProps) {
  // Form states
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'postage' | 'pickup'>('postage');
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!customerName.trim() || !customerPhone.trim()) {
      setValidationError('Sila isi Nama dan No. Telefon anda.');
      return;
    }

    if (deliveryMethod === 'postage' && (!address.trim() || !postcode.trim() || !city.trim() || !stateName.trim())) {
      setValidationError('Sila isi alamat lengkap untuk pengeposan.');
      return;
    }

    onSubmitCheckout({
      name: customerName,
      phone: customerPhone,
      deliveryMethod,
      address,
      postcode,
      city,
      stateName
    });
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3 className="cart-header-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            Bakul Belanja ({totalItems})
          </h3>
          <button className="cart-close-btn" onClick={onClose} aria-label="Tutup bakul belanja">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty-message">
              <svg className="cart-empty-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p>Bakul anda masih kosong.</p>
              <button className="btn-gold" style={{padding: '12px 24px', fontSize: '0.8rem', marginTop: '10px'}} onClick={onClose}>
                Lihat Songkok
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} className="cart-item-img" alt={item.name} />
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-meta">
                      Saiz: {item.size}"
                    </p>
                    <div className="cart-item-price-row">
                      <div className="qty-counter" style={{height: '32px', width: '85px'}}>
                        <button className="qty-btn" style={{fontSize: '0.9rem'}} onClick={() => updateCartQty(item.id, -1)}>-</button>
                        <span className="qty-val" style={{fontSize: '0.85rem'}}>{item.quantity}</span>
                        <button className="qty-btn" style={{fontSize: '0.9rem'}} onClick={() => updateCartQty(item.id, 1)}>+</button>
                      </div>
                      <span className="cart-item-price">RM {item.price * item.quantity}.00</span>
                    </div>
                  </div>
                  <button className="cart-item-remove-btn" onClick={() => removeFromCart(item.id)} aria-label="Buang item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </button>
                </div>
              ))}

              {/* Checkout Form */}
              <form onSubmit={handleSubmit} className="checkout-form">
                <h4 className="form-title">Maklumat Tempahan</h4>

                {validationError && (
                  <div style={{
                    color: 'var(--color-badge-red)',
                    fontSize: '0.8rem',
                    marginBottom: '15px',
                    fontWeight: 600,
                    background: 'rgba(185, 28, 28, 0.1)',
                    border: '1px solid rgba(185, 28, 28, 0.3)',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)'
                  }}>
                    {validationError}
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label" htmlFor="drawer-cust-name">Nama Penuh</label>
                  <input
                    type="text"
                    id="drawer-cust-name"
                    className="form-input"
                    placeholder="Contoh: Ahmad Faisal bin Ramli"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="drawer-cust-phone">No. Telefon</label>
                  <input
                    type="tel"
                    id="drawer-cust-phone"
                    className="form-input"
                    placeholder="Contoh: 0123456789"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Pilihan Penghantaran</label>
                  <div className="form-radio-group">
                    <label className="form-radio-label">
                      <input
                        type="radio"
                        name="drawer-del-method"
                        checked={deliveryMethod === 'postage'}
                        onChange={() => setDeliveryMethod('postage')}
                      />
                      Postage (+ RM15)
                    </label>
                    <label className="form-radio-label">
                      <input
                        type="radio"
                        name="drawer-del-method"
                        checked={deliveryMethod === 'pickup'}
                        onChange={() => setDeliveryMethod('pickup')}
                      />
                      Pickup
                    </label>
                  </div>
                </div>

                {deliveryMethod === 'postage' && (
                  <div style={{
                    background: 'rgba(0,0,0,0.2)',
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(197, 160, 89, 0.1)',
                    marginTop: '10px'
                  }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="drawer-cust-addr">Alamat Jalan</label>
                      <textarea
                        id="drawer-cust-addr"
                        rows={2}
                        className="form-textarea"
                        placeholder="No Rumah, Nama Jalan, Taman/Kampung"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '10px'}}>
                      <div className="form-group" style={{marginBottom: 0}}>
                        <label className="form-label" htmlFor="drawer-cust-post">Poskod</label>
                        <input
                          type="text"
                          id="drawer-cust-post"
                          className="form-input"
                          placeholder="05000"
                          value={postcode}
                          onChange={(e) => setPostcode(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group" style={{marginBottom: 0}}>
                        <label className="form-label" htmlFor="drawer-cust-city">Bandar</label>
                        <input
                          type="text"
                          id="drawer-cust-city"
                          className="form-input"
                          placeholder="Alor Setar"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group" style={{marginTop: '10px', marginBottom: 0}}>
                      <label className="form-label" htmlFor="drawer-cust-state">Negeri</label>
                      <select
                        id="drawer-cust-state"
                        className="form-select"
                        value={stateName}
                        onChange={(e) => setStateName(e.target.value)}
                        required
                      >
                        <option value="">-- Pilih Negeri --</option>
                        <option value="Kedah">Kedah</option>
                        <option value="Pulau Pinang">Pulau Pinang</option>
                        <option value="Perlis">Perlis</option>
                        <option value="Perak">Perak</option>
                        <option value="Selangor">Selangor</option>
                        <option value="Kuala Lumpur">Kuala Lumpur</option>
                        <option value="Johor">Johor</option>
                        <option value="Melaka">Melaka</option>
                        <option value="Negeri Sembilan">Negeri Sembilan</option>
                        <option value="Pahang">Pahang</option>
                        <option value="Terengganu">Terengganu</option>
                        <option value="Kelantan">Kelantan</option>
                        <option value="Sabah">Sabah</option>
                        <option value="Sarawak">Sarawak</option>
                      </select>
                    </div>
                  </div>
                )}
              </form>
            </>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              <div className="cart-summary-row" style={{ marginBottom: 0 }}>
                <span className="cart-total-label" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Subjumlah:</span>
                <span className="cart-total-val" style={{ fontSize: '1.1rem' }}>RM {totalPrice}.00</span>
              </div>
              <div className="cart-summary-row" style={{ marginBottom: 0 }}>
                <span className="cart-total-label" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Penghantaran:</span>
                <span className="cart-total-val" style={{ fontSize: '1.1rem' }}>
                  {deliveryMethod === 'postage' ? 'RM 15.00' : 'Percuma (Pickup)'}
                </span>
              </div>
              <div className="cart-summary-divider" style={{
                borderTop: '1px dashed rgba(197, 160, 89, 0.2)',
                margin: '8px 0'
              }}></div>
              <div className="cart-summary-row" style={{ marginBottom: 0 }}>
                <span className="cart-total-label" style={{ fontWeight: 'bold' }}>Jumlah Keseluruhan:</span>
                <span className="cart-total-val" style={{ fontSize: '1.6rem', color: 'var(--color-gold-light)' }}>
                  RM {totalPrice + (deliveryMethod === 'postage' ? 15 : 0)}.00
                </span>
              </div>
            </div>
            
            <button className="btn-checkout" onClick={handleSubmit}>
              Hantar Tempahan (WhatsApp)
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.89 9.884-.001 2.224.6 4.394 1.74 6.26l-.999 3.648 3.749-.973zm11.667-6.52c-.312-.156-1.848-.912-2.128-1.012-.281-.1-.484-.15-.688.156-.204.308-.79.971-.969 1.177-.18.207-.36.233-.672.077-.312-.156-1.316-.484-2.507-1.547-.927-.827-1.552-1.849-1.734-2.16-.182-.312-.02-.481.136-.636.141-.139.312-.363.469-.544.156-.181.208-.311.312-.518.104-.207.052-.389-.026-.544-.078-.156-.689-1.66-.944-2.274-.249-.599-.5-.518-.689-.527-.178-.008-.383-.01-.587-.01s-.536.078-.816.388c-.28.309-1.071 1.047-1.071 2.553s1.097 2.955 1.25 3.161c.153.207 2.158 3.296 5.228 4.619.729.315 1.299.504 1.743.645.733.233 1.399.2 1.925.122.587-.088 1.848-.756 2.109-1.45.26-.694.26-1.29.183-1.414-.078-.124-.282-.202-.594-.358z"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
