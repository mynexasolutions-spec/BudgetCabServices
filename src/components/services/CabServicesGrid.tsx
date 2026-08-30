"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Car,
  Plane,
  Navigation,
  ArrowRight,
  Briefcase,
  Map,
  Tag,
  Clock,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

// 6 Premium Car Rental Services requested by User
const PREMIUM_SERVICES = [
  {
    id: "local-trips",
    emoji: "🚗",
    badge: "Local Rentals",
    icon: Car,
    title: "Local Trips & Sightseeing",
    description: "Flexible rides for local travel and sightseeing.",
    gradient: "from-[#f59e0b] to-[#f26522]",
  },
  {
    id: "airport-transfers",
    emoji: "✈️",
    badge: "24/7 Airport Cab",
    icon: Plane,
    title: "Reliable Airport Transfers",
    description: "Timely airport pickup and drop services.",
    gradient: "from-[#3b82f6] to-[#06b6d4]",
  },
  {
    id: "outstation-getaways",
    emoji: "🛣️",
    badge: "Round Trips",
    icon: Navigation,
    title: "Outstation Weekend Getaways",
    description: "Comfortable cabs for outstation trips.",
    gradient: "from-[#10b981] to-[#059669]",
  },
  {
    id: "one-way-cabs",
    emoji: "➡️",
    badge: "Pay Only One-Way",
    icon: ArrowRight,
    title: "Smart One-Way Cabs",
    description: "Affordable one-way rides to another city.",
    gradient: "from-[#f26522] to-[#e11d48]",
  },
  {
    id: "corporate-travel",
    emoji: "💼",
    badge: "Executive Class",
    icon: Briefcase,
    title: "Corporate & Business Travel",
    description: "Reliable cabs for business travel.",
    gradient: "from-[#8b5cf6] to-[#6366f1]",
  },
  {
    id: "tour-packages",
    emoji: "🗺️",
    badge: "Customized Tours",
    icon: Map,
    title: "Multi-City Journeys & Tour Packages",
    description: "Customized rides for multi-city journeys.",
    gradient: "from-[#ec4899] to-[#f43f5e]",
  },
];

// 4 Why Choose Us Highlights
const WHY_CHOOSE_ITEMS = [
  {
    icon: Tag,
    title: "Best Rates Guaranteed",
    description: "Premium service that fits your budget with zero hidden charges.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Ready to roll whenever you are—day or night.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Verified Drivers",
    description: "Professional, courteous, and experienced drivers who know the best routes.",
  },
  {
    icon: Smartphone,
    title: "Easy Online Booking",
    description: "Book your preferred cab in just a few clicks from any device.",
  },
];

