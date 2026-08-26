import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Syne } from "next/font/google";
import "./globals.css";
import "@/styles/icomoon.css";
import { SITE_CONFIG } from "@/constants/siteConfig";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} - Premium Cab & Taxi Booking Service`,
  description: SITE_CONFIG.description,
  keywords: "PrimeCab, taxi booking, car rental, outstation cabs, airport transfer, cab service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} ${syne.variable} scroll-smooth dark`}>
      <body className="bg-prime-dark text-gray-100 min-h-screen font-sans selection:bg-prime-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}

