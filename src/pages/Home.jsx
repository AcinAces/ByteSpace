import React from 'react';
import Navbar from '../components/Navbar';
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
        <Navbar variant="blue" />
        <HeroSection />
      </div>

      <main className="flex-grow">
        <PartnersSection />
        <CoursesSection />
        <LearningPathsSection />
        <GrowthSection />
        <CreatorManageSection />
        <CreatorCTASection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
