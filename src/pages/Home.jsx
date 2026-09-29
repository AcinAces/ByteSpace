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
      <Navbar variant="blue" />
      <main className="flex-grow">
        <HeroSection />
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
