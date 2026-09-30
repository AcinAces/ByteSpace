import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

const benefits = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

export default function CreatorManageSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 lg:py-28 overflow-hidden" id="creators">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Checklist */}
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
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#003BE2] flex-shrink-0" />
                  <span className="font-semibold text-[#242528] text-sm sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Composition with Student, Course Card, and Flat Lime Doodle */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Flat Lime Doodle Spring from Figma Home.svg */}
            <img
              src="/images/creator-doodle-spring-lime.png"
              alt=""
              className="absolute -right-4 -top-10 w-36 sm:w-44 h-auto object-contain select-none pointer-events-none z-20"
            />

            {/* Composition Card Container */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg">
              {/* Underlying Course Card */}
              <div className="bg-white rounded-[24px] p-4 border border-[#CED0D3] shadow-lg max-w-[372px] mx-auto">
                <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden bg-gray-100">
                  <img
                    src="/images/course-figma.jpg"
                    alt="Course Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 text-[11px] font-medium">
                    <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6]/80 text-[#4F4F4F]">17 Lessons</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6]/80 text-[#4F4F4F]">2h 16m</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6]/80 text-[#4F4F4F]">59 Comments</span>
                  </div>
                </div>
                <div className="pt-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[17px] text-[#242528]">Learn Figma from Basic</h4>
                    <div className="flex items-center gap-1 text-sm font-semibold text-[#242528]">
                      <span>4.5</span>
                      <Star className="w-4 h-4 fill-[#D4FB20] text-[#D4FB20]" />
                    </div>
                  </div>
                  <p className="text-xs text-[#82868E] mt-1">by purepearl studio</p>
                </div>
              </div>

              {/* Student cutout floating slightly forward */}
              <img
                src="/images/image0_0_1.png"
                alt="Instructor"
                className="absolute -right-6 sm:-right-10 bottom-0 w-[260px] sm:w-[320px] h-auto object-contain select-none pointer-events-none drop-shadow-xl"
              />

              {/* Floating Learning Progress Badge */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white rounded-[16px] p-4 shadow-xl border border-gray-100 min-w-[170px] z-20">
                <span className="block text-xs text-[#82868E]">Learning Progress</span>
                <span className="block text-2xl font-extrabold text-[#242528] mt-0.5">55%</span>
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
