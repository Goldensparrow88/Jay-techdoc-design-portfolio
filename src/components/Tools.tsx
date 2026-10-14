import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { Wrench, Terminal, Sparkles, BookOpen, Layers } from 'lucide-react';

export const Tools: React.FC = () => {
  const { tools } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'DOCUMENTATION', 'DEVELOPMENT & COLLABORATION', 'DESIGN', 'AI'];

  const filteredCategories = selectedCategory === 'ALL'
    ? tools.categories
    : tools.categories.filter((c) => c.name === selectedCategory);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'DOCUMENTATION': return <BookOpen size={18} className="text-[#2DD4BF]" />;
      case 'DEVELOPMENT & COLLABORATION': return <Terminal size={18} className="text-[#2DD4BF]" />;
      case 'DESIGN': return <Layers size={18} className="text-[#2DD4BF]" />;
      case 'AI': return <Sparkles size={18} className="text-[#2DD4BF]" />;
      default: return <Wrench size={18} className="text-[#2DD4BF]" />;
    }
  };

  return (
    <section id="tools" className="py-20 md:py-32 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#2DD4BF]" aria-hidden="true" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#2DD4BF] uppercase">
                Toolchain & Technologies
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-white text-slate-900 mb-4">
              TOOLS & ECOSYSTEM
            </h2>
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 text-slate-600">
              Battle-tested tools for structured documentation, engineering collaboration, UI design systems, and AI-accelerated workflows.
            </p>
          </div>

          {/* Functional Category Filter Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0F172A] rounded-xl border border-slate-800 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#2DD4BF] text-[#0B1220] font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat === 'DEVELOPMENT & COLLABORATION' ? 'DEV & COLLAB' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl bg-[#0F172A] border border-slate-800/90 hover:border-[#2DD4BF]/40 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#2DD4BF]/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#0B1220] border border-slate-800">
                    {getCategoryIcon(cat.name)}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                    {cat.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Tools Badges / Minimal Tiles */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {cat.tools.map((tool) => (
                  <div
                    key={tool}
                    className="px-3 py-2 rounded-lg bg-[#0B1220] border border-slate-800 text-xs sm:text-sm font-mono text-slate-200 hover:border-[#2DD4BF]/50 hover:text-[#2DD4BF] transition-all flex items-center gap-2 group cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]/60 group-hover:bg-[#2DD4BF]" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
