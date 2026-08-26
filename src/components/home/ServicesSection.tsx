"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  CarTaxiFront,
  Plane,
  ShieldCheck,
} from "lucide-react";
import SlidingTextSection from "@/components/home/SlidingTextSection";

export default function ServicesSection() {
  const services = [
    {
      count: "01",
      title: "Corporate car rental",
      desc: "Open multipy a green form lesser their from in made herb multiply",
      icon: Car,
      direction: "left",
      delay: 0.1,
    },
    {
      count: "02",
      title: "Car rental with driver",
      desc: "Open multipy a green form lesser their from in made herb multiply",
      icon: CarTaxiFront,
      direction: "left",
      delay: 0.2,
    },
    {
      count: "03",
      title: "Airport transfer",
      desc: "Open multipy a green form lesser their from in made herb multiply",
      icon: Plane,
      direction: "right",
      delay: 0.3,
    },
    {
      count: "04",
      title: "Fleet leasing",
      desc: "Open multipy a green form lesser their from in made herb multiply",
      icon: ShieldCheck,
      direction: "right",
      delay: 0.4,
    },
  ];

  return (
    <section id="services" className="pt-14 pb-0 lg:pt-24 lg:pb-0 bg-[#0b0e14] relative overflow-hidden lg:-mt-[30px]">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12 sm:mb-16"
        >
          {/* Tagline Box with Shape */}
          <div className="inline-flex items-center justify-center gap-2.5">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#f26522] font-heading">
              What We’re Offering
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight max-w-3xl mx-auto font-heading">
            Services We’re Providing to Customers
          </h2>
        </motion.div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {services.map((item, index) => {
            const Icon = item.icon;
            const isLeft = item.direction === "left";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="relative bg-[#131722] border border-[#23293a] hover:border-[#f59e0b]/60 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#f59e0b]/10 group overflow-hidden"
              >
                {/* Decorative Shape 1: Top-Right Gradient Ambient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f59e0b]/10 via-[#f26522]/5 to-transparent rounded-bl-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none" />

                {/* Decorative Shape 2: Bottom-Left Subtle Geometric Accent */}
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#f59e0b]/5 rounded-full blur-xl group-hover:bg-[#f59e0b]/15 transition-all duration-500 pointer-events-none" />

                {/* Decorative Shape 3: Subtle Border Highlight Line on Top */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#f59e0b]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Row: Icon and Count */}
                <div className="flex items-start justify-between relative z-10 mb-6">
                  {/* Icon Box */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0b0e14] border border-[#23293a] group-hover:border-[#f59e0b]/50 group-hover:bg-[#f59e0b] flex items-center justify-center text-[#f59e0b] group-hover:text-black transition-all duration-300 shadow-md">
                    <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Watermark Count */}
                  <span className="text-3xl sm:text-4xl font-black font-heading text-gray-700/30 group-hover:text-[#f59e0b]/40 transition-colors duration-300 select-none">
                    {item.count}
                  </span>
                </div>

                {/* Content: Title and Text */}
                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl sm:text-xl font-extrabold font-heading text-white group-hover:text-[#f59e0b] transition-colors duration-300 leading-snug">
                    <Link href="/services" className="focus:outline-none">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-400 font-medium font-sans leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Feature Sliding Text Marquee */}
      <SlidingTextSection className="mt-16 sm:mt-20" />
    </section>
  );
}
