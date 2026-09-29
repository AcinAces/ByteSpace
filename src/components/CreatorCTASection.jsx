import React from 'react';
import { Link } from 'react-router-dom';

export default function CreatorCTASection() {
  return (
    <section className="relative w-full bg-brand-blue bg-grid-pattern py-24 sm:py-28 overflow-hidden text-white text-center">
      {/* 3D Shapes Background */}
      <img
        src="/images/shape-torus.png"
        alt="3D Shape"
        className="absolute -left-10 top-1/4 w-40 h-40 object-contain opacity-95 animate-float shape-lime pointer-events-none select-none"
      />
      <img
        src="/images/shape-cone.png"
        alt="3D Shape"
        className="absolute right-10 top-12 w-32 h-32 object-contain opacity-95 animate-float-reverse shape-lime pointer-events-none select-none"
      />
      <img
        src="/images/shape-cylinder.png"
        alt="3D Shape"
        className="absolute -right-8 bottom-8 w-44 h-44 object-contain opacity-95 animate-float shape-lime pointer-events-none select-none"
      />
      <img
        src="/images/shape-ring.png"
        alt="3D Shape"
        className="absolute left-1/4 -bottom-10 w-28 h-28 object-contain opacity-90 animate-float-reverse shape-lime pointer-events-none select-none"
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-tight">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-5 text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            to="/register"
            className="px-8 py-3.5 rounded-full bg-brand-lime text-black font-bold text-sm sm:text-base hover:brightness-105 active:scale-95 transition-all shadow-lime"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
