import React, { useEffect } from 'react';
import { ProjectCaseStudy } from '../data/portfolioData.ts';
import { X, CheckCircle, ArrowRight, Wrench, Users, Target, BookOpen, Sparkles } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0B1220] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Bar with Close Affordance */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#0B1220]/90 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-[#2DD4BF]">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF]" />
            <span>CASE STUDY · {project.category.toUpperCase()}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-10 space-y-12 max-h-[85vh] overflow-y-auto">
          {/* Header Title Section */}
          <div>
            <h2
              id="case-study-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3"
            >
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 font-normal">
              {project.subtitle}
            </p>
          </div>

          {/* Featured Visual Container or High-End Placeholder */}
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0F172A]">
            {project.image ? (
              <div className="relative aspect-video w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 text-xs font-mono text-[#2DD4BF] bg-[#0B1220]/80 px-2.5 py-1 rounded border border-slate-800">
                  {project.imagePlaceholderNote}
                </div>
              </div>
            ) : (
              <div className="aspect-video w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0F172A] via-[#131E33] to-[#0B1220] border-dashed border-2 border-slate-700/60 m-4 rounded-lg">
                <Sparkles size={36} className="text-[#2DD4BF] mb-3" />
                <p className="text-sm font-mono font-semibold tracking-wider text-white uppercase text-center mb-1">
                  PROJECT VISUAL · REPLACE WITH ACTUAL WORK
                </p>
                <p className="text-xs text-slate-400 text-center max-w-md">
                  High-fidelity schematic / screenshot placeholder. Ready for client asset integration.
                </p>
              </div>
            )}
          </div>

          {/* Project Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-[#0F172A] border border-slate-800 text-xs font-mono">
            <div>
              <span className="text-slate-500 block mb-1 flex items-center gap-1.5">
                <Target size={13} className="text-[#2DD4BF]" />
                MY ROLE
              </span>
              <span className="text-slate-200 font-medium">{project.myRole}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-1 flex items-center gap-1.5">
                <Users size={13} className="text-[#2DD4BF]" />
                AUDIENCE
              </span>
              <span className="text-slate-200 font-medium">{project.audience}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-1 flex items-center gap-1.5">
                <Wrench size={13} className="text-[#2DD4BF]" />
                TOOLS USED
              </span>
              <span className="text-[#2DD4BF] font-medium">{project.toolsUsed.join(', ')}</span>
            </div>
          </div>

          {/* 1. PROJECT OVERVIEW & CHALLENGE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <BookOpen size={18} className="text-[#2DD4BF]" />
                PROJECT OVERVIEW
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <Target size={18} className="text-[#2DD4BF]" />
                THE CHALLENGE
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* 2. APPROACH */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-white">
              MY APPROACH
            </h3>
            <div className="space-y-3">
              {project.approach.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#0F172A] border border-slate-800">
                  <span className="font-mono text-xs text-[#2DD4BF] font-bold mt-0.5">0{idx + 1}</span>
                  <p className="text-sm text-slate-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. SOLUTION */}
          <div className="space-y-3 p-6 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#131E33] border border-[#2DD4BF]/30">
            <h3 className="font-display text-xl font-bold text-white">
              THE SOLUTION
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* 4. ARTIFACT PLACEHOLDERS (BEFORE & AFTER) */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-white">
              VISUAL ARTIFACTS & COMPARISON
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.artifacts.map((art) => (
                <div
                  key={art.label}
                  className="rounded-xl bg-[#0F172A] border border-slate-800 p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="px-2 py-1 rounded bg-[#0B1220] border border-slate-800 text-[11px] font-mono text-[#2DD4BF] font-semibold inline-block mb-3">
                      {art.label}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {art.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
                    STATUS: READY FOR UPLOAD
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. OUTCOME & KEY LEARNINGS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-800">
            <div className="space-y-3">
              <h3 className="font-display text-xl font-bold text-white">
                THE OUTCOME
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.outcome}
              </p>
              <p className="text-xs font-mono text-slate-500">
                Note: Client specific performance KPIs are masked under NDA.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-xl font-bold text-white">
                KEY LEARNINGS
              </h3>
              <div className="space-y-2">
                {project.keyLearnings.map((learning, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle size={15} className="text-[#2DD4BF] shrink-0 mt-0.5" />
                    <span>{learning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-mono text-slate-400">
              Need a similar documentation system or UX content architecture?
            </p>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2DD4BF] text-[#0B1220] text-xs font-bold uppercase tracking-wider hover:bg-[#34E0C4] transition-colors"
            >
              <span>Discuss Project Scope</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
