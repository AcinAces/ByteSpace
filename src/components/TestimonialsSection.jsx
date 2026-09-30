import React from 'react';
import { testimonialsData } from '../data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#242528] tracking-tight leading-[1.15]">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[#82868E] text-sm sm:text-base leading-relaxed font-normal">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid (Figma: w=374, rx=24, bg=white, border=#CED0D3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-7 sm:p-8 border border-[#CED0D3] shadow-sm hover:shadow-card transition-all duration-300 flex flex-col"
            >
              {/* User Header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-base sm:text-lg text-[#242528]">{item.name}</h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#003BE2]">{item.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#82868E] text-sm sm:text-[15px] leading-relaxed flex-grow font-normal">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
