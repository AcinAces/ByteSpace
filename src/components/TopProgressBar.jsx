import React, { useEffect, useState } from 'react';

/**
 * Top Navigation Progress Bar + Corner Spinner
 * Features ByteSpace Electric Blue (#003BE2) and Neon Lime (#D4FB20)
 */
export default function TopProgressBar({ isLoading }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer1, timer2, timer3, timerComplete;

    if (isLoading) {
      setVisible(true);
      setProgress(15);

      timer1 = setTimeout(() => setProgress(45), 100);
      timer2 = setTimeout(() => setProgress(75), 250);
      timer3 = setTimeout(() => setProgress(90), 450);
    } else {
      setProgress(100);
      timerComplete = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerComplete);
    };
  }, [isLoading]);

  if (!visible && progress === 0) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[99999] pointer-events-none transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Top Gradient Bar */}
      <div className="relative w-full h-[3.5px] bg-transparent overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#003BE2] via-[#2563EB] to-[#D4FB20] transition-all duration-300 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          {/* Glowing neon-lime leading edge peg */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-[#D4FB20] shadow-[0_0_14px_#D4FB20,0_0_6px_#D4FB20]" />
        </div>
      </div>

      {/* Top-Right Miniature Corner Spinner */}
      <div className="fixed top-3.5 right-4 z-[99999] pointer-events-none">
        <div className="relative w-6 h-6 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-lg">
          <svg
            className="w-full h-full animate-spin"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="16"
              cy="16"
              r="13"
              stroke="#003BE2"
              strokeWidth="3"
              strokeOpacity="0.3"
            />
            <circle
              cx="16"
              cy="16"
              r="13"
              stroke="#D4FB20"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="25 60"
            />
          </svg>
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[#D4FB20] shadow-[0_0_4px_#D4FB20]" />
        </div>
      </div>
    </div>
  );
}
