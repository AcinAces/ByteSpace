import React from 'react';

export default function PartnersSection() {
  return (
    <section className="w-full bg-[#F5F5F6] py-14 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center">
        {/* Exact Logoipsum partner logos from Figma Home.svg */}
        <div className="w-full flex items-center justify-center">
          <img
            src="/images/partners-bar.svg"
            alt="Trusted Partners"
            className="w-full max-w-5xl h-auto object-contain select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
