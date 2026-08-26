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
      value: "10M+",
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
      value: "50K+",
      label: "Trusted Users",
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
          <div className="lg:col-span-5 bg-[#131722] border border-[#23293a] rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#f26522]">
                WHY CHOOSE US?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white leading-tight">
                WE ARE COMMITTED TO YOUR SATISFACTION
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">
                We ensure peak vehicle cleanliness, verified professional drivers, and 100% transparent pricing with zero hidden surcharges.
              </p>
            </div>

            <div>
              <Link href="/services">
                <Button variant="primary" size="md" className="flex items-center gap-2">
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right 2x2 Stats Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-3xl p-8 border flex flex-col justify-between space-y-4 shadow-xl transition-transform hover:-translate-y-1 ${stat.bgClass}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-4xl font-black block tracking-tight">
                      {stat.value}
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-wider ${stat.textClass}`}>
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
