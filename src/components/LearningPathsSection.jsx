import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scissors, 
  Code, 
  Monitor, 
  Building2, 
  Megaphone, 
  Camera 
} from 'lucide-react';

const paths = [
  { name: 'Design', icon: Scissors, href: '/courses?category=Design' },
  { name: 'Development', icon: Code, href: '/courses?category=Development' },
  { name: 'IT & Software', icon: Monitor, href: '/courses?category=IT' },
  { name: 'Business', icon: Building2, href: '/courses?category=Business' },
  { name: 'Marketing', icon: Megaphone, href: '/courses?category=Marketing' },
  { name: 'Photography', icon: Camera, href: '/courses?category=Photography' },
];

export default function LearningPathsSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 border-t border-brand-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-3 text-brand-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {paths.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.name}
                to={p.href}
                className="group bg-white rounded-3xl p-6 border border-brand-gray-200/80 hover:border-brand-lime hover:shadow-card transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Circular Lime Icon */}
                <div className="w-14 h-14 rounded-2xl bg-brand-lime flex items-center justify-center text-black mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <span className="font-bold text-sm sm:text-base text-brand-dark group-hover:text-brand-blue transition-colors">
                  {p.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
