import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import Logo from '../components/Logo';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Account created successfully for ${fullName || 'User'}!`);
    navigate('/login');
  };

  return (
    <div className="min-h-screen w-full bg-brand-blue bg-grid-pattern relative flex flex-col justify-between p-6 sm:p-10 lg:p-16 overflow-hidden">
      {/* Top Left Logo */}
      <div className="relative z-20">
        <Logo variant="light" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Graphic and Heading */}
        <div className="lg:col-span-6 text-white flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Sign up and come in
          </h1>
          <p className="mt-4 text-white/80 text-sm sm:text-base max-w-md leading-relaxed">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
          </p>

          {/* Visual Showcase */}
          <div className="relative mt-12 max-w-md hidden sm:block">
            {/* Background 3D Torus */}
            <img
              src="/images/shape-torus.png"
              alt="Decorative shape"
              className="absolute -top-12 -left-10 w-28 h-28 object-contain animate-float shape-lime pointer-events-none select-none z-20"
            />
            {/* Background 3D Cone */}
            <img
              src="/images/shape-cone.png"
              alt="Decorative shape"
              className="absolute -bottom-10 -left-8 w-32 h-32 object-contain animate-float-reverse shape-lime pointer-events-none select-none z-20"
            />

            {/* Behind Card */}
            <div className="absolute top-4 -left-4 w-72 bg-white/90 backdrop-blur rounded-2xl p-3 shadow-lg opacity-60 pointer-events-none">
              <div className="w-full h-24 bg-gray-100 rounded-xl overflow-hidden mb-2">
                <img src="/images/course-digital-asset.jpg" alt="Course" className="w-full h-full object-cover" />
              </div>
              <div className="text-xs font-bold text-brand-dark">Build Digital Asset</div>
            </div>

            {/* Foreground Card */}
            <div className="relative z-10 w-80 bg-white rounded-3xl p-3.5 shadow-2xl border border-white/40">
              <div className="relative w-full h-36 bg-gray-100 rounded-2xl overflow-hidden mb-3">
                <img src="/images/course-big-data.jpg" alt="the Power of Big Data" className="w-full h-full object-cover" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-medium">
                  <span className="px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur">17 Lessons</span>
                  <span className="px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur">2 hours 16 mins</span>
                  <span className="px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur">59 Comments</span>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-sm text-brand-dark">the Power of Big Data</h4>
                  <p className="text-[10px] text-brand-gray-400">by purepearl studio</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-brand-dark">
                  <span>4.5</span>
                  <Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" />
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center -space-x-1.5">
                  <img src="/images/home_2.png" alt="Student" className="w-5 h-5 rounded-full border border-white object-cover" />
                  <img src="/images/home_3.png" alt="Student" className="w-5 h-5 rounded-full border border-white object-cover" />
                  <img src="/images/home_4.png" alt="Student" className="w-5 h-5 rounded-full border border-white object-cover" />
                  <div className="w-5 h-5 rounded-full border border-white bg-black text-white text-[8px] font-bold flex items-center justify-center">26+</div>
                </div>
                <div className="text-brand-blue font-bold text-sm">
                  $25<span className="text-[10px] text-brand-gray-400 font-normal">/lifetime</span>
                </div>
              </div>
            </div>

            {/* Happy Students Floating Badge */}
            <div className="absolute -bottom-6 right-6 z-20 bg-brand-lime text-black p-3 rounded-2xl shadow-xl min-w-[160px] animate-float">
              <span className="block font-bold text-xs">Happy Students</span>
              <div className="flex items-center gap-1 text-[11px] font-semibold">
                <span>4.5</span>
                <span className="opacity-70 font-normal">(240)</span>
                <Star className="w-3 h-3 fill-black text-black" />
              </div>
              <div className="flex items-center -space-x-1.5 mt-1.5">
                <img src="/images/home_2.png" alt="Student" className="w-5 h-5 rounded-full border border-brand-lime object-cover" />
                <img src="/images/home_3.png" alt="Student" className="w-5 h-5 rounded-full border border-brand-lime object-cover" />
                <img src="/images/home_4.png" alt="Student" className="w-5 h-5 rounded-full border border-brand-lime object-cover" />
                <div className="w-5 h-5 rounded-full border border-brand-lime bg-black text-white text-[8px] font-bold flex items-center justify-center">2K+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: White Register Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20">
            <span className="text-brand-blue font-semibold text-sm block">Create an Account</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mt-1 mb-8">
              Welcome to ByteSpace
            </h2>

            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-2">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-brand-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-brand-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-brand-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-brand-lime text-black font-bold text-sm hover:brightness-105 active:scale-95 transition-all shadow-sm"
                >
                  Continue
                </button>
              </div>
            </form>

            {/* Bottom Link */}
            <p className="mt-8 text-center text-xs text-brand-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="text-brand-blue font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center text-xs text-white/50 pt-4">
        &copy; 2023 ByteSpace. All rights reserved.
      </div>
    </div>
  );
}
