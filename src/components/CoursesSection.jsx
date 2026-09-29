import React, { useState } from 'react';
import { coursesData, courseCategories } from '../data/coursesData';
import CourseCard from './CourseCard';

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [showAllCategories, setShowAllCategories] = useState(false);

  const displayedCategories = showAllCategories 
    ? courseCategories 
    : courseCategories.slice(0, 17);

  const filteredCourses = activeCategory === 'Featured'
    ? coursesData
    : coursesData.filter(c => c.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section className="w-full bg-white py-20 lg:py-24" id="courses">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-brand-dark tracking-tight leading-tight">
            Discover Your Passion,<br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-brand-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {displayedCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-xs sm:text-[13px] font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-lime text-black font-semibold shadow-sm'
                      : 'bg-brand-gray-100 text-brand-dark/80 hover:bg-brand-gray-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
            {!showAllCategories && courseCategories.length > 17 && (
              <button
                onClick={() => setShowAllCategories(true)}
                className="text-xs sm:text-[13px] font-semibold text-brand-blue hover:underline px-3 py-2"
              >
                + More
              </button>
            )}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
