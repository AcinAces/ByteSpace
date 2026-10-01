import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function GrowthSection() {
  const [counts, setCounts] = useState({ students: 0, courses: 0, creators: 0 });
  const statsRef = useRef(null);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setCounts({ students: 12, courses: 70, creators: 16 });
      return;
    }

    let animFrameId = null;
    let hasAnimated = false;
    const duration = 1800; // 1.8s smooth duration

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          observer.disconnect(); // Only animate once; will not animate again until page is refreshed

          const startTime = performance.now();

          const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic: starts quickly and smoothly decelerates into the final number
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts({
              students: Math.round(eased * 12),
              courses: Math.round(eased * 70),
              creators: Math.round(eased * 16),
            });

            if (progress < 1) {
              animFrameId = requestAnimationFrame(step);
            }
          };

          animFrameId = requestAnimationFrame(step);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <section className="relative w-full bg-transparent pt-16 lg:pt-24 pb-8 lg:pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#242528] tracking-tight leading-[1.15]">
              Your Path to Professional <br />
              Growth Starts Here!
            </h2>

            <p className="mt-6 text-[#82868E] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Row (Figma Home.svg: Clean grid without top divider border) */}
            <div ref={statsRef} className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Link to="/courses" className="group cursor-pointer hover:scale-105 active:scale-95 transition-all inline-block">
                <span className="block text-3xl sm:text-4xl font-bold text-[#003BE2] group-hover:text-blue-700 transition-colors tabular-nums">
                  {counts.students}K
                </span>
                <span className="block text-xs sm:text-sm text-[#82868E] font-medium mt-1">
                  Students
                </span>
              </Link>
              <Link to="/courses" className="group cursor-pointer hover:scale-105 active:scale-95 transition-all inline-block">
                <span className="block text-3xl sm:text-4xl font-bold text-[#003BE2] group-hover:text-blue-700 transition-colors tabular-nums">
                  {counts.courses}+
                </span>
                <span className="block text-xs sm:text-sm text-[#82868E] font-medium mt-1">
                  Courses
                </span>
              </Link>
              <Link to="/creators" className="group cursor-pointer hover:scale-105 active:scale-95 transition-all inline-block">
                <span className="block text-3xl sm:text-4xl font-bold text-[#003BE2] group-hover:text-blue-700 transition-colors tabular-nums">
                  {counts.creators}
                </span>
                <span className="block text-xs sm:text-sm text-[#82868E] font-medium mt-1">
                  Creators
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composition with Student, Course Card, and Doodle */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
            {/* Composition Canvas matching Figma coordinates (w=580px, h=550px) */}
            <div className="relative w-full max-w-[560px] h-[480px] sm:h-[540px]">
              {/* 1. Underlying Course Card (Figma Home.svg: x=758.5, y=3240.5, w=372, h=383) */}
              <div className="absolute left-0 sm:left-2 top-0 w-[330px] sm:w-[372px] bg-white rounded-[24px] p-4 border border-[#CED0D3] shadow-xl z-0 hover:shadow-2xl transition-shadow duration-300">
                {/* Thumbnail */}
                <Link to="/courses" className="relative w-full h-[185px] sm:h-[195px] rounded-[12px] overflow-hidden bg-gray-100 flex-shrink-0 block group cursor-pointer">
                  <img
                    src="/images/course-figma.jpg"
                    alt="Learn Figma from Basic"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Badges on Image */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 text-[11px] font-medium">
                    <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6] text-[#4F4F4F] border border-black/5 shadow-sm hover:bg-white transition-colors cursor-pointer">
                      17 Lessons
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6] text-[#4F4F4F] border border-black/5 shadow-sm hover:bg-white transition-colors cursor-pointer">
                      2 hours 16 mins
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6] text-[#4F4F4F] border border-black/5 shadow-sm hover:bg-white transition-colors cursor-pointer">
                      59 Comments
                    </span>
                  </div>
                </Link>

                {/* Details */}
                <div className="pt-3 flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link to="/courses" className="block">
                        <h4 className="font-bold text-[17px] text-[#242528] leading-snug hover:text-[#003BE2] transition-colors cursor-pointer">
                          Learn Figma from Basic
                        </h4>
                      </Link>
                      <p className="text-xs text-[#82868E] mt-0.5">
                        by <Link to="/creators" className="text-[#003BE2] hover:underline cursor-pointer">purepearl studio</Link>
                      </p>
                    </div>
                    {/* Rating 4.5 */}
                    <div className="flex items-center gap-1 text-sm font-semibold text-[#242528] flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      <span>4.5</span>
                      <Star className="w-4 h-4 fill-[#D4FB20] text-[#D4FB20]" />
                    </div>
                  </div>

                  {/* Level Pill and Avatar Stack */}
                  <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F5F6] text-[#242528] text-xs font-medium cursor-pointer hover:bg-gray-200 active:scale-95 transition-all"
                    >
                      <svg
                        className="w-3 h-3 text-[#4B4C53] flex-shrink-0"
                        viewBox="0 0 13 14"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M10 0H12.5V13.34H10V0ZM0 8.34H2.5V13.34H0V8.34ZM5 4.17H7.5V13.34H5V4.17Z" />
                      </svg>
                      <span>Beginner</span>
                    </button>

                    {/* Overlapping Avatars + exact green 26+ */}
                    <div className="flex items-center -space-x-2 cursor-pointer hover:opacity-90 transition-opacity">
                      <img
                        src="/images/image2_0_1.png"
                        alt="student"
                        className="w-7 h-7 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform"
                      />
                      <img
                        src="/images/image14_0_1.png"
                        alt="student"
                        className="w-7 h-7 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform"
                      />
                      <img
                        src="/images/image15_0_1.png"
                        alt="student"
                        className="w-7 h-7 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform"
                      />
                      <img
                        src="/images/image16_0_1.png"
                        alt="student"
                        className="w-7 h-7 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform"
                      />
                      <div className="w-7 h-7 rounded-full border-2 border-white bg-[#D4FB20] text-[#040819] text-[10px] font-bold flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform">
                        26+
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <Link to="/courses" className="pt-1 flex items-baseline hover:opacity-80 transition-opacity cursor-pointer">
                    <span className="text-[#003BE2] font-bold text-lg">$25</span>
                    <span className="text-[#82868E] text-xs ml-0.5">/lifetime</span>
                  </Link>
                </div>
              </div>

              {/* 2. Flat Lime Doodle Spring behind student head (Figma: top-right) */}
              <img
                src="/images/growth-doodle-spring-lime.png"
                alt=""
                className="absolute right-2 sm:right-4 top-4 sm:top-6 w-28 sm:w-36 h-auto object-contain pointer-events-none z-10"
              />

              {/* 3. Male Student Cutout overlapping the right half and extending DOWN below card */}
              <img
                src="/images/image0_0_1.png"
                alt="Student"
                className="absolute left-20 sm:left-28 top-2 sm:top-3 w-[340px] sm:w-[440px] h-auto object-contain pointer-events-none z-20 [image-rendering:-webkit-optimize-contrast]"
              />

              {/* 4. Floating Learning Progress Badge strictly ABOVE the laptop */}
              <button
                type="button"
                className="absolute right-0 sm:right-1 top-[95px] sm:top-[110px] bg-white rounded-[16px] p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.10)] border border-[#CED0D3]/60 w-[190px] sm:w-[220px] z-30 cursor-pointer hover:scale-105 active:scale-95 transition-all text-left"
              >
                <span className="block text-xs font-normal text-[#82868E]">Learning Progress</span>
                <span className="block text-2xl sm:text-3xl font-bold text-[#242528] mt-0.5">55%</span>
                <div className="mt-2 w-full h-2 bg-[#F6F6F6] rounded-full overflow-hidden">
                  <div className="w-[56%] h-full bg-[#D4FB20] rounded-full" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
