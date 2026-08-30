"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Users, HeartHandshake, MapPin, Car } from "lucide-react";

export default function CabHighlights() {
 const highlights = [
  {
    icon: Users,
    value: "1000+",
    label: "Happy Customers",
  },
  {
    icon: MapPin,
    value: "80K+",
    label: "Kilometers Travelled",
  },
  {
    icon: Car,
    value: "15K+",
    label: "Successful Rides",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Cab Availability",
  },
];

  const guarantees = [
    {
      title: "No Hidden Costs",
      desc: "Toll, driver allowance, and GST clarity upfront with no surprise surcharges.",
      icon: HeartHandshake,
    },
    {
      title: "Doorstep Pickup & Drop",
      desc: "Direct pickup from your exact location, hotel, home, or airport terminal.",
      icon: MapPin,
    },
    {
      title: "Verified Pro Chauffeurs",
      desc: "Background checked, experienced highway drivers with courteous etiquette.",
      icon: Award,
    },
  ];

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-[#080b10] relative overflow-hidden border-y border-[#23293a]/70">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f26522]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#111622]/90 border border-[#F26522]/50 hover:border-[#f59e0b]/60 rounded-[5px] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#f59e0b]/5 group relative overflow-hidden text-center sm:text-left"
              >
                <div className="w-12 h-12 rounded-[5px] bg-[#161d2d] border border-[#2a3449] group-hover:border-[#f59e0b] group-hover:bg-[#f59e0b] flex items-center justify-center text-[#f59e0b] group-hover:text-black transition-all mb-4 mx-auto sm:mx-0 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight mb-1 group-hover:text-[#f59e0b] transition-colors">
                  {item.value}
                </h3>
                <p className="text-sm font-500 text-gray-400 font-heading mb-1.5">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantees Row */}
        <div className="bg-[#131722] border border-[#23293a] rounded-[5px] p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((g, idx) => {
              const Icon = g.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-[5px] bg-[#0b0e14] border border-[#F26522]/50 flex items-center justify-center text-[#f26522] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-white font-heading mb-1">
                      {g.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                      {g.desc}
                    </p>
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
