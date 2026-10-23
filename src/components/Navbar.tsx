import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onSelectDiscovery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cart,
  onOpenCart,
  onSelectDiscovery,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'The Anatomy', href: '#transformation' },
    { label: 'Olfactory Notes', href: '#notes' },
    { label: 'Master Glass', href: '#macro' },
    { label: 'The Heritage', href: '#story' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#070709]/85 backdrop-blur-xl border-b border-[#C8A252]/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-[#070709]/90 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#top"
            className="group flex flex-col tracking-widest text-left"
          >
            <span className="font-['Cinzel'] text-xl sm:text-2xl font-semibold tracking-[0.25em] text-[#F5F2EB] group-hover:text-[#E7C982] transition-colors">
              RANPHERIS ARIMA
            </span>
            <span className="text-[9px] tracking-[0.45em] text-[#C8A252] font-mono uppercase opacity-90 -mt-0.5">
              HAUTE PARFUMERIE • GRASSE
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.22em] text-[#A6A4AF]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#E7C982] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A252] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onSelectDiscovery}
              className="hidden lg:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-[#C8A252]/40 bg-[#C8A252]/10 text-[#E7C982] text-[11px] uppercase tracking-[0.18em] hover:bg-[#C8A252]/20 hover:border-[#C8A252] transition-all cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-[#E7C982]" />
              <span>Discovery Set</span>
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#C8A252]/60 text-[#F5F2EB] transition-all cursor-pointer group"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#E7C982] group-hover:scale-110 transition-transform" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C8A252] text-[#070709] font-mono text-[10px] font-bold flex items-center justify-center shadow-lg animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#F5F2EB] hover:text-[#E7C982] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#070709]/95 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden">
          <div className="space-y-6 text-center">
            <span className="text-[10px] tracking-[0.4em] text-[#C8A252] uppercase font-mono">
              The Maison
            </span>
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-['Cinzel'] text-2xl tracking-[0.18em] text-[#F5F2EB] hover:text-[#E7C982] transition-colors py-2"
                >
                  {link.label}
                </a>
              </div>
            ))}
            <div className="pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSelectDiscovery();
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C8A252] to-[#E7C982] text-[#070709] font-medium tracking-[0.18em] text-xs uppercase flex items-center justify-center space-x-2"
              >
                <span>Order Discovery Set ($45)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
