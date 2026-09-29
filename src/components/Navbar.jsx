import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
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
    <header className={`w-full z-50 transition-colors ${isBlue ? 'bg-brand-blue text-white' : 'bg-white text-brand-dark border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Logo variant={isBlue ? 'light' : 'dark'} />

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
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

        {/* Right: Auth buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-6 text-[15px]">
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
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
              isBlue
                ? 'bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/10'
                : 'bg-brand-blue text-white hover:bg-blue-700'
            }`}
          >
            <span>Join Us</span>
            <ShoppingBag className="w-4 h-4 opacity-80" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
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
          isBlue ? 'bg-brand-blue/95 border-white/10 text-white' : 'bg-white border-gray-100 text-brand-dark'
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
