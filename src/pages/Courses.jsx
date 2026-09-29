import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ChevronDown, SlidersHorizontal, BarChart2, Grid, ArrowUpDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import { coursesData, courseCategories } from '../data/coursesData';

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'Featured';
  const initialSearch = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('Most relevant');

  // Duplicate courses to show full catalog matching Search Page.svg (12 cards)
  const allCourses = [
    ...coursesData,
    ...coursesData.map(c => ({ ...c, id: c.id + 100 })),
  ];

  const filteredCourses = allCourses.filter((course) => {
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
      <Navbar variant="blue" />

      {/* Top Banner Header */}
      <section className="w-full bg-brand-blue bg-grid-pattern pt-10 pb-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Find Your Next Course
          </h1>

          {/* Search Bar with Courses Dropdown */}
          <div className="mt-8 max-w-xl mx-auto bg-white rounded-full p-2 pl-6 flex items-center shadow-2xl border border-white/20">
            <Search className="w-5 h-5 text-brand-gray-400 mr-3 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, instructors, topics..."
              className="flex-grow bg-transparent text-brand-dark text-sm sm:text-base outline-none placeholder:text-brand-gray-400"
            />
            <button className="px-5 py-2.5 rounded-full bg-brand-lime text-black font-semibold text-sm flex items-center gap-1.5 hover:brightness-105 active:scale-95 transition-all flex-shrink-0">
              <span>Courses</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 lg:px-12 py-12">
        {/* Controls and Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-brand-gray-100">
          {/* Left Buttons: Filter, Level, Category */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gray-200 text-xs sm:text-sm font-medium hover:border-brand-dark transition-colors">
              <SlidersHorizontal className="w-4 h-4 text-brand-gray-500" />
              <span>Filter</span>
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gray-200 text-xs sm:text-sm font-medium hover:border-brand-dark transition-colors">
              <BarChart2 className="w-4 h-4 text-brand-gray-500" />
              <span>Level</span>
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gray-200 text-xs sm:text-sm font-medium hover:border-brand-dark transition-colors">
              <Grid className="w-4 h-4 text-brand-gray-500" />
              <span>Category</span>
            </button>
          </div>

          {/* Right: Sort */}
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gray-200 font-medium hover:border-brand-dark transition-colors">
              <ArrowUpDown className="w-4 h-4 text-brand-gray-500" />
              <span>{sortBy}</span>
            </button>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="py-6 flex flex-wrap items-center gap-2">
          {courseCategories.slice(0, 10).map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs sm:text-[13px] font-medium px-4 py-2 rounded-full transition-all ${
                  isActive
                    ? 'bg-brand-lime text-black font-semibold shadow-sm'
                    : 'bg-brand-gray-100 text-brand-dark/80 hover:bg-brand-gray-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {filteredCourses.map((course, idx) => (
              <CourseCard key={`${course.id}_${idx}`} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg font-semibold text-brand-dark">No courses found matching "{searchQuery}"</p>
            <p className="text-sm text-brand-gray-400 mt-2">Try clearing your filters or search terms.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('Featured'); }}
              className="mt-6 px-6 py-2.5 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-blue-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
