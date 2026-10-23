import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Check, Sparkles, Shield, ArrowRight, Droplets } from 'lucide-react';
import { PerfumeProduct } from '../types';

interface QuickViewModalProps {
  product: PerfumeProduct | null;
  onClose: () => void;
  onAddToCart: (product: PerfumeProduct, size: string, price: number, quantity: number) => void;
  onBuyNow: (product: PerfumeProduct, size: string, price: number, quantity: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  if (!product) return null;

  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1); // default 100ml
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedSizeObj = product.sizes[selectedSizeIndex] || product.sizes[0];

  const handleAdd = () => {
    onAddToCart(product, selectedSizeObj.size, selectedSizeObj.price, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuy = () => {
    onBuyNow(product, selectedSizeObj.size, selectedSizeObj.price, quantity);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-[#0C0C12] shadow-2xl overflow-hidden text-[#F5F2EB]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-black/60 border border-white/10 text-[#8E8D9A] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Left Image Spotlight */}
            <div className="md:col-span-5 relative h-72 md:h-full min-h-[420px] bg-[#141216] overflow-hidden flex items-center justify-center p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono tracking-widest text-[#E7C982] uppercase px-2.5 py-1 rounded bg-black/60 border border-[#C8A252]/30 backdrop-blur-md">
                  {product.concentration}
                </span>
                <p className="text-xs text-[#D4CEBF] mt-2 italic font-serif">
                  "{product.tagline}"
                </p>
              </div>
            </div>

            {/* Right Product Specification & Purchasing Form */}
            <div className="md:col-span-7 p-6 sm:p-10 space-y-6">
              <div>
                <span className="text-xs font-mono tracking-[0.25em] text-[#C8A252] uppercase block mb-1">
                  {product.family}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-3 mt-2">
                  <span className="text-3xl font-extrabold font-serif text-[#E7C982]">
                    ${selectedSizeObj.price}
                  </span>
                  <span className="text-xs font-mono text-[#8E8D9A]">
                    Complimentary Insured Overnight Shipping
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#8E8D9A] leading-relaxed">
                {product.description}
              </p>

              {/* Fragrance Notes Breakdown */}
              <div className="rounded-2xl border border-white/10 bg-[#14141E] p-4 space-y-2.5 text-xs">
                <div className="flex items-center gap-2 text-[#C8A252] font-mono uppercase tracking-wider text-[11px]">
                  <Droplets className="h-3.5 w-3.5" />
                  <span>Olfactory Composition</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 text-[11px]">
                  <div>
                    <span className="text-[#8E8D9A] block font-mono">TOP</span>
                    <span className="text-white font-medium">{product.notes.top.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-[#8E8D9A] block font-mono">HEART</span>
                    <span className="text-white font-medium">{product.notes.heart.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-[#8E8D9A] block font-mono">BASE</span>
                    <span className="text-white font-medium">{product.notes.base.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#8E8D9A] block mb-2">
                  Select Format & Bottle Size:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {product.sizes.map((s, idx) => (
                    <button
                      key={s.size}
                      onClick={() => setSelectedSizeIndex(idx)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedSizeIndex === idx
                          ? 'bg-[#1F1C28] border-[#C8A252] text-white shadow-lg'
                          : 'bg-white/5 border-white/10 text-[#8E8D9A] hover:bg-white/10'
                      }`}
                    >
                      <div className="text-xs font-bold">{s.size}</div>
                      <div className="text-[10px] text-[#C8A252] mt-0.5">${s.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper & Dual CTAs */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-white/15 rounded-xl bg-white/5 p-1 text-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-9 w-9 flex items-center justify-center hover:bg-white/10 rounded-lg text-white font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-4 font-mono font-bold text-white tabular-nums">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-9 w-9 flex items-center justify-center hover:bg-white/10 rounded-lg text-white font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAdd}
                    className={`flex-1 py-3.5 px-6 rounded-xl font-extrabold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      added
                        ? 'bg-[#25D366] text-black'
                        : 'bg-[#C8A252] hover:bg-[#E7C982] text-[#070709] shadow-[0_4px_25px_rgba(200,162,82,0.35)]'
                    }`}
                  >
                    {added ? <Check className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
                    <span>{added ? 'Added to Bag' : 'Add to Shopping Bag'}</span>
                  </button>
                </div>

                <button
                  onClick={handleBuy}
                  className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs tracking-widest uppercase border border-white/15 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Instant Checkout</span>
                  <ArrowRight className="h-4 w-4 text-[#C8A252]" />
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#8E8D9A] font-mono pt-2 border-t border-white/10">
                <span>✓ Hand-poured in crystal flacons</span>
                <span>✓ 30-Day Return Guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
