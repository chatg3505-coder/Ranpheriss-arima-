import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, ShoppingBag, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { PERFUMES_COLLECTION } from '../data/perfumes';
import { PerfumeProduct } from '../types';

interface HorizontalCollectionProps {
  onQuickView: (product: PerfumeProduct) => void;
  onAddToCart: (product: PerfumeProduct, size: string, price: number, quantity: number) => void;
}

export const HorizontalCollection: React.FC<HorizontalCollectionProps> = ({
  onQuickView,
  onAddToCart,
}) => {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, number>>({
    'noir-absolu': 1, // default 100ml
    'amber-veil': 1,
    'rose-eternelle': 1,
    'oud-imperial': 1,
  });

  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const handleSelectSize = (productId: string, sizeIndex: number) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: sizeIndex }));
  };

  const handleQuickAdd = (product: PerfumeProduct) => {
    const sizeIdx = selectedSizes[product.id] ?? 1;
    const sizeObj = product.sizes[sizeIdx] || product.sizes[0];
    onAddToCart(product, sizeObj.size, sizeObj.price, 1);
    setAddedNotice(product.id);
    setTimeout(() => setAddedNotice(null), 2200);
  };

  return (
    <section id="collection" className="relative py-28 bg-[#09090D] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C8A252]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-[#C8A252] font-mono block mb-3">
              The Private Reserve
            </span>
            <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl text-[#F5F2EB] tracking-[0.08em] uppercase">
              THE RANPHERIS ARIMA <span className="text-[#E7C982]">COLLECTION</span>
            </h2>
            <p className="text-sm text-[#8E8D9A] max-w-xl font-light mt-2">
              Four distinct Extraits de Parfum formulated at 30–35% pure oil concentration. Aged in dark oak cellars in Grasse, France.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#E7C982] bg-white/[0.03] border border-white/10 px-4 py-2.5 rounded-full self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#C8A252]" />
            <span>Limited Seasonal Batches • 500 Flacons Each</span>
          </div>
        </div>

        {/* 4 Perfume Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PERFUMES_COLLECTION.map((product) => {
            const currentSizeIdx = selectedSizes[product.id] ?? 1;
            const currentSizeObj = product.sizes[currentSizeIdx] || product.sizes[0];
            const isJustAdded = addedNotice === product.id;

            return (
              <div
                key={product.id}
                className="group relative rounded-3xl border border-white/10 bg-[#0E0D14] overflow-hidden flex flex-col justify-between hover:border-[#C8A252]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-500"
              >
                {/* Image & Quick View Overlay */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-gradient-to-b from-[#16151E] to-[#0A0A0F] flex items-center justify-center p-6">
                  {/* Bottle Photo */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Concentration Pill */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono tracking-widest text-[#E7C982] uppercase">
                    {product.concentration.split(' ')[0]} 30%+
                  </div>

                  {/* Hover Quick View Trigger */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button
                      onClick={() => onQuickView(product)}
                      className="px-5 py-2.5 rounded-full bg-[#F5F2EB] text-[#070709] font-semibold text-xs tracking-widest uppercase hover:bg-[#E7C982] transition-colors flex items-center space-x-2 shadow-2xl cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Explore Notes</span>
                    </button>
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#C8A252] uppercase block mb-1">
                      {product.family}
                    </span>
                    <h3 className="font-['Cinzel'] text-xl text-[#F5F2EB] tracking-wider mb-1 group-hover:text-[#E7C982] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#8E8D9A] italic mb-4 line-clamp-1">
                      {product.tagline}
                    </p>

                    {/* Size Selector Buttons */}
                    <div className="grid grid-cols-3 gap-1.5 mb-5 p-1 bg-black/50 border border-white/5 rounded-xl">
                      {product.sizes.map((s, idx) => (
                        <button
                          key={s.size}
                          onClick={() => handleSelectSize(product.id, idx)}
                          className={`py-1.5 rounded-lg text-[10px] font-mono tracking-wider transition-all cursor-pointer ${
                            currentSizeIdx === idx
                              ? 'bg-[#C8A252] text-[#070709] font-bold shadow'
                              : 'text-[#8E8D9A] hover:text-white'
                          }`}
                        >
                          {s.size.replace(' Flacon', '')}
                        </button>
                      ))}
                    </div>

                    {/* Key Notes Highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {product.notes.top.slice(0, 2).map((n) => (
                        <span
                          key={n}
                          className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] text-[#A6A4AF]"
                        >
                          {n}
                        </span>
                      ))}
                      <span className="px-2 py-0.5 rounded-md bg-[#C8A252]/10 text-[10px] text-[#E7C982]">
                        {product.notes.base[0]}
                      </span>
                    </div>
                  </div>

                  {/* Price & Add to Bag Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-mono text-[#8E8D9A] block">Price</span>
                      <span className="text-lg font-bold font-['Cinzel'] text-[#F5F2EB] tracking-wide">
                        ${currentSizeObj.price}
                      </span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all flex items-center space-x-1.5 cursor-pointer ${
                        isJustAdded
                          ? 'bg-emerald-500 text-white'
                          : 'bg-[#C8A252] hover:bg-[#E7C982] text-[#070709]'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
