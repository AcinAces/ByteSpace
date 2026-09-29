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
    <div className="bg-white rounded-3xl p-3 border border-brand-gray-200/80 hover:shadow-card transition-all duration-300 flex flex-col group">
      {/* Thumbnail Container */}
      <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-brand-gray-100 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Floating Pills at bottom of image */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 text-[11px] font-medium">
          <span className="px-2.5 py-1 rounded-full bg-black/50 text-white backdrop-blur-md">
            {lessons}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-black/50 text-white backdrop-blur-md">
            {duration}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-black/50 text-white backdrop-blur-md">
            {comments}
          </span>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-3 pt-4 flex flex-col flex-grow justify-between gap-3">
        {/* Title and Rating */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-[17px] text-brand-dark group-hover:text-brand-blue transition-colors line-clamp-1 leading-snug">
              {shortTitle || title}
            </h3>
            <div className="flex items-center gap-1 text-sm font-semibold text-brand-dark flex-shrink-0">
              <span>{rating}</span>
              <Star className="w-4 h-4 fill-brand-lime text-brand-lime" />
            </div>
          </div>
          <p className="text-xs text-brand-gray-400 mt-1 font-normal">
            by <span className="hover:underline cursor-pointer">{author}</span>
          </p>
        </div>

        {/* Level and Avatar Stack */}
        <div className="flex items-center justify-between pt-1">
          {/* Level Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gray-100 text-brand-dark text-xs font-medium">
            <BarChart2 className="w-3.5 h-3.5 text-brand-gray-400" />
            <span>{level}</span>
          </div>

          {/* Overlapping Avatars */}
          <div className="flex items-center -space-x-1.5">
            <img
              src="/images/home_2.png"
              alt="student"
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
            <img
              src="/images/home_3.png"
              alt="student"
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
            <img
              src="/images/home_4.png"
              alt="student"
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
            <div className="w-6 h-6 rounded-full border-2 border-white bg-black text-white text-[10px] font-bold flex items-center justify-center">
              26+
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="pt-2 border-t border-brand-gray-100 flex items-baseline">
          <span className="text-brand-blue font-bold text-lg">{price}</span>
          <span className="text-brand-gray-400 text-xs ml-0.5">{period}</span>
        </div>
      </div>
    </div>
  );
}
