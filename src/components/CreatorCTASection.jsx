import React from 'react';
import { Link } from 'react-router-dom';

export default function CreatorCTASection() {
  return (
    <section className="relative w-full bg-[#003BE2] py-20 lg:py-28 overflow-hidden text-white text-center select-none">
      {/* Exact Flat Doodle Shapes from Figma Home.svg */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto pointer-events-none z-0">
        {/* Left Side: White Flat Wedge & White Flat Donut */}
        <img
          src="/images/cta-doodle-wedge-white.png"
          alt=""
          className="absolute -left-12 top-6 w-32 sm:w-44 h-auto object-contain pointer-events-none select-none"
        />
        <img
          src="/images/hero-doodle-bottom-left-donut.png"
          alt=""
          className="absolute -left-8 -bottom-16 w-44 sm:w-56 h-auto object-contain pointer-events-none select-none"
        />

        {/* Right Side: Lime Flat Block & Lime Flat Spring */}
        <img
          src="/images/hero-doodle-top-right-lime.png"
          alt=""
          className="absolute -right-16 top-4 w-40 sm:w-56 h-auto object-contain pointer-events-none select-none"
        />
        <img
          src="/images/cta-doodle-spring-lime.png"
          alt=""
          className="absolute right-4 -bottom-14 w-36 sm:w-48 h-auto object-contain pointer-events-none select-none"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-tight">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-5 text-sm sm:text-base text-[#E5E6E8] max-w-2xl mx-auto leading-relaxed font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            to="/register"
            className="w-[172px] h-[46px] rounded-full bg-[#D4FB20] text-[#242528] font-bold text-sm hover:brightness-105 active:scale-95 transition-all shadow-md flex items-center justify-center"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
