import React from 'react';
import { Star, BarChart2 } from 'lucide-react';
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
    <div className="bg-white rounded-[24px] p-3.5 border border-[#CED0D3] hover:shadow-card transition-all duration-300 flex flex-col group">
      {/* Thumbnail Container */}
      <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden bg-brand-gray-100 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Floating Pills at bottom of image (Figma: rx=13, fill=#F6F6F6 opacity 0.6, text=#4F4F4F) */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 text-[11px] font-medium">
          <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6]/80 text-[#4F4F4F] backdrop-blur-[4px] shadow-sm">
            {lessons}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6]/80 text-[#4F4F4F] backdrop-blur-[4px] shadow-sm">
            {duration}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#F6F6F6]/80 text-[#4F4F4F] backdrop-blur-[4px] shadow-sm">
            {comments}
          </span>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-2 pt-3 flex flex-col flex-grow justify-between gap-3">
        {/* Title and Rating */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-[17px] text-[#242528] group-hover:text-brand-blue transition-colors line-clamp-1 leading-snug">
              {shortTitle || title}
            </h3>
            <div className="flex items-center gap-1 text-sm font-semibold text-[#242528] flex-shrink-0">
              <span>{rating}</span>
              <Star className="w-4 h-4 fill-[#D4FB20] text-[#D4FB20]" />
            </div>
          </div>
          <p className="text-xs text-[#82868E] mt-1 font-normal">
            by <span className="hover:underline cursor-pointer">{author}</span>
          </p>
        </div>

        {/* Level and Avatar Stack */}
        <div className="flex items-center justify-between pt-1">
          {/* Level Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F5F6] text-[#242528] text-xs font-medium">
            <BarChart2 className="w-3.5 h-3.5 text-[#82868E]" />
            <span>{level}</span>
          </div>

          {/* Overlapping Avatars from Figma Home.svg */}
          <div className="flex items-center -space-x-2">
            <img
              src="/images/image2_0_1.png"
              alt="student"
              className="w-7 h-7 rounded-full border-2 border-white object-cover"
            />
            <img
              src="/images/image14_0_1.png"
              alt="student"
              className="w-7 h-7 rounded-full border-2 border-white object-cover"
            />
            <img
              src="/images/image15_0_1.png"
              alt="student"
              className="w-7 h-7 rounded-full border-2 border-white object-cover"
            />
            <img
              src="/images/image16_0_1.png"
              alt="student"
              className="w-7 h-7 rounded-full border-2 border-white object-cover"
            />
          </div>
        </div>

        {/* Price */}
        <div className="pt-2 border-t border-[#F5F5F6] flex items-baseline">
          <span className="text-[#003BE2] font-bold text-lg">{price}</span>
          <span className="text-[#82868E] text-xs ml-0.5">{period}</span>
        </div>
      </div>
    </div>
  );
}
