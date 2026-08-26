"use client";

import { useState } from "react";
import Link from "next/link";
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
  const { scrolled } = useScroll(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [searchOpen, setSearchOpen] = useState(false);

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
                +92 ( 8800 ) - 6780
              </span>
            </a>

            <span className="text-gray-600 hidden sm:inline">|</span>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 hover:text-[#f59e0b] transition-colors group"
            >
              <Mail className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
              <span className="font-bold text-gray-100 group-hover:text-[#f59e0b] transition-colors">
                support@gmail.com
              </span>
            </a>

            <span className="text-gray-600 hidden lg:inline">|</span>

            <div className="hidden lg:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
              <span className="font-bold text-gray-100">
                55 Main Street, 2nd block, Malborne ,Australia
              </span>
            </div>
          </div>

          {/* Right Social Icons (Login or Register REMOVED as requested) */}
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
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href={SITE_CONFIG.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded border border-[#23293a] bg-[#131722]/80 flex items-center justify-center text-gray-300 hover:border-[#f59e0b] hover:text-[#f59e0b] hover:bg-[#1a2030] transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded border border-[#23293a] bg-[#131722]/80 flex items-center justify-center text-gray-300 hover:border-[#f59e0b] hover:text-[#f59e0b] hover:bg-[#1a2030] transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded border border-[#23293a] bg-[#131722]/80 flex items-center justify-center text-gray-300 hover:border-[#f59e0b] hover:text-[#f59e0b] hover:bg-[#1a2030] transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-50  ${
          scrolled
            ? "bg-[#0b0e14]/95 backdrop-blur-md border-b border-[#23293a] py-3 shadow-2xl"
            : "bg-[#0b0e14]/85 backdrop-blur-sm border-b border-[#23293a]/40 py-4"
        }`}
      >
        {/* Slightly reduced nav container width as requested (max-w-[1240px]) */}
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo - Styled matching header screenshot */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#f26522] via-[#f59e0b] to-[#fbbf24] p-0.5 shadow-lg shadow-[#f59e0b]/20 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-[#0b0e14] rounded-[10px] flex items-center justify-center">
                    <Car className="w-6 h-6 text-[#f59e0b] group-hover:rotate-6 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-1 font-heading leading-none">
                  Go<span className="text-[#f59e0b]">rent</span>
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#f59e0b] leading-tight mt-0.5">
                  Booking Gorent
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = activeTab === link.label;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setActiveTab(link.label)}
                    className={`text-sm xl:text-base font-bold transition-all py-1 flex items-center gap-1.5 font-heading relative ${
                      isActive
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
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                className="p-2 text-gray-200 hover:text-[#f59e0b] transition-colors rounded-full hover:bg-white/5"
              >
                <Search className="w-5 h-5" />
              </button>

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
                    +236 (456) 896 22
                  </span>
                </div>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-[#131722] border border-[#23293a] text-gray-200 hover:text-[#f59e0b] focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Interactive Search Bar Popover */}
          {searchOpen && (
            <div className="mt-3 pt-3 border-t border-[#23293a] flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search cabs, locations, or services..."
                  className="w-full bg-[#131722] border border-[#23293a] rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#f59e0b]"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="px-3 py-2 text-xs font-semibold text-gray-400 hover:text-white"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden max-w-[1350px] mx-auto px-4 mt-3">
            <div className="bg-[#0b0e14]/95 backdrop-blur-xl border border-[#23293a] rounded-2xl p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2">
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeTab === link.label;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => {
                        setActiveTab(link.label);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl font-heading font-bold text-base transition-all ${
                        isActive
                          ? "bg-[#131722] text-[#f59e0b]"
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
                  <Phone className="w-5 h-5 fill-black" />
                  <span>Call +236 (456) 896 22</span>
                </a>

                {/* Mobile Info */}
                <div className="text-xs text-gray-400 space-y-1.5 pt-2 px-1 text-center">
                  <p>📍 55 Main Street, Malborne, Australia</p>
                  <p>✉️ support@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
