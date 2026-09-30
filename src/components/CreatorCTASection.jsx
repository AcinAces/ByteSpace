import React from 'react';
import { Link } from 'react-router-dom';

export default function CreatorCTASection() {
  return (
    <section className="relative w-full bg-[#003BE2] py-20 lg:py-28 overflow-hidden text-white text-center select-text">
      {/* 
        Full-bleed 120px x 120px Grid Overlay matching Figma Home.svg:
        opacity="0.12", stroke="white", strokeWidth="2"
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="cta-infinite-grid"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="0"
            >
              <line
                x1="0"
                y1="0"
                x2="120"
                y2="0"
                stroke="white"
                strokeWidth="2"
                opacity="0.12"
              />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="120"
                stroke="white"
                strokeWidth="2"
                opacity="0.12"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-infinite-grid)" />
        </svg>
      </div>

      {/* 
        Exact Flat Doodle Shapes from Figma Home.svg:
        Positioned relative to the 1440px wide canvas, centered on screen
      */}
      <div className="absolute inset-x-0 top-0 bottom-0 max-w-[1440px] mx-auto pointer-events-none z-10 overflow-visible">
        {/* 1. Top-Left Lime Spring (x: -121.58, y: -162, w: 386.79, h: 386.79) */}
        <img
          src="/images/cta-doodle-spring-lime.png"
          alt=""
          className="absolute -left-16 sm:-left-24 lg:left-[-122px] -top-16 sm:-top-24 lg:top-[-100px] w-48 sm:w-64 lg:w-[387px] h-auto object-contain pointer-events-none select-none"
        />

        {/* 2. Top-Left White Spring (x: 178.8, y: 5, w: 175.8, h: 175.8) */}
        <img
          src="/images/hero-doodle-mid-left-white.png"
          alt=""
          className="absolute left-[80px] sm:left-[120px] lg:left-[179px] top-2 sm:top-3 lg:top-[5px] w-24 sm:w-32 lg:w-[176px] h-auto object-contain pointer-events-none select-none hidden sm:block"
        />

        {/* 3. Bottom-Left White Cone Wedge (x: -49.97, y: 224.6, w: 188.9, h: 188.9) */}
        <img
          src="/images/cta-doodle-wedge-white.png"
          alt=""
          className="absolute -left-6 sm:-left-8 lg:left-[-50px] top-[140px] sm:top-[180px] lg:top-[225px] w-28 sm:w-36 lg:w-[189px] h-auto object-contain pointer-events-none select-none"
        />

        {/* 4. Bottom-Left Lime Donut Torus (x: 16.4, y: 298.3, w: 343.7, h: 343.7) */}
        <img
          src="/images/cta-doodle-donut-lime.png"
          alt=""
          className="absolute left-[-20px] sm:left-[-10px] lg:left-[16px] top-[220px] sm:top-[250px] lg:top-[298px] w-44 sm:w-56 lg:w-[344px] h-auto object-contain pointer-events-none select-none"
        />

        {/* 5. Top-Right Lime Pyramid (x: 1078, y: 0, w: 188.9, h: 188.9) */}
        <img
          src="/images/cta-doodle-pyramid-lime.png"
          alt=""
          className="absolute right-[120px] sm:right-[180px] lg:left-[1078px] top-0 lg:top-[0px] w-28 sm:w-36 lg:w-[189px] h-auto object-contain pointer-events-none select-none hidden sm:block"
        />

        {/* 6. Top-Right White Cylinder (x: 1222, y: 5, w: 371.8, h: 371.8) */}
        <img
          src="/images/hero-doodle-bottom-right-white.png"
          alt=""
          className="absolute -right-16 sm:-right-20 lg:left-[1222px] top-2 sm:top-3 lg:top-[5px] w-44 sm:w-56 lg:w-[372px] h-auto object-contain pointer-events-none select-none"
        />

        {/* 7. Bottom-Right Lime Spring (x: 1106.9, y: 289, w: 331.5, h: 331.5) */}
        <img
          src="/images/cta-doodle-spring-lime.png"
          alt=""
          className="absolute right-[-10px] sm:right-[20px] lg:left-[1107px] top-[220px] sm:top-[240px] lg:top-[289px] w-40 sm:w-52 lg:w-[332px] h-auto object-contain pointer-events-none select-none"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 z-20">
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
