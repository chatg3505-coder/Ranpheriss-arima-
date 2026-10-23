import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Quote, Feather, Moon, Compass } from 'lucide-react';

export const StorySection: React.FC = () => {
  const chapters = [
    {
      num: 'CHAPTER I',
      subtitle: 'THE SUDDEN PROVOCATION',
      title: 'THE OPENING',
      quote: 'A sudden spark that electrifies the room before words are uttered.',
      narrative:
        'True presence requires no introduction. The instant atomization of cold-pressed bergamot and smoked green cardamom shatters silence with aristocratic crispness. It does not plead for attention; it commands the atmosphere like an electric charge.',
      icon: Sparkles,
      time: '00:00 — 00:30',
    },
    {
      num: 'CHAPTER II',
      subtitle: 'THE NOCTURNAL EMBRACE',
      title: 'THE HEART',
      quote: 'A deep, resonant cadence of royal woods and midnight blooms.',
      narrative:
        'As the initial citrus radiance settles into warm skin, the shadow emerges. Thousands of Grasse Damascena rose petals harvested in cold moonlight interlock with aged Atlas cedar and Florentine orris. Sensual, dark, unapologetically confident.',
      icon: Moon,
      time: '02:00 — 06:00',
    },
    {
      num: 'CHAPTER III',
      subtitle: 'THE IMMORTAL ECHO',
      title: 'THE TRAIL',
      quote: 'The memory that lingers in velvet coats and empty rooms long after you leave.',
      narrative:
        'The true mark of Haute Parfumerie is the dry-down. Assam vintage oud and fossilized ambergris anchor themselves to fabrics and skin, leaving an intoxicating sillage that stays behind like an unforgotten signature.',
      icon: Feather,
      time: '08:00 — 24:00+',
    },
  ];

  return (
    <section id="story" className="relative py-28 bg-[#070709] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A252] font-mono block mb-3">
            The Three Chapters of Seduction
          </span>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl text-[#F5F2EB] tracking-[0.08em] uppercase leading-tight mb-4">
            A STORY WRITTEN IN <span className="text-[#E7C982]">SHADOW & LIGHT</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8E8D9A] font-light leading-relaxed">
            A perfume is an invisible garment. It tells the world who you are before you breathe a single word.
          </p>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chapters.map((ch, idx) => {
            const IconComp = ch.icon;
            return (
              <div
                key={ch.num}
                className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#111018] to-[#08080C] p-8 sm:p-10 flex flex-col justify-between hover:border-[#C8A252]/40 transition-all duration-500 group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono tracking-[0.3em] text-[#C8A252] uppercase">
                      {ch.num}
                    </span>
                    <span className="text-[10px] font-mono text-[#8E8D9A] bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/5">
                      {ch.time}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-[#8E8D9A] uppercase block mb-1">
                    {ch.subtitle}
                  </span>
                  <h3 className="font-['Cinzel'] text-2xl text-[#F5F2EB] tracking-wide mb-4 group-hover:text-[#E7C982] transition-colors">
                    {ch.title}
                  </h3>

                  <blockquote className="border-l-2 border-[#C8A252] pl-4 italic text-sm text-[#E7C982] font-serif mb-6 leading-relaxed">
                    “{ch.quote}”
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#A6A4AF] font-light leading-relaxed mb-6">
                    {ch.narrative}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-white/[0.03] text-[#C8A252] group-hover:bg-[#C8A252]/15 transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#8E8D9A]">
                    Act 0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
