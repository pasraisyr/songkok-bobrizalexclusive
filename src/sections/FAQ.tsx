import { useState } from 'react';
import { faqItems } from '../data/productData';

export default function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section section-dark">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Ada Pertanyaan?</span>
          <h2 className="section-title">Soalan Lazim (FAQ)</h2>
          <div className="section-divider"></div>
        </div>

        <div className="faq-list">
          {faqItems.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openFaqIndex === idx ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(idx)}>
                {faq.q}
                <svg className="faq-toggle-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
