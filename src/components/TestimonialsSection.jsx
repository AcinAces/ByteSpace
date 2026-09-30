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
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[1440px] h-full max-w-none pointer-events-none"
          viewBox="0 0 1440 784"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="test-blur-1" x="802" y="-281" width="1217" height="1217" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur" />
            </filter>
            <filter id="test-blur-2" x="355" y="-178" width="752" height="752" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur" />
            </filter>
            <filter id="test-blur-3" x="-482" y="109" width="1217" height="1217" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur" />
            </filter>

            <radialGradient id="test-lime-1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1410.5 327.5) rotate(90) scale(568.5)">
              <stop stopColor="#CBFC01" />
              <stop offset="0.53" stopColor="#CBFC01" stopOpacity="0.23" />
              <stop offset="0.75" stopColor="#CBFC01" stopOpacity="0.06" />
              <stop offset="1" stopColor="#CBFC01" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="test-lime-2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731 198) rotate(90) scale(336)">
              <stop stopColor="#CBFC01" />
              <stop offset="0.53" stopColor="#CBFC01" stopOpacity="0.23" />
              <stop offset="0.75" stopColor="#CBFC01" stopOpacity="0.06" />
              <stop offset="1" stopColor="#CBFC01" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="test-blue" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(126.5 717.5) rotate(90) scale(568.5)">
              <stop stopColor="#003BE2" />
              <stop offset="0.53" stopColor="#003BE2" stopOpacity="0.23" />
              <stop offset="0.75" stopColor="#003BE2" stopOpacity="0.06" />
              <stop offset="1" stopColor="#003BE2" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g filter="url(#test-blur-1)">
            <circle cx="1410.5" cy="327.5" r="568.5" fill="url(#test-lime-1)" fillOpacity="0.4" />
          </g>
          <g filter="url(#test-blur-2)">
            <circle cx="731" cy="198" r="336" fill="url(#test-lime-2)" fillOpacity="0.6" />
          </g>
          <g filter="url(#test-blur-3)">
            <circle cx="126.5" cy="717.5" r="568.5" fill="url(#test-blue)" fillOpacity="0.24" />
          </g>
        </svg>

        {/* Responsive CSS glow fallbacks for ultra-wide & mobile viewports */}
        <div className="absolute -top-10 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(203,252,1,0.32),transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-10 left-0 w-[550px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(0,59,226,0.14),transparent_70%)] pointer-events-none" />
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
