import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GridBackground from '../components/GridBackground';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 
        Hero 404 Section (Height 957px matching Figma 404 Not Found.svg)
      */}
      <section className="relative w-full h-[957px] bg-[#003BE2] flex flex-col justify-between overflow-hidden text-white">
        <GridBackground />

        {/* Top Navbar */}
        <div className="relative z-20">
          <Navbar variant="blue" />
        </div>

        {/* Center 404 Content */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6">
          {/* Exact 404 Vector with Figma Linear Gradient */}
          <div className="relative flex items-center justify-center -mb-28 pointer-events-none select-none">
            <img
              src="/images/404-number.svg"
              alt="404"
              className="w-[600px] sm:w-[750px] lg:w-[860px] h-auto object-contain opacity-95"
            />
          </div>

          {/* Heading overlapping the bottom of 404 */}
          <h1 className="relative z-20 text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.15] max-w-[800px]">
            The page you are looking for doesn’t exist
          </h1>

          <p className="relative z-20 mt-4 text-[#F5F5F6]/80 text-[15px] sm:text-[16px] max-w-[500px]">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Action Button */}
          <div className="relative z-20 mt-8">
            <Link
              to="/"
              className="w-[163px] h-[46px] rounded-[23px] bg-[#D4FB20] text-[#242528] font-medium text-[15px] hover:brightness-105 active:scale-95 transition-all flex items-center justify-center shadow-sm cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Spacer at bottom of hero */}
        <div className="h-12"></div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
