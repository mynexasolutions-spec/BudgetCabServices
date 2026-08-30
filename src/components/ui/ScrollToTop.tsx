"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Show button after scrolling down 170px
      if (window.scrollY > 170) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circular progress calculations (Radius 20, Circumference = 2 * PI * 20 = 125.66)
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-8 scale-75 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-prime-card/90 hover:bg-prime-navy backdrop-blur-md border border-white/10 hover:border-prime-orange/50 text-gray-300 hover:text-white shadow-xl hover:shadow-orange-glow transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-prime-orange/60"
      >
        {/* SVG Scroll Progress Circle */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-[2px]"
          viewBox="0 0 48 48"
        >
          {/* Background Track Circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="text-white/5"
            strokeWidth="3"
            stroke="currentColor"
            fill="transparent"
          />
          {/* Active Progress Circle with Gradient / Glow */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="url(#progressGradient)"
            fill="transparent"
            className="transition-all duration-150 ease-out"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f26522" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
        </svg>

        {/* Modern Arrow Icon with subtle upward hover animation */}
        <div className="relative z-10 flex items-center justify-center overflow-hidden w-5 h-5 sm:w-6 sm:h-6">
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200 group-hover:text-prime-orange transition-transform duration-300 group-hover:-translate-y-1" />
        </div>

        {/* Ambient Glow on hover */}
        <div className="absolute inset-0 rounded-full bg-prime-orange/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Desktop Tooltip */}
        <span className="hidden md:block absolute right-full mr-3 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white bg-prime-navy/95 border border-white/10 rounded-lg shadow-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap pointer-events-none">
          Back to top
        </span>
      </button>
    </div>
  );
}
