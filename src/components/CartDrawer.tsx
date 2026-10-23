import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, Gift } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: 'United States',
  });

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
      setOrderPlaced(false);
      setIsCheckingOut(false);
      onClose();
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="w-screen max-w-md bg-[#0D0C13] border-l border-white/10 shadow-2xl flex flex-col justify-between text-[#F5F2EB]"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-[#C8A252]" />
                <h3 className="font-['Cinzel'] text-lg uppercase tracking-wider text-[#F5F2EB]">
                  YOUR SHOPPING BAG
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-[#8E8D9A] hover:text-white transition-colors cursor-pointer"
                aria-label="Close Shopping Bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Body */}
            <div className="p-6 flex-1 overflow-y-auto space-y-6">
              {orderPlaced ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-['Cinzel'] text-xl text-[#F5F2EB] uppercase tracking-wider mb-2">
                    RESERVE ALLOCATION CONFIRMED
                  </h4>
                  <p className="text-xs text-[#A6A4AF] max-w-xs leading-relaxed mb-4">
                    Thank you, {checkoutForm.name || 'valued patron'}. Your flacons are being hand-packaged in silk and Grasse wax seals. A courier tracking confirmation has been sent to {checkoutForm.email || 'your email'}.
                  </p>
                  <span className="text-[10px] font-mono tracking-widest text-[#C8A252] uppercase">
                    ATELIER NO. RA-{Math.floor(100000 + Math.random() * 900000)}
                  </span>
                </div>
              ) : isCheckingOut ? (
                /* Checkout Form */
                <form onSubmit={handlePlaceOrder} className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <h4 className="font-['Cinzel'] text-sm tracking-wider uppercase text-[#E7C982]">
                      Secure Delivery Concierge
                    </h4>
                    <button
                      type="button"
                      onClick={() => setIsCheckingOut(false)}
                      className="text-xs text-[#8E8D9A] hover:text-white underline cursor-pointer"
                    >
                      Back to Bag
                    </button>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-[#8E8D9A] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={checkoutForm.name}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#F5F2EB] focus:outline-none focus:border-[#C8A252]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-[#8E8D9A] mb-1">
                      Private Email
                    </label>
                    <input
                      type="email"
                      required
                      value={checkoutForm.email}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                      placeholder="eleanor@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#F5F2EB] focus:outline-none focus:border-[#C8A252]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-[#8E8D9A] mb-1">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      required
                      value={checkoutForm.address}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                      placeholder="Street address & suite"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#F5F2EB] focus:outline-none focus:border-[#C8A252]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-[#8E8D9A] mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        value={checkoutForm.city}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                        placeholder="New York"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#F5F2EB] focus:outline-none focus:border-[#C8A252]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-[#8E8D9A] mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        required
                        value={checkoutForm.country}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, country: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#F5F2EB] focus:outline-none focus:border-[#C8A252]"
                      />
                    </div>
                  </div>

                  {/* Summary row */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between text-xs text-[#8E8D9A] mb-1">
                      <span>Total Allocation</span>
                      <span className="font-semibold text-white font-['Cinzel']">${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-xs text-emerald-400 mb-4">
                      <span>Express Insured Courier</span>
                      <span>COMPLIMENTARY</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-gradient-to-r from-[#C8A252] to-[#E7C982] text-[#070709] font-semibold text-xs uppercase tracking-[0.2em] shadow-xl hover:opacity-95 transition-all cursor-pointer"
                    >
                      CONFIRM ORDER & RECEIVE FLACON
                    </button>
                  </div>
                </form>
              ) : items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <ShoppingBag className="w-12 h-12 text-[#8E8D9A]/40 mb-3" />
                  <p className="font-['Cinzel'] text-sm tracking-wider uppercase text-[#8E8D9A] mb-2">
                    Your Shopping Bag Is Empty
                  </p>
                  <p className="text-xs text-[#6F6E7B] max-w-xs mb-6">
                    Select a creation from our Private Collection or explore the Discovery Set.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-contain bg-black/40 rounded-xl p-1"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-['Cinzel'] text-sm text-[#F5F2EB] tracking-wide truncate">
                          {item.product.name}
                        </h4>
                        <span className="text-[10px] font-mono text-[#C8A252] block">
                          {item.selectedSize}
                        </span>
                        <span className="text-xs font-semibold text-[#F5F2EB]">
                          ${item.price}
                        </span>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center space-x-2 border border-white/10 rounded-lg px-2 py-1 bg-black/50">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="text-[#8E8D9A] hover:text-white text-xs px-1 cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-xs font-mono px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-[#8E8D9A] hover:text-white text-xs px-1 cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-[#8E8D9A] hover:text-red-400 transition-colors cursor-pointer"
                        aria-label="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  {/* Included Perks */}
                  <div className="p-4 rounded-xl bg-[#C8A252]/10 border border-[#C8A252]/20 flex items-start space-x-3">
                    <Gift className="w-4 h-4 text-[#E7C982] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-['Cinzel'] uppercase tracking-wider text-[#E7C982] font-semibold block">
                        Complimentary Presentation
                      </span>
                      <p className="text-[10px] text-[#A6A4AF] leading-relaxed">
                        Arrives sealed in Italian velvet box with a 3ml matching travel atomiser.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Calculation & Checkout Trigger */}
            {!orderPlaced && !isCheckingOut && items.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-[#0A0A0F]">
                <div className="flex justify-between items-center text-xs text-[#8E8D9A] mb-2">
                  <span>Subtotal</span>
                  <span className="text-base font-bold font-['Cinzel'] text-[#F5F2EB]">
                    ${subtotal}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-emerald-400 mb-4">
                  <span>Worldwide Insured Express Delivery</span>
                  <span>FREE</span>
                </div>

                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#C8A252] via-[#E7C982] to-[#C8A252] text-[#070709] font-bold text-xs uppercase tracking-[0.22em] shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>PROCEED TO CONCIERGE CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
