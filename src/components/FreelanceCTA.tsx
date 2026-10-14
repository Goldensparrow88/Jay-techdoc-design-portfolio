import React from 'react';
import { ArrowUpRight, MessageSquareCode } from 'lucide-react';

interface FreelanceCTAProps {
  onSelectProjectType: (type: string) => void;
}

export const FreelanceCTA: React.FC<FreelanceCTAProps> = ({ onSelectProjectType }) => {
  const handleScrollToContact = (type: string) => {
    onSelectProjectType(type);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#2DD4BF] via-[#34E0C4] to-[#2DD4BF] text-[#0B1220] py-20 md:py-28">
      {/* Decorative architectural background line */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#0B1220_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1220]/10 text-xs font-mono font-bold tracking-widest uppercase mb-6">
            <MessageSquareCode size={14} />
            <span>Freelance & Advisory Engagements</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            NEED A WRITER.<br />
            DESIGNER.<br />
            OR BOTH?
          </h2>

          <p className="text-base sm:text-xl font-medium text-[#0B1220]/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you need technical documentation, UX content, visual communication, presentation design, or digital creative assets, I can help transform your ideas into clear and engaging experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleScrollToContact('Freelance')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0B1220] text-white hover:bg-slate-900 text-sm font-bold tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B1220]"
            >
              <span>Start A Project</span>
              <ArrowUpRight size={16} />
            </button>

            <button
              type="button"
              onClick={() => handleScrollToContact('Technical Writing')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/20 hover:bg-white/30 text-[#0B1220] border border-[#0B1220]/20 text-sm font-bold tracking-wider uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1220]"
            >
              <span>Discuss A Freelance Opportunity</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
