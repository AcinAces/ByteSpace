import React from 'react';

/**
 * ByteSpace Blue & Green Themed Loading Spinner
 * Brand Colors:
 * - Electric Blue: #003BE2
 * - Neon Lime Green: #D4FB20
 */
export default function LoadingSpinner({
  size = 'md',
  className = '',
  label = '',
  light = false,
}) {
  const sizeMap = {
    xs: { box: 'w-4 h-4', stroke: 3, dot: 'w-1 h-1' },
    sm: { box: 'w-5 h-5', stroke: 3.5, dot: 'w-1.5 h-1.5' },
    md: { box: 'w-8 h-8', stroke: 4, dot: 'w-2 h-2' },
    lg: { box: 'w-12 h-12', stroke: 4.5, dot: 'w-2.5 h-2.5' },
    xl: { box: 'w-16 h-16', stroke: 5, dot: 'w-3 h-3' },
  };

  const config = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`inline-flex flex-col items-center justify-center gap-2.5 ${className}`}
      role="status"
      aria-label="Loading"
    >
      <div className={`relative ${config.box} flex items-center justify-center`}>
        {/* Animated Rotating Circular Track */}
        <svg
          className="w-full h-full animate-spin"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bytespace-spin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#003BE2" />
              <stop offset="55%" stopColor="#1E5BFF" />
              <stop offset="100%" stopColor="#D4FB20" />
            </linearGradient>
            <filter id="lime-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#D4FB20" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Background track circle */}
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke={light ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 59, 226, 0.15)'}
            strokeWidth={config.stroke}
          />

          {/* Active spinning arc with Blue -> Lime gradient */}
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="url(#bytespace-spin-gradient)"
            strokeWidth={config.stroke}
            strokeLinecap="round"
            strokeDasharray="80 150"
            filter="url(#lime-glow-filter)"
          />
        </svg>

        {/* Center pulsing neon-lime glowing dot */}
        <div className={`absolute m-auto rounded-full bg-[#D4FB20] shadow-[0_0_8px_#D4FB20] animate-ping opacity-75 pointer-events-none ${config.dot}`} />
        <div className={`absolute m-auto rounded-full bg-[#D4FB20] shadow-[0_0_4px_#D4FB20] pointer-events-none ${config.dot}`} />
      </div>

      {label && (
        <span
          className={`text-xs font-medium tracking-wide uppercase ${
            light ? 'text-white/90' : 'text-[#242528]'
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
