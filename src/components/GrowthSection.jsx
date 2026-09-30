import React from 'react';

export default function GrowthSection() {
  return (
    <section className="relative w-full bg-[#FAFAFA] pt-16 lg:pt-24 pb-8 lg:pb-12 overflow-hidden">
      {/* Ambient decorative glows matching Figma Home.svg */}
      <div className="absolute -top-12 left-0 w-[650px] h-[650px] bg-[radial-gradient(circle_at_top_left,rgba(203,252,1,0.36),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_left,rgba(0,59,226,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute top-12 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(0,59,226,0.08),transparent_70%)] pointer-events-none" />

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
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-[#003BE2]">
                  12K
                </span>
                <span className="block text-xs sm:text-sm text-[#82868E] font-medium mt-1">
                  Students
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-[#003BE2]">
                  70+
                </span>
                <span className="block text-xs sm:text-sm text-[#82868E] font-medium mt-1">
                  Courses
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-[#003BE2]">
                  16
                </span>
                <span className="block text-xs sm:text-sm text-[#82868E] font-medium mt-1">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Student, Course Card, and Doodle */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
            {/* Composition Canvas matching Figma coordinates (w=580px, h=550px) */}
            <div className="relative w-full max-w-[560px] h-[480px] sm:h-[540px]">
              {/* 1. Underlying Course Card (Figma Home.svg: x=758.5, y=3240.5, w=372, h=383) */}
              <div className="absolute left-0 sm:left-2 top-0 w-[330px] sm:w-[372px] bg-white rounded-[24px] p-4 border border-[#CED0D3] shadow-xl z-0">
                {/* Thumbnail */}
                <div className="relative w-full h-[185px] sm:h-[195px] rounded-[12px] overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src="/images/course-figma.jpg"
                    alt="Learn Figma from Basic"
                    className="w-full h-full object-cover"
                  />
                  {/* Floating Badges on Image */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 text-[11px] font-medium">
                    <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6]/80 text-[#4F4F4F] backdrop-blur-[4px] shadow-sm">
                      17 Lessons
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6]/80 text-[#4F4F4F] backdrop-blur-[4px] shadow-sm">
                      2 hours 16 min
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="pt-3 flex flex-col gap-2">
                  <div>
                    <h4 className="font-bold text-[17px] text-[#242528] leading-snug">
                      Learn Figma from Basic
                    </h4>
                    <p className="text-xs text-[#82868E] mt-0.5">by purepearl studio</p>
                  </div>

                  {/* Level Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F5F6] text-[#242528] text-xs font-medium w-fit">
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
                  </div>

                  {/* Price */}
                  <div className="pt-1 flex items-baseline">
                    <span className="text-[#003BE2] font-bold text-lg">$25</span>
                    <span className="text-[#82868E] text-xs ml-0.5">/lifetime</span>
                  </div>
                </div>
              </div>

              {/* 2. Flat Lime Doodle Spring behind student head (Figma: top-right) */}
              <img
                src="/images/growth-doodle-spring-lime.png"
                alt=""
                className="absolute right-2 sm:right-4 top-8 sm:top-12 w-32 sm:w-40 h-auto object-contain select-none pointer-events-none z-10"
              />

              {/* 3. Male Student Cutout overlapping the right half and extending DOWN below card */}
              <img
                src="/images/image0_0_1.png"
                alt="Student"
                className="absolute left-14 sm:left-20 top-2 sm:top-3 w-[340px] sm:w-[440px] h-auto object-contain select-none pointer-events-none drop-shadow-2xl z-20"
              />

              {/* 4. Floating Learning Progress Badge on the right at mid-height (Figma: x=1103, y=3453) */}
              <div className="absolute right-0 sm:right-2 top-[200px] sm:top-[225px] bg-white rounded-[16px] p-3.5 sm:p-4 shadow-2xl border border-gray-100 w-[190px] sm:w-[220px] z-30 backdrop-blur-sm">
                <span className="block text-xs font-semibold text-[#82868E]">Learning Progress</span>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#242528] mt-0.5">55%</span>
                <div className="mt-2 w-full h-2 bg-[#F6F6F6] rounded-full overflow-hidden">
                  <div className="w-[56%] h-full bg-[#D4FB20] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
