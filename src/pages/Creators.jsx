import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import GridBackground from '../components/GridBackground';
import { coursesData } from '../data/coursesData';

export default function Creators() {
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
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 w-full pt-4 sm:pt-6 pb-10 sm:pb-12 flex flex-col justify-between flex-grow">
          {/* Creator Profile Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5 sm:gap-6">
              {/* Creator Avatar (image1_60_1878 in Figma Creator Profile.svg) */}
              <img
                src="/images/auth-avatar-1.png"
                alt="PurePearl Studio"
                className="w-20 h-20 sm:w-[96px] sm:h-[96px] rounded-[24px] object-cover shadow-md flex-shrink-0"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
                    PurePearl Studio
                  </h1>
                  <span className="h-[35px] px-5 rounded-[17.5px] bg-[#D4FB20] text-[#242528] text-[14px] font-semibold inline-flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform">
                    Creator
                  </span>
                </div>
                <p className="text-[#F5F5F6] text-sm sm:text-[15px] font-normal mt-1">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>
          </div>

          {/* Creator Bio Description */}
          <p className="mt-6 sm:mt-8 text-[#F5F5F6] text-[16px] sm:text-[18px] font-normal leading-[1.75] max-w-[1200px]">
            Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
            <br className="hidden sm:inline" />
            {' '}Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
          </p>

          {/* Stats Badges & Follow Button */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="h-[46px] px-6 rounded-[23px] bg-white text-[#242528] text-[15px] font-semibold shadow-sm flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-all">
                <span className="text-[#003BE2] font-bold">3</span>
                <span>Products</span>
              </button>
              <button className="h-[46px] px-6 rounded-[23px] bg-white text-[#242528] text-[15px] font-semibold shadow-sm flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95 transition-all">
                <span className="text-[#003BE2] font-bold">12</span>
                <span>Followers</span>
              </button>
            </div>

            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="h-[46px] w-[101px] rounded-[23px] bg-[#D4FB20] hover:brightness-105 text-[#040819] text-[15px] font-semibold shadow-sm transition-all active:scale-95 cursor-pointer flex items-center justify-center"
            >
              Follow
            </button>
          </div>
        </div>
      </section>

      {/* Course Catalog of Creator */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 py-10 sm:py-14 w-full flex-grow">
        {/* Filter and Sort bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <button className="h-[47px] px-5 rounded-[23.5px] border border-[#CED0D3] bg-white text-[#242528] text-[14px] font-medium flex items-center gap-2 hover:border-black cursor-pointer active:scale-95 transition-all">
              <svg className="w-4 h-4 text-[#242528]" viewBox="139 448 16 16" fill="currentColor">
                <path d="M142.005 450H152.005L146.995 456.3L142.005 450ZM139.255 449.61C141.275 452.2 145.005 457 145.005 457V463C145.005 463.55 145.455 464 146.005 464H148.005C148.555 464 149.005 463.55 149.005 463V457C149.005 457 152.725 452.2 154.745 449.61C155.255 448.95 154.785 448 153.955 448H140.045C139.215 448 138.745 448.95 139.255 449.61Z" />
              </svg>
              <span>Filter</span>
            </button>
            <button className="h-[47px] px-5 rounded-[23.5px] border border-[#CED0D3] bg-white text-[#242528] text-[14px] font-medium flex items-center gap-2 hover:border-black cursor-pointer active:scale-95 transition-all">
              <svg className="w-4 h-4 text-[#242528]" viewBox="251 448 16 16" fill="currentColor">
                <path d="M263.5 448H266.5V464H263.5V448ZM251.5 458H254.5V464H251.5V458ZM257.5 453H260.5V464H257.5V453Z" />
              </svg>
              <span>Level</span>
            </button>
            <button className="h-[47px] px-5 rounded-[23.5px] border border-[#CED0D3] bg-white text-[#242528] text-[14px] font-medium flex items-center gap-2 hover:border-black cursor-pointer active:scale-95 transition-all">
              <svg className="w-[18px] h-4 text-[#242528]" viewBox="362.5 446 19 20" fill="currentColor">
                <path d="M371.5 446L366 455H377L371.5 446ZM371.5 449.84L373.43 453H369.56L371.5 449.84ZM377 457C374.51 457 372.5 459.01 372.5 461.5C372.5 463.99 374.51 466 377 466C379.49 466 381.5 463.99 381.5 461.5C381.5 459.01 379.49 457 377 457ZM377 464C375.62 464 374.5 462.88 374.5 461.5C374.5 460.12 375.62 459 377 459C378.38 459 379.5 460.12 379.5 461.5C379.5 462.88 378.38 464 377 464ZM362.5 465.5H370.5V457.5H362.5V465.5ZM364.5 459.5H368.5V463.5H364.5V459.5Z" />
              </svg>
              <span>Category</span>
            </button>
          </div>

          <button className="h-[47px] px-5 rounded-[23.5px] border border-[#CED0D3] bg-white text-[#242528] text-[14px] font-medium flex items-center gap-2 hover:border-black cursor-pointer active:scale-95 transition-all">
            <svg className="w-[18px] h-4 text-[#242528]" viewBox="1182 448 18 16" fill="currentColor">
              <path d="M1182 462H1188V460H1182V462ZM1182 450V452H1200V450H1182ZM1182 457H1194V455H1182V457Z" />
            </svg>
            <span>Most relevant</span>
          </button>
        </div>

        {/* 6 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[41px]">
          {creatorCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
