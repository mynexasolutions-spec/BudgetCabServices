"use client";

import React from "react";
import Image from "next/image";
import {
  Car,
  Clock,
  User,
  ShieldCheck,
  Check,
  Tag,
} from "lucide-react";
import HeroSearchForm from "@/components/home/HeroSearchForm";

export default function CabBookingWidget() {
  return (
    <section className="relative py-8 md:py-14 bg-[#0b0e14]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Banner Card Header */}
        <div className="relative rounded-[5px] overflow-hidden border border-[#23293a] bg-gradient-to-r from-[#0b0e14] via-[#131722] to-[#1a2030] shadow-2xl p-6 sm:p-10">
          {/* Subtle background overlay image */}
          <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
            <Image
              src="/images/resources/hero_slider_1.webp"
              alt="Car background"
              fill
              className="object-cover object-right"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e14] via-[#0b0e14]/90 to-transparent"></div>
          </div>

          <div className="relative z-10 space-y-4 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold  text-white tracking-tight">
              Book Your <span className="text-[#f59e0b]">Cab</span>
            </h1>

            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-heading font-bold text-gray-200 pt-1">
              <div className="flex items-center gap-1.5 bg-[#131722]/80 backdrop-blur-md border border-[#23293a] px-2.5 py-1 rounded-full text-white">
                <div className="w-4 h-4 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Reliable Rides</span>
              </div>

              <div className="flex items-center gap-1.5 bg-[#131722]/80 backdrop-blur-md border border-[#23293a] px-2.5 py-1 rounded-full text-white">
                <div className="w-4 h-4 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Safe Journey</span>
              </div>

              <div className="flex items-center gap-1.5 bg-[#131722]/80 backdrop-blur-md border border-[#23293a] px-2.5 py-1 rounded-full text-white">
                <div className="w-4 h-4 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center">
                  <Clock className="w-3 h-3 text-[#f59e0b]" />
                </div>
                <span>On Time</span>
              </div>

              <div className="flex items-center gap-1.5 bg-[#131722]/80 backdrop-blur-md border border-[#23293a] px-2.5 py-1 rounded-full text-white">
                <div className="w-4 h-4 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] flex items-center justify-center">
                  <Tag className="w-3 h-3 text-[#f59e0b]" />
                </div>
                <span>Best Prices</span>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Floating Booking Search Bar */}
        <HeroSearchForm className="w-full" />

        {/* Bottom 4 Feature Cards Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
          
          {/* Feature 1 */}
          <div className="bg-[#131722] border border-[#23293a] rounded-[5px] p-5 flex items-start gap-4 hover:border-[#f59e0b]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] shrink-0">
              <Car className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-extrabold text-white text-base">
                Clean &amp; Comfortable Cars
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Well Maintained vehicles for a smooth ride
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#131722] border border-[#23293a] rounded-[5px] p-5 flex items-start gap-4 hover:border-[#f59e0b]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] shrink-0">
              <User className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-extrabold text-white text-base">
                Verified Drivers
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Professional &amp; experienced drivers for your safety
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#131722] border border-[#23293a] rounded-[5px] p-5 flex items-start gap-4 hover:border-[#f59e0b]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-extrabold text-white text-base">
                Secure Payments
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Multiple payment options 100% secure
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#131722] border border-[#23293a] rounded-[5px] p-5 flex items-start gap-4 hover:border-[#f59e0b]/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-heading font-extrabold text-white text-base">
                On Time Guarantee
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                We value your time Always on schedule
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

