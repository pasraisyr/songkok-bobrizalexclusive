import { useState } from 'react';

// Modular Components
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import type { CartItem } from './components/CartDrawer';
import SizeGuideModal from './components/SizeGuideModal';
import Footer from './components/Footer';

// Page Sections
import Hero from './sections/Hero';
import Heritage from './sections/Heritage';
import Keunikan from './sections/Keunikan';
import ProductCustomizer from './sections/ProductCustomizer';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';

// Image assets for the cart item preview
import songkokDbImg from './assets/songkok-datukbandar.jpeg';

export default function App() {
  // Global Cart State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);

  // Add configuration to cart
  const handleAddToCart = (size: string, height: string, quantity: number) => {
    const itemId = `songkok-db-${size}-${height}`;
    const existingIndex = cart.findIndex(item => item.id === itemId);

    if (existingIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      const newItem: CartItem = {
        id: itemId,
        name: "Songkok Datuk Bandar",
        price: 150,
        size,
        height,
        quantity,
        image: songkokDbImg
      };
      setCart([...cart, newItem]);
    }

    // Trigger success animations and drawer open
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
    setIsCartOpen(true);
  };

  const updateCartQty = (id: string, delta: number) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean) as CartItem[];
    setCart(updatedCart);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Compile final checkout payload and redirect to WhatsApp
  const handleCheckoutSubmit = (orderDetails: {
    name: string;
    phone: string;
    deliveryMethod: 'postage' | 'pickup';
    address: string;
    postcode: string;
    city: string;
    stateName: string;
  }) => {
    let message = `*TEMPAHAN BARU: BOB RIEZAL EXCLUSIVE*\n\n`;
    message += `Assalamu'alaikum Syarikat Bobriezal Exclusive, saya ingin membuat tempahan Songkok Datuk Bandar seperti berikut:\n\n`;
    
    message += `*SENARAI TEMPAHAN:*\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   - Saiz: ${item.size} inci\n`;
      message += `   - Tinggi: ${item.height}\n`;
      message += `   - Kuantiti: ${item.quantity}x\n`;
      message += `   - Harga: RM ${item.price * item.quantity}.00\n\n`;
    });

    message += `*JUMLAH KESELURUHAN: RM ${totalPrice}.00*\n\n`;
    message += `-----------------------------------\n\n`;
    
    message += `*MAKLUMAT PELANGGAN:*\n`;
    message += `Nama: ${orderDetails.name}\n`;
    message += `No. Telefon: ${orderDetails.phone}\n`;
    message += `Kaedah: ${orderDetails.deliveryMethod === 'postage' ? 'Pos Laju / J&T Courier' : 'Ambil Sendiri di Kedai Pekan Rabu'}\n`;
    
    if (orderDetails.deliveryMethod === 'postage') {
      message += `Alamat Penghantaran:\n`;
      message += `${orderDetails.address},\n`;
      message += `${orderDetails.postcode} ${orderDetails.city}, ${orderDetails.stateName}\n`;
    } else {
      message += `Lokasi Pickup: 1A / 8 Kompleks Pekan Rabu, Jalan Tunku Ibrahim, 05000 Alor Setar Kedah\n`;
    }

    message += `\nSila hubungi saya untuk proses bayaran (bank transfer) & pengesahan tempahan. Terima kasih!`;

    // WhatsApp API configuration
    // WhatsApp number: 013-4837945 -> international: 60134837945
    const formattedPhone = "60134837945"; 
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div id="root">
      {/* Floating Navbar */}
      <Navbar totalItems={totalItems} onCartOpen={() => setIsCartOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero />
        <Heritage />
        <Keunikan />
        <ProductCustomizer
          onAddToCart={handleAddToCart}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          addedFeedback={addedFeedback}
        />
        <Testimonials />
        <FAQ />
      </main>

      {/* Footer Info */}
      <Footer />

      {/* Sliding Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        totalItems={totalItems}
        totalPrice={totalPrice}
        updateCartQty={updateCartQty}
        removeFromCart={removeFromCart}
        onSubmitCheckout={handleCheckoutSubmit}
      />

      {/* Sizing Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}
