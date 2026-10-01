import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import Logo from '../components/Logo';
import GridBackground from '../components/GridBackground';
import LoadingSpinner from '../components/LoadingSpinner';
import { useLoading } from '../context/LoadingContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    startLoading();
    setTimeout(() => {
      stopLoading();
      setIsSubmitting(false);
      navigate('/');
    }, 450);
  };

  return (
    <div className="min-h-screen w-full bg-[#003BE2] relative flex flex-col justify-between overflow-x-hidden">
      <GridBackground />

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
            <h1 className="text-[26px] sm:text-[28px] font-semibold tracking-tight text-white leading-tight">
              Sign in with ease
            </h1>
            <p className="mt-3 text-[#F5F5F6] text-[15px] font-normal leading-relaxed max-w-[430px]">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>

            {/* Course cards & shapes visual container (Figma x=122.5 to 646, y=305 to 880) */}
            <div className="relative mt-12 w-[620px] h-[560px] hidden sm:block">
              {/* Back Card (Build Digital Asset) at x=0, y=89 relative to container */}
              <div className="absolute left-0 top-[89px] w-[372px] h-[383px] rounded-[23.5px] border border-[#CED0D3] bg-white p-[16px] shadow-sm z-0 cursor-pointer hover:scale-[1.02] active:scale-95 transition-transform">
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
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-[16px] bg-[#F5F5F6] text-[#242528] text-[12px] font-medium cursor-pointer hover:bg-gray-200">
                    <svg
                      className="w-3 h-3 text-[#4B4C53] flex-shrink-0"
                      viewBox="0 0 13 14"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M10 0H12.5V13.34H10V0ZM0 8.34H2.5V13.34H0V8.34ZM5 4.17H7.5V13.34H5V4.17Z" />
                    </svg>
                    <span>Beginner</span>
                  </div>
                  <div className="flex items-center -space-x-2">
                    <img src="/images/auth-avatar-1.png" alt="Student" className="w-[26px] h-[26px] rounded-full border border-white object-cover hover:scale-110 cursor-pointer transition-transform" />
                    <img src="/images/auth-avatar-2.png" alt="Student" className="w-[26px] h-[26px] rounded-full border border-white object-cover hover:scale-110 cursor-pointer transition-transform" />
                    <img src="/images/auth-avatar-3.png" alt="Student" className="w-[26px] h-[26px] rounded-full border border-white object-cover hover:scale-110 cursor-pointer transition-transform" />
                    <div className="w-[26px] h-[26px] rounded-full border border-white bg-[#D4FB20] text-[#040819] text-[9px] font-bold flex items-center justify-center hover:scale-110 cursor-pointer transition-transform">26+</div>
                  </div>
                  <div className="text-[18px] font-bold text-[#003BE2]">
                    $25<span className="text-[13px] text-[#82868E] font-normal">/lifetime</span>
                  </div>
                </div>
              </div>

              {/* Front Card (the Power of Big Data) at x=111, y=0 relative to container */}
              <div className="absolute left-[111px] top-0 w-[372px] h-[383px] rounded-[23.5px] border border-[#CED0D3] bg-white p-[16px] shadow-2xl z-10 cursor-pointer hover:scale-[1.02] active:scale-95 transition-transform">
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
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-[16px] bg-[#F5F5F6] text-[#242528] text-[12px] font-medium cursor-pointer hover:bg-gray-200">
                    <svg
                      className="w-3 h-3 text-[#4B4C53] flex-shrink-0"
                      viewBox="0 0 13 14"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M10 0H12.5V13.34H10V0ZM0 8.34H2.5V13.34H0V8.34ZM5 4.17H7.5V13.34H5V4.17Z" />
                    </svg>
                    <span>Beginner</span>
                  </div>
                  <div className="flex items-center -space-x-2">
                    <img src="/images/auth-avatar-1.png" alt="Student" className="w-[26px] h-[26px] rounded-full border border-white object-cover hover:scale-110 cursor-pointer transition-transform" />
                    <img src="/images/auth-avatar-2.png" alt="Student" className="w-[26px] h-[26px] rounded-full border border-white object-cover hover:scale-110 cursor-pointer transition-transform" />
                    <img src="/images/auth-avatar-3.png" alt="Student" className="w-[26px] h-[26px] rounded-full border border-white object-cover hover:scale-110 cursor-pointer transition-transform" />
                    <div className="w-[26px] h-[26px] rounded-full border border-white bg-[#D4FB20] text-[#040819] text-[9px] font-bold flex items-center justify-center hover:scale-110 cursor-pointer transition-transform">26+</div>
                  </div>
                  <div className="text-[18px] font-bold text-[#003BE2]">
                    $25<span className="text-[13px] text-[#82868E] font-normal">/lifetime</span>
                  </div>
                </div>
              </div>

              {/* Happy Students Badge at x=225, y=434 relative to container */}
              <div className="absolute left-[225px] top-[434px] w-[258px] h-[123px] rounded-[16px] bg-[#D4FB20] p-4 shadow-xl z-30 cursor-pointer hover:scale-105 active:scale-95 transition-transform">
                <span className="text-[16px] font-bold text-[#242528] block">Happy Students</span>
                <div className="flex items-center gap-1.5 mt-0.5 text-[13px] font-medium text-[#242528]">
                  <span className="font-bold">4.5</span>
                  <span className="text-[#242528]/80">(240)</span>
                  <Star className="w-3.5 h-3.5 fill-[#003BE2] text-[#003BE2]" />
                </div>
                <div className="flex items-center -space-x-2 mt-2.5">
                  <img src="/images/auth-avatar-6.png" alt="Student" className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] object-cover hover:scale-110 transition-transform" />
                  <img src="/images/auth-avatar-7.png" alt="Student" className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] object-cover hover:scale-110 transition-transform" />
                  <img src="/images/auth-avatar-8.png" alt="Student" className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] object-cover hover:scale-110 transition-transform" />
                  <img src="/images/auth-avatar-9.png" alt="Student" className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] object-cover hover:scale-110 transition-transform" />
                  <img src="/images/auth-avatar-10.png" alt="Student" className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] object-cover hover:scale-110 transition-transform" />
                  <img src="/images/auth-avatar-11.png" alt="Student" className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] object-cover hover:scale-110 transition-transform" />
                  <div className="w-[28px] h-[28px] rounded-full border border-[#D4FB20] bg-[#242528] text-white text-[10px] font-bold flex items-center justify-center hover:scale-110 transition-transform">2K+</div>
                </div>
              </div>

              {/* Exact 2D Doodles matching Figma design */}
              {/* Top-Left Donut Doodle (sits in upper layer over front card) */}
              <img
                src="/images/auth-shape-torus.png"
                alt="Decorative Donut"
                className="absolute left-[24px] top-[14px] w-[142px] h-[142px] object-contain pointer-events-none select-none z-20"
              />
              {/* Bottom-Left Triangle Doodle (sits in front of back card) */}
              <img
                src="/images/auth-shape-pyramid.png"
                alt="Decorative Triangle"
                className="absolute -left-[27px] top-[396px] w-[189px] h-[189px] object-contain pointer-events-none select-none z-20"
              />
              {/* Bottom-Right Spring Doodle (sits in upper layer over front card, behind happy students badge) */}
              <img
                src="/images/auth-shape-spring.png"
                alt="Decorative Spring"
                className="absolute left-[348px] top-[315px] w-[176px] h-[176px] object-contain pointer-events-none select-none z-20"
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
                      disabled={isSubmitting}
                      className="w-[104px] h-[46px] rounded-[23px] bg-[#D4FB20] text-[#242528] font-medium text-[15px] hover:brightness-105 active:scale-95 transition-all flex items-center justify-center shadow-sm disabled:opacity-80 cursor-pointer"
                    >
                      {isSubmitting ? <LoadingSpinner size="xs" /> : 'Sign In'}
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
                    className="w-[71px] h-[71px] rounded-[23.5px] border border-[#D1D1D1] flex items-center justify-center hover:bg-gray-50 hover:border-black active:scale-95 transition-all cursor-pointer"
                    aria-label="Login with Facebook"
                  >
                    <svg className="w-[33.34px] h-[33.34px] fill-black" viewBox="0 0 34 34">
                      <path d="M33.34 16.67C33.34 7.465 25.875 0 16.67 0C7.465 0 0 7.465 0 16.67C0 24.989 6.095 31.884 14.066 33.134V21.488H9.834V16.67H14.066V12.998C14.066 8.821 16.554 6.514 20.361 6.514C22.185 6.514 24.092 6.839 24.092 6.839V10.941H21.99C19.92 10.941 19.274 12.225 19.274 13.544V16.67H23.897L23.158 21.488H19.274V33.134C27.242 31.884 33.34 24.989 33.34 16.67Z" />
                    </svg>
                  </button>

                  {/* Google Button */}
                  <button
                    type="button"
                    className="w-[71px] h-[71px] rounded-[23.5px] border border-[#D1D1D1] flex items-center justify-center hover:bg-gray-50 hover:border-black active:scale-95 transition-all cursor-pointer"
                    aria-label="Login with Google"
                  >
                    <svg className="w-[33px] h-[33px] fill-black" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                  </button>
                </div>

                {/* Footer text */}
                <p className="mt-8 text-center text-[14px] text-[#82868E]">
                  New user?{' '}
                  <Link to="/register" className="text-[#003BE2] font-normal hover:underline">
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
