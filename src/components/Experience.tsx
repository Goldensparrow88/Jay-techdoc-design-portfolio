import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 md:py-32 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#2DD4BF]" aria-hidden="true" />
            <span className="text-xs font-mono font-semibold tracking-widest text-[#2DD4BF] uppercase">
              Career Trajectory · MNC Background
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-white text-slate-900 mb-4">
            EXPERIENCE & PEDIGREE
          </h2>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 text-slate-600">
            A career forged inside high-reliability global multinational corporations, leading technical documentation initiatives and bridging the gap between engineering teams and end-user clarity.
          </p>

          {/* Confidentiality Notice */}
          <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0F172A] border border-slate-800 text-xs font-mono text-slate-400">
            <ShieldCheck size={15} className="text-[#2DD4BF] shrink-0" />
            <span>{experience.confidentialityNote}</span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-4 sm:pl-8 lg:pl-10 before:absolute before:left-[19px] sm:before:left-[35px] lg:before:left-[43px] before:top-4 before:bottom-8 before:w-px before:bg-gradient-to-b before:from-[#2DD4BF] before:via-slate-800 before:to-transparent space-y-12">
          {experience.timeline.map((item, index) => (
            <div key={item.company} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className="absolute -left-[19px] sm:-left-[35px] lg:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-[#0B1220] border-2 border-[#2DD4BF] shadow-[0_0_12px_rgba(45,212,191,0.5)] flex items-center justify-center transition-transform duration-300 group-hover:scale-125"
                aria-hidden="true"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#34E0C4]" />
              </div>

              {/* Timeline Card */}
              <div className="ml-4 sm:ml-6 rounded-2xl bg-[#0F172A] border border-slate-800/90 hover:border-[#2DD4BF]/40 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#2DD4BF]/5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 size={16} className="text-[#2DD4BF]" />
                      <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                        {item.company}
                      </h3>
                    </div>
                    <p className="text-sm font-mono text-[#2DD4BF]">
                      {item.role}
                    </p>
                  </div>

                  <div className="flex sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-400">
                    <span className="px-2.5 py-1 rounded bg-[#0B1220] border border-slate-800 text-slate-300 font-medium">
                      {item.period}
                    </span>
                    <span className="text-slate-500">{item.location}</span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                  {item.summary}
                </p>

                {/* Explicit Responsibilities List */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400">Key Contributions & Scope:</p>
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-[#2DD4BF] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Unboxed Tag List */}
                <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-400">
                  <span className="text-slate-500">Core Focus:</span>
                  {item.skills.map((skill, sIdx) => (
                    <React.Fragment key={skill}>
                      {sIdx > 0 && <span className="text-slate-700" aria-hidden="true">·</span>}
                      <span className="text-slate-300 hover:text-[#2DD4BF] transition-colors">{skill}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
