import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section className="py-20 md:py-28 relative border-b border-slate-800/40 bg-[#0B1220]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#2DD4BF]" aria-hidden="true" />
            <span className="text-xs font-mono font-semibold tracking-widest text-[#2DD4BF] uppercase">
              Endorsements & Collaborative Feedback
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-white text-slate-900 mb-4">
            TESTIMONIALS
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 text-slate-600">
            Professional recommendations and feedback from managers, engineering leads, and cross-functional team members.
          </p>
        </div>

        {/* 3 Elegant Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#0F172A] border border-slate-800/90 hover:border-[#2DD4BF]/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#2DD4BF]/5 relative group"
            >
              <div className="mb-8">
                <Quote size={28} className="text-[#2DD4BF]/40 group-hover:text-[#2DD4BF] transition-colors mb-4" />
                <blockquote className="text-slate-300 italic text-base leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-white text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs font-mono text-[#2DD4BF]">
                    {item.role}
                  </p>
                  <p className="text-xs font-mono text-slate-500">
                    {item.company}
                  </p>
                </div>
                <span className="font-mono text-xs text-slate-600 font-semibold">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
