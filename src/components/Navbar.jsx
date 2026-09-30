import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ variant = 'blue' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isBlue = variant === 'blue';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Creators', href: '/#creators' },
  ];

  return (
    <header className={`w-full z-50 transition-colors ${isBlue ? 'bg-transparent text-white' : 'bg-white text-brand-dark border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex-shrink-0">
          <Logo variant={isBlue ? 'light' : 'dark'} />
        </div>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-9 text-[15px] font-medium tracking-normal">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors py-1 ${
                  isBlue
                    ? isActive ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
                    : isActive ? 'text-brand-blue font-semibold' : 'text-brand-gray-500 hover:text-brand-dark'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Auth & Cart (Desktop) */}
        <div className="hidden md:flex items-center gap-7 text-[15px]">
          <Link
            to="/login"
            className={`font-medium transition-colors ${
              isBlue ? 'text-white/90 hover:text-white' : 'text-brand-dark hover:text-brand-blue'
            }`}
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className={`font-medium transition-colors ${
              isBlue ? 'text-white/90 hover:text-white' : 'text-brand-dark hover:text-brand-blue'
            }`}
          >
            Join Us
          </Link>

          {/* Exact Figma Bag Icon */}
          <Link
            to="/courses"
            className={`transition-colors p-1 ${
              isBlue ? 'text-white/90 hover:text-white' : 'text-brand-dark hover:text-brand-blue'
            }`}
            aria-label="Cart"
          >
            <svg
              width="17"
              height="20"
              viewBox="1300 50 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block"
            >
              <path
                d="M1314 54H1312C1312 51.79 1310.21 50 1308 50C1305.79 50 1304 51.79 1304 54H1302C1300.9 54 1300 54.9 1300 56V68C1300 69.1 1300.9 70 1302 70H1314C1315.1 70 1316 69.1 1316 68V56C1316 54.9 1315.1 54 1314 54ZM1308 52C1309.1 52 1310 52.9 1310 54H1306C1306 52.9 1306.9 52 1308 52ZM1314 68H1302V56H1304V58C1304 58.55 1304.45 59 1305 59C1305.55 59 1306 58.55 1306 58V56H1310V58C1310 58.55 1310.45 59 1311 59C1311.55 59 1312 58.55 1312 58V56H1314V68Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            to="/register"
            className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
              isBlue ? 'bg-brand-lime text-black' : 'bg-brand-blue text-white'
            }`}
          >
            Join Us
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 rounded-lg transition-colors ${
              isBlue ? 'text-white hover:bg-white/10' : 'text-brand-dark hover:bg-gray-100'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-6 pt-3 pb-6 border-t ${
          isBlue ? 'bg-brand-blue/98 border-white/10 text-white' : 'bg-white border-gray-100 text-brand-dark'
        }`}>
          <div className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:opacity-80"
              >
                {link.name}
              </Link>
            ))}
            <hr className={isBlue ? 'border-white/10' : 'border-gray-100'} />
            <div className="flex flex-col gap-3 pt-2">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-center rounded-xl bg-white/10 font-semibold"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-center rounded-xl bg-brand-lime text-black font-semibold"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
