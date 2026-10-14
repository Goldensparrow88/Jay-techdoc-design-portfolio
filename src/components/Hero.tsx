import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';
import { ArrowDown, ArrowUpRight, Download, Camera, Check } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;
  const [currentPhoto, setCurrentPhoto] = useState(profile.portraitImage);
  const [photoReplacedMessage, setPhotoReplacedMessage] = useState(false);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCurrentPhoto(event.target.result as string);
          setPhotoReplacedMessage(true);
          setTimeout(() => setPhotoReplacedMessage(false), 3000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      id="home"
      className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden border-b border-slate-800/40"
    >
      {/* Background ambient lighting in mint teal & deep slate */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-40 w-96 h-96 bg-[#2DD4BF]/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#0F172A] rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-10 right-1/4 w-72 h-72 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Eyebrow with unboxed metadata discipline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#2DD4BF]" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#2DD4BF] uppercase font-mono">
                {profile.eyebrow}
              </p>
            </div>

            {/* Main Statement Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.08] tracking-tight text-white dark:text-white text-slate-900 mb-6">
              {profile.headlineLine1}{' '}
              <span className="text-[#2DD4BF] drop-shadow-[0_0_20px_rgba(45,212,191,0.25)]">
                {profile.headlineAccent1}
              </span>
              <br />
              {profile.headlineLine2}{' '}
              <span className="text-[#2DD4BF] drop-shadow-[0_0_20px_rgba(45,212,191,0.25)]">
                {profile.headlineAccent2}
              </span>
              <br />
              {profile.headlineLine3}{' '}
              <span className="text-[#2DD4BF] drop-shadow-[0_0_20px_rgba(45,212,191,0.25)]">
                {profile.headlineAccent3}
              </span>
            </h1>

            {/* Supporting Bio Text */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed max-w-2xl mb-8">
              {profile.supportingText}
            </p>

            {/* Action Group: Primary CTA, Secondary CTA, Download Link */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-[#0B1220] bg-[#2DD4BF] hover:bg-[#34E0C4] rounded-lg shadow-lg shadow-[#2DD4BF]/20 hover:shadow-[#2DD4BF]/35 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2DD4BF]"
              >
                <span>View My Work</span>
                <ArrowDown size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide text-slate-200 dark:text-slate-200 text-slate-800 bg-slate-800/80 dark:bg-slate-800/80 bg-slate-100 hover:bg-slate-700/80 rounded-lg border border-slate-700/70 hover:border-[#2DD4BF]/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DD4BF]"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight size={16} />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-[#2DD4BF] py-2 px-2 transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2DD4BF] rounded"
              >
                <Download size={16} className="text-[#2DD4BF] transition-transform group-hover:translate-y-0.5" />
                <span className="underline underline-offset-4 decoration-slate-600 group-hover:decoration-[#2DD4BF]">
                  Download Resume
                </span>
              </button>
            </div>

            {/* Three Unboxed Triad Chips: DOCUMENT · DESIGN · DELIVER */}
            <div className="flex items-center gap-3 pt-6 border-t border-slate-800/80 text-xs font-semibold tracking-wider text-slate-400 dark:text-slate-400 uppercase font-mono">
              <span className="text-[#2DD4BF]">{profile.chips[0]}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-[#2DD4BF]">{profile.chips[1]}</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-[#2DD4BF]">{profile.chips[2]}</span>
              <span className="text-slate-600 ml-4 hidden sm:inline" aria-hidden="true">|</span>
              <span className="text-slate-400 hidden sm:inline normal-case font-sans font-normal">
                MNC Experience: L&T · HCLTech · Cognizant
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Backglow element behind shoulders */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -m-3 rounded-2xl bg-gradient-to-tr from-[#2DD4BF]/20 via-[#34E0C4]/15 to-transparent blur-xl pointer-events-none"
              />

              {/* Main Portrait Frame with thin mint-teal outline */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0F172A] border border-[#2DD4BF]/30 shadow-2xl p-1.5 group">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0B1220]">
                  <img
                    src={currentPhoto}
                    alt="Jayakumar - Senior Technical Writer and UI/UX Designer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback in case of asset path change
                      const target = e.currentTarget;
                      target.src = '/src/assets/images/jayakumar_portrait_1791995632172.jpg';
                    }}
                  />

                  {/* Gradient Scrim at bottom to blend into dark navy */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Subtle Photo Replace Tool for the User */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <label
                      htmlFor="hero-photo-upload"
                      className="cursor-pointer inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium bg-[#0B1220]/90 backdrop-blur-md text-slate-200 hover:text-[#2DD4BF] border border-slate-700 rounded-lg shadow-lg hover:border-[#2DD4BF]/50 transition-all"
                      title="Upload or replace photo [PROFILE PHOTO]"
                    >
                      <Camera size={13} className="text-[#2DD4BF]" />
                      <span>{photoReplacedMessage ? 'Updated' : 'Replace Photo'}</span>
                    </label>
                    <input
                      id="hero-photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="sr-only"
                    />
                  </div>

                  {photoReplacedMessage && (
                    <div className="absolute bottom-4 left-4 right-4 bg-[#2DD4BF] text-[#0B1220] px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 shadow-md">
                      <Check size={14} />
                      <span>Photo updated successfully</span>
                    </div>
                  )}
                </div>

                {/* Thin teal bottom border accent */}
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent mt-1" />
              </div>

              {/* Four Floating Labels Around the Portrait */}
              {/* Top Left: TECHNICAL WRITING */}
              <div className="absolute -top-3 -left-3 sm:-left-6 z-20 px-3 py-1.5 rounded-lg bg-[#0F172A]/90 backdrop-blur-md border border-[#2DD4BF]/40 text-[11px] font-mono font-semibold tracking-wider text-slate-100 shadow-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                <span>{profile.portraitLabels[0]}</span>
              </div>

              {/* Bottom Left: UX CONTENT */}
              <div className="absolute -bottom-3 -left-3 sm:-left-4 z-20 px-3 py-1.5 rounded-lg bg-[#0F172A]/90 backdrop-blur-md border border-[#2DD4BF]/40 text-[11px] font-mono font-semibold tracking-wider text-slate-100 shadow-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                <span>{profile.portraitLabels[1]}</span>
              </div>

              {/* Top Right: VISUAL DESIGN */}
              <div className="absolute -top-3 -right-3 sm:-right-4 z-20 px-3 py-1.5 rounded-lg bg-[#0F172A]/90 backdrop-blur-md border border-[#2DD4BF]/40 text-[11px] font-mono font-semibold tracking-wider text-slate-100 shadow-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
                <span>{profile.portraitLabels[2]}</span>
              </div>

              {/* Bottom Right: AI */}
              <div className="absolute -bottom-3 -right-3 sm:-right-4 z-20 px-3.5 py-1.5 rounded-lg bg-[#0F172A]/90 backdrop-blur-md border border-[#2DD4BF]/40 text-[11px] font-mono font-semibold tracking-wider text-[#2DD4BF] shadow-xl flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34E0C4]" />
                <span>{profile.portraitLabels[3]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
