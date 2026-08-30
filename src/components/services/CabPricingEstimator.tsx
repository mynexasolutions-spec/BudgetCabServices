"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Clock,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Info,
  ShieldCheck,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

type TabKey = "nashik-local" | "outstation" | "local-hourly";

interface VehiclePlan {
  name: string;
  category: string;
  isPopular?: boolean;
  rates: { label: string; value: string }[];
}

export default function CabPricingEstimator() {
  const [activeTab, setActiveTab] = useState<TabKey>("nashik-local");

  // Tab 1: Nashik Local Packages (From Image)
  const nashikLocalPlans: VehiclePlan[] = [
    {
      name: "Sedan",
      category: "Dzire / Etios / Aura (4+1)",
      rates: [
        { label: "8 Hrs / 80 Km", value: "₹2,500" },
        { label: "12 Hrs / 100 Km", value: "₹3,500" },
        { label: "Full Day", value: "₹4,200" },
        { label: "Extra Km", value: "₹12/km" },
        { label: "Extra Hour", value: "₹200/hr" },
      ],
    },
    {
      name: "Ertiga",
      category: "6+1 Family AC SUV",
      rates: [
        { label: "8 Hrs / 80 Km", value: "₹3,000" },
        { label: "12 Hrs / 100 Km", value: "₹3,500" },
        { label: "Full Day", value: "₹4,500" },
        { label: "Extra Km", value: "₹15/km" },
        { label: "Extra Hour", value: "₹250/hr" },
      ],
    },
    {
      name: "Innova",
      category: "7+1 Executive Premium",
      isPopular: true,
      rates: [
        { label: "8 Hrs / 80 Km", value: "₹3,500" },
        { label: "12 Hrs / 100 Km", value: "₹4,800" },
        { label: "Full Day", value: "₹5,500" },
        { label: "Extra Km", value: "₹18/km" },
        { label: "Extra Hour", value: "₹300/hr" },
      ],
    },
  ];

  // Tab 2: Outstation (Round Trip) (From Image)
  const outstationPlans: VehiclePlan[] = [
    {
      name: "Sedan",
      category: "Comfortable 4-Seater AC",
      rates: [
        { label: "Rate", value: "₹12/km" },
        { label: "Driver", value: "₹300/day" },
        { label: "Night Halt", value: "₹300" },
      ],
    },
    {
      name: "Ertiga",
      category: "Spacious 6-Seater Family MUV",
      rates: [
        { label: "Rate", value: "₹15/km" },
        { label: "Driver", value: "₹400/day" },
        { label: "Night Halt", value: "₹400" },
      ],
    },
    {
      name: "Innova",
      category: "Luxury 7-Seater Chauffeur",
      isPopular: true,
      rates: [
        { label: "Rate", value: "₹20/km" },
        { label: "Driver", value: "₹500/day" },
        { label: "Night Halt", value: "₹500" },
      ],
    },
  ];

  // Tab 3: Local Hourly (Flexible hourly city packages)
  const localHourlyPlans: VehiclePlan[] = [
    {
      name: "Sedan",
      category: "Dzire / Etios AC",
      rates: [
        { label: "4 Hrs / 40 Km", value: "₹1,299" },
        { label: "8 Hrs / 80 Km", value: "₹2,500" },
        { label: "12 Hrs / 120 Km", value: "₹3,499" },
        { label: "Extra Km", value: "₹12/km" },
        { label: "Extra Hour", value: "₹200/hr" },
      ],
    },
    {
      name: "Ertiga",
      category: "6+1 Seater SUV",
      rates: [
        { label: "4 Hrs / 40 Km", value: "₹1,699" },
        { label: "8 Hrs / 80 Km", value: "₹3,000" },
        { label: "12 Hrs / 120 Km", value: "₹3,899" },
        { label: "Extra Km", value: "₹15/km" },
        { label: "Extra Hour", value: "₹250/hr" },
      ],
    },
    {
      name: "Innova",
      category: "7+1 Innova Crysta",
      isPopular: true,
      rates: [
        { label: "4 Hrs / 40 Km", value: "₹2,199" },
        { label: "8 Hrs / 80 Km", value: "₹3,500" },
        { label: "12 Hrs / 120 Km", value: "₹4,800" },
        { label: "Extra Km", value: "₹18/km" },
        { label: "Extra Hour", value: "₹300/hr" },
      ],
    },
  ];

  const currentPlans =
    activeTab === "nashik-local"
      ? nashikLocalPlans
      : activeTab === "outstation"
      ? outstationPlans
      : localHourlyPlans;

  const currentTabTitle =
    activeTab === "nashik-local"
      ? "Nashik Local Packages"
      : activeTab === "outstation"
      ? "Outstation (Round Trip)"
      : "Local Hourly Packages";

  const currentSubtitle =
    activeTab === "outstation"
      ? "Minimum Billing: 300 km/day"
      : activeTab === "nashik-local"
      ? "Fixed transparent pricing for city sightseeing & business travel"
      : "Flexible hourly rentals for city shopping, meetings & short trips";

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#0d1017] relative overflow-hidden border-b border-[#23293a]/70">
      {/* Ambient decorative glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#f26522]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#f59e0b]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#161c2b] border border-[#23293a] text-[11px] font-extrabold uppercase tracking-widest text-[#f59e0b] shadow-inner font-heading">
            <Sparkles className="w-3 h-3 text-[#f26522]" />
            <span>Transparent Pricing</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading tracking-tight">
            Get Your <span className="text-[#f59e0b]">Fare Estimate</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-sans">
           Enjoy clear and affordable cab rates with transparent pricing and no hidden charges.
          </p>
        </div>

        {/* 3 Main Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-[860px] w-full mx-auto mb-5 p-1.5 bg-[#131722] border border-[#23293a] rounded-[5px] shadow-xl">
          {[
            { id: "nashik-local" as TabKey, label: "Nashik Local Packages" },
            { id: "outstation" as TabKey, label: "Outstation (Round Trip)" },
            { id: "local-hourly" as TabKey, label: "Local Hourly" },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[130px] sm:min-w-[160px] lg:min-w-[200px] py-2.5 lg:py-3 px-3 sm:px-4 lg:px-6 rounded-[5px] font-heading text-xs sm:text-xs lg:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 text-center cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-[#f26522] to-[#f59e0b] text-black shadow-lg shadow-[#f26522]/20 font-black scale-[1.01]"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Tab Heading & Subtitle Banner */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="text-center my-8 space-y-0.5"
        >
          <h3 className="text-lg sm:text-xl font-black text-[#f26522] uppercase font-heading tracking-tight">
            {currentTabTitle}
          </h3>
          <p className="text-xs text-gray-400 font-sans font-medium">
            {currentSubtitle}
          </p>
        </motion.div>

        {/* 3 Vehicle Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-5"
          >
            {currentPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-[5px] p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg relative overflow-hidden group ${
                  plan.isPopular
                    ? "bg-[#161c2c] border-2 border-[#f26522] shadow-[#f26522]/10"
                    : "bg-[#131722] border border-[#23293a] hover:border-[#f59e0b]/50"
                }`}
              >
                {/* Popular Pill */}
                {plan.isPopular && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#f26522] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="border-b border-[#23293a] pb-3 mb-3 text-center">
                    <div className="w-9 h-9 mx-auto rounded-xl bg-[#0b0e14] border border-[#23293a] flex items-center justify-center text-[#f59e0b] mb-1.5 group-hover:scale-105 transition-transform">
                      <span className="icon-car text-xl" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight">
                      {plan.name}
                    </h4>
                    <p className="text-[11px] text-gray-400 font-sans mt-0.5">
                      {plan.category}
                    </p>
                  </div>

                  {/* Pricing Rows */}
                  <div className="space-y-2 py-1">
                    {plan.rates.map((rate, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-center justify-between py-1 border-b border-[#23293a]/60 last:border-0 text-xs font-sans"
                      >
                        <span className="text-gray-300 font-medium">{rate.label}</span>
                        <span className="font-extrabold text-white font-heading text-sm group-hover:text-[#f59e0b] transition-colors">
                          {rate.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action Button */}
                <div className="pt-3.5 mt-2.5 border-t border-[#23293a]">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className={`w-full inline-flex items-center justify-center gap-1.5 font-extrabold text-[15px] py-2.5 px-3 rounded-[5px] transition-all duration-200 font-heading shadow-md cursor-pointer ${
                      plan.isPopular
                        ? "bg-gradient-to-r from-[#f26522] to-[#f59e0b] hover:from-[#e05413] hover:to-[#e89100] text-black"
                        : "bg-[#1b2234] hover:bg-[#f59e0b] text-gray-200 hover:text-black"
                    }`}
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Book {plan.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Important Notes Section (Compact) */}
        <div className="bg-[#131722] border border-[#23293a] rounded-[5px] p-3.5 sm:p-4 shadow-md relative overflow-hidden mb-3 mt-8">
          <div className="flex items-center gap-2 mb-5 mt-2">
            <div className="w-6 h-6 rounded-md bg-[#f26522]/15 border border-[#f26522]/30 flex items-center justify-center text-[#f26522]">
              <Info className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-xs sm:text-sm font-black text-[#f26522] font-heading tracking-tight uppercase">
              Important Notes
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs text-gray-300 font-sans">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
              <span>Outstation min billing: <strong>300 km/day</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
              <span>Garage-to-Garage charges apply</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
              <span>Night Charges: <strong>₹500</strong> (10 PM – 6 AM)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
              <span>Rates depend on fuel & availability</span>
            </div>
          </div>
        </div>

        {/* Footer Brand Statement */}
        <div className="text-center">
          <p className="text-[11px] sm:text-xs text-gray-400 font-sans">
            Thank you for riding with{" "}{" "}
            <span className="font-extrabold text-white font-heading">
              Budget Cab Services
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
