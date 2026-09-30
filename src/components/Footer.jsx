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
    <footer className="w-full bg-white text-[#242528] pt-16 pb-12 border-t border-[#CED0D3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Logo variant="dark" />
              <p className="mt-4 text-[14px] text-[#242528]/85 max-w-sm leading-relaxed">
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
                  className="w-full sm:flex-1 px-5 py-3 rounded-full border border-[#CED0D3] bg-white text-[14px] text-[#242528] placeholder-[#82868E] focus:outline-none focus:border-[#003BE2] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#D4FB20] text-[#040819] font-semibold text-sm hover:brightness-105 active:scale-95 transition-all shadow-sm flex-shrink-0 cursor-pointer"
                >
                  {subscribed ? 'Subscribed!' : 'Search'}
                </button>
              </form>
              <p className="mt-3 text-[12px] text-[#82868E] leading-relaxed">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-[14px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-3.5">
              <Link to="/courses" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                Featured Courses
              </Link>
              <Link to="/courses?category=all" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                Featured Categories
              </Link>
              <Link to="/courses?category=Business" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                Business
              </Link>
              <Link to="/courses?category=IT" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                IT
              </Link>
              <Link to="/courses?category=Design" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                Design
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3.5">
              <Link to="/courses?category=Development" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                Development
              </Link>
              <Link to="/courses?category=Marketing" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                Marketing
              </Link>
              <Link to="/courses?category=Photography" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                Photography
              </Link>
              <Link to="/courses?category=Finance" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                Finance
              </Link>
              <Link to="/courses?category=Sport" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                Sport
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3.5">
              <Link to="/creators" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                Become a Creator
              </Link>
              <Link to="/creators" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                Affiliate Program
              </Link>
              <Link to="/#contact" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                Contact
              </Link>
              <Link to="/#help" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                Help
              </Link>
              <Link to="/#about" className="text-[#242528] hover:text-[#003BE2] transition-colors font-normal">
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#CED0D3] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#82868E]">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-[#82868E] hover:text-[#242528] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#82868E] hover:text-[#242528] transition-colors">
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={() => {}}
              className="text-[#82868E] hover:text-[#242528] transition-colors cursor-pointer active:scale-95"
            >
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
