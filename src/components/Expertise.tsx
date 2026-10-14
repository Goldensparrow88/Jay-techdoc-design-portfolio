import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { 
  FileText, 
  MessageSquareText, 
  Palette, 
  Layers, 
  ShoppingBag, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Expertise: React.FC = () => {
  const { expertise } = PORTFOLIO_DATA;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <FileText className="text-[#2DD4BF]" size={24} />;
      case 1: return <MessageSquareText className="text-[#2DD4BF]" size={24} />;
      case 2: return <Palette className="text-[#2DD4BF]" size={24} />;
      case 3: return <Layers className="text-[#2DD4BF]" size={24} />;
      case 4: return <ShoppingBag className="text-[#2DD4BF]" size={24} />;
      case 5: return <Sparkles className="text-[#2DD4BF]" size={24} />;
      default: return <FileText className="text-[#2DD4BF]" size={24} />;
    }
  };

  return (
    <section id="expertise" className="py-20 md:py-32 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#2DD4BF]" aria-hidden="true" />
            <span className="text-xs font-mono font-semibold tracking-widest text-[#2DD4BF] uppercase">
              Capabilities & Focus Areas
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-white text-slate-900 mb-4">
            CORE EXPERTISE
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 text-slate-600">
            A comprehensive discipline spanning technical communication, content systems, human-centered UI/UX design, and generative AI toolchains.
          </p>
        </div>

        {/* 6 Large Interactive Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {expertise.map((card, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={card.number}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-2xl bg-[#0F172A] border transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between group overflow-hidden ${
                  isHovered
                    ? 'border-[#2DD4BF]/60 bg-[#131E33] shadow-xl shadow-[#2DD4BF]/10 -translate-y-1'
                    : 'border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {/* Subtle top indicator bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2DD4BF] to-[#34E0C4] transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div>
                  {/* Top Header Row: Icon & Editorial Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-[#0B1220] border border-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      {getIcon(idx)}
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-semibold tracking-wider">
                      CARD {card.number}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-4">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF] mb-1">
                      {card.categoryName}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 dark:text-slate-300 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Skills Unboxed Grid */}
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Deliverables & Competencies:
                  </p>
                  <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 text-xs font-mono text-slate-300">
                    {card.skills.map((skill, sIdx) => (
                      <span
                        key={skill}
                        className="transition-colors group-hover:text-slate-200 hover:!text-[#2DD4BF]"
                      >
                        {skill}
                        {sIdx < card.skills.length - 1 && (
                          <span className="text-slate-700 ml-2" aria-hidden="true">·</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-[#2DD4BF] transition-colors">
                    <span>Explore Workflows</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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
