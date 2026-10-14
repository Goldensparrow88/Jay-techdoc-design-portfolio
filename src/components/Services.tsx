import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { Check } from 'lucide-react';

export const Services: React.FC = () => {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="services" className="py-20 md:py-32 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#2DD4BF]" aria-hidden="true" />
            <span className="text-xs font-mono font-semibold tracking-widest text-[#2DD4BF] uppercase">
              Services & Consulting
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-white text-slate-900 mb-4">
            HOW I CAN HELP
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 text-slate-600">
            Tailored technical communication, content systems, and digital design engagements tailored for technology companies, scale-ups, and creative brands.
          </p>
        </div>

        {/* 7 Numbered Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const isFullSpan = idx === 6; // 7th item can span nicely or fill grid
            return (
              <div
                key={service.number}
                className={`rounded-2xl bg-[#0F172A] border border-slate-800/90 hover:border-[#2DD4BF]/50 p-7 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#2DD4BF]/5 flex flex-col justify-between group ${
                  isFullSpan ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div>
                  {/* Card Number & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl sm:text-4xl font-bold text-slate-700 group-hover:text-[#2DD4BF] transition-colors">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-mono text-[#2DD4BF] tracking-wider uppercase">
                      SERVICE {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold tracking-tight text-white mb-3 group-hover:text-[#2DD4BF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 dark:text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-5 border-t border-slate-800/80">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                    Common Deliverables:
                  </p>
                  <div className="space-y-1.5">
                    {service.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check size={13} className="text-[#2DD4BF] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
