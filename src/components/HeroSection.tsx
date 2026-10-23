import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ChevronDown, Compass, Award } from 'lucide-react';
import { ThreePerfumeBottle } from './ThreePerfumeBottle';

interface HeroSectionProps {
  onDiscoverCollection: () => void;
  onExploreSignature: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDiscoverCollection,
  onExploreSignature,
}) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-[#070709] pt-24 pb-12">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft radial golden spotlight behind bottle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(200,162,82,0.14)_0%,rgba(14,14,18,0.4)_45%,transparent_75%)] blur-2xl" />
        {/* Smoky vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#070709_95%)]" />
        {/* Subtle diagonal warm rays */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C8A252]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#9A6615]/10 rounded-full blur-3xl" />
      </div>

      {/* Top Tagline & Prestige Seal */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-4 pt-4"
      >
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#C8A252]/25 bg-[#C8A252]/5 backdrop-blur-md">
          <Award className="w-3.5 h-3.5 text-[#E7C982]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#E7C982] uppercase font-mono">
            EXTRAIT DE PARFUM • 32% CONCENTRATION
          </span>
        </div>
      </motion.div>

      {/* Main Center Stage: 3D Bottle + Dual Headlines */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center flex-1 my-4">
        {/* Left Column: Headlines */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 text-center lg:text-left order-2 lg:order-1 pt-6 lg:pt-0"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[#C8A252] font-mono block mb-3">
            Ranpheris Arima Private Reserve
          </span>
          <h1 className="font-['Cinzel'] text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[0.08em] text-[#F5F2EB] leading-[1.1] uppercase mb-4">
            MORE THAN A <span className="bg-gradient-to-r from-[#F5F2EB] via-[#E7C982] to-[#C8A252] bg-clip-text text-transparent font-medium">FRAGRANCE.</span>
          </h1>
          <h2 className="font-['Cinzel'] text-lg sm:text-xl lg:text-2xl tracking-[0.14em] text-[#C8A252] uppercase mb-5 font-light">
            AN IDENTITY. AN OBSESSION. A SIGNATURE.
          </h2>
          <p className="text-sm sm:text-base text-[#A6A4AF] font-light max-w-md mx-auto lg:mx-0 leading-relaxed mb-8">
            Discover fragrances crafted to leave a lasting impression. Hand-blended in Grasse with rare aged Assamese oud, nocturnal Damascena roses, and fossilized golden amber.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onDiscoverCollection}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#C8A252] via-[#E7C982] to-[#C8A252] text-[#070709] font-semibold text-xs uppercase tracking-[0.22em] shadow-[0_10px_30px_rgba(200,162,82,0.3)] hover:shadow-[0_15px_40px_rgba(200,162,82,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>DISCOVER THE COLLECTION</span>
              <Compass className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={onExploreSignature}
              className="w-full sm:w-auto px-7 py-4 rounded-full border border-white/20 hover:border-[#C8A252] bg-white/[0.03] hover:bg-white/[0.08] text-[#F5F2EB] hover:text-[#E7C982] text-xs uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center space-x-2 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C8A252] group-hover:rotate-12 transition-transform" />
              <span>EXPLORE OUR SIGNATURE SCENT</span>
            </button>
          </div>
        </motion.div>

        {/* Center / Right Column: 3D Interactive WebGL Bottle Scene */}
        <div className="lg:col-span-7 h-[420px] sm:h-[520px] lg:h-[620px] w-full relative order-1 lg:order-2 flex items-center justify-center">
          <ThreePerfumeBottle />

          {/* Luxury Floating Specs Badge on Bottle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden sm:flex absolute bottom-8 right-6 backdrop-blur-xl bg-black/60 border border-[#C8A252]/20 p-3.5 rounded-2xl flex-col items-start space-y-1 shadow-2xl"
          >
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#C8A252] animate-ping" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#E7C982]">Interactive 3D Flacon</span>
            </div>
            <span className="text-xs text-[#F5F2EB] font-['Cinzel'] tracking-wider">Noir Absolu • 100ml</span>
            <span className="text-[10px] text-[#A6A4AF]">Drag or move mouse to illuminate facets</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Brand Pillars Strip */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-4 flex flex-col sm:flex-row items-center justify-between border-t border-white/5 text-[11px] text-[#8E8D9A] tracking-widest uppercase font-mono gap-4">
        <div className="flex items-center space-x-6">
          <span className="hover:text-[#E7C982] transition-colors">Grasse, France Maceration</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline hover:text-[#E7C982] transition-colors">Hand-Polished Crystal</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline hover:text-[#E7C982] transition-colors">18-Hour Sillage</span>
        </div>

        <a
          href="#transformation"
          className="flex items-center space-x-2 text-[#C8A252] hover:text-[#E7C982] transition-colors group cursor-pointer"
        >
          <span className="text-[10px] tracking-[0.25em]">SCROLL TO EXPLORE ANATOMY</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
