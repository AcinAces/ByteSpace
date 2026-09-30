import React from 'react';
import { testimonialsData } from '../data/testimonialsData';

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] overflow-hidden">
      {/* 
        Exact Ambient Lighting Glows from Figma Home.svg:
        1. Vibrant Lime Glows behind the right side text and right cards (#CBFC01)
        2. Soft Electric Blue Glow behind bottom-left card (#003BE2)
      */}
      {/* 
        Full-bleed Ambient Lighting Glows matching Figma Home.svg:
        - Seamlessly spans 100% of any viewport width (zero windowing or side gaps)
        - Crisp GPU-rendered radial gradients eliminating SVG feGaussianBlur raster blur
        - Left: Soft Electric Blue glow (#003BE2) spreading from bottom-left
        - Right & Center: Vibrant Lime glows (#CBFC01) spreading from top-right and behind cards
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Soft Electric Blue ambient glow across bottom-left */}
        <div className="absolute -bottom-24 left-0 w-[600px] sm:w-[850px] lg:w-[1000px] h-[500px] sm:h-[650px] lg:h-[750px] bg-[radial-gradient(circle_at_bottom_left,rgba(0,59,226,0.13)_0%,rgba(0,59,226,0.04)_45%,transparent_70%)] pointer-events-none" />

        {/* Vibrant Lime ambient glow across top-right & right edge */}
        <div className="absolute -top-24 right-0 w-[700px] sm:w-[950px] lg:w-[1150px] h-[600px] sm:h-[750px] lg:h-[900px] bg-[radial-gradient(circle_at_top_right,rgba(203,252,1,0.28)_0%,rgba(203,252,1,0.08)_45%,transparent_70%)] pointer-events-none" />

        {/* Center-right Lime ambient glow behind right-side text and cards */}
        <div className="absolute top-1/4 right-[15%] sm:right-[25%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-[radial-gradient(circle_at_center,rgba(203,252,1,0.20)_0%,rgba(203,252,1,0.05)_45%,transparent_70%)] pointer-events-none" />
      </div>

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
              className="bg-white rounded-[24px] p-7 sm:p-8 border border-[#CED0D3] shadow-sm hover:shadow-card hover:-translate-y-1 hover:border-brand-blue/30 transition-all duration-300 flex flex-col cursor-pointer group transform-gpu"
            >
              {/* User Header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform"
                />
                <div>
                  <h4 className="font-bold text-base sm:text-lg text-[#242528] group-hover:text-brand-blue transition-colors">{item.name}</h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#003BE2]">{item.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#82868E] text-sm sm:text-[15px] leading-relaxed flex-grow font-normal select-text">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
