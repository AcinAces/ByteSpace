import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import Logo from '../components/Logo';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${email || 'User'}!`);
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full bg-[#003BE2] relative flex flex-col justify-between overflow-x-hidden select-none">
      {/* 
        Background SVG Grid (viewBox matching 1440x1024 Figma canvas)
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[1440px] h-full min-h-[1024px] max-w-none pointer-events-none"
          viewBox="0 0 1440 1024"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.12">
            <line x1="-239" y1="0" x2="-239" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="-119" y1="0" x2="-119" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="1" y1="0" x2="1" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="121" y1="0" x2="121" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="241" y1="0" x2="241" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="361" y1="0" x2="361" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="481" y1="0" x2="481" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="601" y1="0" x2="601" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="721" y1="0" x2="721" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="841" y1="0" x2="841" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="961" y1="0" x2="961" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="1081" y1="0" x2="1081" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="1201" y1="0" x2="1201" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="1321" y1="0" x2="1321" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="1441" y1="0" x2="1441" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="1561" y1="0" x2="1561" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="1681" y1="0" x2="1681" y2="1024" stroke="white" strokeWidth="2" />
            <line x1="-500" y1="959" x2="1940" y2="959" stroke="white" strokeWidth="2" />
            <line x1="-500" y1="839" x2="1940" y2="839" stroke="white" strokeWidth="2" />
            <line x1="-500" y1="719" x2="1940" y2="719" stroke="white" strokeWidth="2" />
            <line x1="-500" y1="605" x2="1940" y2="605" stroke="white" strokeWidth="2" />
            <line x1="-500" y1="479" x2="1940" y2="479" stroke="white" strokeWidth="2" />
            <line x1="-500" y1="359" x2="1940" y2="359" stroke="white" strokeWidth="2" />
            <line x1="-500" y1="239" x2="1940" y2="239" stroke="white" strokeWidth="2" />
            <line x1="-500" y1="119" x2="1940" y2="119" stroke="white" strokeWidth="2" />
          </g>
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-[120px] py-8 lg:py-[48px]">
        {/* Top Left Logo Icon */}
        <div className="w-full flex items-center justify-start">
          <Logo iconOnly variant="light" />
        </div>

        {/* Middle Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto py-8">
          {/* Left Column: Heading, text and course cards graphic */}
          <div className="lg:col-span-6 flex flex-col justify-center text-white">
            <h1 className="text-[36px] sm:text-[44px] font-extrabold tracking-tight leading-[1.15]">
              Sign in with ease
            </h1>
            <p className="mt-4 text-[#F5F5F6]/80 text-[15px] font-normal leading-relaxed max-w-[460px]">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>

            {/* Course cards & shapes visual container (Figma x=122.5 to 646, y=305 to 880) */}
            <div className="relative mt-12 w-[620px] h-[560px] hidden sm:block">
              {/* Back Card (Build Digital Asset) at x=0, y=89 relative to container */}
              <div className="absolute left-0 top-[89px] w-[372px] h-[383px] rounded-[23.5px] border border-[#CED0D3] bg-white p-[16px] shadow-sm select-none z-0">
                <div className="relative w-[341px] h-[195px] rounded-[12px] overflow-hidden bg-gray-100">
                  <img
                    src="/images/search-course-2.png"
                    alt="Build Digital Asset"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-[10px] left-[10px] px-3 py-1 rounded-[13px] bg-[#F6F6F6]/60 backdrop-blur-md text-[11px] font-medium text-[#4F4F4F]">
                    17 Lessons
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#242528] leading-tight">Build Digital Asset</h3>
                    <p className="text-[13px] text-[#82868E] mt-0.5">by purepearl studio</p>
                  </div>
                  <div className="flex items-center gap-1 text-[14px] font-bold text-[#242528]">
                    <span>4.5</span>
                    <Star className="w-4 h-4 fill-[#D4FB20] text-[#D4FB20]" />
                  </div>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-[16px] bg-[#F5F5F6] text-[#242528] text-[12px] font-medium">
                    <span className="inline-block w-2.5 h-2.5 border-l-2 border-b-2 border-[#242528]"></span>
                    Beginner
                  </div>
                  <div className="flex items-center -space-x-2">
                    <img src="/images/auth-avatar-1.png" alt="Student" className="w-[26px] h-[26px] rounded-full border border-white object-cover" />
                    <img src="/images/auth-avatar-2.png" alt="Student" className="w-[26px] h-[26px] rounded-full border border-white object-cover" />
                    <img src="/images/auth-avatar-3.png" alt="Student" className="w-[26px] h-[26px] rounded-full border border-white object-cover" />
                    <div className="w-[26px] h-[26px] rounded-full border border-white bg-black text-white text-[9px] font-bold flex items-center justify-center">26+</div>
                  </div>
                  <div className="text-[18px] font-bold text-[#003BE2]">
                    $25<span className="text-[13px] text-[#82868E] font-normal">/lifetime</span>
                  </div>
                </div>
              </div>

              {/* Front Card (the Power of Big Data) at x=111, y=0 relative to container */}
              <div className="absolute left-[111px] top-0 w-[372px] h-[383px] rounded-[23.5px] border border-[#CED0D3] bg-white p-[16px] shadow-2xl select-none z-10">
                <div className="relative w-[341px] h-[195px] rounded-[12px] overflow-hidden bg-gray-100">
                  <img
                    src="/images/search-course-3.png"
                    alt="the Power of Big Data"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-[10px] left-[10px] flex items-center gap-2">
                    <span className="px-3 py-1 rounded-[13px] bg-[#F6F6F6]/60 backdrop-blur-md text-[11px] font-medium text-[#4F4F4F]">
                      17 Lessons
                    </span>
                    <span className="px-3 py-1 rounded-[13px] bg-[#F6F6F6]/60 backdrop-blur-md text-[11px] font-medium text-[#4F4F4F]">
                      2 hours 16 mins
                    </span>
                    <span className="px-3 py-1 rounded-[13px] bg-[#F6F6F6]/60 backdrop-blur-md text-[11px] font-medium text-[#4F4F4F]">
                      59 Comments
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-[18px] font-bold text-[#242528] leading-tight">the Power of Big Data</h3>
                    <p className="text-[13px] text-[#82868E] mt-0.5">by purepearl studio</p>
                  </div>
                  <div className="flex items-center gap-1 text-[14px] font-bold text-[#242528]">
                    <span>4.5</span>
                    <Star className="w-4 h-4 fill-[#D4FB20] text-[#D4FB20]" />
                  </div>
                </div>
                <div className="mt-4 pt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-[16px] bg-[#F5F5F6] text-[#242528] text-[12px] font-medium">
                    <span className="inline-block w-2.5 h-2.5 border-l-2 border-b-2 border-[#242528]"></span>
                    Beginner
                  </div>
                  <div className="flex items-center -space-x-2">
                    <img src="/images/auth-avatar-1.png" alt="Student" className="w-[26px] h-[26px] rounded-full border border-white object-cover" />
                    <img src="/images/auth-avatar-2.png" alt="Student" className="w-[26px] h-[26px] rounded-full border border-white object-cover" />
                    <img src="/images/auth-avatar-3.png" alt="Student" className="w-[26px] h-[26px] rounded-full border border-white object-cover" />
                    <div className="w-[26px] h-[26px] rounded-full border border-white bg-black text-white text-[9px] font-bold flex items-center justify-center">26+</div>
                  </div>
                  <div className="text-[18px] font-bold text-[#003BE2]">
                    $25<span className="text-[13px] text-[#82868E] font-normal">/lifetime</span>
                  </div>
                </div>
              </div>

              {/* Happy Students Badge at x=225, y=434 relative to container */}
              <div className="absolute left-[225px] top-[434px] w-[258px] h-[123px] rounded-[16px] bg-[#D4FB20] p-4 shadow-xl z-20 select-none">
                <span className="text-[16px] font-bold text-[#242528] block">Happy Students</span>
                <div className="flex items-center gap-1.5 mt-0.5 text-[13px] font-medium text-[#242528]">
                  <span className="font-bold">4.5</span>
                  <span className="text-[#242528]/80">(240)</span>
                  <Star className="w-3.5 h-3.5 fill-[#003BE2] text-[#003BE2]" />
                </div>
                <div className="flex items-center -space-x-2 mt-2.5">
                  <img src="/images/auth-avatar-6.png" alt="Student" className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] object-cover" />
                  <img src="/images/auth-avatar-7.png" alt="Student" className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] object-cover" />
                  <img src="/images/auth-avatar-8.png" alt="Student" className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] object-cover" />
                  <img src="/images/auth-avatar-9.png" alt="Student" className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] object-cover" />
                  <img src="/images/auth-avatar-10.png" alt="Student" className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] object-cover" />
                  <img src="/images/auth-avatar-11.png" alt="Student" className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] object-cover" />
                  <div className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] bg-[#242528] text-white text-[10px] font-bold flex items-center justify-center">2K+</div>
                </div>
              </div>

              {/* Exact Doodles from Figma */}
              {/* Top-Left Torus Doodle (x=149.5, y=319.7 -> left=27px, top=14px) */}
              <img
                src="/images/auth-shape-torus.png"
                alt="Decorative Torus"
                className="absolute left-[27px] top-[14px] w-[147px] h-[147px] object-contain pointer-events-none select-none z-30"
              />
              {/* Bottom-Left Pyramid Doodle (x=95, y=701.6 -> left=-27px, top=396px) */}
              <img
                src="/images/auth-shape-pyramid.png"
                alt="Decorative Pyramid"
                className="absolute -left-[27px] top-[396px] w-[189px] h-[189px] object-contain pointer-events-none select-none z-30"
              />
              {/* Bottom-Right Spring Coil Doodle (x=470.8, y=626 -> left=348px, top=320px) */}
              <img
                src="/images/auth-shape-spring.png"
                alt="Decorative Spring"
                className="absolute left-[348px] top-[320px] w-[176px] h-[176px] object-contain pointer-events-none select-none z-30"
              />
            </div>
          </div>

          {/* Right Column: Sign In Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[579px] min-h-[784px] bg-white rounded-[24px] p-8 sm:p-14 lg:p-16 flex flex-col justify-between shadow-2xl">
              <div>
                <span className="text-[#003BE2] font-semibold text-[15px]">Sign In</span>
                <h2 className="text-[36px] sm:text-[40px] font-bold text-[#242528] tracking-tight mt-1 mb-8 sm:mb-10">
                  Welcome Back
                </h2>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-[14px] font-medium text-[#242528] mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="designer@example.com"
                      required
                      className="w-full h-[51px] px-4 rounded-[11.5px] border border-[#E5E6E8] text-[14px] text-[#242528] placeholder-[#82868E] outline-none focus:border-[#003BE2] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[#242528] mb-2">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="********"
                      required
                      className="w-full h-[51px] px-4 rounded-[11.5px] border border-[#E5E6E8] text-[14px] text-[#242528] placeholder-[#82868E] outline-none focus:border-[#003BE2] transition-colors"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="w-[104px] h-[46px] rounded-[23px] bg-[#D4FB20] text-[#242528] font-medium text-[15px] hover:brightness-105 active:scale-95 transition-all flex items-center justify-center shadow-sm"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>

              {/* Divider & Socials */}
              <div className="pt-8">
                <div className="relative my-6 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#E5E6E8]" />
                  </div>
                  <span className="relative bg-white px-4 text-[14px] text-[#82868E]">or</span>
                </div>

                {/* Social Login Buttons */}
                <div className="flex items-center justify-center gap-4">
                  {/* Facebook Button */}
                  <button
                    type="button"
                    className="w-[71px] h-[71px] rounded-[23.5px] border border-[#D1D1D1] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Login with Facebook"
                  >
                    <svg className="w-6 h-6 text-black fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>

                  {/* Google Button */}
                  <button
                    type="button"
                    className="w-[71px] h-[71px] rounded-[23.5px] border border-[#D1D1D1] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Login with Google"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </button>
                </div>

                {/* Footer text */}
                <p className="mt-8 text-center text-[14px] text-[#82868E]">
                  New user?{' '}
                  <Link to="/register" className="text-[#003BE2] font-medium hover:underline">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
