import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Compass, Award } from 'lucide-react';

interface BrandFilmSectionProps {
  onFindSignature: () => void;
}

export const BrandFilmSection: React.FC<BrandFilmSectionProps> = ({ onFindSignature }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative py-28 bg-[#070709] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A252] font-mono block mb-3">
            Cinematic Campaign Film • Paris & Grasse
          </span>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl text-[#F5F2EB] tracking-[0.08em] uppercase leading-tight mb-4">
            NOT MADE TO FOLLOW. <br />
            <span className="text-[#E7C982]">MADE TO BE REMEMBERED.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8E8D9A] font-light leading-relaxed">
            Witness the creation of Ranpheris Arima: from the nocturnal harvest of dew-soaked roses in Grasse to the silent chambers where amber resin matures.
          </p>
        </div>

        {/* Cinematic Film Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-[#C8A252]/20 shadow-[0_20px_60px_rgba(0,0,0,0.9)] max-w-5xl mx-auto group">
          {/* Main Campaign Visual */}
          <div className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full overflow-hidden bg-black">
            <img
              src="/src/assets/images/perfume_campaign_film_1792735072650.jpg"
              alt="Cinematic luxury perfume campaign film with misty dark rose petals and amber flacon"
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                isPlaying ? 'scale-105 filter brightness-110' : 'scale-100'
              }`}
            />

            {/* Cinematic Letterbox vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 pointer-events-none" />

            {/* Top Film Stamp */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#F5F2EB] z-10">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                <span className="tracking-widest uppercase">4K RAW • 24 FPS • CINEMASCOPE</span>
              </div>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-black/60 border border-white/10 hover:border-[#C8A252] transition-colors cursor-pointer"
                aria-label="Toggle Sound"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-[#8E8D9A]" /> : <Volume2 className="w-4 h-4 text-[#E7C982]" />}
              </button>
            </div>

            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 rounded-full bg-[#C8A252]/90 hover:bg-[#E7C982] text-[#070709] flex items-center justify-center shadow-[0_0_50px_rgba(200,162,82,0.6)] hover:scale-110 active:scale-95 transition-all cursor-pointer group/btn"
                aria-label={isPlaying ? 'Pause Film' : 'Play Film'}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 fill-current text-[#070709]" />
                ) : (
                  <Play className="w-8 h-8 fill-current text-[#070709] ml-1" />
                )}
              </button>

              <span className="mt-4 font-['Cinzel'] text-xs sm:text-sm tracking-[0.3em] uppercase text-[#F5F2EB] drop-shadow-md">
                {isPlaying ? 'Playing Haute Film (02:40)' : 'Watch The Director’s Cut (02:40)'}
              </span>
            </div>

            {/* Bottom Film Quote & Action */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4 z-10 pt-4 border-t border-white/10">
              <div className="text-left">
                <p className="italic font-serif text-sm text-[#F5F2EB] drop-shadow">
                  “We do not formulate perfumes to blend in. We create scent armor for the immortal few.”
                </p>
                <span className="text-[10px] font-mono text-[#C8A252] tracking-wider uppercase">
                  — Antoine de Valmont, Master Nose, Grasse
                </span>
              </div>

              <button
                onClick={onFindSignature}
                className="shrink-0 px-6 py-3 rounded-full bg-[#F5F2EB] text-[#070709] font-medium text-xs tracking-widest uppercase hover:bg-[#E7C982] transition-all cursor-pointer flex items-center space-x-2 shadow-xl"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#070709]" />
                <span>FIND YOUR SIGNATURE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
