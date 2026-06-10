
interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            Panduan Ukur Saiz Kepala
          </h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Tutup panduan">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="modal-body">
          <p className="sizing-guide-text">
            Untuk mengelakkan songkok longgar atau terlalu ketat, sila ikuti langkah mudah mengukur saiz kepala anda di bawah dengan teliti:
          </p>
          
          <ul className="sizing-steps">
            <li>
              <strong>Langkah 1:</strong> Gunakan pita pengukur baju (dalam unit inci). Jika tiada pita pengukur, anda boleh gunakan tali atau kertas, kemudian ukur panjang tali tersebut menggunakan pembaris inci.
            </li>
            <li>
              <strong>Langkah 2:</strong> Lilitkan pita pengukur di sekeliling kepala anda. Pastikan ia melintasi bahagian tengah dahi dan sedikit di atas telinga (tempat songkok diletakkan di kepala).
            </li>
            <li>
              <strong>Langkah 3:</strong> Ambil ukuran lilitan dahi anda dalam inci. Jangan lilit terlalu ketat, cukup sekadar bersentuhan selesa dengan kulit dahi.
            </li>
            <li>
              <strong>Langkah 4:</strong> Padankan ukuran lilitan tersebut dengan senarai saiz di bawah. Jika ukuran anda berada di antara dua saiz (cth: 21.6 inci), kami sarankan anda memilih saiz yang lebih besar sedikit (cth: 21 ¾) untuk keselesaan.
            </li>
          </ul>

          <h4 style={{fontFamily: 'var(--font-royal)', color: 'var(--color-gold-light)', marginBottom: '10px'}}>Jadual Ukuran Lilitan (Inci)</h4>
          <table className="sizing-table">
            <thead>
              <tr>
                <th>Saiz Songkok</th>
                <th>Ukuran Lilitan Kepala (Inci)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>21"</strong></td>
                <td>21 inci (53.3 cm)</td>
              </tr>
              <tr>
                <td><strong>21 ¼"</strong></td>
                <td>21.25 inci (54.0 cm)</td>
              </tr>
              <tr>
                <td><strong>21 ½"</strong></td>
                <td>21.50 inci (54.6 cm)</td>
              </tr>
              <tr>
                <td><strong>21 ¾"</strong></td>
                <td>21.75 inci (55.2 cm)</td>
              </tr>
              <tr>
                <td><strong>22"</strong> (Standard Dewasa)</td>
                <td>22.00 inci (55.9 cm)</td>
              </tr>
              <tr>
                <td><strong>22 ¼"</strong></td>
                <td>22.25 inci (56.5 cm)</td>
              </tr>
              <tr>
                <td><strong>22 ½"</strong></td>
                <td>22.50 inci (57.2 cm)</td>
              </tr>
              <tr>
                <td><strong>22 ¾"</strong></td>
                <td>22.75 inci (57.8 cm)</td>
              </tr>
              <tr>
                <td><strong>23"</strong></td>
                <td>23.00 inci (58.4 cm)</td>
              </tr>
              <tr>
                <td><strong>23 ¼"</strong></td>
                <td>23.25 inci (59.1 cm)</td>
              </tr>
              <tr>
                <td><strong>23 ½"</strong></td>
                <td>23.50 inci (59.7 cm)</td>
              </tr>
            </tbody>
          </table>

          <div style={{
            marginTop: '25px', 
            padding: '15px', 
            background: 'rgba(197, 160, 89, 0.08)', 
            border: '1px solid rgba(197, 160, 89, 0.25)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.8rem',
            color: 'var(--color-gold-light)',
            lineHeight: '1.5'
          }}>
            <strong>Tip Tambahan:</strong> Sekiranya songkok terasa longgar sedikit selepas dibeli, anda boleh meletakkan sekeping kertas lipat atau tisu di lipatan bahagian dalam songkok untuk mengecilkannya secara sementara.
          </div>
        </div>
      </div>
    </div>
  );
}
