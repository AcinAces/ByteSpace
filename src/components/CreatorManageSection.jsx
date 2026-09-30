import React from 'react';

const benefits = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

export default function CreatorManageSection() {
  return (
    <section className="relative w-full bg-transparent pt-8 lg:pt-12 pb-16 lg:pb-24" id="creators">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Woman Creator & Revenue Badges */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start items-center">
            {/* Composition Canvas matching Figma coordinates (w=540px, h=560px) */}
            <div className="relative w-full max-w-[520px] h-[480px] sm:h-[540px] flex items-center justify-center">
              {/* Lime Spring Doodle behind woman's right shoulder (Figma: right side, top=114px) */}
              <img
                src="/images/growth-doodle-spring-lime.png"
                alt=""
                className="absolute right-0 sm:right-4 top-20 sm:top-24 w-32 sm:w-40 h-auto object-contain pointer-events-none z-0"
              />

              {/* Woman Cutout directly on background (Figma: x=149, y=3864, w=435, h=596) */}
              <img
                src="/images/creator-woman.png"
                alt="Create and Manage Courses"
                className="relative z-10 w-[290px] sm:w-[370px] h-auto object-contain [image-rendering:-webkit-optimize-contrast]"
              />

              {/* Floating Badge 1: Total Revenue (Figma: top-left, x=121, y=3908, w=232, h=119) */}
              <button
                type="button"
                className="absolute top-6 sm:top-8 -left-2 sm:left-0 bg-[#003BE2] text-white p-3.5 sm:p-4 rounded-[16px] shadow-2xl w-[190px] sm:w-[230px] z-20 cursor-pointer hover:scale-105 active:scale-95 transition-all text-left"
              >
                <span className="block text-[11px] text-white/80 font-medium">Total Revenue</span>
                <span className="block text-[10px] text-white/60">July 1-28</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xl sm:text-2xl font-extrabold">$120.29</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#CBFC01] text-[#242528] text-[10px] font-bold">
                    +123
                  </span>
                </div>
                {/* Lime Progress Bar (Figma: rx=4, fill=#D4FB20) */}
                <div className="mt-2.5 w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-[56%] h-full bg-[#D4FB20] rounded-full" />
                </div>
              </button>

              {/* Floating Badge 2: Year to Date (Figma: mid-left, x=121, y=4058, w=134, h=135 - compact square) */}
              <button
                type="button"
                className="absolute top-40 sm:top-44 -left-2 sm:left-0 bg-[#003BE2] text-white p-3 sm:p-3.5 rounded-[16px] shadow-2xl w-[125px] sm:w-[134px] z-20 cursor-pointer hover:scale-105 active:scale-95 transition-all text-left"
              >
                <span className="block text-[11px] text-white/80 font-medium">Year to Date</span>
                <span className="block text-[10px] text-white/60">2023</span>
                <span className="block text-base sm:text-lg font-extrabold mt-0.5">$1,200.38</span>
                <div className="mt-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-[#CBFC01] text-[#242528] text-[10px] font-bold inline-block">
                    +123
                  </span>
                </div>
              </button>

              {/* Floating Badge 3: Happy Students (Figma: bottom-right, x=404, y=4277, w=258, h=123) */}
              <div className="absolute bottom-2 sm:bottom-4 right-0 sm:right-2 bg-white text-[#242528] p-3.5 sm:p-4 rounded-[16px] shadow-2xl border border-gray-100 w-[215px] sm:w-[250px] z-20 cursor-pointer hover:scale-105 transition-all">
                <span className="block font-bold text-xs sm:text-sm">Happy Students</span>
                <div className="flex items-center gap-1.5 text-xs font-bold mt-0.5">
                  <span>4.5</span>
                  <span className="text-[#82868E] font-normal text-[11px]">(240)</span>
                  <span className="text-[#D4FB20]">★</span>
                </div>
                {/* Overlapping Avatars + 2K+ badge matching Figma Home.svg */}
                <div className="flex items-center -space-x-2 mt-2.5">
                  <img src="/images/image1_0_1.png" alt="Student" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform cursor-pointer" />
                  <img src="/images/image2_0_1.png" alt="Student" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform cursor-pointer" />
                  <img src="/images/image3_0_1.png" alt="Student" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform cursor-pointer" />
                  <img src="/images/image4_0_1.png" alt="Student" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform cursor-pointer" />
                  <img src="/images/image5_0_1.png" alt="Student" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform cursor-pointer" />
                  <img src="/images/image6_0_1.png" alt="Student" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover hidden sm:block hover:scale-110 transition-transform cursor-pointer" />
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white bg-[#D4FB20] text-[#242528] text-[9px] sm:text-[10px] font-extrabold flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform cursor-pointer">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading and Checklist */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#242528] tracking-tight leading-[1.15]">
              Create & Manage <br />
              Courses Easily.
            </h2>

            <p className="mt-5 text-[#82868E] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              <span className="font-bold text-[#242528]">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="mt-8 flex flex-col gap-4">
              {benefits.map((benefit) => (
                <button
                  type="button"
                  key={benefit}
                  className="flex items-center gap-3 cursor-pointer hover:translate-x-1.5 transition-transform group text-left"
                >
                  <div className="w-5 h-5 rounded-full bg-[#003BE2] group-hover:bg-blue-700 flex items-center justify-center flex-shrink-0 text-white shadow-sm transition-colors">
                    <svg className="w-3 h-3 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[#242528] group-hover:text-[#003BE2] transition-colors text-sm sm:text-base">
                    {benefit}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
