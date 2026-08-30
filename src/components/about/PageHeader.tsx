"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Home, Sparkles } from "lucide-react";

interface PageHeaderProps {
  title?: string;
  highlightText?: string;
  tagline?: string;
  breadcrumbs?: { label: string; href?: string }[];
  bgImage?: string;
  compact?: boolean;
}

export default function PageHeader({
  title = "About",
  highlightText = "Us",
  tagline = "Explore PrimeCab & Our Heritage",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ],
  bgImage = "/images/backgrounds/page_bg.webp",
  compact = false,
}: PageHeaderProps) {
  return (
    <section className={`relative overflow-hidden bg-[#0a0d13] border-b border-[#23293a]/80 flex items-center ${
      compact
        ? "py-6 sm:py-8 md:py-9 min-h-[120px] sm:min-h-[140px] md:min-h-[160px]"
        : "py-12 sm:py-16 md:py-18 lg:py-20 min-h-[220px] sm:min-h-[260px] md:min-h-[300px]"
    }`}>
      {/* Background Image with Crisp Contrast & Smooth Ambient Motion */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 0.9 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src={bgImage}
          alt="Page Header Background"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-[50%_70%]"
        />
      </motion.div>

      {/* Atmospheric Overlays for Readability and Depth */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#07090e]/25 via-[#0b0e14]/25 to-[#07090e]/20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0a0d13] via-transparent to-[#0a0d13]/20 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[#000000]/30 pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Radial Glow Balls */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-[#f26522]/15 rounded-full blur-[80px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-10 w-60 sm:w-72 h-60 sm:h-72 bg-[#f59e0b]/15 rounded-full blur-[70px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Animated Subtle Floating Background Shapes */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-14 h-14 rounded-full border border-[#f26522]/20 bg-[#f26522]/5 backdrop-blur-sm hidden lg:block pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-4 left-8 w-12 h-12 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/5 backdrop-blur-sm hidden lg:block pointer-events-none"
      />

      {/* Content Container */}
      <div className="relative max-w-[1350px] w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          
          {/* Left Title & Tagline with Staggered Motion */}
          <div className="space-y-2 sm:space-y-2.5 max-w-2xl">
            {/* Tagline Pill */}
            {tagline && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161c2b]/50 border border-[#23293a] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#f59e0b] shadow-inner font-heading"
              >
                <Sparkles className="w-3 h-3 text-[#f26522] animate-spin" style={{ animationDuration: "8s" }} />
                <span>{tagline}</span>
              </motion.div>
            )}

            {/* Main Title Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`${
                compact
                  ? "text-xl sm:text-2xl md:text-3xl"
                  : "text-2xl sm:text-3xl md:text-[36px] md:leading-[40px]"
              } font-black text-white tracking-tight uppercase font-heading`}
            >
              {title}{" "}
              {highlightText && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#f26522] to-[#ff7d3b] drop-shadow-[0_0_20px_rgba(242,101,34,0.35)]">
                  {highlightText}
                </span>
              )}
            </motion.h1>

            {/* Decorative Mini Accent Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "60px", opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-[#f26522] to-[#f59e0b] rounded-full mx-auto md:mx-0"
            />
          </div>

          {/* Right Breadcrumb Navigation with Floating Entrance */}
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            aria-label="Breadcrumb"
            className="shrink-0"
          >
            <ol className="inline-flex items-center flex-wrap justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#131722]/90 border border-[#2a3349]/90 backdrop-blur-md text-xs sm:text-sm shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:border-[#f26522]/40 transition-colors duration-300">
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <li key={idx} className="inline-flex items-center gap-1.5 sm:gap-2">
                    {idx > 0 && (
                      <ChevronRight className="w-3.5 h-3.5 text-[#f26522] shrink-0" />
                    )}
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="inline-flex items-center gap-1.5 text-gray-300 hover:text-[#f59e0b] transition-colors font-medium"
                      >
                        {idx === 0 && <Home className="w-3.5 h-3.5 text-[#f26522]" />}
                        <span>{crumb.label}</span>
                      </Link>
                    ) : (
                      <span className="text-[#f59e0b] font-bold">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </motion.nav>

        </div>
      </div>

      {/* Bottom Subtle Gradient Border Accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f26522]/60 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
