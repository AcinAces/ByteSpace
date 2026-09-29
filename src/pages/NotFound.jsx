import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar variant="blue" />

      {/* 404 Hero Section */}
      <main className="flex-grow bg-brand-blue bg-grid-pattern py-24 sm:py-32 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        {/* Giant 404 text with gradient */}
        <div className="relative select-none">
          <span className="text-[130px] sm:text-[200px] lg:text-[240px] font-black tracking-tight leading-none bg-gradient-to-b from-[#D4FB20] to-[#A2DC18] bg-clip-text text-transparent opacity-95 drop-shadow-sm">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-2xl">
          The page you are looking for doesn’t exist
        </h1>

        <p className="mt-4 text-white/80 text-sm sm:text-base max-w-md">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Action Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="px-8 py-3.5 rounded-full bg-brand-lime text-black font-bold text-sm sm:text-base hover:brightness-105 active:scale-95 transition-all shadow-lime inline-block"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
