import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Clock, Sun, Heart, Flame } from 'lucide-react';

export const FragranceNotesSection: React.FC = () => {
  const [activeTier, setActiveTier] = useState<'top' | 'heart' | 'base'>('heart');

  const tiers = {
    top: {
      tag: '01 / THE OPENING ENCOUNTER',
      title: 'TOP NOTES: RADIANT ILLUMINATION',
      duration: '0 — 30 Minutes',
      evaporation: 'Fast • Volatile citrus oils & cold spices',
      summary: 'The initial flash that electrifies the room before words are uttered.',
      ingredients: [
        {
          name: 'Calabrian Bitter Bergamot',
          origin: 'Reggio Calabria, Italy',
          role: 'Cold-pressed zesty brilliance with an aristocratic crispness.',
          profile: 'Citrus • Bright • Sparkling',
        },
        {
          name: 'Smoked Green Cardamom',
          origin: 'Western Ghats, India',
          role: 'Cracked pods roasted over fragrant wood for resinous spice.',
          profile: 'Spicy • Aromatic • Camphorous',
        },
        {
          name: 'Kashmiri Mogra Saffron',
          origin: 'Pampore, Kashmir',
          role: 'Hand-plucked royal red threads imparting bittersweet golden warmth.',
          profile: 'Leathery • Golden • Warm',
        },
      ],
      icon: Sun,
      color: '#E7C982',
    },
    heart: {
      tag: '02 / THE EMOTIONAL CORE',
      title: 'HEART NOTES: VELVET HARMONY',
      duration: '2 — 6 Hours',
      evaporation: 'Moderate • Dense floral absolutes & noble woods',
      summary: 'The beating pulse of the fragrance that defines your presence.',
      ingredients: [
        {
          name: 'Grasse Damask Rose Otto',
          origin: 'Grasse, France',
          role: 'Harvested at dawn in May; 10,000 blooms yield a single drop of absolute.',
          profile: 'Velvet • Sombre Floral • Honeyed',
        },
        {
          name: 'Florentine Iris Pallida',
          origin: 'Tuscany, Italy',
          role: 'Orris rhizomes dried and aged 3 years for an intoxicating powdery touch.',
          profile: 'Powdery • Earthy • Regal',
        },
        {
          name: 'High Atlas Cedarwood',
          origin: 'Morocco',
          role: 'Distilled dry timber infusing dry warmth and masculine structure.',
          profile: 'Woody • Resinous • Noble',
        },
      ],
      icon: Heart,
      color: '#D9777F',
    },
    base: {
      tag: '03 / THE ETERNAL TRAIL',
      title: 'BASE NOTES: UNFORGETTABLE SILLAGE',
      duration: '8 — 24+ Hours',
      evaporation: 'Heavy • Ancient resins, balsamic woods & dark amber',
      summary: 'The haunting memory that remains on silk scarves and in empty chambers.',
      ingredients: [
        {
          name: 'Vintage Wild Assam Agarwood',
          origin: 'Assam, India',
          role: '20-year aged dark oud resin; animalic, smoky, and deeply hypnotic.',
          profile: 'Smoky • Deep Oud • Balsamic',
        },
        {
          name: 'Fossilized Golden Ambergris',
          origin: 'Indian Ocean Seaboard',
          role: 'Mineralic amber accord offering oceanic warmth and endless projection.',
          profile: 'Warm Amber • Saline • Golden',
        },
        {
          name: 'Bourbon Black Vanilla Pods',
          origin: 'Madagascar',
          role: 'Sun-cured dark orchid pods adding creamy, smoky skin-affinity.',
          profile: 'Gourmand • Creamy • Intimate',
        },
      ],
      icon: Flame,
      color: '#C8A252',
    },
  };

  const activeData = tiers[activeTier];

  return (
    <section id="notes" className="relative py-28 bg-[#070709] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(200,162,82,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A252] font-mono block mb-3">
            Olfactory Architecture
          </span>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl text-[#F5F2EB] tracking-[0.1em] uppercase leading-tight mb-4">
            THE ART OF A <span className="text-[#E7C982]">LASTING IMPRESSION</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8E8D9A] font-light leading-relaxed">
            A three-act sensory symphony engineered to unfold over 24 hours. Explore each layer of botanical distillation.
          </p>
        </div>

        {/* Tier Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          {(['top', 'heart', 'base'] as const).map((key) => {
            const isSelected = activeTier === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTier(key)}
                className={`px-6 py-3.5 rounded-full border text-xs sm:text-sm font-['Cinzel'] uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center space-x-2 ${
                  isSelected
                    ? 'border-[#C8A252] bg-[#C8A252]/15 text-[#E7C982] shadow-[0_0_25px_rgba(200,162,82,0.25)]'
                    : 'border-white/10 bg-white/[0.02] text-[#8E8D9A] hover:border-white/25 hover:text-white'
                }`}
              >
                <span>{key === 'top' ? 'Top Notes (0-30m)' : key === 'heart' ? 'Heart Notes (2-6h)' : 'Base Notes (8-24h+)'}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-white/10 bg-[#0E0D13] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Header banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-white/10 gap-4">
              <div>
                <span className="text-xs font-mono text-[#C8A252] tracking-widest uppercase block mb-1">
                  {activeData.tag}
                </span>
                <h3 className="font-['Cinzel'] text-2xl sm:text-3xl text-[#F5F2EB] tracking-wide">
                  {activeData.title}
                </h3>
                <p className="text-xs text-[#8E8D9A] tracking-wider mt-1">{activeData.summary}</p>
              </div>

              <div className="flex items-center space-x-4 bg-black/40 border border-white/5 px-5 py-3 rounded-2xl self-start md:self-auto">
                <Clock className="w-4 h-4 text-[#C8A252]" />
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#8E8D9A] block">Duration</span>
                  <span className="text-sm font-semibold text-[#E7C982] font-['Cinzel'] tracking-wider">
                    {activeData.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Ingredients Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeData.ingredients.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-6 hover:border-[#C8A252]/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#C8A252] uppercase">
                      Origin: {item.origin}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-[#C8A252]/60 group-hover:text-[#E7C982] transition-colors" />
                  </div>
                  <h4 className="font-['Cinzel'] text-lg text-[#F5F2EB] group-hover:text-[#E7C982] transition-colors mb-2">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#A6A4AF] leading-relaxed mb-4 font-light">
                    {item.role}
                  </p>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-[#8E8D9A] uppercase tracking-wider">Profile</span>
                    <span className="text-[10px] text-[#C8A252] font-mono uppercase tracking-wider font-medium">
                      {item.profile}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
