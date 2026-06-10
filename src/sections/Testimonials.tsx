import { testimonials } from '../data/productData';

export default function Testimonials() {
  return (
    <section className="section section-black">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Maklumbalas Pelanggan</span>
          <h2 className="section-title">Apa Kata Mereka Yang Memakainya</h2>
          <div className="section-divider"></div>
        </div>

        <div className="testimonials-slider">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <svg className="quote-icon" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-user">
                <div className="testimonial-avatar-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="user-name">{item.name}</h4>
                  <p className="user-title">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
