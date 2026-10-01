import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import GridBackground from '../components/GridBackground';
import LoadingSpinner from '../components/LoadingSpinner';
import { useLoading } from '../context/LoadingContext';
import { coursesData, courseCategories } from '../data/coursesData';

export default function Courses() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'Featured';
  const initialSearch = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFiltering, setIsFiltering] = useState(false);
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    setIsFiltering(true);
    startLoading();
    const timer = setTimeout(() => {
      setIsFiltering(false);
      stopLoading();
    }, 280);
    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery, currentPage, startLoading, stopLoading]);

  // 18 courses matching 6 rows x 3 columns of Search Page.svg
  const catalogCourses = [
    ...coursesData.map(c => ({ ...c, id: c.id })),
    ...coursesData.map(c => ({ ...c, id: c.id + 10 })),
    ...coursesData.map(c => ({ ...c, id: c.id + 20 })),
  ];

  const filteredCourses = catalogCourses.filter((course) => {
    const matchesCategory = activeCategory === 'Featured' || activeCategory === 'all'
      ? true 
      : course.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch = searchQuery.trim() === ''
      ? true
      : course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 
        Top Hero Banner Section (Height 360px matching Figma Search Page.svg)
      */}
      <section className="relative w-full h-[360px] bg-[#003BE2] flex flex-col justify-between overflow-hidden text-white">
        <GridBackground />

        {/* Top Navbar */}
        <div className="relative z-20">
          <Navbar variant="blue" />
        </div>

        {/* Search Content */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6 pb-6">
          <h1 className="text-[36px] sm:text-[44px] font-bold tracking-tight text-white leading-tight">
            Find Your Next Course
          </h1>

          {/* Search Bar Container */}
          <div className="mt-7 flex items-center justify-center gap-3 w-full max-w-[624px]">
            {/* Input Box */}
            <div className="flex-grow h-[52px] rounded-[24px] bg-white px-6 flex items-center shadow-lg">
              <Search className="w-5 h-5 text-[#82868E] mr-3 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full bg-transparent text-[#242528] text-[15px] outline-none placeholder-[#82868E]"
              />
            </div>

            {/* Courses Dropdown Button */}
            <button className="w-[147px] h-[48px] rounded-[24px] bg-[#D4FB20] text-[#242528] font-medium text-[15px] flex items-center justify-center gap-1.5 hover:brightness-105 active:scale-95 transition-all shadow-md flex-shrink-0 cursor-pointer">
              <span>Courses</span>
              <ChevronDown className="w-4 h-4 text-[#242528]" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <main className="flex-grow max-w-[1440px] mx-auto w-full px-6 sm:px-12 lg:px-[120px] py-12">
        {/* Controls and Filter Bar (Figma y=432.5) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6">
          {/* Left: Filter, Level, Category Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter */}
            <button className="h-[47px] px-5 rounded-[23.5px] border border-[#CED0D3] bg-white text-[#242528] text-[14px] font-medium flex items-center gap-2 hover:border-black cursor-pointer active:scale-95 transition-all">
              <svg className="w-4 h-4 text-[#242528]" viewBox="139 448 16 16" fill="currentColor">
                <path d="M142.005 450H152.005L146.995 456.3L142.005 450ZM139.255 449.61C141.275 452.2 145.005 457 145.005 457V463C145.005 463.55 145.455 464 146.005 464H148.005C148.555 464 149.005 463.55 149.005 463V457C149.005 457 152.725 452.2 154.745 449.61C155.255 448.95 154.785 448 153.955 448H140.045C139.215 448 138.745 448.95 139.255 449.61Z" />
              </svg>
              <span>Filter</span>
            </button>

            {/* Level */}
            <button className="h-[47px] px-5 rounded-[23.5px] border border-[#CED0D3] bg-white text-[#242528] text-[14px] font-medium flex items-center gap-2 hover:border-black cursor-pointer active:scale-95 transition-all">
              <svg className="w-4 h-4 text-[#242528]" viewBox="251 448 16 16" fill="currentColor">
                <path d="M263.5 448H266.5V464H263.5V448ZM251.5 458H254.5V464H251.5V458ZM257.5 453H260.5V464H257.5V453Z" />
              </svg>
              <span>Level</span>
            </button>

            {/* Category */}
            <button className="h-[47px] px-5 rounded-[23.5px] border border-[#CED0D3] bg-white text-[#242528] text-[14px] font-medium flex items-center gap-2 hover:border-black cursor-pointer active:scale-95 transition-all">
              <svg className="w-[18px] h-4 text-[#242528]" viewBox="362.5 446 19 20" fill="currentColor">
                <path d="M371.5 446L366 455H377L371.5 446ZM371.5 449.84L373.43 453H369.56L371.5 449.84ZM377 457C374.51 457 372.5 459.01 372.5 461.5C372.5 463.99 374.51 466 377 466C379.49 466 381.5 463.99 381.5 461.5C381.5 459.01 379.49 457 377 457ZM377 464C375.62 464 374.5 462.88 374.5 461.5C374.5 460.12 375.62 459 377 459C378.38 459 379.5 460.12 379.5 461.5C379.5 462.88 378.38 464 377 464ZM362.5 465.5H370.5V457.5H362.5V465.5ZM364.5 459.5H368.5V463.5H364.5V459.5Z" />
              </svg>
              <span>Category</span>
            </button>
          </div>

          {/* Right: Most relevant */}
          <div className="flex items-center">
            <button className="h-[47px] px-5 rounded-[23.5px] border border-[#CED0D3] bg-white text-[#242528] text-[14px] font-medium flex items-center gap-2 hover:border-black cursor-pointer active:scale-95 transition-all">
              <svg className="w-[18px] h-4 text-[#242528]" viewBox="1182 448 18 16" fill="currentColor">
                <path d="M1182 462H1188V460H1182V462ZM1182 450V452H1200V450H1182ZM1182 457H1194V455H1182V457Z" />
              </svg>
              <span>Most relevant</span>
            </button>
          </div>
        </div>

        {/* Category Pills Bar (Figma y=512) */}
        <div className="py-4 flex flex-wrap items-center gap-2.5">
          {courseCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`h-[43px] rounded-[21.5px] px-5 text-[14px] transition-all flex items-center justify-center cursor-pointer active:scale-95 ${
                  isActive
                    ? 'bg-[#D4FB20] text-[#242528] font-medium shadow-sm'
                    : 'bg-[#F5F5F6] text-[#242528] font-normal hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Courses Grid (3 Columns, 6 Rows matching Search Page.svg) */}
        {isFiltering ? (
          <div className="py-24 flex flex-col items-center justify-center">
            <LoadingSpinner size="lg" label="Loading courses..." />
          </div>
        ) : filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {filteredCourses.map((course, idx) => (
              <CourseCard key={`${course.id}_${idx}`} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg font-semibold text-[#242528]">No courses found matching "{searchQuery}"</p>
            <p className="text-sm text-[#82868E] mt-2">Try clearing your filters or search terms.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('Featured'); }}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#003BE2] text-white text-sm font-semibold hover:bg-blue-700 cursor-pointer active:scale-95 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination (Figma y=3232) */}
        <div className="mt-16 flex items-center justify-center gap-4">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-[47px] h-[47px] rounded-full border border-[#CED0D3] bg-white flex items-center justify-center text-[#242528] hover:border-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer active:scale-95 disabled:active:scale-100"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Numbers: 1, 2, 3, 4, 5 */}
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((pageNum) => {
              const isSelected = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-[15px] transition-colors cursor-pointer active:scale-95 ${
                    isSelected
                      ? 'font-bold text-[#242528]'
                      : 'font-normal text-[#82868E] hover:text-[#242528]'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage(p => Math.min(5, p + 1))}
            disabled={currentPage === 5}
            className="w-[47px] h-[47px] rounded-full border border-[#CED0D3] bg-white flex items-center justify-center text-[#242528] hover:border-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer active:scale-95 disabled:active:scale-100"
            aria-label="Next Page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
