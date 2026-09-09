import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/about/PageHeader";
import { SITE_CONFIG } from "@/constants/siteConfig";

export const metadata: Metadata = {
  title: "Mumbai to Nashik, Shirdi & Trimbakeshwar Cab Service | Budget Cab Services",
  description:
    "Book a reliable Mumbai to Nashik, Shirdi, Trimbakeshwar, Igatpuri, Ozar, Saputara and Aurangabad taxi. 24/7 outstation cab service from Budget Cab Services.",
  keywords: [
    "Mumbai Nashik taxi service", "Mumbai Nashik cab service", "Mumbai Trimbakeshwar taxi service",
    "Mumbai Shirdi cab service", "Mumbai Igatpuri taxi service", "Mumbai Ozar cab service",
    "Mumbai Saputara taxi service", "Mumbai Aurangabad cab service", "Nashik Shirdi taxi service", "Nashik Pune taxi service",
  ],
  alternates: { canonical: "/mumbai-outstation-cabs" },
};

const routes = [
  ["Mumbai to Nashik", "Mumbai Nashik taxi service & cab service"],
  ["Mumbai to Trimbakeshwar", "Mumbai Trimbakeshwar taxi service & cab service"],
  ["Mumbai to Shirdi", "Mumbai Shirdi taxi service & cab service"],
  ["Mumbai to Igatpuri", "Mumbai Igatpuri taxi service & cab service"],
  ["Mumbai to Deolali", "Mumbai Deolali taxi service & cab service"],
  ["Mumbai to Ozar", "Mumbai Ozar taxi service & cab service"],
  ["Mumbai to Saputara", "Mumbai Saputara taxi service & cab service"],
  ["Mumbai to Dhule", "Mumbai Dhule taxi service & cab service"],
  ["Mumbai to Manmad", "Mumbai Manmad taxi service & cab service"],
  ["Mumbai to Malegaon", "Mumbai Malegaon taxi service & cab service"],
  ["Mumbai to Aurangabad", "Mumbai Aurangabad taxi service & cab service"],
  ["Nashik to Shirdi", "Nashik Shirdi taxi service"],
  ["Nashik to Pune", "Nashik Pune taxi service"],
];

export default function MumbaiOutstationCabsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: SITE_CONFIG.name,
    url: "https://budgetcabsservices.com/mumbai-outstation-cabs",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    areaServed: ["Mumbai", "Nashik", "Shirdi", "Trimbakeshwar", "Igatpuri", "Saputara", "Aurangabad"],
    sameAs: [SITE_CONFIG.socials.instagram, SITE_CONFIG.socials.youtube],
  };

  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 overflow-x-hidden pt-[72px] md:pt-[110px]">
      <Header />
      <PageHeader
        title="Mumbai"
        highlightText="Outstation Cabs"
        tagline="Comfortable intercity taxi service for every journey, 24/7"
        bgImage="/images/backgrounds/page_bg.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Mumbai Outstation Cabs" }]}
      />

      <section className="relative py-14 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(242,101,34,0.12),transparent_28%),radial-gradient(circle_at_90%_70%,rgba(245,158,11,0.09),transparent_25%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#f59e0b] font-bold tracking-[0.18em] uppercase text-xs">Budget Cab Services</p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">Mumbai to Nashik, Shirdi &amp; Trimbakeshwar Taxi Service</h1>
            <p className="mt-5 text-gray-300 leading-relaxed text-base sm:text-lg">Planning an outstation trip from Mumbai or Nashik? Budget Cab Services provides convenient, clean and dependable cab booking for pilgrimage, business and leisure travel. Choose a one-way taxi or round trip and get support from our team at any time.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${SITE_CONFIG.phone}`} className="rounded-xl bg-gradient-to-r from-[#f26522] to-[#f59e0b] px-5 py-3 text-sm font-extrabold text-black">Call to Book: {SITE_CONFIG.phone}</a>
              <Link href="/cab-booking" className="rounded-xl border border-[#f59e0b]/70 px-5 py-3 text-sm font-bold text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black transition-colors">Book Your Cab</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#10141e] border-y border-[#23293a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div><p className="text-[#f59e0b] font-bold uppercase tracking-[0.16em] text-xs">Popular routes</p><h2 className="mt-2 text-2xl sm:text-3xl font-extrabold font-heading text-white">Book your preferred route</h2></div>
            <p className="max-w-md text-sm text-gray-400">Advance booking is recommended for airport pickups, weekend travel and temple visits.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {routes.map(([name, keyword]) => <article key={name} className="rounded-2xl bg-[#0b0e14] border border-[#252d40] p-5 hover:border-[#f26522] transition-colors">
              <h3 className="font-bold text-lg text-white">{name} Cab Service</h3><p className="mt-2 text-sm leading-relaxed text-gray-400">{keyword}. Request a comfortable outstation taxi for a safe, flexible journey.</p>
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-block mt-4 text-sm font-bold text-[#f59e0b]">Get a cab quote →</a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-7">
          <div className="rounded-3xl bg-[#131722] border border-[#263048] p-6 sm:p-8">
            <p className="text-[#f59e0b] font-bold uppercase tracking-[0.16em] text-xs">Follow our journeys</p><h2 className="mt-2 text-2xl sm:text-3xl font-extrabold font-heading text-white">Connect with Budget Cab Services</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">See travel updates, customer moments and cab service information on Instagram and YouTube. Scan the Instagram code or use the links below.</p>
            <div className="mt-6 flex gap-3 flex-wrap"><a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#e4405f] px-4 py-2.5 text-sm font-bold text-white">Instagram</a><a href={SITE_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#ff0000] px-4 py-2.5 text-sm font-bold text-white">YouTube</a></div>
            <div className="mt-8 pt-6 border-t border-[#263048]"><h3 className="font-bold text-white">Business trust</h3><p className="mt-2 text-sm text-gray-400">Budget Cab Service is a trademark application in Class 39 for taxi booking and transport services. View the supplied trade-mark record below.</p><Image src="/images/trust/budgetcab-trademark-record-2026.jpeg" alt="Budget Cab Service trademark application record" width={727} height={1447} className="mt-4 rounded-xl border border-[#263048] w-full max-w-sm" /></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 content-start">
            <figure className="rounded-3xl bg-white p-3 sm:p-4"><Image src="/images/trust/budgetcab-instagram-qr.jpeg" alt="Instagram QR code for Budget Cab Services" width={1080} height={1440} className="w-full h-auto rounded-2xl" /><figcaption className="p-2 text-center text-sm font-bold text-[#151515]">Scan to follow @budget_cab_services</figcaption></figure>
            <figure className="rounded-3xl bg-[#131722] border border-[#263048] p-3 sm:p-4"><Image src="/images/trust/budgetcab-phonepe-qr.jpeg" alt="PhonePe payment QR code for Budget Cab Services" width={691} height={1440} className="w-full h-auto rounded-2xl" /><figcaption className="p-2 text-center text-sm font-bold text-white">Secure PhonePe payment</figcaption></figure>
            <div className="sm:col-span-2 rounded-2xl border border-[#f59e0b]/30 bg-[#f59e0b]/5 p-5"><h3 className="font-heading font-extrabold text-white">Customer Reviews</h3><p className="mt-2 text-sm leading-relaxed text-gray-400">We are preparing Google Customer Reviews for Merchant Center ID 5558974858. Once enabled and eligible, Google may display verified store ratings in eligible placements.</p></div>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Footer />
    </main>
  );
}
