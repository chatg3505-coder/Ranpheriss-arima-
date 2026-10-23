import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScrollTransformation } from './components/ScrollTransformation';
import { FragranceNotesSection } from './components/FragranceNotesSection';
import { HorizontalCollection } from './components/HorizontalCollection';
import { MacroGlassSection } from './components/MacroGlassSection';
import { StorySection } from './components/StorySection';
import { BrandFilmSection } from './components/BrandFilmSection';
import { BrandExperienceSection } from './components/BrandExperienceSection';
import { FinalScene } from './components/FinalScene';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { PERFUMES_COLLECTION } from './data/perfumes';
import { PerfumeProduct, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState<PerfumeProduct | null>(null);

  // Add item to cart with unique compound key
  const handleAddToCart = (
    product: PerfumeProduct,
    size: string,
    price: number,
    quantity: number
  ) => {
    const itemKey = `${product.id}-${size}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemKey);
      if (existing) {
        return prev.map((item) =>
          item.id === itemKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: itemKey,
          product,
          selectedSize: size,
          price,
          quantity,
        },
      ];
    });
  };

  const handleBuyNow = (
    product: PerfumeProduct,
    size: string,
    price: number,
    quantity: number
  ) => {
    handleAddToCart(product, size, price, quantity);
    setActiveModalProduct(null);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Dedicated Discovery Set item
  const handleOrderDiscovery = () => {
    const discoveryItem: PerfumeProduct = {
      id: 'discovery-set',
      name: 'THE RANPHERIS ARIMA DISCOVERY WARDROBE',
      tagline: '4 x 3ml Miniature Flacons with $45 Voucher',
      concentration: 'Extrait de Parfum (32%)',
      family: 'Complete Four-Piece Discovery Set',
      price: 45,
      sizes: [{ size: '4 x 3ml Flacons', price: 45, volume: '0.4 FL.OZ Total' }],
      description:
        'Includes Noir Absolu, Amber Veil, Rose Éternelle, and Oud Impérial in hand-blown miniature vials, accompanied by a $45 credit redeemable toward any full 100ml or 250ml flacon.',
      notes: {
        top: ['Bergamot', 'Saffron', 'Dewy Rose'],
        heart: ['Atlas Cedar', 'Damask Rose', 'Solar Jasmine'],
        base: ['Cambodian Oud', 'Ambergris', 'Bourbon Vanilla'],
      },
      mood: 'Exploratory, Regal, Complete',
      image: '/src/assets/images/hero_attar_bottles_1792731678763.jpg',
      accentColor: '#C8A252',
      character: 'The definitive introduction to the world of Ranpheris Arima.',
    };

    handleAddToCart(discoveryItem, '4 x 3ml Flacons', 45, 1);
    setIsCartOpen(true);
  };

  const handleDiscoverCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreSignature = () => {
    // Open flagship Noir Absolu in QuickView
    const flagship = PERFUMES_COLLECTION[0];
    if (flagship) {
      setActiveModalProduct(flagship);
    }
  };

  const handleFindSignature = () => {
    // Open Oud Impérial or scroll to notes
    const oud = PERFUMES_COLLECTION[3];
    if (oud) {
      setActiveModalProduct(oud);
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#F5F2EB] selection:bg-[#C8A252] selection:text-[#070709] font-['Plus_Jakarta_Sans']">
      {/* 1. Sticky Haute Parfumerie Navigation */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectDiscovery={handleOrderDiscovery}
      />

      <main id="top">
        {/* 2. Hero Section: 3D Rotating Bottle & Exact Dior/YSL Headlines */}
        <HeroSection
          onDiscoverCollection={handleDiscoverCollection}
          onExploreSignature={handleExploreSignature}
        />

        {/* 3. Scroll-driven Perfume Transformation (Anatomy of Cap, Glass, Maceration & Atomizer) */}
        <ScrollTransformation />

        {/* 4. Fragrance Notes Breakdown: Top, Heart, Base */}
        <FragranceNotesSection />

        {/* 5. Horizontal Sliding Perfume Collection (4 Flacons with Selectable Sizes) */}
        <HorizontalCollection
          onQuickView={(prod) => setActiveModalProduct(prod)}
          onAddToCart={handleAddToCart}
        />

        {/* 6. Extreme Close-Up Macro Glass Section */}
        <MacroGlassSection />

        {/* 7. Fragrance Story: 3 Chapters */}
        <StorySection />

        {/* 8. Luxury Brand Film Section: Paris & Grasse */}
        <BrandFilmSection onFindSignature={handleFindSignature} />

        {/* 9. Brand Experience & Haute Standards */}
        <BrandExperienceSection />

        {/* 10. Final Cinematic Scene: YOUR SCENT. YOUR SIGNATURE. */}
        <FinalScene
          onOrderDiscovery={handleOrderDiscovery}
          onExploreCollection={handleDiscoverCollection}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quick View Detail Modal */}
      <QuickViewModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Working Luxury Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
