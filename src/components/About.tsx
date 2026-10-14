import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { FileCode2, Sparkles, Layout, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  const cardIcons = [
    <FileCode2 className="text-[#2DD4BF]" size={24} />,
    <Sparkles className="text-[#2DD4BF]" size={24} />,
    <Layout className="text-[#2DD4BF]" size={24} />,
    <Cpu className="text-[#2DD4BF]" size={24} />,
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative border-b border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#2DD4BF]" aria-hidden="true" />
            <span className="text-xs font-mono font-semibold tracking-widest text-[#2DD4BF] uppercase">
              About · Multidisciplinary Identity
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-white text-slate-900 leading-tight">
            MORE THAN A WRITER.<br />
            <span className="text-slate-400 dark:text-slate-400">MORE THAN A DESIGNER.</span>
          </h2>
        </div>

        {/* Narrative & High-Level Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed">
            <p>
              I am an accomplished Technical Writer and Graphic/UI/UX Designer with extensive experience working in MNC environments, including <strong className="text-white dark:text-white font-semibold">Larsen & Toubro</strong>, <strong className="text-white dark:text-white font-semibold">HCLTech</strong>, and <strong className="text-white dark:text-white font-semibold">Cognizant</strong>.
            </p>
            <p>
              I specialize in transforming complex software and hardware concepts into clear, structured, user-friendly documentation that improves usability, knowledge sharing, and compliance.
            </p>
            <p>
              Alongside technical communication, I bring a strong creative background in visual communication and user-centered design. I create intuitive interfaces, engaging digital experiences, presentation assets, marketing visuals, social media creatives, and branded content.
            </p>
            <p>
              My multidisciplinary approach allows me to connect technology, content, design, and user experience to create solutions that are both functional and visually engaging.
            </p>
          </div>

          {/* Quick Metrics / Corporate Footprint */}
          <div className="lg:col-span-4 rounded-2xl bg-[#0F172A] border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono uppercase text-[#2DD4BF] tracking-wider mb-2">Corporate Pedigree</p>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise-Grade Communication</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Trained in mission-critical MNC frameworks where precision, strict confidentiality, and regulatory compliance are essential.
              </p>
            </div>
            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs font-mono text-slate-300">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Environment</span>
                <span className="text-white font-semibold">Tier-1 MNC Systems</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Audience</span>
                <span className="text-white font-semibold">Engineers · Admins · End Users</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Core Hybrid</span>
                <span className="text-[#2DD4BF] font-semibold">Tech Docs + Visual UX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Large Teal Hero Bento Card (lg:col-span-12 or col-span-7) */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#131E33] to-[#0B1220] border border-[#2DD4BF]/40 p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            {/* Ambient internal teal glow */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#2DD4BF]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#2DD4BF]/25 transition-colors duration-500"
            />

            <div className="relative z-10">
              <span className="text-xs font-mono uppercase text-[#2DD4BF] tracking-widest font-semibold block mb-4">
                Core Philosophy
              </span>
              <blockquote className="font-display text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight text-white leading-snug">
                "{about.featuredCardStatement}"
              </blockquote>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>JAYAKUMAR · BRAND CONSTITUTION</span>
              <span className="text-[#2DD4BF]">2026 EDITION</span>
            </div>
          </div>

          {/* Right Card: Documentation & UX Content Stack (lg:col-span-5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {about.cards.slice(0, 2).map((card, idx) => (
              <div
                key={card.title}
                className="rounded-2xl bg-[#0F172A] border border-slate-800/90 hover:border-[#2DD4BF]/40 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#2DD4BF]/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#0B1220] border border-slate-800">
                    {cardIcons[idx]}
                  </div>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs font-mono text-[#2DD4BF] mb-2">{card.subtitle}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Lower Two Bento Cards (Visual Design & AI Workflows) */}
          {about.cards.slice(2, 4).map((card, idx) => (
            <div
              key={card.title}
              className="lg:col-span-6 rounded-2xl bg-[#0F172A] border border-slate-800/90 hover:border-[#2DD4BF]/40 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[#2DD4BF]/5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-[#0B1220] border border-slate-800">
                  {cardIcons[idx + 2]}
                </div>
                <span className="text-xs font-mono text-slate-500">0{idx + 3}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-1 tracking-tight">
                {card.title}
              </h3>
              <p className="text-xs font-mono text-[#2DD4BF] mb-3">{card.subtitle}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
