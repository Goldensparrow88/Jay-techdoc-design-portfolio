import React, { useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { X, Download, Printer, CheckCircle, ExternalLink, Briefcase, GraduationCap, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile, experience, expertise, tools, resumeInfo } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Triggers direct download of configured PDF file
    const link = document.createElement('a');
    link.href = resumeInfo.pdfPath;
    link.download = 'Jayakumar-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0B1220] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#0B1220]/95 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF]" />
            <span className="text-xs font-mono font-semibold tracking-wider text-white uppercase">
              Curriculum Vitae · Jayakumar
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <Printer size={13} />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg bg-[#2DD4BF] text-[#0B1220] hover:bg-[#34E0C4] transition-colors"
            >
              <Download size={13} />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 ml-2"
              aria-label="Close Resume"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 space-y-10 max-h-[85vh] overflow-y-auto font-sans">
          {/* Header Identity Lockup */}
          <div className="border-b border-slate-800 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 id="resume-modal-title" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                {profile.name}
              </h1>
              <p className="text-sm sm:text-base font-mono text-[#2DD4BF] font-semibold">
                Senior Technical Writer | UX Writer | Graphic Designer | UI/UX Designer
              </p>
              <p className="text-xs font-mono text-slate-400 mt-2">
                Location: India · Open to Remote / Hybrid / Onsite Globally
              </p>
            </div>

            <div className="text-xs font-mono text-slate-400 space-y-1">
              <p className="text-slate-300 font-medium">Contact: [EMAIL]</p>
              <p>Portfolio: [APP_URL]</p>
              <p>LinkedIn: [LINKEDIN URL]</p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#2DD4BF] uppercase mb-3">
              Professional Summary
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Accomplished Technical Writer and Graphic/UI/UX Designer with proven multinational enterprise experience (Larsen & Toubro, HCLTech, Cognizant). Specializes in transforming complex software, hardware, and engineering workflows into intuitive documentation, human-centered microcopy, and polished visual communications that elevate usability and knowledge retention.
            </p>
          </div>

          {/* Experience Timeline Breakdown */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#2DD4BF] uppercase mb-4 flex items-center gap-2">
              <Briefcase size={14} />
              <span>Work Experience (Confidential MNC Pedigree)</span>
            </h2>

            <div className="space-y-6">
              {experience.timeline.map((exp) => (
                <div key={exp.company} className="p-5 rounded-xl bg-[#0F172A] border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-display text-lg font-bold text-white">
                      {exp.company}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-xs font-mono text-[#2DD4BF] font-semibold">{exp.role} · {exp.location}</p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{exp.summary}</p>
                  <ul className="space-y-1.5 pt-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle size={13} className="text-[#2DD4BF] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies & Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#2DD4BF] uppercase mb-4 flex items-center gap-2">
              <Award size={14} />
              <span>Skills & Competencies</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {expertise.map((exp) => (
                <div key={exp.title} className="p-4 rounded-xl bg-[#0F172A] border border-slate-800">
                  <h3 className="text-xs font-mono font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap gap-1 text-[11px] font-mono text-slate-400">
                    {exp.skills.map((s, idx) => (
                      <span key={s}>
                        {s}{idx < exp.skills.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Tech Stack */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#2DD4BF] uppercase mb-4">
              Tools & Software
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
              {tools.categories.map((cat) => (
                <div key={cat.name} className="p-3.5 rounded-xl bg-[#0F172A] border border-slate-800">
                  <span className="text-[#2DD4BF] block font-bold mb-1.5">{cat.name}</span>
                  <p className="text-slate-300 leading-normal">{cat.tools.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PDF Deployment Notice for User */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
            <span className="text-[#2DD4BF] font-semibold block mb-1">Developer & Deployment Note:</span>
            {resumeInfo.instruction}
          </div>
        </div>
      </div>
    </div>
  );
};
