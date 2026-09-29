import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-white text-brand-dark pt-16 pb-12 border-t border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Logo variant="dark" />
              <p className="mt-4 text-[14px] text-brand-gray-500 max-w-sm leading-relaxed">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full sm:flex-1 px-4 py-3 rounded-full border border-brand-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-lime text-black font-semibold text-sm hover:brightness-105 active:scale-95 transition-all shadow-sm flex-shrink-0"
                >
                  {subscribed ? 'Subscribed!' : 'Search'}
                </button>
              </form>
              <p className="mt-3 text-xs text-brand-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-[14px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-3.5">
              <span className="font-semibold text-brand-dark">Featured Courses</span>
              <Link to="/courses?category=all" className="text-brand-gray-500 hover:text-brand-blue transition-colors">
                Featured Categories
              </Link>
              <Link to="/courses?category=Business" className="text-brand-gray-500 hover:text-brand-blue transition-colors">
                Business
              </Link>
              <Link to="/courses?category=IT" className="text-brand-gray-500 hover:text-brand-blue transition-colors">
                IT
              </Link>
              <Link to="/courses?category=Design" className="text-brand-gray-500 hover:text-brand-blue transition-colors">
                Design
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3.5">
              <span className="font-semibold text-brand-dark">Development</span>
              <Link to="/courses?category=Marketing" className="text-brand-gray-500 hover:text-brand-blue transition-colors">
                Marketing
              </Link>
              <Link to="/courses?category=Photography" className="text-brand-gray-500 hover:text-brand-blue transition-colors">
                Photography
              </Link>
              <Link to="/courses?category=Finance" className="text-brand-gray-500 hover:text-brand-blue transition-colors">
                Finance
              </Link>
              <Link to="/courses?category=Sport" className="text-brand-gray-500 hover:text-brand-blue transition-colors">
                Sport
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3.5">
              <span className="font-semibold text-brand-dark">Become a Creator</span>
              <Link to="/#creators" className="text-brand-gray-500 hover:text-brand-blue transition-colors">
                Affiliate Program
              </Link>
              <Link to="/#contact" className="text-brand-gray-500 hover:text-brand-blue transition-colors">
                Contact
              </Link>
              <Link to="/#help" className="text-brand-gray-500 hover:text-brand-blue transition-colors">
                Help
              </Link>
              <Link to="/#about" className="text-brand-gray-500 hover:text-brand-blue transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-gray-400">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-brand-dark transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-brand-dark transition-colors">
              Terms of Service
            </Link>
            <button className="hover:text-brand-dark transition-colors">
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
