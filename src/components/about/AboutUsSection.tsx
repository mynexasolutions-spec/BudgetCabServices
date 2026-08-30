"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { PhoneCall, ArrowRight, ShieldCheck, Award } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

// Number counter animation component
function AnimatedNumber({
  value,
  inView,
  suffix = "",
  delay = 0,
}: {
  value: number;
  inView: boolean;
  suffix?: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const timeoutId = setTimeout(() => {
      const startTime = performance.now();
      const duration = 1600;

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
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

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

// Progress Bar component
function ProgressBar({
  title,
  percent,
  inView,
  delay = 0,
}: {
  title: string;
  percent: number;
  inView: boolean;
  delay?: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm sm:text-base font-bold font-heading">
        <span className="text-gray-200 tracking-wide">{title}</span>
        <span className="text-[#f59e0b] font-black">
          <AnimatedNumber
            value={percent}
            inView={inView}
            suffix="%"
            delay={delay}
          />
        </span>
      </div>

      <div className="h-3 w-full bg-[#161c2b] rounded-full overflow-hidden p-[2px] border border-[#23293a]">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay }}
          className="h-full rounded-full bg-gradient-to-r from-[#f59e0b] via-[#f26522] to-[#ff7d3b] relative shadow-[0_0_12px_rgba(242,101,34,0.6)]"
        >
          {/* Subtle sheen highlight */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      className="about-one about-page relative py-8 sm:py-10 lg:py-14 bg-[#0b0e14] overflow-hidden"
    >
      {/* Background Decorative Lighting */}
      <div
        className="absolute top-1/4 -left-40 w-96 h-96 bg-[#f26522]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-80 h-80 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Image Collage & Experience Badge */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="about-one__left relative"
            >
              <div className="about-one__img-box relative pb-10 sm:pb-12 max-w-[540px] mx-auto lg:mx-0">
                {/* Main Big Image */}
                <div className="about-one__img relative h-[320px] sm:h-[420px] md:h-[470px] w-[82%] sm:w-[85%] rounded-3xl overflow-hidden border border-[#23293a] shadow-2xl bg-[#131722]">
                  <Image
                    src="/images/img/img_03.webp"
                    alt="PrimeCab professional driver handover"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14]/70 via-transparent to-transparent" />
                </div>

                {/* Secondary Overlapping Small Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0, scale: 0.9, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="about-one__img-2 absolute -bottom-4 right-0 sm:right-4 w-[52%] sm:w-[50%] h-[210px] sm:h-[260px] rounded-2xl overflow-hidden border-4 border-[#0b0e14] shadow-2xl bg-[#131722] z-10"
                >
                  <Image
                    src="/images/img/img_05.webp"
                    alt="Happy passenger enjoying comfortable ride"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14]/60 via-transparent to-transparent" />
                </motion.div>

                {/* Floating Bobbing Shape 1 */}
                <div className="about-one__shape-1 absolute -top-5 -left-5 w-20 h-20 bg-gradient-to-br from-[#f26522]/30 to-transparent rounded-full blur-xl pointer-events-none" />

                {/* Floating Bobbing Shape 2 (Decorative Accent Box) */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="about-one__shape-2 absolute top-6 -right-3 sm:-right-4 w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f26522]/20 to-[#f59e0b]/40 border border-[#f26522]/40 backdrop-blur-md hidden sm:flex items-center justify-center pointer-events-none shadow-lg"
                >
                  <ShieldCheck className="w-6 h-6 text-[#f59e0b]" />
                </motion.div>  
              </div>
            </motion.div>
          </div>

          {/* Right Column: Information, Progress Bars & Action Buttons */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="about-one__right space-y-6 text-left"
            >
              {/* Tagline & Main Title */}
              <div className="section-title text-left space-y-3">
                <div className="section-title__tagline-box inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161c2b] border border-[#23293a]">
                  <span className="w-2 h-2 rounded-full bg-[#f26522] animate-pulse" />
                  <span className="section-title__tagline text-xs font-extrabold uppercase tracking-widest text-[#f26522] font-heading">
                    About {SITE_CONFIG.name || "PrimeCab"}
                  </span>
                </div>

                <h2 className="section-title__title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight font-heading leading-tight sm:leading-snug">
                  Welcome to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#f26522] to-[#ff7d3b]">
                    BudgetCab
                  </span>{" "}
                 Services
                </h2>
              </div>

              {/* Subheading / Highlight statement */}
              <p className="about-one__text-1 text-base sm:text-lg font-bold text-gray-200 leading-snug border-l-2 border-[#f26522] pl-3.5">
                Reliable, safe, and affordable cab services for every journey.
              </p>

              {/* Description Body */}
              <p className="about-one__text-2 text-sm sm:text-base text-gray-400 leading-relaxed font-sans">
                We are committed to providing comfortable and dependable transportation with experienced drivers, well-maintained vehicles, and transparent pricing. Whether you need a local ride, airport transfer, or outstation cab, we make every journey smooth and hassle-free.
              </p>

              {/* Progress Bars */}
              <div className="about-one__progress-box space-y-5 pt-2 pb-2">
                <ProgressBar
                  title="Safe & Reliable Service"
                  percent={100}
                  inView={isInView}
                  delay={0.2}
                />
                <ProgressBar
                  title="Professional Drivers"
                  percent={95}
                  inView={isInView}
                  delay={0.4}
                />
              </div>

              {/* CTA Action Buttons & Call Box */}
              <div className="about-one__btn-box-and-call-box pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-8">
                {/* Book Now Button (Replaced Read More as requested) */}
                <div className="about-one__btn-box">
                  <Link
                    href="/#booking"
                    className="about-one__btn group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-[5px] bg-gradient-to-r from-[#f26522] to-[#ff7d3b] hover:from-[#e05413] hover:to-[#f26522] text-white font-extrabold text-sm uppercase tracking-wider shadow-[0_10px_25px_rgba(242,101,34,0.35)] hover:shadow-[0_15px_35px_rgba(242,101,34,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto font-heading"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Call Anytime Box */}
                <div className="about-one__call-box flex items-center gap-3.5 p-3 rounded-[5px] transition-colors duration-300">
                  <div className="about-one__call-box-icon w-11 h-11 rounded-[5px] bg-[#f26522]/15 border border-[#f26522]/30 flex items-center justify-center text-[#f26522] shrink-0 shadow-inner">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div className="about-one__call-box-content text-left">
                    <p className="text-xs text-gray-400 font-medium">
                      Call to Anytime
                    </p>
                    <h4 className="text-sm sm:text-base font-extrabold text-white font-heading tracking-tight hover:text-[#f59e0b] transition-colors">
                      <a href={`tel:${SITE_CONFIG.phone || "+919860689292"}`}>
                        {SITE_CONFIG.phone || "+919860689292"}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
