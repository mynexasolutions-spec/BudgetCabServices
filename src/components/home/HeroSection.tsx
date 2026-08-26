"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Car,
  ArrowRightLeft,
  Calendar,
  Clock,
  MapPin,
  ShieldCheck,
  Award,
  PhoneCall,
} from "lucide-react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"rent" | "oneWay" | "longTerm">("rent");
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [dropTime, setDropTime] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingElement = document.getElementById("booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-12 lg:pt-36 lg:pb-16 bg-[#0b0e14] overflow-hidden flex flex-col justify-between">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero_banners.png"
          alt="Luxury Car Driving on Coastal Mountain Road"
          fill
          className="object-cover object-center brightness-70 contrast-90"
          priority
        />
        {/* Dark Gradients for Content Legibility & Seamless Integration */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e14]/80 via-[#0b0e14]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-[#0b0e14]/50"></div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1350px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        <div className="max-w-2xl space-y-6 text-left pt-6 pb-12">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight font-heading">
            Drive Your Journey, <br />
            <span className="text-[#f59e0b]">Your Way</span>.
          </h1>

          {/* Subtitle Description */}
          <div className="space-y-1 text-gray-200 text-base sm:text-lg lg:text-xl font-medium font-sans">
            <p>Explore the world with comfort and style.</p>
            <p className="text-gray-300">Best car rentals at the best prices.</p>
          </div>

          {/* 3 Key Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {/* Feature 1 */}
            <div className="flex items-center gap-3 bg-[#131722]/85 backdrop-blur-md border border-[#23293a] p-3.5 rounded-2xl">
              <div className="w-10 h-10 rounded-full border-2 border-[#f59e0b] bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight font-heading">
                  No Hidden Charges
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Transparent Pricing</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3 bg-[#131722]/85 backdrop-blur-md border border-[#23293a] p-3.5 rounded-2xl">
              <div className="w-10 h-10 rounded-full border-2 border-[#f59e0b] bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight font-heading">
                  Best Experience
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Safe &amp; Reliable</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3 bg-[#131722]/85 backdrop-blur-md border border-[#23293a] p-3.5 rounded-2xl">
              <div className="w-10 h-10 rounded-full border-2 border-[#f59e0b] bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight font-heading">
                  24/7 Support
                </h4>
                <p className="text-[11px] text-gray-400 mt-0.5">We&apos;re here for you</p>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Floating Booking Form Bar - Dark Theme */}
        <div className="mt-1 bg-[#131722]/95 backdrop-blur-xl border border-[#23293a] rounded-xl p-3 sm:p-4 shadow-2xl relative">
          {/* Top Form Type Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#23293a] pb-4 mb-5">
            <button
              type="button"
              onClick={() => setActiveTab("rent")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-extrabold text-sm transition-all relative cursor-pointer ${
                activeTab === "rent"
                  ? "bg-[#0b0e14] text-[#f59e0b] border border-[#f59e0b]/50 shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Car className="w-4 h-4 text-[#f59e0b]" />
              <span>Rent a Car</span>
            </button>
          </div>

          {/* Form Inputs Grid (5 Fields + 1 Search Button) */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
            {/* Field 1: Pick-up Location */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 block font-heading">
                Pick-up Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select Location"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-[#0b0e14] border border-[#23293a] rounded-xl pl-4 pr-10 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#f59e0b] transition-colors font-sans"
                />
                <MapPin className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#f59e0b]" />
              </div>
            </div>

            {/* Field 2: Pick-up Date */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 block font-heading">
                Pick-up Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full bg-[#0b0e14] border border-[#23293a] rounded-xl pl-4 pr-10 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#f59e0b] transition-colors font-sans"
                />
                <Calendar className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#f59e0b] pointer-events-none" />
              </div>
            </div>

            {/* Field 3: Pick-up Time */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 block font-heading">
                Pick-up Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-[#0b0e14] border border-[#23293a] rounded-xl pl-4 pr-10 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#f59e0b] transition-colors font-sans"
                />
                <Clock className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#f59e0b] pointer-events-none" />
              </div>
            </div>

            {/* Field 4: Drop-off Date */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 block font-heading">
                Drop-off Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={dropDate}
                  onChange={(e) => setDropDate(e.target.value)}
                  className="w-full bg-[#0b0e14] border border-[#23293a] rounded-xl pl-4 pr-10 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#f59e0b] transition-colors font-sans"
                />
                <Calendar className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#f59e0b] pointer-events-none" />
              </div>
            </div>

            {/* Field 5: Drop-off Time */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-300 block font-heading">
                Drop-off Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  value={dropTime}
                  onChange={(e) => setDropTime(e.target.value)}
                  className="w-full bg-[#0b0e14] border border-[#23293a] rounded-xl pl-4 pr-10 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#f59e0b] transition-colors font-sans"
                />
                <Clock className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#f59e0b] pointer-events-none" />
              </div>
            </div>

            {/* Field 6: Search Cars Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#f59e0b] hover:bg-[#d98206] text-black font-heading font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-[#f59e0b]/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Search Cars</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
