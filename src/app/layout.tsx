import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Syne } from "next/font/google";
import "./globals.css";
import "@/styles/icomoon.css";
import { SITE_CONFIG } from "@/constants/siteConfig";
import ScrollToTop from "@/components/ui/ScrollToTop";

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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${plusJakartaSans.variable} ${outfit.variable} ${syne.variable} scroll-smooth dark`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body suppressHydrationWarning className="bg-prime-dark text-gray-100 min-h-screen font-sans selection:bg-prime-orange selection:text-white">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

