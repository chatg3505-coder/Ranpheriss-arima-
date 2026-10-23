import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';

interface FinalSceneProps {
  onOrderDiscovery: () => void;
  onExploreCollection: () => void;
}

export const FinalScene: React.FC<FinalSceneProps> = ({
  onOrderDiscovery,
  onExploreCollection,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="relative py-32 bg-[#070709] overflow-hidden text-center">
      {/* Background radial dramatic golden glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(200,162,82,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <span className="text-xs uppercase tracking-[0.4em] text-[#C8A252] font-mono block mb-4">
          The Scent of Immortality
        </span>

        <h2 className="font-['Cinzel'] text-4xl sm:text-5xl md:text-6xl text-[#F5F2EB] tracking-[0.08em] uppercase leading-tight mb-5">
          YOUR SCENT. <br />
          <span className="bg-gradient-to-r from-[#F5F2EB] via-[#E7C982] to-[#C8A252] bg-clip-text text-transparent">
            YOUR SIGNATURE.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#A6A4AF] font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Discover the fragrance that feels unmistakably yours. Unveil the four Extraits de Parfum with our complete Discovery Wardrobe.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOrderDiscovery}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#C8A252] via-[#E7C982] to-[#C8A252] text-[#070709] font-semibold text-xs tracking-[0.22em] uppercase shadow-[0_10px_35px_rgba(200,162,82,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>ORDER DISCOVERY SET ($45)</span>
          </button>

          <button
            onClick={onExploreCollection}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 hover:border-[#C8A252] bg-white/[0.02] hover:bg-white/[0.06] text-[#F5F2EB] hover:text-[#E7C982] text-xs uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>EXPLORE BESPOKE FLACONS</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Discovery Set Guarantee Callout */}
        <div className="p-6 rounded-2xl border border-white/10 bg-[#0D0C13] max-w-xl mx-auto mb-16 text-left flex items-start space-x-4">
          <ShieldCheck className="w-6 h-6 text-[#C8A252] shrink-0 mt-1" />
          <div>
            <h4 className="font-['Cinzel'] text-xs font-semibold text-[#F5F2EB] tracking-wider uppercase mb-1">
              100% Redeemable Fragrance Credit
            </h4>
            <p className="text-xs text-[#8E8D9A] leading-relaxed">
              Your $45 Discovery Set purchase includes an instant $45 voucher applicable toward any full 50ml, 100ml, or 250ml flacon. Free courier delivery included.
            </p>
          </div>
        </div>

        {/* VIP Private Reserve Newsletter Box */}
        <div className="max-w-md mx-auto pt-6 border-t border-white/10">
          <span className="text-[10px] font-mono tracking-widest text-[#8E8D9A] uppercase block mb-3">
            Join the Ranpheris Arima Private Collector Circle
          </span>

          {subscribed ? (
            <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>You have been added to the private reserve allocation list.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your private email..."
                className="w-full px-5 py-3.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-[#F5F2EB] placeholder-[#8E8D9A] focus:outline-none focus:border-[#C8A252] transition-colors pr-28"
              />
              <button
                type="submit"
                className="absolute right-1.5 px-4 py-2.5 rounded-full bg-[#C8A252] hover:bg-[#E7C982] text-[#070709] font-medium text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
              >
                Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
