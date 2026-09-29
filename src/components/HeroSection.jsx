import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star } from 'lucide-react';

export default function HeroSection() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/courses?search=${encodeURIComponent(query.trim())}`);
    } else {
      navigate('/courses');
    }
  };

  return (
    <section className="relative w-full bg-brand-blue bg-grid-pattern pt-4 sm:pt-8 pb-16 sm:pb-20 overflow-hidden text-white">
      {/* Background 3D Floating Shapes */}
      <img
        src="/images/shape-torus.png"
        alt="3D Shape"
        className="absolute -left-12 top-48 w-32 sm:w-44 h-32 sm:h-44 object-contain opacity-95 animate-float shape-lime pointer-events-none select-none z-0 hidden xs:block"
      />
      <img
        src="/images/shape-cone.png"
        alt="3D Shape"
        className="absolute left-4 bottom-12 w-28 sm:w-36 h-28 sm:h-36 object-contain opacity-95 animate-float-reverse shape-lime pointer-events-none select-none z-0"
      />
      <img
        src="/images/shape-cylinder.png"
        alt="3D Shape"
        className="absolute -right-8 top-32 w-32 sm:w-48 h-32 sm:h-48 object-contain opacity-95 animate-float shape-lime pointer-events-none select-none z-0 hidden xs:block"
      />
      <img
        src="/images/shape-ring.png"
        alt="3D Shape"
        className="absolute right-6 bottom-20 w-24 sm:w-32 h-24 sm:h-32 object-contain opacity-95 animate-float-reverse shape-lime pointer-events-none select-none z-0"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center z-10">
        {/* Headings */}
        <h1 className="text-[28px] sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Get Access to Hundreds <br className="hidden sm:inline" />
          <span>Courses Available</span>
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-white/80 max-w-2xl mx-auto font-normal leading-relaxed px-2">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mt-6 sm:mt-8 max-w-xl mx-auto bg-white rounded-full p-1.5 pl-4 sm:p-2 sm:pl-5 flex items-center shadow-xl border border-white/20 transition-all focus-within:ring-4 focus-within:ring-white/20"
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gray-400 mr-2 sm:mr-3 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Course, topic, creator"
            className="flex-grow bg-transparent text-brand-dark text-xs sm:text-base outline-none placeholder:text-brand-gray-400 min-w-0"
          />
          <button
            type="submit"
            className="px-5 sm:px-8 py-2 sm:py-3 rounded-full bg-brand-lime text-black font-semibold text-xs sm:text-sm hover:brightness-105 active:scale-95 transition-all shadow-sm flex-shrink-0"
          >
            Search
          </button>
        </form>

        {/* Central Visual Composition */}
        <div className="relative mt-12 sm:mt-16 max-w-2xl mx-auto flex justify-center">
          {/* Neon Green Circular Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full bg-brand-lime opacity-95 blur-[1px] -z-10" />

          {/* Student with laptop image */}
          <div className="relative w-[320px] sm:w-[480px] pt-4">
            <img
              src="/images/hero-student.png"
              alt="Student learning on ByteSpace"
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority="high"
            />

            {/* Floating Badge 1: UI/UX Design (Top Left) */}
            <div className="absolute top-8 -left-4 sm:-left-12 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 text-left shadow-2xl border border-white/40 hidden sm:block animate-float">
              <span className="block font-bold text-sm sm:text-base text-brand-dark">
                UI/UX Design
              </span>
              <span className="block text-[11px] sm:text-xs text-brand-gray-400 mt-0.5 font-medium">
                200 Courses • 1000+ Students
              </span>
            </div>

            {/* Floating Badge 2: Learning Progress (Top Right) */}
            <div className="absolute top-14 -right-4 sm:-right-10 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4.5 text-left shadow-2xl border border-white/40 min-w-[140px] hidden sm:block animate-float-reverse">
              <span className="block text-[11px] sm:text-xs text-brand-gray-400 font-medium">
                Learning Progress
              </span>
              <span className="block font-extrabold text-xl sm:text-2xl text-brand-dark mt-0.5">
                55%
              </span>
              <div className="mt-2 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-[55%] h-full bg-brand-blue rounded-full" />
              </div>
            </div>

            {/* Floating Badge 3: Happy Students (Bottom Left) */}
            <div className="absolute bottom-6 -left-6 sm:-left-14 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 text-left shadow-2xl border border-white/40 animate-float">
              <span className="block font-bold text-xs sm:text-sm text-brand-dark">
                Happy Students
              </span>
              <div className="flex items-center gap-1 text-[11px] sm:text-xs text-brand-dark font-semibold mt-0.5">
                <span>4.5</span>
                <span className="text-brand-gray-400 font-normal">(240)</span>
                <Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" />
              </div>
              <div className="flex items-center -space-x-1.5 mt-2">
                <img src="/images/home_2.png" alt="Student" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" />
                <img src="/images/home_3.png" alt="Student" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" />
                <img src="/images/home_4.png" alt="Student" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" />
                <img src="/images/home_5.png" alt="Student" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white object-cover" />
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white bg-black text-white text-[9px] sm:text-[10px] font-bold flex items-center justify-center">
                  2K+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
