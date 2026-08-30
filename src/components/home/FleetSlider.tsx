"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Gauge,
  Snowflake,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { MOCK_FLEET } from "@/constants/mockData";

export default function FleetSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  // Update active index & scroll arrows when user scrolls
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    // Calculate total pages / cards visible
    const firstCard = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.clientWidth + 24 : 300;

    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(newIndex, MOCK_FLEET.length - 1));

    setCanScrollPrev(scrollLeft > 10);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.clientWidth + 24 : 300;

    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.clientWidth + 24 : 300;

    sliderRef.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.clientWidth + 24 : 300;

    sliderRef.current.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="fleet"
      className="py-12 sm:py-16 lg:py-24 bg-[#0b0e14] relative overflow-hidden lg:-my-10"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#f26522]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Title & Subtitle on Left, Prev/Next Arrows on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12 text-center sm:text-left">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#f26522] font-heading block text-center sm:text-left">
              EXPLORE OUR FLEET
            </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-tight leading-tight max-w-3xl mx-auto font-heading lg:text-left text-center">
            Most Popular Cars
          </h2>
            <p className="text-sm sm:text-base text-gray-400 font-sans max-w-xl font-normal pt-1 mx-auto sm:mx-0 text-center sm:text-left">
             Choose from our well-maintained cars for comfortable, safe, and affordable local, airport, and outstation travel.
            </p>
          </div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center justify-center sm:justify-start gap-3 self-center sm:self-end">
            <button
              onClick={handlePrev}
              disabled={!canScrollPrev}
              aria-label="Previous Vehicles"
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-[5px] bg-[#131722] border border-[#23293a] flex items-center justify-center transition-all duration-300 shadow-md ${
                canScrollPrev
                  ? "text-gray-200 hover:text-white hover:border-[#f26522] hover:bg-[#f26522]/10 hover:shadow-[#f26522]/20 active:scale-95 cursor-pointer"
                  : "text-gray-600 opacity-40 cursor-not-allowed border-[#1a1f2e]"
              }`}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canScrollNext}
              aria-label="Next Vehicles"
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-[5px] bg-[#131722] border border-[#23293a] flex items-center justify-center transition-all duration-300 shadow-md ${
                canScrollNext
                  ? "text-gray-200 hover:text-white hover:border-[#f26522] hover:bg-[#f26522]/10 hover:shadow-[#f26522]/20 active:scale-95 cursor-pointer"
                  : "text-gray-600 opacity-40 cursor-not-allowed border-[#1a1f2e]"
              }`}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={sliderRef}
          className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-5 px-1 -mx-1"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {MOCK_FLEET.map((car) => (
            <div
              key={car.id}
              className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] shrink-0 snap-start flex"
            >
              <div className="w-full bg-[#131722] border border-[#23293a] hover:border-[#f26522]/50 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#f26522]/10 group">
                {/* Top Half: Car Image & Badge */}
                <div>
                  <div className="relative w-full h-48 sm:h-52 rounded-[10px] overflow-hidden bg-[#0b0e14]/60 border border-white/5 mb-4">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top-Left Translucent Seats Pill Badge */}
                    <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-md border border-white/10 text-white text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 z-10 shadow-sm">
                      <Users className="w-3.5 h-3.5 text-[#f26522]" />
                      <span>{car.seats || car.capacity}</span>
                    </div>

                    {/* Gradient Overlay on Bottom Edge of Image */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#131722]/80 to-transparent pointer-events-none" />
                  </div>

                  {/* Category & Title */}
                  <div className="space-y-1 px-1">
                    <span className="text-[11px] font-bold text-[#f26522] uppercase tracking-wider block font-sans">
                      {car.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-[#f26522] transition-colors leading-tight line-clamp-1">
                      {car.name}
                    </h3>
                  </div>

                  {/* 4 Feature Specs Grid (Seats, Transmission, AC, Luggage) */}
                  <div className="flex  items-center justify-between gap-1 py-3 px-2 border-y border-[#23293a] my-3.5 text-gray-400 text-[11px] sm:text-xs font-medium">
                    {/* Seats */}
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gray-400 shrink-0 group-hover:text-[#f26522] transition-colors" />
                      <span className="truncate">
                        {car.seats || car.capacity}
                      </span>
                    </div>

                    {/* Transmission */}
                    <div className="flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-gray-400 shrink-0 group-hover:text-[#f26522] transition-colors" />
                      <span className="truncate">
                        {car.transmission || "Auto"}
                      </span>
                    </div>

                    {/* AC */}
                    <div className="flex items-center gap-1.5">
                      <Snowflake className="w-3.5 h-3.5 text-gray-400 shrink-0 group-hover:text-[#f26522] transition-colors" />
                      <span>AC</span>
                    </div>

                  </div>
                </div>

                {/* Bottom Row: Price on Left, Book Now Button on Right */}
                <div className="px-1 flex items-center justify-between gap-3 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[14px] sm:text-[15px] font-bold font-heading text-white tracking-tight">
                      {car.pricePerDay || car.startingPrice || "₹1,800"}
                    </span>
                  </div>

                  <Link
                    href="#booking"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[5px] bg-[#f26522] hover:bg-[#e05413] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-[#f26522]/20 hover:shadow-[#f26522]/40 transition-all duration-200 active:scale-95 group/btn"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {MOCK_FLEET.map((_, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? "w-6 sm:w-7 h-2 bg-[#f26522]"
                    : "w-2 h-2 bg-[#23293a] hover:bg-gray-500"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
