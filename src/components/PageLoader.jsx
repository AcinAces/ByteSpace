import React from 'react';
import LoadingSpinner from './LoadingSpinner';

/**
 * ByteSpace PageLoader
 * Fullscreen or container-level loading view featuring the Electric Blue & Neon Lime theme.
 */
export default function PageLoader({
  fullScreen = true,
  label = 'Loading...',
  light = false,
}) {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm transition-all duration-300">
        {/* Top glowing progress beam */}
        <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#003BE2] via-[#2563EB] to-[#D4FB20] shadow-[0_0_12px_#D4FB20]" />

        {/* Floating Glass Centerpiece */}
        <div className="p-8 rounded-3xl bg-white/95 border border-[#CED0D3]/50 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-4">
          <LoadingSpinner size="lg" />
          <p className="text-sm font-semibold tracking-wide text-[#242528] animate-pulse">
            {label}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16 flex flex-col items-center justify-center gap-3">
      <LoadingSpinner size="md" light={light} />
      {label && (
        <p className={`text-xs font-medium tracking-wider uppercase ${light ? 'text-white/80' : 'text-[#82868E]'}`}>
          {label}
        </p>
      )}
    </div>
  );
}
