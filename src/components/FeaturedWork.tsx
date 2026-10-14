import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectCaseStudy } from '../data/portfolioData.ts';
import { ArrowUpRight, Sparkles, FileText, Layout, Layers, Terminal } from 'lucide-react';

interface FeaturedWorkProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

const FILTER_TABS = [
  'ALL',
  'DOCUMENTATION',
  'UX CONTENT',
  'GRAPHIC DESIGN',
  'UI/UX',
  'DIGITAL PRODUCTS'
] as const;

type FilterType = typeof FILTER_TABS[number];

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  const { projects } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter((p) => p.filterKey === activeFilter);

  const renderProjectVisual = (project: ProjectCaseStudy) => {
    if (project.image) {
      return (
        <div className="relative aspect-video w-full overflow-hidden bg-[#0B1220] rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0B1220]/90 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-[#2DD4BF] font-semibold tracking-wider">
            FEATURED ASSET
          </div>
        </div>
      );
    }

    // Elegant Abstract SVG / CSS Graphic Placeholder for confidential enterprise docs
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#0F172A] via-[#131E33] to-[#0B1220] border border-slate-800 flex flex-col justify-between p-6 group-hover:border-[#2DD4BF]/50 transition-colors">
        {/* Ambient grid pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15 bg-[radial-gradient(#2DD4BF_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
        />

        {/* Top schematic badge */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
            <span className="text-[10px] font-mono text-[#2DD4BF] tracking-widest uppercase">
              {project.category}
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">SCHEMATIC ID: #{project.id.toUpperCase()}</span>
        </div>

        {/* Center Blueprint Diagram */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2">
          {project.filterKey === 'DOCUMENTATION' && (
            <div className="w-full max-w-[200px] space-y-1.5 p-3 rounded-lg bg-[#0B1220]/80 border border-slate-800 shadow-inner">
              <div className="h-2 w-3/4 bg-[#2DD4BF]/40 rounded" />
              <div className="h-1.5 w-full bg-slate-700/60 rounded" />
              <div className="h-1.5 w-5/6 bg-slate-700/40 rounded" />
              <div className="flex gap-2 pt-1">
                <div className="h-4 w-12 bg-[#2DD4BF]/20 rounded border border-[#2DD4BF]/30" />
                <div className="h-4 w-12 bg-slate-800 rounded border border-slate-700" />
              </div>
            </div>
          )}

          {project.filterKey === 'UX CONTENT' && (
            <div className="w-full max-w-[210px] p-3 rounded-lg bg-[#0B1220]/90 border border-slate-800 text-left">
              <p className="text-[10px] font-mono text-slate-400 mb-1">Dialog / Microcopy</p>
              <p className="text-xs font-semibold text-white mb-2">Configure Cluster Access</p>
              <div className="h-5 w-24 bg-[#2DD4BF] rounded text-[9px] font-bold text-[#0B1220] flex items-center justify-center">
                PROCEED (1-STEP)
              </div>
            </div>
          )}

          {project.filterKey === 'UI/UX' && (
            <div className="w-full max-w-[200px] grid grid-cols-3 gap-1.5 p-2 rounded-lg bg-[#0B1220]/80 border border-slate-800">
              <div className="h-8 rounded bg-slate-800 border border-[#2DD4BF]/30" />
              <div className="h-8 rounded bg-slate-800 border border-slate-700" />
              <div className="h-8 rounded bg-slate-800 border border-slate-700" />
              <div className="col-span-3 h-4 rounded bg-[#2DD4BF]/20" />
            </div>
          )}

          {project.filterKey === 'GRAPHIC DESIGN' && (
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-[#2DD4BF] flex items-center justify-center">
                <Layers size={18} className="text-[#2DD4BF]" />
              </div>
              <div className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center">
                <Sparkles size={18} className="text-[#34E0C4]" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Placeholder Banner per prompt specification */}
        <div className="relative z-10 pt-2 border-t border-slate-800/80 flex items-center justify-between">
          <p className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
            {project.imagePlaceholderNote}
          </p>
          <span className="text-[10px] font-mono text-[#2DD4BF]">CONFIDENTIAL WORKFLOW</span>
        </div>
      </div>
    );
  };

  return (
    <section id="work" className="py-20 md:py-32 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-px bg-[#2DD4BF]" aria-hidden="true" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#2DD4BF] uppercase">
                Curated Portfolio · Selected Works
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-white text-slate-900 mb-4">
              FEATURED WORK
            </h2>
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 text-slate-600">
              Detailed case studies across enterprise technical authoring, UX microcopy systems, brand visual design, and commercially published digital products.
            </p>
          </div>

          {/* Interactive Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0F172A] rounded-xl border border-slate-800">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeFilter === tab
                    ? 'bg-[#2DD4BF] text-[#0B1220] shadow-md shadow-[#2DD4BF]/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Large Editorial Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="rounded-2xl bg-[#0F172A] border border-slate-800/90 hover:border-[#2DD4BF]/50 p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2DD4BF]/10 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Visual Media or Abstract Graphic */}
                <div className="mb-5">
                  {renderProjectVisual(project)}
                </div>

                {/* Unboxed Metadata row */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                  <span className="text-[#2DD4BF] font-semibold">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>PROJECT 0{idx + 1}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-[#2DD4BF] transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-sm text-slate-300 dark:text-slate-300 line-clamp-3 leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">View Full Case Study</span>
                <div className="p-2 rounded-lg bg-[#0B1220] border border-slate-800 text-slate-300 group-hover:text-[#2DD4BF] group-hover:border-[#2DD4BF]/40 transition-colors">
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
