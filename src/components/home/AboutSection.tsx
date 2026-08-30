"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";

function AnimatedCounter({
  value,
  inView,
  delay = 0,
}: {
  value: number;
  inView: boolean;
  delay?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const timeoutId = setTimeout(() => {
      const startTime = performance.now();
      const duration = 1400;

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // smooth easeOutExpo
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeOut * value));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [inView, value, delay]);

  return <>{count}%</>;
}

interface StatCircleProps {
  percentage: number;
  label: string;
  isInView: boolean;
  delay?: number;
  gradientId: string;
}

function StatCircle({
  percentage,
  label,
  isInView,
  delay = 0,
  gradientId,
}: StatCircleProps) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius; // ~175.93
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.6, delay }}
      className="flex items-center gap-3 sm:gap-4 group"
    >
      {/* Circle Container */}
      <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] shrink-0 flex items-center justify-center">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-[#f59e0b]/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 72 72">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#f26522" />
            </linearGradient>
          </defs>
          {/* Background Track Circle */}
          <circle
            cx="36"
            cy="36"
            r={radius}
            stroke="#23293a"
            strokeWidth="5.5"
            fill="transparent"
          />
          {/* Animated Progress Circle */}
          <motion.circle
            cx="36"
            cy="36"
            r={radius}
            stroke={`url(#${gradientId})`}
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: delay + 0.1 }}
          />
        </svg>

        {/* Centered Percentage Number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm sm:text-base font-black font-heading text-[#f59e0b] tracking-tight">
            <AnimatedCounter value={percentage} inView={isInView} delay={delay + 0.1} />
          </span>
        </div>
      </div>

      {/* Label Text */}
      <div className="flex flex-col justify-center">
        <span className="text-sm sm:text-base font-extrabold font-heading text-[#f59e0b] leading-tight tracking-tight max-w-[110px] sm:max-w-[130px]">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-40px" });

  const features = [
    "One Way & Round Trip",
    "Outstation Travel",
    "Airport Transfer",
    "Hourly Rental",
  ];

  return (
    <section id="about" className="py-10 lg:py-25 bg-[#0b0e14] relative overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#f26522] block text-center lg:text-left">
                Welcome to Budget Cab Services
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight text-center lg:text-left font-heading">
                We Provide Trusted Cab Booking Service
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center lg:text-left">
              Book Your Cab is a leading transportation service dedicated to providing convenient, safe, and reliable travel solutions. With a commitment to excellence and customer satisfaction, we have established ourselves as a trusted choice for individuals and businesses alike.
            </p>

            {/* Check Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#f26522]/20 border border-[#f26522]/40 flex items-center justify-center text-[#f26522] shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-white">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Progress Rings with Motion */}
            <div
              ref={statsRef}
              className="flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-10 pt-2 pb-1"
            >
              <StatCircle
                percentage={95}
                label="Satisfied Clients"
                isInView={isInView}
                delay={0.1}
                gradientId="statGrad1"
              />
              <StatCircle
                percentage={98}
                label="Success Rate"
                isInView={isInView}
                delay={0.25}
                gradientId="statGrad2"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="#home">
                <Button variant="primary" size="lg" className="rounded-[5px] flex items-center gap-2">
                  Book Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 relative">
              {/* Top Image */}
              <div className="col-span-12 sm:col-span-8 relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden border border-[#23293a] shadow-xl">
                <Image
                  src="/images/img/img_01.webp"
                  alt="Driver handing over car key"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Play Button Overlay Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <a
                  href="#video"
                  className="w-16 h-16 rounded-full bg-[#f26522] text-white flex items-center justify-center shadow-2xl pulse-button cursor-pointer"
                >
                  <i className="icon-car text-3xl"></i>
                </a>
              </div>

              {/* Bottom Image & Experience Badge */}
              <div className="col-span-12 sm:col-span-7 sm:col-start-6 sm:-mt-12 relative h-[220px] rounded-2xl overflow-hidden border border-[#23293a] z-10 shadow-2xl">
                <Image
                  src="/images/img/img_02.webp"
                  alt="PrimeCab driver smiling inside car"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
