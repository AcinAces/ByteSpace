import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
    <div className="relative w-full flex-grow flex flex-col justify-between overflow-hidden text-white pt-4 sm:pt-6 pb-0 select-text">
      {/* 
        Lime Circle Aura behind student (solid lime dome)
        Exact mathematical reproduction from Home.svg (viewBox 0 0 1440 1024)
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1440px] h-[1024px] max-w-none pointer-events-none"
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="719.5" cy="1156.5" r="574.5" fill="#CBFC01" />
        </svg>
      </div>

      {/* 
        The 6 Exact Flat Doodle Shapes from Figma Home.svg:
        Positioned relative to the 1440px wide canvas, centered on screen
      */}
      <div className="absolute inset-x-0 top-0 bottom-0 max-w-[1440px] mx-auto pointer-events-none z-10 overflow-visible">
        {/* 1. Top-Left Lime Spring (x: -121.58, y: 221, w: 386.79, h: 386.79) */}
        <img
          src="/images/hero-doodle-top-left-lime.png"
          alt=""
          className="absolute -left-12 lg:-left-28 xl:left-[-122px] top-[140px] lg:top-[180px] xl:top-[221px] w-[220px] lg:w-[320px] xl:w-[387px] h-auto object-contain pointer-events-none select-none"
        />

        {/* 2. Mid-Left White Spring (x: 183.8, y: 477, w: 175.8, h: 175.8, scaleX(-1)) */}
        <img
          src="/images/hero-doodle-mid-left-white.png"
          alt=""
          className="absolute left-[40px] lg:left-[110px] xl:left-[184px] top-[380px] lg:top-[430px] xl:top-[477px] w-[110px] lg:w-[150px] xl:w-[176px] h-auto object-contain pointer-events-none select-none -scale-x-100 hidden sm:block"
        />

        {/* 3. Bottom-Left White Donut (x: 14.4, y: 681.26, w: 343.68, h: 343.69) */}
        <img
          src="/images/hero-doodle-bottom-left-donut.png"
          alt=""
          className="absolute -left-6 lg:left-[4px] xl:left-[14px] top-[560px] lg:top-[620px] xl:top-[681px] w-[180px] lg:w-[280px] xl:w-[344px] h-auto object-contain pointer-events-none select-none"
        />

        {/* 4. Top-Right Lime Block (x: 1227.11, y: 220.2, w: 371.82, h: 371.83) */}
        <img
          src="/images/hero-doodle-top-right-lime.png"
          alt=""
          className="absolute -right-14 lg:-right-24 xl:left-[1227px] top-[140px] lg:top-[180px] xl:top-[220px] w-[210px] lg:w-[310px] xl:w-[372px] h-auto object-contain pointer-events-none select-none"
        />

        {/* 5. Mid-Right White Pyramid (x: 1104.03, y: 463.59, w: 188.93, h: 188.93) */}
        <img
          src="/images/hero-doodle-mid-right-pyramid.png"
          alt=""
          className="absolute right-[40px] lg:right-[110px] xl:left-[1104px] top-[370px] lg:top-[420px] xl:top-[464px] w-[110px] lg:w-[160px] xl:w-[189px] h-auto object-contain pointer-events-none select-none hidden sm:block"
        />

        {/* 6. Bottom-Right White Spring (x: 1123.93, y: 672, w: 331.54, h: 331.54) */}
        <img
          src="/images/hero-doodle-bottom-right-white.png"
          alt=""
          className="absolute -right-8 lg:right-[4px] xl:left-[1124px] top-[550px] lg:top-[610px] xl:top-[672px] w-[180px] lg:w-[270px] xl:w-[332px] h-auto object-contain pointer-events-none select-none"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center z-20 flex-grow flex flex-col justify-between w-full">
        {/* Top Text Content */}
        <div className="max-w-5xl mx-auto pt-2 lg:pt-4">
          {/* Headings: Increased size and spacing, balanced weight */}
          <h1 className="text-[36px] sm:text-[52px] lg:text-[66px] xl:text-[72px] font-semibold tracking-[0.015em] leading-[1.16] max-w-5xl mx-auto font-sans">
            Get Access to Hundreds <br className="hidden sm:inline" />
            <span>Courses Available</span>
          </h1>

          {/* Subtitle: Decreased thickness to extra-light (font-[200]) */}
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-[17px] text-[#E5E6E8]/90 max-w-3xl mx-auto font-extralight tracking-wide leading-relaxed px-2 xl:whitespace-nowrap">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar - Exact Figma Side-by-Side Pill (461px) + Button (104px) */}
          <form
            onSubmit={handleSearch}
            className="mt-6 sm:mt-7 flex items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto px-2"
          >
            <div className="relative flex-grow max-w-[461px] h-[52px] bg-white rounded-full flex items-center px-5 shadow-lg border border-transparent focus-within:border-brand-blue/30 transition-all">
              <Search className="w-5 h-5 text-[#82868E] mr-3 flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-[#242528] text-sm sm:text-[15px] outline-none placeholder:text-[#82868E] font-normal"
              />
            </div>
            <button
              type="submit"
              className="w-[104px] h-[46px] rounded-full bg-[#D4FB20] text-[#242528] font-semibold text-sm hover:brightness-105 active:scale-95 transition-all shadow-md flex-shrink-0 flex items-center justify-center cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>

        {/* Central Visual Composition: Student with exact Figma Badges */}
        <div className="relative mt-4 sm:mt-6 max-w-3xl mx-auto flex justify-center items-end flex-shrink-0">
          <div className="relative w-[340px] sm:w-[460px] lg:w-[578px] flex flex-col items-center">
            {/* Real Student Image from Figma Home.svg */}
            <img
              src="/images/image0_0_1.png"
              alt="Student learning on ByteSpace"
              className="w-full h-auto object-contain block drop-shadow-2xl select-none pointer-events-none"
              priority="high"
            />

            {/* Floating Badge 1: UI/UX Design (Figma: x=404, y=639, w=208, h=70, rx=16) */}
            <Link
              to="/courses?category=Design"
              className="absolute top-10 sm:top-14 lg:top-[127px] -left-2 sm:-left-8 lg:-left-[27px] w-[180px] sm:w-[208px] h-[64px] sm:h-[70px] bg-white rounded-[16px] px-4 py-2.5 sm:py-3 text-left shadow-[0px_16px_36px_rgba(0,0,0,0.08)] hidden sm:flex flex-col justify-center z-20 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 group"
            >
              <span className="block font-bold text-[14px] sm:text-[15px] text-[#242528] leading-tight group-hover:text-brand-blue transition-colors">
                UI/UX Design
              </span>
              <span className="block text-[11px] sm:text-[12px] text-[#82868E] mt-1 font-normal leading-none">
                200 Courses • 1000+ Students
              </span>
            </Link>

            {/* Floating Badge 2: Learning Progress (Figma: x=842, y=651, w=232, h=131, rx=16) */}
            <button
              type="button"
              className="absolute top-14 sm:top-16 lg:top-[139px] -right-2 sm:-right-8 lg:-right-[65px] w-[190px] sm:w-[232px] h-[115px] sm:h-[131px] bg-white rounded-[16px] p-3.5 sm:p-5 text-left shadow-[0px_16px_36px_rgba(0,0,0,0.08)] hidden sm:flex flex-col justify-between z-20 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <div>
                <span className="block text-[12px] sm:text-[13px] text-[#82868E] font-normal leading-none">
                  Learning Progress
                </span>
                <span className="block font-extrabold text-[28px] sm:text-[34px] text-[#242528] mt-1.5 leading-none tracking-tight">
                  55%
                </span>
              </div>
              <div className="w-full h-2 bg-[#F6F6F6] rounded-full overflow-hidden">
                <div className="w-[56%] h-full bg-[#D4FB20] rounded-full" />
              </div>
            </button>

            {/* Floating Badge 3: Happy Students (Figma: x=328, y=837, w=258, h=121, rx=16) */}
            <div className="absolute bottom-6 sm:bottom-8 lg:top-[325px] lg:bottom-auto -left-4 sm:-left-12 lg:-left-[103px] w-[220px] sm:w-[258px] h-[105px] sm:h-[121px] bg-white rounded-[16px] p-3 sm:p-4 text-left shadow-[0px_16px_36px_rgba(0,0,0,0.08)] flex flex-col justify-between z-20 cursor-pointer hover:scale-105 transition-all duration-200">
              <div>
                <span className="block font-bold text-[13px] sm:text-[15px] text-[#242528] leading-tight">
                  Happy Students
                </span>
                <div className="flex items-center gap-1.5 text-xs text-[#242528] font-bold mt-0.5">
                  <span className="text-[12px] sm:text-[13px]">4.5</span>
                  <span className="text-[#82868E] font-normal text-[11px] sm:text-[12px]">(240)</span>
                  <Star className="w-3.5 h-3.5 fill-[#D4FB20] text-[#D4FB20]" />
                </div>
              </div>
              <div className="flex items-center -space-x-1.5 sm:-space-x-2">
                <img src="/images/image1_0_1.png" alt="Student" className="w-6 h-6 sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white object-cover flex-shrink-0 hover:scale-110 transition-transform cursor-pointer" />
                <img src="/images/image2_0_1.png" alt="Student" className="w-6 h-6 sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white object-cover flex-shrink-0 hover:scale-110 transition-transform cursor-pointer" />
                <img src="/images/image3_0_1.png" alt="Student" className="w-6 h-6 sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white object-cover flex-shrink-0 hover:scale-110 transition-transform cursor-pointer" />
                <img src="/images/image4_0_1.png" alt="Student" className="w-6 h-6 sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white object-cover flex-shrink-0 hover:scale-110 transition-transform cursor-pointer" />
                <img src="/images/image5_0_1.png" alt="Student" className="w-6 h-6 sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white object-cover flex-shrink-0 hover:scale-110 transition-transform cursor-pointer" />
                <img src="/images/image6_0_1.png" alt="Student" className="w-6 h-6 sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white object-cover flex-shrink-0 hover:scale-110 transition-transform cursor-pointer" />
                <img src="/images/image7_0_1.png" alt="Student" className="w-6 h-6 sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white object-cover flex-shrink-0 hover:scale-110 transition-transform cursor-pointer" />
                <div className="w-6 h-6 sm:w-[32px] sm:h-[32px] rounded-full border-2 border-white bg-[#D4FB20] text-[#242528] text-[8px] sm:text-[10px] font-extrabold flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform cursor-pointer">
                  2K+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
