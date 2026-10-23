import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, Shield, Eye, Flame, Compass } from 'lucide-react';

export const MacroGlassSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Optical Purity Glass Formulation',
      coords: 'Base Glass (22mm Solid Foot)',
      summary: 'Crafted without lead, achieving refractive index 1.54 comparable to natural quartz.',
      details:
        'Each bottle undergoes a 36-hour annealing cycle in Florence to relieve internal structural tensions. The ultra-clear crystal allows raw sunlight to ignite the deep amber color of the matured oils inside without optical distortion.',
    },
    {
      title: '24K Laser-Etched Gold Inscription',
      coords: 'Medallion Facet',
      summary: 'Sub-micron relief lettering permanently bonded to the crystal surface.',
      details:
        'The Ranpheris Arima hallmark is vacuum-sputtered in genuine 24-karat gold leaf, resistant to skin oils, alcohol dissolution, and atmospheric tarnish for generations of heirloom display.',
    },
    {
      title: 'Meniscus & Liquid Surface Tension',
      coords: 'Internal Reservoir Core',
      summary: 'Precision-tapered internal chamber designed for complete drainage.',
      details:
        'The curved inner chamber guides the last precious drop of fragrance directly into the micro-straw, ensuring zero waste of your vintage maceration.',
    },
  ];

  return (
    <section id="macro" className="relative py-28 bg-[#070709] overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A252] font-mono block mb-3">
            Haute Verrerie Florentine
          </span>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl text-[#F5F2EB] tracking-[0.08em] uppercase leading-tight mb-4">
            EVERY DETAIL. EVERY DROP. <span className="text-[#E7C982]">EVERY MOMENT.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8E8D9A] font-light leading-relaxed">
            Macro examination reveals the uncompromising physical reality of luxury. Examine the bevelled facets, cold reflections, and amber liquid core.
          </p>
        </div>

        {/* Macro Glass Visual & Interactive Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: High-Res Macro Image with Lens Flare / Hotspots */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-white/10 group shadow-2xl bg-[#0F0E14]">
            <img
              src="/src/assets/images/perfume_macro_glass_1792735072224.jpg"
              alt="Extreme macro close up of Ranpheris Arima crystal bottle with amber refraction"
              className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />

            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Interactive Hotspot Pills on Image */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 z-10">
              {features.map((f, idx) => (
                <button
                  key={f.title}
                  onClick={() => setActiveFeature(idx)}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all backdrop-blur-md cursor-pointer flex items-center space-x-1.5 ${
                    activeFeature === idx
                      ? 'bg-[#C8A252] text-[#070709] font-bold shadow-lg'
                      : 'bg-black/60 text-[#F5F2EB] border border-white/20 hover:border-[#C8A252]'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{f.coords}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Technical Story Card */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <span className="text-xs font-mono text-[#C8A252] tracking-widest uppercase">
              Micro-Engineering Spotlight • 0{activeFeature + 1}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl border border-white/10 bg-[#0E0D14] p-8 shadow-xl"
              >
                <div className="flex items-center space-x-2 text-[10px] font-mono text-[#E7C982] uppercase mb-2">
                  <Eye className="w-3.5 h-3.5 text-[#C8A252]" />
                  <span>{features[activeFeature].coords}</span>
                </div>

                <h3 className="font-['Cinzel'] text-2xl text-[#F5F2EB] tracking-wide mb-3">
                  {features[activeFeature].title}
                </h3>

                <p className="text-xs text-[#C8A252] font-mono mb-4 leading-relaxed">
                  {features[activeFeature].summary}
                </p>

                <p className="text-sm text-[#A6A4AF] font-light leading-relaxed">
                  {features[activeFeature].details}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#C8A252]/10 border border-[#C8A252]/30 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-[#E7C982]" />
              </div>
              <div>
                <h4 className="font-['Cinzel'] text-xs uppercase tracking-wider text-[#F5F2EB]">
                  Lifetime Bottle Refill Guarantee
                </h4>
                <p className="text-[11px] text-[#8E8D9A] leading-snug">
                  Return your empty Ranpheris Arima flacon to any flagship boutique for a 40% VIP reserve refill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
