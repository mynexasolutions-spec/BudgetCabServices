"use client";

import Link from "next/link";
import { Car, PhoneCall, Mail, MapPin, Share2, Globe, MessageCircle, Send } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0b0e14] border-t border-[#23293a] text-gray-400 text-sm relative overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f26522] flex items-center justify-center text-white shadow-lg shadow-[#f26522]/30">
                <Car className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Prime<span className="text-[#f26522]">Cab</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: Share2, href: SITE_CONFIG.socials.facebook },
                { icon: Globe, href: SITE_CONFIG.socials.twitter },
                { icon: MessageCircle, href: SITE_CONFIG.socials.instagram },
                { icon: Send, href: SITE_CONFIG.socials.youtube },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#131722] border border-[#23293a] text-gray-300 hover:text-[#f26522] hover:border-[#f26522] flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#f26522] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {[
                "One Way Trip",
                "Round Trip",
                "Airport Transfer",
                "Outstation Travel",
                "Hourly Rental",
                "Corporate Travel",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-[#f26522] transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Contact Info
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm font-medium">
              <li className="flex items-start gap-3">
                <PhoneCall className="w-4 h-4 text-[#f26522] shrink-0 mt-0.5" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#f26522] shrink-0 mt-0.5" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#f26522] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-[#23293a] text-center text-xs text-gray-500 font-medium">
          <p>© {currentYear} {SITE_CONFIG.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
