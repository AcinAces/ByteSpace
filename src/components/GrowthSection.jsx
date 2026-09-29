import React from 'react';

export default function GrowthSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-dark tracking-tight leading-[1.15]">
              Your Path to Professional <br />
              Growth Starts Here!
            </h2>

            <p className="mt-6 text-brand-gray-500 text-sm sm:text-base leading-relaxed max-w-xl">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Row */}
            <div className="mt-10 pt-8 border-t border-brand-gray-100 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-brand-blue">
                  12K
                </span>
                <span className="block text-xs sm:text-sm text-brand-gray-400 font-medium mt-1">
                  Students
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-brand-blue">
                  70+
                </span>
                <span className="block text-xs sm:text-sm text-brand-gray-400 font-medium mt-1">
                  Courses
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-brand-blue">
                  16
                </span>
                <span className="block text-xs sm:text-sm text-brand-gray-400 font-medium mt-1">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Background 3D shape */}
            <img
              src="/images/shape-star.png"
              alt="3D Shape"
              className="absolute -right-8 top-12 w-36 h-36 object-contain opacity-95 animate-float shape-lime z-0"
            />
            <img
              src="/images/shape-torus.png"
              alt="3D Shape"
              className="absolute -left-6 bottom-4 w-32 h-32 object-contain opacity-90 animate-float-reverse shape-lime z-0"
            />

            {/* Overlapping Cards Container */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg">
              {/* Student image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-brand-blue/10 to-brand-lime/20 p-2">
                <img
                  src="/images/hero-student.png"
                  alt="Professional Growth"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              {/* Floating Mini Course Card (Top Left) */}
              <div className="absolute -top-6 -left-6 sm:-left-10 bg-white p-3 rounded-2xl shadow-xl border border-brand-gray-200/80 max-w-[220px] hidden sm:block animate-float">
                <div className="w-full h-24 rounded-xl overflow-hidden mb-2 bg-gray-100">
                  <img
                    src="/images/course-figma.jpg"
                    alt="Learn Figma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs font-bold text-brand-dark">Learn Figma from Basic</div>
                <div className="text-[10px] text-brand-gray-400">by purepearl studio</div>
              </div>

              {/* Floating Progress Badge (Right) */}
              <div className="absolute top-1/3 -right-6 sm:-right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/60 min-w-[150px] animate-float-reverse">
                <span className="text-xs text-brand-gray-400 font-medium">Learning Progress</span>
                <span className="block text-2xl font-extrabold text-brand-dark mt-0.5">55%</span>
                <div className="mt-2 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[55%] h-full bg-brand-blue rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
