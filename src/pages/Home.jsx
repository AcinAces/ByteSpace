import React from 'react';
import Navbar from '../components/Navbar';
import GridBackground from '../components/GridBackground';
import HeroSection from '../components/HeroSection';
import PartnersSection from '../components/PartnersSection';
import CoursesSection from '../components/CoursesSection';
import LearningPathsSection from '../components/LearningPathsSection';
import GrowthSection from '../components/GrowthSection';
import CreatorManageSection from '../components/CreatorManageSection';
import CreatorCTASection from '../components/CreatorCTASection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 
        Full-Screen Electric Blue Hero Wrapper:
        Contains Navbar + HeroSection, guaranteed to fill 100vh of display screen 
        with zero premature white space at the bottom on all screen heights.
      */}
      <div className="relative w-full bg-brand-blue min-h-screen flex flex-col justify-between overflow-hidden">
        <GridBackground />
        <Navbar variant="blue" />
        <HeroSection />
      </div>

      <main className="flex-grow">
        <PartnersSection />
        <CoursesSection />
        <LearningPathsSection />
        {/* Continuous Seamless Growth & Creator Management Surface (Figma Home.svg: y=3073, h=1512) */}
        <div className="relative w-full bg-[#FAFAFA] overflow-hidden">
          {/* 1. Top-Left Lime Glow (Figma: cx=416.5, cy=3222.5, r=568.5, opacity=0.4, fill=#CBFC01) */}
          <div className="absolute top-[4%] left-[2%] sm:left-[6%] w-[650px] sm:w-[900px] h-[650px] sm:h-[900px] -translate-x-1/4 -translate-y-1/4 bg-[radial-gradient(circle,rgba(203,252,1,0.35)_0%,rgba(203,252,1,0.12)_45%,rgba(203,252,1,0.03)_65%,transparent_75%)] pointer-events-none" />

          {/* 2. Top-Right Electric Blue Glow (Figma: cx=1379.5, cy=3230.5, r=568.5, opacity=0.08, fill=#003BE2) */}
          <div className="absolute top-[4%] right-0 w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] translate-x-1/4 -translate-y-1/4 bg-[radial-gradient(circle,rgba(0,59,226,0.08)_0%,rgba(0,59,226,0.02)_50%,transparent_75%)] pointer-events-none" />

          {/* 3. Middle-Left Electric Blue Glow (Figma: cx=60.5, cy=3871.5, r=568.5, opacity=0.16, fill=#003BE2) */}
          <div className="absolute top-[48%] left-0 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] -translate-x-1/3 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,59,226,0.14)_0%,rgba(0,59,226,0.04)_50%,transparent_75%)] pointer-events-none" />

          {/* 4. Bottom-Left Vibrant Lime Glow (Figma: cx=49, cy=4402, r=336, opacity=0.6, fill=#CBFC01) */}
          <div className="absolute bottom-[2%] left-0 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] -translate-x-1/4 translate-y-1/4 bg-[radial-gradient(circle,rgba(203,252,1,0.40)_0%,rgba(203,252,1,0.15)_45%,transparent_70%)] pointer-events-none" />

          {/* 5. Bottom-Right Electric Blue Glow (Figma: cx=1290.5, cy=4476.5, r=568.5, opacity=0.24, fill=#003BE2) */}
          <div className="absolute bottom-[2%] right-0 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] translate-x-1/4 translate-y-1/4 bg-[radial-gradient(circle,rgba(0,59,226,0.20)_0%,rgba(0,59,226,0.05)_50%,transparent_75%)] pointer-events-none" />

          <GrowthSection />
          <CreatorManageSection />
        </div>
        <CreatorCTASection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
