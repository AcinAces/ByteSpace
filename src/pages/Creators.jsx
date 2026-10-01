import React, { useState } from 'react';
import { SlidersHorizontal, Layers, ArrowUpDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import GridBackground from '../components/GridBackground';
import { coursesData } from '../data/coursesData';

export default function Creators() {
  const [isFollowing, setIsFollowing] = useState(false);

  // Top 6 courses matching Creator Profile.svg
  const creatorCourses = coursesData.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 
        Top Hero Banner Section (Height 592px matching Figma Creator Profile.svg)
      */}
      <section className="relative w-full min-h-[540px] lg:min-h-[592px] bg-[#003BE2] flex flex-col justify-between overflow-hidden text-white">
        <GridBackground />

        {/* Top Navbar */}
        <div className="relative z-20">
          <Navbar variant="blue" />
        </div>

        {/* Creator Profile Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-4 sm:pt-8 pb-10 sm:pb-14 flex flex-col justify-between flex-grow">
          {/* Creator Profile Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5 sm:gap-6">
              {/* Creator Avatar (from Figma Creator Profile.svg) */}
              <img
                src="/images/creator-avatar.png"
                alt="PurePearl Studio"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-[24px] object-cover border-2 border-white/20 shadow-md"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
                    PurePearl Studio
                  </h1>
                  <span className="bg-[#D4FB20] text-[#040819] text-xs font-semibold px-3 py-1 rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-transform">
                    Creator
                  </span>
                </div>
                <p className="text-white/80 text-sm sm:text-base font-light mt-1">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>
          </div>

          {/* Creator Bio Description */}
          <p className="mt-6 sm:mt-8 text-white/90 text-sm sm:text-[15px] font-light leading-relaxed max-w-4xl">
            Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
            <br className="hidden sm:inline" />
            {' '}Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
          </p>

          {/* Stats Badges & Follow Button */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button className="bg-white text-[#242528] px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm cursor-pointer hover:scale-105 active:scale-95 transition-all">
                3 Products
              </button>
              <button className="bg-white text-[#242528] px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm cursor-pointer hover:scale-105 active:scale-95 transition-all">
                12 Followers
              </button>
            </div>

            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className="bg-[#D4FB20] hover:bg-[#c2ea13] text-[#040819] px-7 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>
      </section>

      {/* Course Catalog of Creator */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 w-full flex-grow">
        {/* Filter and Sort bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#CED0D3] bg-white text-[#242528] text-sm font-medium hover:border-black cursor-pointer active:scale-95 transition-all">
              <SlidersHorizontal className="w-4 h-4 text-[#242528]" />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#CED0D3] bg-white text-[#242528] text-sm font-medium hover:border-black cursor-pointer active:scale-95 transition-all">
              <svg className="w-4 h-4 text-[#242528]" viewBox="0 0 16 16" fill="currentColor">
                <rect x="1" y="9" width="3" height="6" rx="0.5" />
                <rect x="6.5" y="5" width="3" height="10" rx="0.5" />
                <rect x="12" y="1" width="3" height="14" rx="0.5" />
              </svg>
              <span>Level</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#CED0D3] bg-white text-[#242528] text-sm font-medium hover:border-black cursor-pointer active:scale-95 transition-all">
              <Layers className="w-4 h-4 text-[#242528]" />
              <span>Category</span>
            </button>
          </div>

          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#CED0D3] bg-white text-[#242528] text-sm font-medium hover:border-black cursor-pointer active:scale-95 transition-all">
            <ArrowUpDown className="w-4 h-4 text-[#242528]" />
            <span>Most relevant</span>
          </button>
        </div>

        {/* 6 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {creatorCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
