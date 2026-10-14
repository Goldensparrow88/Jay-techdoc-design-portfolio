import React from 'react';
import { Logo } from './Logo.tsx';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { ArrowUp, ExternalLink, Linkedin, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const { socialLinks } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin': return <Linkedin size={16} />;
      case 'github': return <Github size={16} />;
      case 'email': return <Mail size={16} />;
      default: return <ExternalLink size={14} />;
    }
  };

  return (
    <footer className="relative bg-[#070C16] border-t border-slate-800 text-slate-400 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 border-b border-slate-800/80 items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <a href="#home" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF] rounded-lg">
              <Logo size="lg" />
            </a>

            <p className="text-sm font-mono text-[#2DD4BF]">
              Senior Technical Writer | UX Writer | Graphic/UI/UX Designer
            </p>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed italic">
              "Turning complexity into clarity and ideas into experiences."
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500">
              Enterprise Pedigree: Larsen & Toubro · HCLTech · Cognizant
            </div>
          </div>

          {/* Quick Section Navigation */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
              Index
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a href="#home" className="hover:text-[#2DD4BF] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#2DD4BF] transition-colors">About</a>
              <a href="#expertise" className="hover:text-[#2DD4BF] transition-colors">Expertise</a>
              <a href="#work" className="hover:text-[#2DD4BF] transition-colors">Work</a>
              <a href="#experience" className="hover:text-[#2DD4BF] transition-colors">Experience</a>
              <a href="#services" className="hover:text-[#2DD4BF] transition-colors">Services</a>
              <a href="#products" className="hover:text-[#2DD4BF] transition-colors">Products</a>
              <a href="#contact" className="hover:text-[#2DD4BF] transition-colors">Contact</a>
            </div>
          </div>

          {/* Connected Profiles / Social Grid */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
              Channels & Marketplaces
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url.startsWith('http') || link.url.startsWith('mailto') ? link.url : `#${link.platform.toLowerCase()}`}
                  onClick={(e) => {
                    if (link.url.includes('[')) {
                      e.preventDefault();
                      alert(`Placeholder link for [${link.platform.toUpperCase()} URL]. Configure in src/data/portfolioData.ts`);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#0F172A] border border-slate-800 text-slate-300 hover:text-[#2DD4BF] hover:border-[#2DD4BF]/40 transition-colors"
                  title={`${link.platform} Profile`}
                >
                  {getSocialIcon(link.platform)}
                  <span>{link.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Sub-Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            Copyright © 2026 Jayakumar. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F172A] hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-[#2DD4BF] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2DD4BF]"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
