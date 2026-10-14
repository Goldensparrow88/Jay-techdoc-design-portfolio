import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { Download, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const { resumeInfo } = PORTFOLIO_DATA;

  // COMMENT EXPLAINING WHERE TO PLACE THE PDF:
  // Place your compiled resume PDF file at: /assets/Jayakumar-Resume.pdf
  // in the public assets directory (e.g., /public/assets/Jayakumar-Resume.pdf)
  // so that direct downloads point to your real custom resume document.

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeInfo.pdfPath;
    link.download = 'Jayakumar-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 md:py-32 relative border-b border-slate-800/40 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#131E33] to-[#0F172A] border border-slate-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle teal accent glow */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 -right-20 w-80 h-80 bg-[#2DD4BF]/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <FileText size={16} className="text-[#2DD4BF]" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#2DD4BF] uppercase">
                Curriculum Vitae & Credentials
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              THE EXPERIENCE BEHIND THE WORK
            </h2>

            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 leading-relaxed mb-8">
              Explore my professional experience, skills, tools, and accomplishments.
            </p>

            {/* Value Proof Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#0B1220] border border-slate-800">
                <CheckCircle2 size={16} className="text-[#2DD4BF] shrink-0" />
                <span>Tier-1 MNC Experience</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#0B1220] border border-slate-800">
                <CheckCircle2 size={16} className="text-[#2DD4BF] shrink-0" />
                <span>Technical & UX Content</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#0B1220] border border-slate-800">
                <CheckCircle2 size={16} className="text-[#2DD4BF] shrink-0" />
                <span>UI/UX & Design Systems</span>
              </div>
            </div>

            {/* Buttons: DOWNLOAD RESUME & VIEW RESUME */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2DD4BF] hover:bg-[#34E0C4] text-[#0B1220] text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-[#2DD4BF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 text-sm font-medium tracking-wider uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                <Eye size={16} className="text-[#2DD4BF]" />
                <span>View Resume</span>
              </button>
            </div>

            {/* File Path Comment / Notice */}
            <div className="mt-8 pt-6 border-t border-slate-800 text-xs font-mono text-slate-400">
              <span className="text-[#2DD4BF]">PDF Asset Target:</span>{' '}
              <code className="bg-[#0B1220] px-2 py-0.5 rounded border border-slate-800 text-slate-300">
                /assets/Jayakumar-Resume.pdf
              </code>
              <p className="mt-1 text-[11px] text-slate-500">
                (Place your finalized resume file at this path to enable native browser downloads.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
