"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <section className="py-8 sm:py-10 lg:py-14 bg-[#080b11] relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0d111a] border border-[#1e2536] rounded-[10px] sm:rounded-[15px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f26522]/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#f26522]/5 rounded-full blur-[90px] pointer-events-none"></div>

          {/* Dot Grid Pattern on Bottom Left */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-0 pointer-events-none opacity-40">
            <svg width="120" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <pattern id="newsletter-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#f26522" />
              </pattern>
              <rect width="120" height="120" fill="url(#newsletter-dots)" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center relative z-10">
            {/* Left Content Area */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#f26522] text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase">
                <Mail className="w-4 h-4 text-[#f26522]" />
                <span>STAY CONNECTED</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[38px] font-extrabold uppercase text-white tracking-tight leading-snug sm:leading-[1.15] text-center lg:text-left font-heading">
                WE CREATE <br className="hidden sm:inline" />
                <span className="text-[#f26522]"> MEMORABLE </span> JOURNEYS <br className="hidden sm:inline" />
                TOGETHER WITH YOU
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base font-normal max-w-xl leading-relaxed text-center lg:text-left">
                Subscribe to get updates &amp; exclusive offers straight to your inbox.
              </p>

              {/* Subscription Form */}
              {subscribed ? (
                <div className="w-full p-4 rounded-[5px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 max-w-lg">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-semibold">
                    Thank you for subscribing! Check your inbox soon for exclusive deals.
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 max-w-[530px] bg-[#121622] p-1.5 sm:p-2 rounded-[5px] sm:rounded-[5px] border border-white/10 focus-within:border-[#f26522]/60 focus-within:ring-2 focus-within:ring-[#f26522]/20 transition-all duration-300 shadow-inner"
                >
                  <div className="relative flex-1 flex items-center w-full">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-4 pointer-events-none shrink-0" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-transparent pl-11 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-2.5 rounded-[5px] sm:rounded-[5px] bg-gradient-to-r from-[#f26522] to-[#ea580c] hover:from-[#e05413] hover:to-[#f26522] text-white font-extrabold text-sm transition-all duration-300 shadow-lg shadow-[#f26522]/30 flex items-center justify-center gap-2 shrink-0 cursor-pointer active:scale-95 group"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Visual Showcase - Modern Luxury Car Card with Responsive Geometric Frame */}
          <div className="lg:col-span-5 relative w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] flex items-center justify-center p-3 sm:p-5 lg:p-6">

  {/* Interactive Group Wrapper */}
  <div className="relative w-full h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] group cursor-pointer max-w-[480px] lg:max-w-none">

    {/* Outer Glowing Halo */}
    <div className="absolute -inset-4 bg-gradient-to-tr from-[#f26522]/30 via-[#f26522]/5 to-transparent rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"></div>

    {/* Angled Image Container */}
    <div className="relative w-full h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] overflow-hidden [clip-path:polygon(15%_0%,100%_0%,100%_100%,15%_100%,0%_75%,0%_25%)] border border-white/5 bg-[#0d111a] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">

      {/* Full Cover Image */}
      <Image
        src="/images/resources/newsletter-car.jpg"
        alt="Budget Cab Services"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 42vw"
        className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d111a] via-[#0d111a]/20 to-transparent pointer-events-none"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0d111a]/50 via-transparent to-transparent pointer-events-none"></div>

      {/* Shimmer / Light Beam */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10"></div>

    </div>

    {/* Orange Neon Border */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        d="M 15,0 L 100,0 L 100,100 L 15,100 L 0,75 L 0,25 Z"
        fill="none"
        stroke="#f26522"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        className="drop-shadow-[0_0_8px_rgba(242,101,34,0.6)] group-hover:drop-shadow-[0_0_15px_rgba(242,101,34,0.9)] group-hover:stroke-[#ff7d3b] transition-all duration-500"
      />
    </svg>

    {/* Floating Badge - 24/7 */}
    <div className="absolute -top-3 -right-3 z-30 flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0d111a]/95 backdrop-blur-md border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.5)] group-hover:border-[#f26522]/30 transition-all duration-300">

      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>

      <span className="text-[11px] sm:text-xs font-bold text-gray-200 tracking-wide">
        24/7 Available
      </span>

    </div>

    {/* Floating Details Card */}
    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 flex items-center gap-3.5 px-4 py-3 rounded-xl bg-[#0d111a]/90 backdrop-blur-md border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.6)] max-w-[calc(100%-32px)] group-hover:border-[#f26522]/30 transition-all duration-300">

      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#f26522] to-[#ea580c] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#f26522]/20">
        <CheckCircle2 className="w-5 h-5 text-white" />
      </div>

      <div className="text-left">
        <p className="text-white text-xs sm:text-sm font-bold tracking-tight">
          Reliable Cab Services
        </p>

        <p className="text-[#f26522] text-[10px] sm:text-[11px] font-semibold flex items-center gap-1.5 mt-0.5">
          <span>★ Trusted Service</span>
          <span className="text-gray-400">• Professional Drivers</span>
        </p>
      </div>

    </div>

  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
