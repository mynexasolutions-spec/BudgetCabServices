"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Menu,
  X,
  Car,
  PhoneCall
} from "lucide-react";
import { useScroll } from "@/hooks/useScroll";
import { NAV_LINKS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/siteConfig";

export default function Header() {
  const pathname = usePathname();
  const { scrolled } = useScroll(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div
        className={`hidden md:block bg-[#0b0e14]/95 border-[#23293a] text-xs text-gray-300 transition-all duration-50 overflow-hidden ${
          scrolled ? "max-h-0 py-0 opacity-0 border-b-0" : "max-h-[200px] py-2 border-b opacity-100"
        }`}
      >
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          {/* Left Info Items */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-sans">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 hover:text-[#f59e0b] transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
              <span className="font-bold text-gray-100 group-hover:text-[#f59e0b] transition-colors">
                {SITE_CONFIG.phone}
              </span>
            </a>

            <span className="text-gray-600 hidden sm:inline">|</span>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 hover:text-[#f59e0b] transition-colors group"
            >
              <Mail className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
              <span className="font-bold text-gray-100 group-hover:text-[#f59e0b] transition-colors">
                {SITE_CONFIG.email}
              </span>
            </a>

            <span className="text-gray-600 hidden lg:inline">|</span>

          </div>

          {/* Right Social Icons */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              {/* Facebook */}
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded border border-[#23293a] bg-[#131722]/80 flex items-center justify-center text-gray-300 hover:border-[#f59e0b] hover:text-[#f59e0b] hover:bg-[#1a2030] transition-all"
              >
                <i className="fab fa-facebook text-xs sm:text-sm"></i>
              </a>
              {/* Instagram */}
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded border border-[#23293a] bg-[#131722]/80 flex items-center justify-center text-gray-300 hover:border-[#f59e0b] hover:text-[#f59e0b] hover:bg-[#1a2030] transition-all"
              >
                <i className="fab fa-instagram text-xs sm:text-sm"></i>
              </a>
              {/* YouTube */}
              <a
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded border border-[#23293a] bg-[#131722]/80 flex items-center justify-center text-gray-300 hover:border-[#f59e0b] hover:text-[#f59e0b] hover:bg-[#1a2030] transition-all"
              >
                <i className="fab fa-youtube text-xs sm:text-sm"></i>
              </a>
              {/* X / Twitter */}
              <a
                href={SITE_CONFIG.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded border border-[#23293a] bg-[#131722]/80 flex items-center justify-center text-gray-300 hover:border-[#f59e0b] hover:text-[#f59e0b] hover:bg-[#1a2030] transition-all"
              >
                <i className="fa-brands fa-x-twitter text-xs sm:text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-50  ${
          scrolled
            ? "bg-[#0b0e14]/95 backdrop-blur-md border-b border-[#23293a] py-1.2 sm:py-2 shadow-2xl"
            : "bg-[#0b0e14]/85 backdrop-blur-sm border-b border-[#23293a]/40 py-1.5 sm:py-2"
        }`}
      >
        {/* Slightly reduced nav container width as requested (max-w-[1240px]) */}
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center group shrink-0">
              <Image 
                src="/budget_logo.jpeg"
                alt="Budget Cab Services Logo" 
                width={300} 
                height={200}
                className="w-auto h-14 sm:h-16 lg:h-16 object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm xl:text-base font-bold transition-all py-1 flex items-center gap-1.5 font-heading relative ${
                      active
                        ? "text-[#f59e0b] border-b-2 border-[#f59e0b]"
                        : "text-gray-100 hover:text-[#f59e0b]"
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3.5">

              {/* (CART BUTTON REMOVED as requested) */}

              {/* Call Anytime Widget */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="hidden md:flex items-center gap-3 group px-3.5 py-1.5 rounded transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#f59e0b] flex items-center justify-center text-black font-bold shadow-md shadow-[#f59e0b]/20 group-hover:scale-105 transition-transform shrink-0">
                  <PhoneCall  className="w-4 h-4"  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] text-gray-400 font-medium leading-none">
                    Call Anytime
                  </span>
                  <span className="text-xs xl:text-sm font-extrabold text-white group-hover:text-[#f59e0b] transition-colors mt-0.5 font-heading">
                    {SITE_CONFIG.phone}
                  </span>
                </div>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-[5px] bg-[#131722] border border-[#23293a] text-gray-200 hover:text-[#f59e0b] focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>


        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden max-w-[1350px] mx-auto px-4 mt-3 pb-20">
            <div className="bg-[#0b0e14]/95 backdrop-blur-xl border border-[#23293a] rounded-2xl p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 h-[70vh] overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-[5px] font-heading font-bold text-base transition-all ${
                        active
                          ? "bg-[#131722] text-[#f59e0b] border-l-4 border-[#f59e0b] pl-3"
                          : "text-gray-200 hover:text-[#f59e0b] hover:bg-[#131722]/60"
                      }`}
                    >
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Call Widget inside Mobile Drawer */}
              <div className="pt-3 border-t border-[#23293a] flex flex-col gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#f26522] to-[#f59e0b] text-black font-extrabold px-4 py-3 rounded-xl hover:opacity-95 transition-all shadow-lg font-heading"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {SITE_CONFIG.phone}</span>
                </a>

                {/* Mobile Info */}
                <div className="text-xs text-gray-400 space-y-1.5 pt-2 px-1 text-center">
                  <p>📍 {SITE_CONFIG.address_nasik}</p>
                  <p>✉️ {SITE_CONFIG.email}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
