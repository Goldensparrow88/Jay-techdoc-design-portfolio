/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Expertise } from './components/Expertise.tsx';
import { Tools } from './components/Tools.tsx';
import { FeaturedWork } from './components/FeaturedWork.tsx';
import { Experience } from './components/Experience.tsx';
import { Services } from './components/Services.tsx';
import { FreelanceCTA } from './components/FreelanceCTA.tsx';
import { FullTimeOpportunities } from './components/FullTimeOpportunities.tsx';
import { DigitalProducts } from './components/DigitalProducts.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { ResumeSection } from './components/ResumeSection.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { CaseStudyModal } from './components/CaseStudyModal.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { ProjectCaseStudy } from './data/portfolioData.ts';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('jayakumar_theme');
    return saved !== null ? saved === 'dark' : true; // Default theme: DARK per requirement
  });

  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Technical Writing');

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('jayakumar_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('jayakumar_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#0B1220] dark:bg-[#0B1220] bg-slate-50 text-slate-100 dark:text-slate-100 text-slate-800 transition-colors duration-300">
      {/* Skip Navigation Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#2DD4BF] text-[#0B1220] font-bold rounded-lg shadow-xl text-xs uppercase tracking-wider"
      >
        Skip to main content
      </a>

      {/* Sticky Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* 2. About Section (Bento Layout) */}
        <About />

        {/* 3. Core Expertise (6 Large Bento Cards) */}
        <Expertise />

        {/* 4. Tools & Tech Stack */}
        <Tools />

        {/* 5. Featured Work (Filterable Editorial Projects) */}
        <FeaturedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Professional Experience (MNC Vertical Timeline) */}
        <Experience />

        {/* 7. Services (01 to 07 Numbered Cards) */}
        <Services />

        {/* 8. Full-Width Freelance CTA */}
        <FreelanceCTA onSelectProjectType={(type) => setSelectedProjectType(type)} />

        {/* 9. Digital Products (Creator Templates & Printables) */}
        <DigitalProducts />

        {/* 10. Full-Time Opportunities */}
        <FullTimeOpportunities onSelectRole={(role) => setSelectedProjectType(role)} />

        {/* 11. Testimonials */}
        <Testimonials />

        {/* 12. Resume Section */}
        <ResumeSection onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* 13. Contact Section */}
        <Contact initialProjectType={selectedProjectType} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Reader Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Resume Reader Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
