"use client";

import { motion } from "framer-motion";
import { PhoneCall, MessageSquare, Mail, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

const contactChannels = [
  {
    icon: PhoneCall,
    title: "Nasik Office",
    subtitle: "24/7 Support & Booking",
    primary: "+91 98606 89292",
    secondary: "Available round the clock",
    actionText: "Call Nasik Office",
    href: "tel:+919860689292",
    badge: "Main Hub",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    gradient: "from-orange-500/20 via-[#f26522]/10 to-transparent",
    iconBg: "bg-gradient-to-br from-[#f26522] to-[#ff7d3b] text-white shadow-orange-500/30",
  },
  {
    icon: PhoneCall,
    title: "Mumbai Office",
    subtitle: "24/7 Support & Booking",
    primary: "+91 91450 09000, +91 78409 82340",
    secondary: "+91 98908 88792",
    actionText: "Call Mumbai Office",
    href: "tel:+919145009000",
    badge: "Branch Office",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    gradient: "from-emerald-500/20 via-emerald-600/10 to-transparent",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/30",
  },
  {
    icon: Mail,
    title: "Email Support",
    subtitle: "For Quotes & Enquiries",
    primary: "info@budgetcabsservices.com",
    secondary: "We reply within 24 hours",
    actionText: "Send an Email",
    href: "mailto:info@budgetcabsservices.com",
    badge: "Online Support",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    gradient: "from-blue-500/20 via-indigo-600/10 to-transparent",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-blue-500/30",
  },
  {
    icon: MapPin,
    title: "Our Locations",
    subtitle: "Nasik & Mumbai",
    primary: "Hotel Sai Pritam Laxmi Complex, Nashik",
    secondary: "Poonam Nagar, Andheri East, Mumbai",
    actionText: "View on Map",
    href: "#map-section",
    badge: "Visit Us",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-amber-500/30",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="relative py-12 md:py-16 bg-[#0b0e14]">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial-gradient from-[#f26522]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight font-heading">
            Get in touch <span className="text-[#f26522]">with us</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-normal">
Need help with your ride? Contact us anytime for quick and reliable assistance.          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {contactChannels.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative bg-[#131722]/90 hover:bg-[#161c2b] border border-[#23293a] hover:border-[#f26522]/40 rounded-[5px] p-6 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#f26522]/10 backdrop-blur-sm"
              >
                {/* Accent Top Border Glow */}
                <div
                  className={`absolute inset-0 rounded-[5px] bg-gradient-to-b ${channel.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 space-y-4">
                  {/* Top Header: Icon & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`w-12 h-12 rounded-[5px] ${channel.iconBg} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${channel.badgeColor}`}
                    >
                      {channel.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#f26522] transition-colors">
                      {channel.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">{channel.subtitle}</p>
                  </div>

                  {/* Primary & Secondary Details */}
                  <div className="space-y-1 pt-1 border-t border-[#23293a]/80">
                    <div className="text-sm font-semibold text-gray-100 break-words line-clamp-2">
                      {channel.primary}
                    </div>
                    <div className="text-xs text-gray-400 break-words">
                      {channel.secondary}
                    </div>
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="relative z-10 pt-5 mt-4 border-t border-[#23293a]/60">
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#f26522] group-hover:text-white transition-colors"
                  >
                    <span>{channel.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guaranteed Support Banner */}
        <div className="mt-8 p-4 rounded-[5px] bg-[#131722]/60 border border-[#23293a] flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-gray-300">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Live Central Dispatch:</span>
            <span>Operating 24 hours / 7 days across India</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <ShieldCheck className="w-4 h-4 text-[#f26522]" />
            <span>100% Verified Drivers & Sanitized Cabs</span>
          </div>
        </div>

      </div>
    </section>
  );
}
