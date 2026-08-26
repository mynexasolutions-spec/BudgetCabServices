"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Car, UserCheck, ShieldCheck } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Choose A Car",
      desc: "Open multipy a green form lesser their from in made herb multiply",
      bgImage: "/images/backgrounds/process-one-single-bg-1.jpg",
      iconClass: "icon-car-wash",
      fallbackIcon: Car,
      direction: "left",
      delay: 0.1,
    },
    {
      num: "02",
      title: "Come In Contact",
      desc: "Open multipy a green form lesser their from in made herb multiply",
      bgImage: "/images/backgrounds/process-one-single-bg-2.jpg",
      iconClass: "icon-in-person",
      fallbackIcon: UserCheck,
      direction: "left",
      delay: 0.2,
    },
    {
      num: "03",
      title: "Pick-Up Locations",
      desc: "Open multipy a green form lesser their from in made herb multiply",
      bgImage: "/images/backgrounds/process-one-single-bg-3.jpg",
      iconClass: "icon-car-insurance",
      fallbackIcon: ShieldCheck,
      direction: "right",
      delay: 0.3,
    },
    {
      num: "04",
      title: "Enjoy Driving",
      desc: "Open multipy a green form lesser their from in made herb multiply",
      bgImage: "/images/backgrounds/process-one-single-bg-4.jpg",
      iconClass: "icon-steering-wheel",
      fallbackIcon: Car,
      direction: "right",
      delay: 0.4,
    },
  ];

  return (
    <section id="process" className="pt-10 pb-5 lg:pt-20 lg:pb-10 bg-[#0b0e14] relative overflow-hidden">
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
              Steps
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight max-w-3xl mx-auto font-heading">
            Car Rental Process
          </h2>
        </motion.div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {steps.map((step, index) => {
            const isLeft = step.direction === "left";

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: step.delay }}
                className="relative bg-[#131722] border border-[#23293a] hover:border-[#f59e0b]/60 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#f59e0b]/10 group overflow-hidden min-h-[300px]"
              >
                {/* Background Car Image Overlay */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
                  <Image
                    src={step.bgImage}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e121c] via-[#131722]/80 to-[#131722]/85" />
                </div>

                {/* Top Row: Circular Icon Badge + Connecting Arrow + Outlined Step Number */}
                <div className="flex items-center justify-between relative z-10 mb-8">
                  {/* Circular Icon Container */}
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#111622] border-2 border-[#f59e0b] p-1 flex items-center justify-center shadow-lg shadow-[#f59e0b]/15 group-hover:border-[#f26522] group-hover:shadow-[#f26522]/25 group-hover:scale-105 transition-all duration-300">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#f59e0b] to-[#f26522] flex items-center justify-center text-[#0b0e14] transition-all duration-300">
                        <span
                          className={`${step.iconClass} text-2xl font-bold leading-none select-none text-[#0b0e14]`}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Arrow Connector */}
                  <div className="flex-1 px-3 sm:px-4 flex items-center justify-center">
                    <svg
                      className="w-full h-4 overflow-visible"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 12"
                    >
                      <line
                        x1="0"
                        y1="6"
                        x2="90"
                        y2="6"
                        stroke="#4b5563"
                        strokeWidth="2"
                        className="group-hover:stroke-[#f59e0b] transition-colors duration-300"
                      />
                      <polygon
                        points="86,2 96,6 86,10"
                        fill="#6b7280"
                        className="group-hover:fill-[#f59e0b] transition-colors duration-300"
                      />
                    </svg>
                  </div>

                  {/* Outlined Step Number */}
                  <div className="shrink-0 select-none">
                    <span className="text-4xl sm:text-5xl font-black font-heading text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.4)] group-hover:[-webkit-text-stroke:1.5px_#f59e0b] group-hover:text-[#f59e0b]/10 transition-all duration-300 tracking-tight">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content: Title and Description */}
                <div className="relative z-10 space-y-3 mt-auto">
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#f59e0b] group-hover:text-[#fbbf24] transition-colors duration-300 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium font-sans leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
