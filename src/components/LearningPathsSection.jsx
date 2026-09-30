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
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#242528] tracking-tight leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-[#82868E] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid - exact Figma 166x166 square cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {paths.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.name}
                to={p.href}
                className="group bg-white rounded-[24px] p-5 border border-[#CED0D3] hover:border-[#D4FB20] hover:shadow-card transition-all duration-300 flex flex-col items-center justify-center text-center aspect-square cursor-pointer active:scale-95"
              >
                {/* Circular Lime Icon (Figma: rx=30, w=60, h=60, fill=#D4FB20) */}
                <div className="w-[60px] h-[60px] rounded-full bg-[#D4FB20] flex items-center justify-center text-[#242528] mb-3.5 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <span className="font-bold text-sm sm:text-[15px] text-[#242528] group-hover:text-brand-blue transition-colors">
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
