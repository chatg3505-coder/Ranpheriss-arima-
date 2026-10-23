import React from 'react';
import { ShieldCheck, Truck, Gift, RefreshCw, Star, Award, Sparkles } from 'lucide-react';

export const BrandExperienceSection: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: '30–35% EXTRAIT OIL RATIO',
      desc: 'Double the concentration of standard commercial perfumes for unmatched 24-hour sillage and richness.',
    },
    {
      icon: Sparkles,
      title: '180-DAY COLD CELLAR AGING',
      desc: 'Macerated at strict 14°C in Grasse subterranean vaults to achieve seamless molecular harmony without heat decay.',
    },
    {
      icon: Gift,
      title: 'COMPLIMENTARY DISCOVERY SAMPLER',
      desc: 'Each full flacon arrives with a matching 3ml miniature to test on skin first before unsealing the main presentation box.',
    },
    {
      icon: Truck,
      title: 'INSURED CLIMATE-CONTROLLED COURIER',
      desc: 'Direct from our French atelier via dedicated express air courier to preserve botanical integrity in all seasons.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Noir Absolu has ruined every other fragrance for me. It possesses an ancient, smoldering elegance that stays in rooms after I leave. People literally stop me on Fifth Avenue.',
      author: 'Julian Vane',
      role: 'Private Fragrance Collector, New York',
      rating: 5,
      fragrance: 'NOIR ABSOLU 100ML',
    },
    {
      quote:
        'The rose in Rose Éternelle is unlike modern sweet perfumes. It is dark, velvety, aristocratic, and melancholic in the most sublime French tradition. Remarkable maceration.',
      author: 'Hélène d’Orsay',
      role: 'Luxury Editor & Connoisseur, Paris',
      rating: 5,
      fragrance: 'ROSE ÉTERNELLE 100ML',
    },
    {
      quote:
        'The Assam oud in Oud Impérial is the real deal—aged, authentic, balsamic, and wrapped in warm Kashmiri saffron. The 250ml decanter is a masterpiece of crystal art.',
      author: 'Tariq Al-Mansoor',
      role: 'Art Director & Patron, Dubai',
      rating: 5,
      fragrance: 'OUD IMPÉRIAL 250ML FLACON',
    },
  ];

  return (
    <section className="relative py-28 bg-[#09090D] overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Pillars Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C8A252] font-mono block mb-3">
            Haute Parfumerie Standards
          </span>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl text-[#F5F2EB] tracking-[0.08em] uppercase leading-tight mb-4">
            CRAFTED WITHOUT <span className="text-[#E7C982]">COMPROMISE</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8E8D9A] font-light leading-relaxed">
            The difference between industrial scent production and Ranpheris Arima is measured in months, purity of raw oils, and centuries of Grasse distillation mastery.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-8 rounded-3xl border border-white/10 bg-[#0F0E16] hover:border-[#C8A252]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C8A252]/10 border border-[#C8A252]/20 text-[#E7C982] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-['Cinzel'] text-base tracking-wider text-[#F5F2EB] mb-3 group-hover:text-[#E7C982] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-[#8E8D9A] leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Client Testimonials Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C8A252] font-mono block mb-2">
            The Collector’s Circle
          </span>
          <h3 className="font-['Cinzel'] text-2xl sm:text-3xl text-[#F5F2EB] tracking-wide uppercase">
            PRAISE FROM CONNOISSEURS WORLDWIDE
          </h3>
        </div>

        {/* 3 Luxury Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="p-8 rounded-3xl border border-white/10 bg-[#0B0A10] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 mb-4 text-[#C8A252]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="italic text-sm text-[#F5F2EB] font-serif leading-relaxed mb-6">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-['Cinzel'] text-xs font-semibold text-[#E7C982] tracking-wider uppercase">
                    {t.author}
                  </h4>
                  <span className="text-[10px] text-[#8E8D9A] block">{t.role}</span>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-[#C8A252] bg-[#C8A252]/10 px-2 py-0.5 rounded border border-[#C8A252]/20">
                  {t.fragrance}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
