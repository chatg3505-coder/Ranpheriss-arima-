import React from 'react';
import { Sparkles, Compass, Shield, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] text-[#8E8D9A] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-['Cinzel'] text-2xl font-bold tracking-[0.25em] text-[#F5F2EB] block">
              RANPHERIS ARIMA
            </span>
            <p className="text-xs uppercase tracking-[0.4em] text-[#C8A252] font-mono">
              HAUTE PARFUMERIE • PARIS & GRASSE
            </p>
            <p className="text-sm text-[#A6A4AF] max-w-sm font-light leading-relaxed">
              Scent that speaks before you do. Handcrafted Extraits de Parfum formulated with noble wild-harvested botanicals and aged resinous woods.
            </p>
          </div>

          {/* Ateliers */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono tracking-widest text-[#F5F2EB] uppercase block">
              Flagship Ateliers
            </span>
            <ul className="text-xs space-y-2 text-[#8E8D9A]">
              <li>Paris — 14 Place Vendôme</li>
              <li>Grasse — Route des Roses Sauvages</li>
              <li>Dubai — DIFC Gate Village, Building 03</li>
              <li>New York — 740 Madison Avenue</li>
            </ul>
          </div>

          {/* Concierge & Collector Services */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono tracking-widest text-[#F5F2EB] uppercase block">
              Private Concierge
            </span>
            <p className="text-xs text-[#8E8D9A] leading-relaxed">
              For bespoke commission requests, private bridal suites, or corporate allocations:
            </p>
            <p className="text-xs font-mono text-[#E7C982]">
              concierge@ranpheris-arima.com
            </p>
            <div className="pt-2 text-[10px] font-mono text-[#6F6E7B]">
              Monday to Saturday • 09:00 — 20:00 CET
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-wider gap-4">
          <div className="text-center sm:text-left">
            <span>© {new Date().getFullYear()} RANPHERIS ARIMA PARFUMS. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center space-x-6">
            <span>IFRA COMPLIANT</span>
            <span>CRUELTY FREE</span>
            <span>ECO-RESPONSIBLE PACKAGING</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-white/10 hover:border-[#C8A252] text-[#F5F2EB] hover:text-[#E7C982] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
