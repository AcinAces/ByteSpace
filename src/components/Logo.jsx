import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'light', className = '' }) {
  const isLight = variant === 'light';

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-95 ${className}`}>
      {/* Lime ByteSpace 'b' Symbol */}
      <div className="relative w-7 h-7 flex-shrink-0">
        <svg viewBox="0 0 30 32" fill="none" className="w-full h-full">
          <path
            d="M10.5 0C4.7 0 0 4.7 0 10.5V31.5C5.8 31.5 10.5 26.8 10.5 21V0Z"
            fill="#D4FB20"
          />
          <path
            d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
            fill="#D4FB20"
          />
          <path
            d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
            fill="#D4FB20"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <span className={`text-xl font-bold tracking-tight ${isLight ? 'text-white' : 'text-brand-dark'}`}>
        ByteSpace
      </span>
    </Link>
  );
}