export default function CabServicesGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const firstChild = scrollRef.current.children[0] as HTMLElement;
    if (!firstChild) return;
    const cardWidth = firstChild.clientWidth + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIdx(Math.min(Math.max(0, index), PREMIUM_SERVICES.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIdx = (idx: number) => {
    if (!scrollRef.current) return;
    const targetCard = scrollRef.current.children[idx] as HTMLElement;
    if (targetCard) {
      const targetLeft = targetCard.offsetLeft - scrollRef.current.offsetLeft;
      scrollRef.current.scrollTo({ left: targetLeft, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#0b0e14] relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#f26522]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section 1: Intro Header & Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-[#131722] to-[#0e121a] border border-[#23293a] rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl"
        >
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f59e0b] via-[#f26522] to-[#ff7d3b]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#23293a] text-xs font-extrabold uppercase tracking-widest text-[#f59e0b] shadow-inner font-heading">
                <Sparkles className="w-3.5 h-3.5 text-[#f26522]" />
                <span>Our Services • Budget Cab </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black lg:text-left text-center uppercase text-white tracking-tight leading-tight font-heading">
                Seamless, Reliable & {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#f26522] to-[#ff7d3b]">
                Affordable Cab Services
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
  At <strong className="text-white font-semibold">Budget Cab Services</strong>,
  we provide safe, comfortable, and affordable cab services for local,
  airport, and outstation travel.
</p>

<p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
  With professional drivers and well-maintained vehicles, we make every
  journey smooth and hassle-free.
</p>
            </div>

            {/* Right Badge Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3 pt-2 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#23293a] lg:pl-8">
              {[
                { label: "Safe & Verified", desc: "100% Chauffeurs" },
                { label: "Pocket Friendly", desc: "Best Rates" },
                { label: "Diverse Fleet", desc: "Sedans & SUVs" },
                { label: "24/7 Rides", desc: "Instant Booking" },
              ].map((badge, bIdx) => (
                <div
                  key={bIdx}
                  className="bg-[#0b0e14]/70 border border-[#23293a] rounded-xl p-3.5 text-center group hover:border-[#f59e0b]/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b] mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <div className="text-xs font-bold text-white font-heading">{badge.label}</div>
                  <div className="text-[10px] text-gray-400 font-sans">{badge.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section 2: Our Premium Car Rental Services (Mobile Swipe Carousel / Desktop Grid) */}
        <div className="space-y-6">
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-end sm:text-left justify-between gap-4">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#f26522] font-heading mb-1">
                Explore Categories
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight">
                Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f26522]">Car Rental Services</span>
              </h3>
            </div>
            <Link
              href="#estimator"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#f59e0b] hover:text-[#f26522] transition-colors font-heading group self-center sm:self-auto"
            >
              <span>Calculate Fare & Book Now</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Carousel on Mobile (< sm) & Grid on Tablet/Desktop (>= sm) */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-3 pt-1 px-4 -mx-4 scroll-px-4 sm:px-0 sm:mx-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-6 sm:overflow-visible lg:px-0 after:content-[''] after:w-1 after:shrink-0 sm:after:hidden"
          >
            {PREMIUM_SERVICES.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="w-[85vw] max-w-[320px] sm:w-auto sm:max-w-none shrink-0 snap-start snap-always bg-[#131722] border border-[#23293a] hover:border-[#f59e0b]/50 rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#f59e0b]/10 group relative overflow-hidden"
                >
                  {/* Subtle top border gradient accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-4">
                    {/* Top Row: Icon + Emoji Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#0b0e14] border border-[#23293a] group-hover:border-[#f59e0b]/40 flex items-center justify-center text-[#f59e0b] group-hover:text-[#f26522] transition-colors shadow-inner">
                        <IconComp className="w-5.5 h-5.5" />
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#161c2b] border border-[#23293a] text-[11px] font-bold text-gray-300 font-heading">
                        <span>{service.emoji}</span>
                        <span>{service.badge}</span>
                      </span>
                    </div>

                    {/* Service Title */}
                    <h4 className="text-lg font-extrabold text-white group-hover:text-[#f59e0b] transition-colors font-heading leading-snug">
                      {service.title}
                    </h4>

                    {/* Service Description */}
                    <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Carousel Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 pt-1 sm:hidden">
            {PREMIUM_SERVICES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIdx(idx)}
                aria-label={`Go to service slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIdx === idx
                    ? "w-6 bg-gradient-to-r from-[#f59e0b] to-[#f26522]"
                    : "w-2 bg-[#23293a] hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Section 3: Why Choose Budget Cab Services? (Compact 4-Column Bar) */}
        <div className="space-y-6 pt-4 border-t border-[#1f2536]">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-heading">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#f26522] to-[#ff7d3b]">Budget Cab Services?</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-sans">
              Top reasons why thousands of passengers rely on us daily across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-[#131722]/80 border border-[#23293a] hover:border-[#f59e0b]/40 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#161c2b] group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0b0e14] border border-[#23293a] group-hover:border-[#f59e0b]/50 flex items-center justify-center text-[#f59e0b] group-hover:text-[#f26522] transition-colors mb-3 shadow-inner">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-white group-hover:text-[#f59e0b] transition-colors font-heading mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
