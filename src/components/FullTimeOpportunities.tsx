import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { Briefcase, ArrowRight, Check } from 'lucide-react';

interface FullTimeOpportunitiesProps {
  onSelectRole: (role: string) => void;
}

export const FullTimeOpportunities: React.FC<FullTimeOpportunitiesProps> = ({ onSelectRole }) => {
  const { fullTimeRoles } = PORTFOLIO_DATA;

  const handleConnect = () => {
    onSelectRole('Full-Time Opportunity');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 relative border-b border-slate-800/40 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#131E33] to-[#0B1220] border border-slate-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Ambient ambient glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-96 h-96 bg-[#2DD4BF]/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase size={16} className="text-[#2DD4BF]" />
                <span className="text-xs font-mono font-semibold tracking-widest text-[#2DD4BF] uppercase">
                  Career Growth · Global Roles
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                OPEN TO NEW OPPORTUNITIES
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                I am currently exploring full-time opportunities where I can combine technical communication, UX/content design, visual design, and emerging AI capabilities to create meaningful user experiences.
              </p>

              <button
                type="button"
                onClick={handleConnect}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2DD4BF] hover:bg-[#34E0C4] text-[#0B1220] text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-[#2DD4BF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                <span>Let's Connect</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Target Roles Bento Container */}
            <div className="lg:col-span-5 bg-[#0B1220]/80 rounded-2xl border border-slate-800/90 p-6 sm:p-8 backdrop-blur-sm">
              <p className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF] font-semibold mb-4">
                Target Positions & Competencies:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {fullTimeRoles.map((role) => (
                  <div
                    key={role}
                    className="p-2.5 rounded-lg bg-[#0F172A] border border-slate-800 hover:border-[#2DD4BF]/40 transition-colors flex items-center gap-2 text-xs font-mono text-slate-200"
                  >
                    <Check size={13} className="text-[#2DD4BF] shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Availability: Immediate / Notice Period</span>
                <span className="text-[#2DD4BF]">Remote · Hybrid · Onsite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
