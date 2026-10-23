import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplet, Shield, Disc, Sparkles, Wind, CheckCircle2 } from 'lucide-react';

export const ScrollTransformation: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 'cap',
      step: '01 / 04',
      title: 'THE OCTAGONAL MAGNETIC CAP',
      subtitle: 'Solid Zamak Alloy • Hand-Gilded 24K Trim',
      description:
        'Engineered with an acoustic magnetic latch that seals with an authoritative tactile snap. Weighing 140 grams, it guarantees an airtight seal that protects volatile top notes from ambient degradation.',
      metrics: [
        { label: 'Weight', value: '140g Solid Metal' },
        { label: 'Closure', value: 'Magnetic Hermetic' },
        { label: 'Finish', value: 'Brushed Obsidian & Gold' },
      ],
      icon: Shield,
    },
    {
      id: 'crystal',
      step: '02 / 04',
      title: 'ULTRA-PURE CRYSTAL FLACON',
      subtitle: 'Hand-Polished Lead-Free French Crystal',
      description:
        'Moulded from heavy optical glass with a reinforced 22mm solid glass base. The internal reservoir is precision-carved so refracted daylight strikes the golden amber juice like liquid fire.',
      metrics: [
        { label: 'Glass Base', value: '22mm Solid Base' },
        { label: 'Clarity', value: 'Optical Grade A+' },
        { label: 'Refraction', value: 'High Index 1.54' },
      ],
      icon: Disc,
    },
    {
      id: 'elixir',
      step: '03 / 04',
      title: '32% PURE PERFUME OIL MACERATION',
      subtitle: 'Cold-Matured for 180 Days in Grasse',
      description:
        'Higher than industry standards of Eau de Parfum (15-20%), our Extrait de Parfum contains 32% pure fragrant absolute. Matured at 14°C in dark subterranean cellars to bond natural oud resins with floral accords.',
      metrics: [
        { label: 'Oil Ratio', value: '32% Extrait' },
        { label: 'Aging', value: '6 Months Cellared' },
        { label: 'Longevity', value: '18-24+ Hours' },
      ],
      icon: Droplet,
    },
    {
      id: 'atomizer',
      step: '04 / 04',
      title: 'MICRO-MIST SILLAGE DISPERSION',
      subtitle: '0.12ml Featherlight Metered Actuator',
      description:
        'A custom calibrated nozzle produces a wide, velvety particulate mist. Rather than harsh wet droplets, it creates an enveloping fragrant halo that clings effortlessly to collar, hair, and pulse points.',
      metrics: [
        { label: 'Metering', value: '0.12ml Per Actuation' },
        { label: 'Spray Cone', value: '65° Radial Halo' },
        { label: 'Atomization', value: 'Sub-micron Mist' },
      ],
      icon: Wind,
    },
  ];

  const current = stages[activeStage];
  const IconComponent = current.icon;

  return (
    <section id="transformation" className="relative py-28 bg-[#09090D] overflow-hidden border-t border-b border-white/5">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#C8A252]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#9A6615]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A252] font-mono block mb-3">
            Anatomy of Haute Parfumerie
          </span>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl text-[#F5F2EB] tracking-[0.1em] uppercase leading-tight mb-4">
            SCROLL-DRIVEN PERFUME <span className="text-[#E7C982]">TRANSFORMATION</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8E8D9A] font-light leading-relaxed">
            Every millimeter of Ranpheris Arima is calibrated for sensory supremacy — from the acoustics of the cap to the micro-dispersion of the golden juice.
          </p>
        </div>

        {/* Interactive Anatomy Stage Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                activeStage === idx
                  ? 'border-[#C8A252] bg-[#C8A252]/10 shadow-[0_0_25px_rgba(200,162,82,0.15)]'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono tracking-widest ${activeStage === idx ? 'text-[#E7C982]' : 'text-[#8E8D9A]'}`}>
                  {stage.step}
                </span>
                {activeStage === idx && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A252] animate-pulse" />
                )}
              </div>
              <h3 className="font-['Cinzel'] text-sm tracking-wide text-[#F5F2EB] truncate">
                {stage.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Deep Dive Stage Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0F0E14] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle gold line pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#C8A252_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

          {/* Left: Dynamic Exploded Visual Representation */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#15141D] to-[#0A0A0F] rounded-2xl border border-white/5 min-h-[360px]">
            <div className="relative w-48 h-64 flex flex-col items-center justify-center">
              {/* Animated Layer Highlights */}
              <div
                className={`w-28 h-10 rounded-t-lg border-2 transition-all duration-500 flex items-center justify-center ${
                  activeStage === 0
                    ? 'border-[#C8A252] bg-[#C8A252]/20 shadow-[0_0_30px_#C8A252]'
                    : 'border-white/20 bg-white/5 opacity-40'
                }`}
              >
                <span className="text-[9px] font-mono text-[#F5F2EB] tracking-widest uppercase">Cap 140g</span>
              </div>
              <div
                className={`w-6 h-4 border-l-2 border-r-2 transition-all duration-500 ${
                  activeStage === 3
                    ? 'border-[#E7C982] bg-[#E7C982]/30 shadow-[0_0_20px_#E7C982]'
                    : 'border-white/20 bg-white/5 opacity-40'
                }`}
              />
              <div
                className={`w-36 h-44 rounded-2xl border-2 transition-all duration-500 flex flex-col items-center justify-center relative overflow-hidden ${
                  activeStage === 1 || activeStage === 2
                    ? 'border-[#C8A252] bg-[#C8A252]/10 shadow-[0_0_40px_rgba(200,162,82,0.3)]'
                    : 'border-white/20 bg-white/5 opacity-40'
                }`}
              >
                {/* Simulated Amber Juice in bottle */}
                <div
                  className={`absolute bottom-0 left-0 right-0 transition-all duration-700 bg-gradient-to-t from-[#C8A252]/70 via-[#E8B966]/50 to-transparent ${
                    activeStage === 2 ? 'h-32 opacity-90' : 'h-24 opacity-40'
                  }`}
                />
                <span className="relative z-10 font-['Cinzel'] text-xs tracking-widest text-[#F5F2EB] font-bold">
                  RANPHERIS
                </span>
                <span className="relative z-10 text-[8px] font-mono tracking-widest text-[#C8A252] mt-0.5">
                  EXTRAIT 32%
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center space-x-2 text-xs font-mono text-[#A6A4AF]">
              <Sparkles className="w-3.5 h-3.5 text-[#E7C982]" />
              <span>Step {activeStage + 1} of 4 • Precision Architecture</span>
            </div>
          </div>

          {/* Right: Technical Specifications & Descriptive Narrative */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#C8A252]/15 text-[#E7C982] border border-[#C8A252]/30">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#C8A252] tracking-widest uppercase">
                      {current.step}
                    </span>
                    <p className="text-xs text-[#8E8D9A] tracking-wider uppercase font-medium">
                      {current.subtitle}
                    </p>
                  </div>
                </div>

                <h3 className="font-['Cinzel'] text-2xl sm:text-3xl text-[#F5F2EB] tracking-wide mb-4">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-[#A6A4AF] font-light leading-relaxed mb-8">
                  {current.description}
                </p>

                {/* Metrics Breakdown Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {current.metrics.map((metric) => (
                    <div key={metric.label} className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                      <span className="text-[10px] uppercase font-mono text-[#8E8D9A] tracking-widest block mb-1">
                        {metric.label}
                      </span>
                      <span className="text-sm font-semibold text-[#F5F2EB] font-['Cinzel'] tracking-wide">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
