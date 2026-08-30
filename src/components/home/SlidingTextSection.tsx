"use client";

import React from "react";

const DEFAULT_MARQUEE_ITEMS = [
  { text: "Premium", icon: "icon-jeep" },
  { text: "Rates", icon: "icon-cuv" },
  { text: "Car", icon: "icon-jeep" },
  { text: "Rental", icon: "icon-cuv" },
  { text: "Worldwide", icon: "icon-jeep" },
  { text: "Affordable", icon: "icon-cuv" },
];

interface SlidingTextSectionProps {
  className?: string;
  items?: { text: string; icon: string }[];
}

export default function SlidingTextSection({ className = "", items = DEFAULT_MARQUEE_ITEMS }: SlidingTextSectionProps) {
  return (
    <div className={`sliding-text-one w-full bg-[#f26522] py-2 sm:py-3 md:py-4 overflow-hidden shadow-xl border-y border-[#f26522]/50 select-none z-10 ${className}`}>
      <div className="sliding-text-one__wrap flex overflow-hidden">
        <ul className="sliding-text__list list-unstyled flex animate-ticker whitespace-nowrap m-0 p-0 items-center">
          {/* First set of marquee items */}
          <div className="js-marquee flex items-center shrink-0">
            {items.map((item, index) => (
              <li key={`marquee-1-${index}`} className="inline-flex items-center mx-4 sm:mx-6 md:mx-8">
                <h2
                  data-hover={item.text}
                  className="sliding-text__title flex items-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider text-white hover:text-black transition-colors duration-300 cursor-default"
                >
                  <span>{item.text}</span>
                  <span className={`${item.icon} text-white ml-3 sm:ml-5 md:ml-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl inline-block transition-transform duration-300 hover:scale-110 drop-shadow-sm`}></span>
                </h2>
              </li>
            ))}
          </div>

          {/* Second duplicate set for seamless endless loop */}
          <div className="js-marquee flex items-center shrink-0" aria-hidden="true">
            {items.map((item, index) => (
              <li key={`marquee-2-${index}`} className="inline-flex items-center mx-4 sm:mx-6 md:mx-8">
                <h2
                  data-hover={item.text}
                  className="sliding-text__title flex items-center font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider text-white hover:text-black transition-colors duration-300 cursor-default"
                >
                  <span>{item.text}</span>
                  <span className={`${item.icon} text-white ml-3 sm:ml-5 md:ml-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl inline-block transition-transform duration-300 hover:scale-110 drop-shadow-sm`}></span>
                </h2>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
