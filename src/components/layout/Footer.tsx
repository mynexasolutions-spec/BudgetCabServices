"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  PhoneCall,
  ShieldCheck,
  Building2,
  Clock,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Cab Services", href: "/cab-services" },
    { name: "Book Your Cab", href: "/cab-booking" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Payment", href: "/payment" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Cancellation Policy", href: "/terms-and-conditions#cancellation" },
  ];

  const mumbaiPhones = [
    { display: "+91 89759 00092", raw: "+918975900092" },
    { display: "+91 91450 09000", raw: "+919145009000" },
    { display: "+91 81495 32340", raw: "+918149532340" },
    { display: "+91 98908 88792", raw: "+919890888792" },
  ];

  return (
    <footer
      id="contact"
      className="bg-[#07090e] border-t border-[#1e2536] text-gray-300 font-heading text-sm sm:text-base relative overflow-hidden"
      style={{ fontFamily: 'var(--font-outfit), Outfit, "Outfit Fallback", sans-serif' }}
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#f26522]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Top Compact Brand & Trust Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-6 border-b border-[#1b2130] gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-block shrink-0">
              <Image
                src="/budget_logo.jpeg"
                alt="Budget Cab Services Logo"
                width={240}
                height={160}
                className="w-auto h-12 sm:h-14 object-contain"
              />
            </Link>
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121622] border border-[#232b3e] text-xs font-semibold text-amber-400">
              <Sparkles className="w-4 h-4 text-[#f26522]" />
              <span>Est. 2010 • Trusted Cab Partner</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121724] border border-[#222a3d] text-gray-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-gray-400">GST NO:</span>
              <strong className="text-white font-bold">{SITE_CONFIG.gst}</strong>
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121724] border border-[#222a3d] text-gray-200">
              <Clock className="w-4 h-4 text-[#f26522]" />
              <span className="font-medium">24/7 Available</span>
            </span>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Column 1: Quick Links (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-heading text-base sm:text-lg font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f26522]" />
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 pt-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-[#f26522] transition-colors py-1 px-1.5 rounded hover:bg-[#121622] font-medium"
                >
                  <span className="text-[#f26522] group-hover:translate-x-0.5 transition-transform text-xs">›</span>
                  <span className="truncate">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Nasik Office (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-3 bg-[#0d1017] p-4 sm:p-5 rounded-xl border border-[#1b2232]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1b2232]">
              <h3 className="font-heading text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#f26522]" />
                Nasik Office
              </h3>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#f26522]/10 text-[#f26522] border border-[#f26522]/20">
                Head Office
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#f26522] shrink-0 mt-1" />
                <span>
                  Hotel Sai Pritam Laxmi Complex Shop Number 1 Wadala Naka near Dwarka Circle Nashik, Maharashtra - 422011
                </span>
              </p>

              <div className="pt-1">
                <a
                  href="tel:+919860689292"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#141924] border border-[#232b3d] text-white hover:border-[#f26522] hover:text-[#f26522] transition-all font-semibold text-xs sm:text-sm group"
                >
                  <PhoneCall className="w-4 h-4 text-[#f26522] group-hover:scale-110 transition-transform" />
                  <span>+91 98606 89292</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Mumbai Office (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-3 bg-[#0d1017] p-4 sm:p-5 rounded-xl border border-[#1b2232]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1b2232]">
              <h3 className="font-heading text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                Mumbai Office
              </h3>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                Branch Office
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>
                  R-2, &apos;D&apos;wing, 16, Plot No. 175, near Poonam Nagar, Mazas Vilg, Andheri East, Mumbai, Maharashtra - 400093
                </span>
              </p>

              <div className="grid grid-cols-2 gap-2 pt-0.5">
                {mumbaiPhones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={`tel:${phone.raw}`}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#141924] border border-[#232b3d] text-gray-200 hover:border-amber-400 hover:text-amber-400 transition-colors text-xs font-semibold"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{phone.display}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Social Bar */}
        <div className="mt-8 pt-6 border-t border-[#181e2b] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs sm:text-sm text-gray-400">
          <div>
            <p className="font-semibold text-gray-300">
              © 2010 Budget Cab Services | All rights Reserved | GST NO. {SITE_CONFIG.gst}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            {[
              { iconClass: "fab fa-facebook", href: SITE_CONFIG.socials.facebook, title: "Facebook" },
              { iconClass: "fab fa-instagram", href: SITE_CONFIG.socials.instagram, title: "Instagram" },
              { iconClass: "fab fa-youtube", href: SITE_CONFIG.socials.youtube, title: "YouTube" },
              { iconClass: "fa-brands fa-x-twitter", href: SITE_CONFIG.socials.twitter, title: "X (Twitter)" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
                className="w-8 h-8 rounded-lg bg-[#111520] border border-[#1e2535] text-gray-300 hover:text-[#f26522] hover:border-[#f26522] flex items-center justify-center transition-all"
              >
                <i className={`${item.iconClass} text-sm`} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
