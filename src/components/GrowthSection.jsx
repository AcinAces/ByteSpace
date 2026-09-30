import React from 'react';

export default function GrowthSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Instructor & Revenue Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Flat Lime Doodle Spring from Figma Home.svg */}
            <img
              src="/images/growth-doodle-spring-lime.png"
              alt=""
              className="absolute -right-6 top-10 w-36 sm:w-44 h-auto object-contain select-none pointer-events-none z-20"
            />

            {/* Overlapping Cards Container */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg">
              {/* Creator image */}
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl p-1 bg-white border border-[#CED0D3]">
                <img
                  src="/images/creator-woman.png"
                  alt="Professional Growth"
                  className="w-full h-auto object-cover rounded-[20px]"
                />
              </div>

              {/* Floating Badge 1: Total Revenue (Top Left) */}
              <div className="absolute top-6 -left-4 sm:-left-8 bg-[#003BE2] text-white p-3.5 sm:p-4 rounded-[16px] shadow-xl min-w-[170px]">
                <span className="block text-[11px] text-white/70 font-medium">Total Revenue</span>
                <span className="block text-[10px] text-white/50">July 1-28</span>
                <span className="block text-xl sm:text-2xl font-extrabold mt-1">$120.29</span>
              </div>

              {/* Floating Badge 2: Year to Date (Middle Left) */}
              <div className="absolute top-36 -left-6 sm:-left-12 bg-[#003BE2] text-white p-3.5 sm:p-4 rounded-[16px] shadow-xl min-w-[190px]">
                <span className="block text-[11px] text-white/70 font-medium">Year to Date</span>
                <span className="block text-[10px] text-white/50">2023</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl sm:text-2xl font-extrabold">$1,200.38</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-[#D4FB20] text-[#242528] text-[10px] font-bold">
                    +123
                  </span>
                </div>
              </div>

              {/* Floating Badge 3: Happy Students (Bottom Right) */}
              <div className="absolute bottom-4 -right-2 sm:-right-8 bg-white text-[#242528] p-3 sm:p-4 rounded-[16px] shadow-xl border border-gray-100 min-w-[170px]">
                <span className="block font-bold text-xs sm:text-sm">Happy Students</span>
                <div className="flex items-center gap-1.5 text-xs font-bold mt-0.5">
                  <span>4.5</span>
                  <span className="text-[#82868E] font-normal text-[11px]">(240)</span>
                  <span className="text-[#D4FB20]">★</span>
                </div>
                <div className="flex items-center -space-x-2 mt-2">
                  <img src="/images/image1_0_1.png" alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                  <img src="/images/image2_0_1.png" alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                  <img src="/images/image3_0_1.png" alt="Student" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-[#D4FB20] text-[#242528] text-[9px] font-extrabold flex items-center justify-center">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#242528] tracking-tight leading-[1.15]">
              Your Path to Professional <br />
              Growth Starts Here!
            </h2>

            <p className="mt-6 text-[#82868E] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Row */}
            <div className="mt-10 pt-8 border-t border-gray-200 grid grid-cols-3 gap-6 max-w-md">
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
        </div>
      </div>
    </section>
  );
}
