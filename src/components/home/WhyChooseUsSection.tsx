"use client";

import Link from "next/link";
import { ArrowRight, Users, Navigation, CheckCircle2, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function WhyChooseUsSection() {
  const stats = [
    {
      value: "1000+",
      label: "Happy Customers",
      icon: Users,
      bgClass: "bg-[#f26522] text-white border-[#f26522]",
      textClass: "text-white/90",
    },
    {
      value: "80k+",
      label: "Kilometers Travelled",
      icon: Navigation,
      bgClass: "bg-[#131722] text-white border-[#23293a]",
      textClass: "text-gray-400",
    },
    {
      value: "15K+",
      label: "Successful Rides",
      icon: CheckCircle2,
      bgClass: "bg-[#f26522] text-white border-[#f26522]",
      textClass: "text-white/90",
    },
    {
      value: "24/7",
      label: "Cab Availability",
      icon: Award,
      bgClass: "bg-[#131722] text-white border-[#23293a]",
      textClass: "text-gray-400",
    },
  ];

  return (
    <section className="pt-5 pb-10 lg:pt-10 lg:pb-25 bg-[#0b0e14] relative">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Feature Box */}
          <div className="lg:col-span-5 bg-[#131722] border border-[#23293a] rounded-3xl p-6 sm:p-10 flex flex-col justify-between space-y-6 sm:space-y-8 relative overflow-hidden text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#f26522] block text-center lg:text-left">
                WHY CHOOSE US?
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white leading-tight font-heading text-center lg:text-left">
                WE ARE COMMITTED TO YOUR SATISFACTION
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed font-medium text-center lg:text-left">
              We provide safe, reliable, and affordable cab services with professional drivers, well-maintained vehicles, transparent pricing, and on-time service.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link href="/cab-services">
                <Button variant="primary" size="md" className="flex items-center gap-2">
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right 2x2 Stats Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 border flex flex-col justify-between space-y-3 sm:space-y-4 shadow-xl transition-transform hover:-translate-y-1 ${stat.bgClass}`}
                >
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black block tracking-tight">
                      {stat.value}
                    </span>
                    <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider block mt-0.5 sm:mt-1 ${stat.textClass}`}>
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
