import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  const {
    id,
    title,
    shortTitle,
    author,
    rating,
    lessons,
    duration,
    comments,
    level,
    price,
    period,
    image
  } = course;

  return (
    <div className="bg-white rounded-[24px] p-3.5 border border-[#CED0D3] hover:shadow-card transition-all duration-300 flex flex-col group cursor-pointer">
      {/* Thumbnail Container */}
      <Link to="/courses" className="relative w-full h-[195px] rounded-[12px] overflow-hidden bg-brand-gray-100 flex-shrink-0 block">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Floating Pills at bottom of image (Figma: rx=13, fill=#F6F6F6 opacity 0.6, text=#4F4F4F) */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 text-[11px] font-medium">
          <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6]/80 text-[#4F4F4F] backdrop-blur-[4px] shadow-sm hover:bg-white transition-colors cursor-pointer">
            {lessons}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6]/80 text-[#4F4F4F] backdrop-blur-[4px] shadow-sm hover:bg-white transition-colors cursor-pointer">
            {duration}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6]/80 text-[#4F4F4F] backdrop-blur-[4px] shadow-sm hover:bg-white transition-colors cursor-pointer">
            {comments}
          </span>
        </div>
      </Link>

      {/* Details Container */}
      <div className="p-2 pt-3 flex flex-col flex-grow justify-between gap-3">
        {/* Title and Rating */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link to="/courses" className="block">
              <h3 className="font-bold text-[17px] text-[#242528] group-hover:text-brand-blue transition-colors line-clamp-1 leading-snug cursor-pointer">
                {shortTitle || title}
              </h3>
            </Link>
            <div className="flex items-center gap-1 text-sm font-semibold text-[#242528] flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
              <span>{rating}</span>
              <Star className="w-4 h-4 fill-[#D4FB20] text-[#D4FB20]" />
            </div>
          </div>
          <p className="text-xs text-[#82868E] mt-1 font-normal">
            by <Link to="/creators" className="hover:underline cursor-pointer text-[#82868E] hover:text-brand-blue transition-colors">{author}</Link>
          </p>
        </div>

        {/* Level and Avatar Stack */}
        <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
          {/* Level Pill */}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F5F6] text-[#242528] text-xs font-medium cursor-pointer hover:bg-gray-200 active:scale-95 transition-all"
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
            <span>{level}</span>
          </button>

          {/* Overlapping Avatars from Figma Home.svg */}
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
        <Link to="/courses" className="pt-2 border-t border-[#F5F5F6] flex items-baseline hover:opacity-80 transition-opacity cursor-pointer">
          <span className="text-[#003BE2] font-bold text-lg">{price}</span>
          <span className="text-[#82868E] text-xs ml-0.5">{period}</span>
        </Link>
      </div>
    </div>
  );
}
