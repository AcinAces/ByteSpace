import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GridBackground from '../components/GridBackground';

export default function CourseDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(
    initialTab === 'review' || initialTab === 'reviews'
      ? 'Reviews'
      : initialTab === 'lesson' || initialTab === 'lessons'
      ? 'Lesson'
      : 'About'
  );
  const [selectedRating, setSelectedRating] = useState('All');
  const [isCopied, setIsCopied] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab: tab.toLowerCase() });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Build Digital Asset: A Comprehensive Guide',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const modulesList = [
    {
      module: 'Module 1: Introduction to Digital Assets',
      description:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      module: 'Module 2: Design Principles for Impact',
      description:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      module: 'Module 4: User-Centric Design Strategies',
      description:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      module: 'Module 5: Interactive Media and Engagement',
      description:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      module: 'Module 6: Project Showcase and Critique',
      description:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      module: 'Module 7: Optimizing Digital Assets for Various Platforms',
      description:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ];

  const keyPoints = [
    'Foundational Concepts',
    'Design Principles Mastery',
    'Advanced Techniques in Digital Creation',
    'Project Showcase and Critique',
    'Optimizing for Various Platforms',
    'Digital Asset Management Best Practices',
    'Monetization Strategies',
    'Capstone Project: Building Your Portfolio'
  ];

  const sneakPeakImages = [
    { src: '/images/course_details_27.jpg', alt: 'Sketching interface ideas on paper' },
    { src: '/images/course_details_28.jpg', alt: 'Designing user experience on laptop' },
    { src: '/images/course_details_29.jpg', alt: 'Web product interface on desktop monitor' },
    { src: '/images/course_details_30.jpg', alt: 'Mobile app layout mockups on smartphones' },
  ];

  const lessonsList = [
    { num: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
    { num: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
    { num: '03', title: 'Advanced Techniques in Digital Creation', duration: '16 mins' },
    { num: '04', title: 'Typography and Layout Hierarchy', duration: '18 mins' },
    { num: '05', title: 'Color Theory & Aesthetic Cohesion', duration: '24 mins' },
    { num: '06', title: 'Interactive Prototyping & Flow', duration: '32 mins' },
    { num: '07', title: 'Exporting & Multi-platform Optimization', duration: '19 mins' },
    { num: '08', title: 'Capstone Project: Publishing Your Digital Asset', duration: '45 mins' },
  ];

  const ratingBreakdown = [
    { stars: 5, percentage: 92.3, count: 720 },
    { stars: 4, percentage: 36.5, count: 120 },
    { stars: 3, percentage: 9.5, count: 21 },
    { stars: 2, percentage: 3.5, count: 12 },
    { stars: 1, percentage: 5.3, count: 16 },
  ];

  const reviewsList = [
    {
      name: 'PurePearl Studio',
      role: 'UI/UX Designer',
      rating: 5,
      date: 'a year ago',
      avatar: '/images/review-avatar-1.png',
      comment:
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      name: 'Albert Flores',
      role: 'UI/UX Designer',
      rating: 5,
      date: 'a year ago',
      avatar: '/images/review-avatar-2.png',
      comment:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      name: 'Cody Fisher',
      role: 'UI/UX Designer',
      rating: 5,
      date: 'a year ago',
      avatar: '/images/review-avatar-3.png',
      comment:
        'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
    },
    {
      name: 'Brooklyn Simmons',
      role: 'UI/UX Designer',
      rating: 5,
      date: 'a year ago',
      avatar: '/images/review-avatar-4.png',
      comment:
        'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* 
        Exact Blue Banner Background with GridOverlay:
        Matches Figma Course Details.svg (Height 957px on desktop, covers header and video player)
      */}
      <div className="absolute top-0 left-0 right-0 h-[680px] sm:h-[780px] lg:h-[957px] bg-[#003BE2] overflow-hidden z-0 pointer-events-none">
        <GridBackground />
      </div>

      {/* Main Foreground Container */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Top Navbar */}
        <Navbar variant="blue" />

        {/* Max Width Container (1200px centered) */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0 w-full pt-4 sm:pt-8 lg:pt-[59px] pb-20">
          
          {/* Header Row: Title, Subtitle, Author, Share Button */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 text-white">
            <div className="max-w-3xl">
              {/* Course Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18]">
                Build Digital Asset: A Comprehensive Guide
              </h1>

              {/* Subtitle */}
              <p className="mt-3 text-[#F5F5F6] text-base sm:text-[18px] font-normal leading-relaxed">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>

              {/* Author Attribution */}
              <p className="mt-3.5 text-[15px] text-[#F1F4FE] font-normal">
                by{' '}
                <Link
                  to="/creators"
                  className="text-[#D4FB20] font-semibold hover:underline transition-all cursor-pointer"
                >
                  purepearl studio
                </Link>
              </p>
            </div>

            {/* Share Button (Top Right) */}
            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={handleShare}
                className="h-[40px] px-5 rounded-full bg-[#D4FB20] text-[#040819] text-[14px] font-semibold flex items-center gap-2 hover:brightness-105 active:scale-95 transition-all shadow-sm cursor-pointer"
                aria-label="Share Course"
              >
                <svg
                  className="w-4 h-4 text-[#040819]"
                  viewBox="1310 182 18 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1325 196.12C1324.24 196.12 1323.56 196.42 1323.04 196.89L1315.91 192.74C1315.96 192.51 1316 192.28 1316 192.04C1316 191.8 1315.96 191.57 1315.91 191.34L1322.96 187.23C1323.5 187.73 1324.21 188.04 1325 188.04C1326.66 188.04 1328 186.7 1328 185.04C1328 183.38 1326.66 182.04 1325 182.04C1323.34 182.04 1322 183.38 1322 185.04C1322 185.28 1322.04 185.51 1322.09 185.74L1315.04 189.85C1314.5 189.35 1313.79 189.04 1313 189.04C1311.34 189.04 1310 190.38 1310 192.04C1310 193.7 1311.34 195.04 1313 195.04C1313.79 195.04 1314.5 194.73 1315.04 194.23L1322.09 198.34C1322.04 198.57 1322 198.8 1322 199.04C1322 200.7 1323.34 202.04 1325 202.04C1326.66 202.04 1328 200.7 1328 199.04C1328 197.38 1326.66 196.12 1325 196.12Z" />
                </svg>
                <span>{isCopied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>

          {/* 3 Badges Row */}
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Level Badge */}
            <div className="h-[40px] px-5 rounded-full bg-white text-[#242528] text-[14px] font-medium flex items-center gap-2 shadow-sm">
              <svg
                className="w-4 h-4 text-[#003BE2] flex-shrink-0"
                viewBox="150.5 329 15 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M162.5 329H165.5V345H162.5V329ZM150.5 339H153.5V345H150.5V339ZM156.5 334H159.5V345H156.5V334Z" />
              </svg>
              <span>Intermediate</span>
            </div>

            {/* Rating Badge */}
            <button
              type="button"
              onClick={() => handleTabClick('Reviews')}
              className="h-[40px] px-5 rounded-full bg-white text-[#242528] text-[14px] font-medium flex items-center gap-2 shadow-sm hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
            >
              <svg
                className="w-4 h-4 text-[#003BE2] flex-shrink-0"
                viewBox="337 328.5 16 16.5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M347.43 334.612L345.96 329.772C345.67 328.822 344.33 328.822 344.05 329.772L342.57 334.612H338.12C337.15 334.612 336.75 335.862 337.54 336.422L341.18 339.022L339.75 343.632C339.46 344.562 340.54 345.312 341.31 344.722L345 341.922L348.69 344.732C349.46 345.322 350.54 344.572 350.25 343.642L348.82 339.032L352.46 336.432C353.25 335.862 352.85 334.622 351.88 334.622H347.43V334.612Z" />
              </svg>
              <span>4.8 (172 reviews)</span>
            </button>

            {/* Students Badge */}
            <div className="h-[40px] px-5 rounded-full bg-white text-[#242528] text-[14px] font-medium flex items-center gap-2 shadow-sm">
              <svg
                className="w-4 h-4 text-[#003BE2] flex-shrink-0"
                viewBox="550 329 22 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M565.67 338.13C567.04 339.06 568 340.32 568 342V345H572V342C572 339.82 568.43 338.53 565.67 338.13Z" />
                <path d="M564 337C566.21 337 568 335.21 568 333C568 330.79 566.21 329 564 329C563.53 329 563.09 329.1 562.67 329.24C563.5 330.27 564 331.58 564 333C564 334.42 563.5 335.73 562.67 336.76C563.09 336.9 563.53 337 564 337Z" />
                <path d="M558 337C560.21 337 562 335.21 562 333C562 330.79 560.21 329 558 329C555.79 329 554 330.79 554 333C554 335.21 555.79 337 558 337ZM558 331C559.1 331 560 331.9 560 333C560 334.1 559.1 335 558 335C556.9 335 556 334.1 556 333C556 331.9 556.9 331 558 331Z" />
                <path d="M558 338C555.33 338 550 339.34 550 342V345H566V342C566 339.34 560.67 338 558 338Z" />
              </svg>
              <span>199 Students</span>
            </div>
          </div>

          {/* 
            Two-Column Layout starting at y=416:
            Left: Video Player (h=479), then Tabs & Content on white background
            Right: Floating Sidebar Card (h=958, overlaps blue and white background)
          */}
          <div className="mt-8 sm:mt-10 lg:mt-[59px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[69px] items-start">
            
            {/* Left Column (720px width on desktop) */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col w-full">
              {/* Video Player Card (Sits completely inside the blue background area on desktop) */}
              <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[479px] rounded-[24px] overflow-hidden shadow-2xl bg-gray-900 group">
                <img
                  src="/images/course_details_31.jpg"
                  alt="Build Digital Asset Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                {/* Centered Play Button (Static preview) */}
                <button
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  className="absolute inset-0 m-auto w-[84px] h-[84px] sm:w-[103px] sm:h-[103px] rounded-[23.5px] bg-[#3D3D3D]/80 backdrop-blur-md flex items-center justify-center border border-[#4F4F4F] shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  aria-label="Course preview"
                >
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white translate-x-0.5 fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Tabs Bar (Positioned on the clean white background below the blue banner) */}
              <div className="mt-10 sm:mt-12 lg:mt-[141px] flex items-center gap-3">
                {['About', 'Lesson', 'Reviews'].map((tab) => {
                  const isActive = activeTab === tab || (tab === 'Lesson' && activeTab === 'Lessons');
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => handleTabClick(tab)}
                      className={`h-[43px] px-6 rounded-[21.5px] text-[15px] font-semibold transition-all active:scale-95 cursor-pointer ${
                        isActive
                          ? 'bg-[#D4FB20] text-[#040819] shadow-sm'
                          : 'bg-[#F5F5F6] text-[#242528] hover:bg-gray-200'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Tab 1: About Content */}
              {activeTab === 'About' && (
                <div className="mt-8 animate-fade-in">
                  {/* Description */}
                  <div>
                    <h2 className="text-[22px] font-bold text-[#242528] tracking-tight mb-4">
                      Description
                    </h2>
                    <div className="text-[#4F4F4F] text-[15px] leading-relaxed space-y-4 font-normal">
                      <p>
                        Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                      </p>
                      <p>
                        In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                      </p>
                      <p>
                        As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                      </p>
                    </div>
                  </div>

                  {/* Sneak Peak Gallery */}
                  <div className="mt-10 sm:mt-12">
                    <h3 className="text-[20px] font-bold text-[#242528] tracking-tight mb-5">
                      Sneak Peak
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {sneakPeakImages.map((img, i) => (
                        <div
                          key={i}
                          className="w-full h-[125px] rounded-[16px] overflow-hidden bg-gray-100 shadow-sm cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Points Checklist */}
                  <div className="mt-10 sm:mt-12">
                    <h3 className="text-[20px] font-bold text-[#242528] tracking-tight mb-5">
                      Key Points
                    </h3>
                    <div className="space-y-3.5">
                      {keyPoints.map((point, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#003BE2] flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-3 h-3 text-white"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 6L5 8.5L9.5 3.5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-[15px] font-medium text-[#242528]">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Lesson Content (Matches design/Course Lessons.svg) */}
              {(activeTab === 'Lesson' || activeTab === 'Lessons') && (
                <div className="mt-8 animate-fade-in">
                  {/* Explore the Modules */}
                  <h2 className="text-[22px] font-bold text-[#242528] tracking-tight mb-3">
                    Explore the Modules
                  </h2>
                  <p className="text-[15px] text-[#5A5D63] leading-relaxed mb-8 max-w-2xl">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                  </p>

                  {/* Lesson List */}
                  <h3 className="text-[18px] font-bold text-[#242528] tracking-tight mb-6">
                    Lesson List
                  </h3>

                  {/* Modules List */}
                  <div className="space-y-[27px] mb-10">
                    {modulesList.map((item) => (
                      <div key={item.module} className="flex items-start gap-4 sm:gap-5">
                        {/* Video Camera Icon Box */}
                        <div className="w-[72px] h-[72px] min-w-[72px] rounded-[24px] bg-[#D4FB20] flex items-center justify-center flex-shrink-0 shadow-sm">
                          <svg
                            className="w-[30px] h-[20px]"
                            viewBox="0 0 30 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 3.33V16.67H3.33V3.33H20ZM21.67 0H1.67C0.75 0 0 0.75 0 1.67V18.33C0 19.25 0.75 20 1.67 20H21.67C22.58 20 23.33 19.25 23.33 18.33V12.5L30 19.17V0.83L23.33 7.5V1.67C23.33 0.75 22.58 0 21.67 0Z"
                              fill="#242528"
                            />
                          </svg>
                        </div>

                        {/* Module Text */}
                        <div className="pt-1">
                          <h4 className="text-[16px] font-bold text-[#242528] mb-1.5 leading-snug">
                            {item.module}
                          </h4>
                          <p className="text-[14px] text-[#5A5D63] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Lesson Content Section */}
                  <h3 className="text-[18px] font-bold text-[#242528] tracking-tight mb-3">
                    Lesson Content
                  </h3>
                  <p className="text-[15px] text-[#5A5D63] leading-relaxed mb-8 max-w-2xl">
                    Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                  </p>

                  {/* Lesson Progress Tracking Section */}
                  <h3 className="text-[18px] font-bold text-[#242528] tracking-tight mb-3">
                    Lesson Progress Tracking
                  </h3>
                  <p className="text-[15px] text-[#5A5D63] leading-relaxed mb-6 max-w-2xl">
                    Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                  </p>

                  {/* Learning Progress Card */}
                  <div className="w-full max-w-[722px] rounded-[15.5px] border border-[#CED0D3] bg-white p-6 sm:p-7 shadow-sm">
                    <div className="text-[14px] font-medium text-[#242528] mb-1">
                      Learning Progress
                    </div>
                    <div className="text-[36px] font-bold text-[#242528] leading-tight mb-4">
                      55%
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#E5E6E8] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#D4FB20] transition-all duration-500"
                        style={{ width: '55%' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Reviews Content (Matches design/Course Reviews.svg) */}
              {activeTab === 'Reviews' && (
                <div className="mt-8 animate-fade-in">
                  {/* What Learners Are Saying */}
                  <h2 className="text-[22px] font-bold text-[#242528] tracking-tight mb-3">
                    What Learners Are Saying
                  </h2>
                  <p className="text-[15px] text-[#5A5D63] leading-relaxed mb-8 max-w-2xl">
                    Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                  </p>

                  {/* Ratings Breakdown Card (Figma: w=722, h=225, rx=15.5) */}
                  <div className="w-full max-w-[722px] rounded-[15.5px] border border-[#CED0D3] bg-white p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 shadow-sm">
                    {/* Left Ratings Box (Figma: w=129, h=140, rx=8, bg=#D4FB20) */}
                    <div className="w-[129px] h-[140px] rounded-[8px] bg-[#D4FB20] flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-[14px] text-[#242528] font-medium">Ratings</span>
                      <span className="text-[44px] font-bold text-[#242528] leading-none mt-2">
                        4.7
                      </span>
                    </div>

                    {/* Right Bars */}
                    <div className="flex-1 w-full space-y-[18px]">
                      {ratingBreakdown.map((row) => (
                        <div key={row.stars} className="flex items-center gap-3 sm:gap-4 w-full">
                          {/* Progress Track (Figma: w=282, h=8, rx=4) */}
                          <div className="flex-1 max-w-[282px] h-2 rounded-full bg-[#E5E6E8] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-[#D4FB20]"
                              style={{ width: `${row.percentage}%` }}
                            />
                          </div>

                          {/* 5 Stars */}
                          <div className="flex items-center gap-1 flex-shrink-0">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4B4C53] fill-current"
                                viewBox="0 0 20 22"
                              >
                                <path d="M12.43 9L10 1L7.57 9H0L6.18 13.41L3.83 21L10 16.31L16.18 21L13.83 13.41L20 9H12.43Z" />
                              </svg>
                            ))}
                          </div>

                          {/* Count */}
                          <span className="text-[13px] text-[#4B4C53] font-medium w-8 text-right flex-shrink-0">
                            {row.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Reviews Section */}
                  <h3 className="text-[18px] font-bold text-[#242528] tracking-tight mb-4">
                    Individual Reviews:
                  </h3>

                  {/* Rating Filters (Figma: rx=21.5/24) */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
                    <button
                      type="button"
                      onClick={() => setSelectedRating('All')}
                      className={`h-[43px] px-6 rounded-[21.5px] text-[15px] font-semibold transition-all active:scale-95 cursor-pointer ${
                        selectedRating === 'All'
                          ? 'bg-[#D4FB20] text-[#040819] shadow-sm'
                          : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200'
                      }`}
                    >
                      All rating
                    </button>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setSelectedRating(rating.toString())}
                        className={`h-[43px] px-5 rounded-[21.5px] text-[14px] font-medium transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 ${
                          selectedRating === rating.toString()
                            ? 'bg-[#D4FB20] text-[#040819] shadow-sm font-semibold'
                            : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200'
                        }`}
                      >
                        <svg
                          className={`w-3.5 h-3.5 ${
                            selectedRating === rating.toString() ? 'text-[#040819]' : 'text-[#4B4C53]'
                          } fill-current`}
                          viewBox="0 0 20 22"
                        >
                          <path d="M12.43 9L10 1L7.57 9H0L6.18 13.41L3.83 21L10 16.31L16.18 21L13.83 13.41L20 9H12.43Z" />
                        </svg>
                        <span>{rating}</span>
                      </button>
                    ))}
                  </div>

                  {/* Review Cards List (Figma: max-w-[722px], rx=23.5, gap=25px) */}
                  <div className="space-y-[25px]">
                    {reviewsList
                      .filter((r) => selectedRating === 'All' || r.rating.toString() === selectedRating)
                      .map((review, idx) => (
                        <div
                          key={idx}
                          className="w-full max-w-[722px] rounded-[23.5px] border border-[#CED0D3] bg-white p-6 sm:p-8 shadow-sm"
                        >
                          {/* Header */}
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3.5">
                              <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-[52px] h-[52px] rounded-full object-cover border border-[#CED0D3] flex-shrink-0"
                              />
                              <div>
                                <h4 className="text-[16px] font-bold text-[#242528] leading-tight">
                                  {review.name}
                                </h4>
                                <p className="text-[13px] text-[#82868E] mt-0.5">
                                  {review.role}
                                </p>
                              </div>
                            </div>
                            <span className="text-[13px] text-[#82868E] flex-shrink-0 pt-1">
                              {review.date}
                            </span>
                          </div>

                          {/* 5 Stars (Figma: fill=#4B4C53) */}
                          <div className="flex items-center gap-1.5 my-4 sm:my-5">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 sm:w-5 sm:h-5 text-[#4B4C53] fill-current"
                                viewBox="0 0 20 22"
                              >
                                <path d="M12.43 9L10 1L7.57 9H0L6.18 13.41L3.83 21L10 16.31L16.18 21L13.83 13.41L20 9H12.43Z" />
                              </svg>
                            ))}
                          </div>

                          {/* Review Content */}
                          <p className="text-[14px] sm:text-[15px] text-[#5A5D63] leading-relaxed">
                            {review.comment}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Floating Sidebar Card (Width 411px in Figma, starts at top line of Video Player) */}
            <div className="lg:col-span-5 xl:col-span-4 w-full">
              <div className="w-full rounded-[23.5px] border border-[#CED0D3] bg-white p-7 sm:p-8 shadow-2xl flex flex-col justify-between">
                
                {/* Lessons Overview Header */}
                <div>
                  <h3 className="text-[18px] font-bold text-[#242528] tracking-tight mb-4">
                    112 Lessons (24 hours)
                  </h3>

                  {/* Lessons Preview Items */}
                  <div className="space-y-3.5 mb-5">
                    <div className="flex items-center justify-between text-[14px]">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#242528]">01</span>
                        <span className="text-[#242528] font-normal">Introduction to Digital Assets</span>
                      </div>
                      <span className="text-[#003BE2] font-semibold">12 mins</span>
                    </div>

                    <div className="flex items-center justify-between text-[14px]">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#242528]">02</span>
                        <span className="text-[#242528] font-normal">Design Principles for Impacts</span>
                      </div>
                      <span className="text-[#003BE2] font-semibold">21 mins</span>
                    </div>

                    <div className="flex items-center justify-between text-[14px]">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#242528]">03</span>
                        <span className="text-[#242528] font-normal">Advanced Techniques in Digital Creation</span>
                      </div>
                      <span className="text-[#003BE2] font-semibold">16 mins</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleTabClick('Lesson')}
                      className="text-[13px] text-[#82868E] hover:text-[#003BE2] font-medium pt-1 cursor-pointer transition-colors block text-left"
                    >
                      99 more videos
                    </button>
                  </div>

                  <p className="text-[13px] text-[#4F4F4F] leading-snug mb-5">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="text-[34px] font-bold text-[#003BE2] leading-none">$25</span>
                    <span className="text-[15px] text-[#82868E] font-normal">/lifetime</span>
                  </div>

                  {/* Enroll Button */}
                  <button
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="w-full h-[46px] rounded-[23px] bg-[#D4FB20] text-[#040819] font-bold text-[15px] hover:brightness-105 active:scale-95 transition-all shadow-sm flex items-center justify-center cursor-pointer mb-7"
                  >
                    Enroll Now
                  </button>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-7">
                    <h4 className="text-[15px] font-bold text-[#242528]">
                      This course include
                    </h4>

                    <div className="space-y-3 text-[14px] text-[#4F4F4F]">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#003BE2] flex-shrink-0" viewBox="950 964 20 16" fill="currentColor">
                          <path d="M968 966H960L958 964H952C950.9 964 950.01 964.9 950.01 966L950 978C950 979.1 950.9 980 952 980H968C969.1 980 970 979.1 970 978V968C970 966.9 969.1 966 968 966ZM968 978H952V966H957.17L959.17 968H968V978ZM966 972H954V970H966V972ZM962 976H954V974H962V976Z" />
                        </svg>
                        <span>Learning Resources</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#003BE2] flex-shrink-0" viewBox="951 1004 18 12" fill="currentColor">
                          <path d="M963 1006V1014H953V1006H963ZM964 1004H952C951.45 1004 951 1004.45 951 1005V1015C951 1015.55 951.45 1016 952 1016H964C964.55 1016 965 1015.55 965 1015V1011.5L969 1015.5V1004.5L965 1008.5V1005C965 1004.45 964.55 1004 964 1004Z" />
                        </svg>
                        <span>Quality Lesson Videos</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#003BE2] flex-shrink-0" viewBox="950 1038 20 20" fill="currentColor">
                          <path d="M968 1043H963V1040C963 1038.9 962.1 1038 961 1038H959C957.9 1038 957 1038.9 957 1040V1043H952C950.9 1043 950 1043.9 950 1045V1056C950 1057.1 950.9 1058 952 1058H968C969.1 1058 970 1057.1 970 1056V1045C970 1043.9 969.1 1043 968 1043ZM959 1040H961V1045H959V1040ZM968 1056H952V1045H957C957 1046.1 957.9 1047 959 1047H961C962.1 1047 963 1046.1 963 1045H968V1056Z" />
                          <path d="M957 1051C957.828 1051 958.5 1050.33 958.5 1049.5C958.5 1048.67 957.828 1048 957 1048C956.172 1048 955.5 1048.67 955.5 1049.5C955.5 1050.33 956.172 1051 957 1051Z" />
                          <path d="M959.08 1052.18C958.44 1051.9 957.74 1051.75 957 1051.75C956.26 1051.75 955.56 1051.9 954.92 1052.18C954.36 1052.42 954 1052.96 954 1053.57V1054H960V1053.57C960 1052.96 959.64 1052.42 959.08 1052.18Z" />
                          <path d="M966 1048H962V1049.5H966V1048Z" />
                          <path d="M966 1051H962V1052.5H966V1051Z" />
                        </svg>
                        <span>Certificate of Completion</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-[#003BE2] flex-shrink-0" viewBox="950 1076 20 20" fill="currentColor">
                          <path d="M959 1088H957C957 1083.03 961.03 1079 966 1079V1081C962.13 1081 959 1084.13 959 1088ZM966 1085V1083C963.24 1083 961 1085.24 961 1088H963C963 1086.34 964.34 1085 966 1085ZM955 1078C955 1076.89 954.11 1076 953 1076C951.89 1076 951 1076.89 951 1078C951 1079.11 951.89 1080 953 1080C954.11 1080 955 1079.11 955 1078ZM959.45 1078.5H957.45C957.21 1079.92 955.99 1081 954.5 1081H951.5C950.67 1081 950 1081.67 950 1082.5V1085H956V1082.74C957.86 1082.15 959.25 1080.51 959.45 1078.5ZM967 1091C968.11 1091 969 1090.11 969 1089C969 1087.89 968.11 1087 967 1087C965.89 1087 965 1087.89 965 1089C965 1090.11 965.89 1091 967 1091ZM968.5 1092H965.5C964.01 1092 962.79 1090.92 962.55 1089.5H960.55C960.75 1091.51 962.14 1093.15 964 1093.74V1096H970V1093.5C970 1092.67 969.33 1092 968.5 1092Z" />
                        </svg>
                        <span>Private Consultation</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#CED0D3] my-6" />

                  {/* Instructor Profile Card */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <img
                      src="/images/creator-purepearl.jpg"
                      alt="PurePearl Studio"
                      className="w-[52px] h-[52px] rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <h5 className="text-[16px] font-bold text-[#242528] leading-tight">
                        PurePearl Studio
                      </h5>
                      <p className="text-[12px] text-[#82868E] mt-0.5">
                        Professional Creator
                      </p>
                    </div>
                  </div>

                  <p className="text-[12px] text-[#4F4F4F] leading-snug mb-4">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>

                  <Link
                    to="/creators"
                    className="h-[34px] px-5 rounded-[17px] border border-[#CED0D3] text-[13px] font-medium text-[#242528] hover:border-black active:scale-95 transition-all inline-flex items-center justify-center cursor-pointer"
                  >
                    See Full Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </div>
  );
}
