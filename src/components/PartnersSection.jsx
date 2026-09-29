import React from 'react';

export default function PartnersSection() {
  return (
    <section className="w-full bg-white py-8 border-b border-brand-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center">
        {/* We display the exact Logoipsum logos */}
        <div className="w-full flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
          <img
            src="/images/partners-bar.svg"
            alt="Trusted Partners - Logoipsum"
            className="w-full max-w-4xl h-auto object-contain grayscale hover:grayscale-0 transition-all"
          />
        </div>
      </div>
    </section>
  );
}
