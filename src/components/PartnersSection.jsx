import React from 'react';

export default function PartnersSection() {
  return (
    <section className="w-full bg-[#F5F5F6] py-16 sm:py-[80px] overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[1440px] px-6 lg:px-[154px] flex items-center justify-center">
        {/* Exact Logoipsum partner logos from Figma Home.svg */}
        <img
          src="/images/partners-bar.svg"
          alt="Trusted Partners"
          className="w-full max-w-[1132px] h-auto object-contain select-none pointer-events-none"
        />
      </div>
    </section>
  );
}
