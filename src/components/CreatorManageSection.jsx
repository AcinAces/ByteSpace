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
    <section className="w-full bg-white py-20 lg:py-24 overflow-hidden border-t border-brand-gray-100" id="creators">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Instructor Graphic with Revenue & Student Badges */}
          <div className="lg:col-span-6 relative flex justify-center order-2 lg:order-1">
            {/* 3D Lime Shapes in background */}
            <img
              src="/images/shape-star.png"
              alt="Decorative 3D shape"
              className="absolute -right-6 top-16 w-36 h-36 object-contain opacity-95 animate-float shape-lime z-0"
            />
            <img
              src="/images/shape-torus.png"
              alt="Decorative 3D shape"
              className="absolute -left-8 bottom-12 w-32 h-32 object-contain opacity-90 animate-float-reverse shape-lime z-0"
            />

            {/* Main Instructor Image Container */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-lime/15 to-brand-blue/10 p-2">
                <img
                  src="/images/creator-woman.png"
                  alt="Instructor managing courses"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              {/* Floating Badge 1: Total Revenue (Top Left) */}
              <div className="absolute top-6 -left-4 sm:-left-8 bg-brand-blue text-white p-3.5 sm:p-4 rounded-2xl shadow-xl min-w-[170px] animate-float">
                <span className="block text-[11px] text-white/70 font-medium">Total Revenue</span>
                <span className="block text-[10px] text-white/50">July 1-28</span>
                <span className="block text-xl sm:text-2xl font-extrabold mt-1">$120.29</span>
              </div>

              {/* Floating Badge 2: Year to Date (Middle Left) */}
              <div className="absolute top-36 -left-6 sm:-left-12 bg-brand-blue text-white p-3.5 sm:p-4 rounded-2xl shadow-xl min-w-[190px] animate-float-reverse">
                <span className="block text-[11px] text-white/70 font-medium">Year to Date</span>
                <span className="block text-[10px] text-white/50">2023</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl sm:text-2xl font-extrabold">$1,200.38</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-brand-lime text-black text-[10px] font-bold">
                    +123
                  </span>
                </div>
              </div>

              {/* Floating Badge 3: Happy Students (Bottom Right) */}
              <div className="absolute bottom-4 -right-4 sm:-right-8 bg-brand-lime text-black p-3.5 sm:p-4 rounded-2xl shadow-xl min-w-[180px] animate-float">
                <span className="block font-bold text-xs sm:text-sm">Happy Students</span>
                <div className="flex items-center gap-1 text-xs font-semibold mt-0.5">
                  <span>4.5</span>
                  <span className="opacity-70 font-normal">(240)</span>
                  <Star className="w-3.5 h-3.5 fill-black text-black" />
                </div>
                <div className="flex items-center -space-x-1.5 mt-2">
                  <img src="/images/home_2.png" alt="Student" className="w-6 h-6 rounded-full border-2 border-brand-lime object-cover" />
                  <img src="/images/home_3.png" alt="Student" className="w-6 h-6 rounded-full border-2 border-brand-lime object-cover" />
                  <img src="/images/home_4.png" alt="Student" className="w-6 h-6 rounded-full border-2 border-brand-lime object-cover" />
                  <img src="/images/home_5.png" alt="Student" className="w-6 h-6 rounded-full border-2 border-brand-lime object-cover" />
                  <div className="w-6 h-6 rounded-full border-2 border-brand-lime bg-black text-white text-[10px] font-bold flex items-center justify-center">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading and Checklist */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-brand-dark tracking-tight leading-[1.15]">
              Create & Manage <br />
              Courses Easily.
            </h2>

            <p className="mt-6 text-brand-gray-500 text-sm sm:text-base leading-relaxed max-w-xl">
              <span className="font-bold text-brand-dark">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="mt-8 flex flex-col gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue fill-brand-blue/10 flex-shrink-0" />
                  <span className="font-semibold text-brand-dark text-sm sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
