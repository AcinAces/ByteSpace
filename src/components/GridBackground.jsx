import React from 'react';

/**
 * Full-bleed infinite SVG grid overlay for blue backgrounds.
 * Renders seamless 120px x 120px gridlines across 100% of any viewport width & height.
 * Centers on the viewport and extends edge-to-edge with stroke-width="2" and opacity="0.12".
 */
export default function GridBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="blue-infinite-grid"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
            x="50%"
            y="0"
          >
            <line
              x1="0"
              y1="0"
              x2="120"
              y2="0"
              stroke="white"
              strokeWidth="2"
              opacity="0.12"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="120"
              stroke="white"
              strokeWidth="2"
              opacity="0.12"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blue-infinite-grid)" />
      </svg>
    </div>
  );
}
