import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/about/PageHeader";
import HeroSearchForm from "@/components/home/HeroSearchForm";
import { SITE_CONFIG } from "@/constants/siteConfig";

export const metadata: Metadata = {
  title: "Mumbai to Nashik Taxi & Trimbakeshwar Cab | Budget Cab Services",
  description:
    "Book Mumbai to Nashik taxi, Trimbakeshwar Jyotirlinga cab and Shirdi taxi. Request Nashik airport, railway station, sightseeing and outstation trips on WhatsApp.",
  keywords: [
    "Nashik taxi service", "Nashik cab service", "Nashik outstation taxi", "Nashik to Mumbai taxi",
    "Mumbai to Nashik taxi", "Mumbai to Nashik cab service", "Nashik airport taxi service",
    "Nashik railway station taxi", "Nashik sightseeing taxi", "Nashik Jyotirlinga taxi service",
    "Jyotirlinga taxi service", "Jyotirlinga darshan taxi", "Nashik to Trimbakeshwar taxi",
    "Trimbakeshwar taxi service", "Trimbakeshwar Jyotirlinga taxi", "Mumbai to Trimbakeshwar taxi",
    "Nashik to Shirdi taxi", "Mumbai to Shirdi taxi", "Shirdi taxi service", "Mumbai outstation cab service",
    "Mumbai outstation taxi service", "Nashik outstation cab service",
  ],
  alternates: { canonical: "/mumbai-outstation-cabs" },
  openGraph: {
    title: "Mumbai to Nashik Taxi & Trimbakeshwar Cab",
    description: "Request Mumbai, Nashik, Shirdi and Trimbakeshwar outstation taxi service on WhatsApp.",
    url: "/mumbai-outstation-cabs",
    type: "website",
  },
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
  ["Nashik to Trimbakeshwar", "Trimbakeshwar Jyotirlinga taxi service"],
  ["Nashik Airport & Railway Station", "Nashik airport taxi service and Nashik railway station taxi"],
];

const faqs = [
  { question: "Can I book a Mumbai to Nashik taxi or Nashik to Mumbai taxi?", answer: "Yes. Use the booking form to share your pickup, drop and travel date. The request opens WhatsApp with your trip details so the team can confirm vehicle availability and a quote." },
  { question: "Do you provide Nashik to Trimbakeshwar taxi service?", answer: "Yes. A Trimbakeshwar taxi can be requested for temple darshan from Nashik, Mumbai or another pickup point. Please include your preferred pickup time and return plan when booking." },
  { question: "Can I request a Nashik airport or Nashik Road railway station taxi?", answer: "Yes. Select airport transfer or enter Nashik Airport (Ozar) or Nashik Road Railway Station in the form. Share the flight or train timing on WhatsApp for pickup coordination." },
  { question: "Is a Mumbai to Shirdi or Nashik to Shirdi cab available?", answer: "You can request a one-way or round-trip cab for Shirdi. Availability and the final itinerary are confirmed by the booking team before travel." },
];

export default function MumbaiOutstationCabsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": ["LocalBusiness", "TaxiService"], "@id": "https://budget-cab-services.vercel.app/#business", name: SITE_CONFIG.name, url: "https://budget-cab-services.vercel.app/", telephone: SITE_CONFIG.phone, email: SITE_CONFIG.email, address: { "@type": "PostalAddress", streetAddress: SITE_CONFIG.address_nasik, addressLocality: "Nashik", addressRegion: "Maharashtra", postalCode: "422011", addressCountry: "IN" }, areaServed: ["Mumbai", "Nashik", "Shirdi", "Trimbakeshwar"], sameAs: [SITE_CONFIG.socials.instagram, SITE_CONFIG.socials.youtube] },
      { "@type": "Organization", "@id": "https://budget-cab-services.vercel.app/#organization", name: SITE_CONFIG.name, url: "https://budget-cab-services.vercel.app/", telephone: SITE_CONFIG.phone, email: SITE_CONFIG.email },
      { "@type": "WebSite", "@id": "https://budget-cab-services.vercel.app/#website", url: "https://budget-cab-services.vercel.app/", name: SITE_CONFIG.name, publisher: { "@id": "https://budget-cab-services.vercel.app/#organization" } },
      { "@type": "WebPage", "@id": "https://budget-cab-services.vercel.app/mumbai-outstation-cabs#webpage", url: "https://budget-cab-services.vercel.app/mumbai-outstation-cabs", name: "Mumbai to Nashik Taxi & Trimbakeshwar Cab Service", description: "Mumbai, Nashik, Shirdi and Trimbakeshwar outstation cab bookings.", isPartOf: { "@id": "https://budget-cab-services.vercel.app/#website" }, about: { "@id": "https://budget-cab-services.vercel.app/#business" } },
      { "@type": "Service", name: "Mumbai, Nashik and Trimbakeshwar Outstation Taxi Service", provider: { "@id": "https://budget-cab-services.vercel.app/#business" }, areaServed: ["Mumbai", "Nashik", "Trimbakeshwar", "Shirdi"], serviceType: "Outstation taxi, airport transfer and local sightseeing taxi" },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://budget-cab-services.vercel.app/" }, { "@type": "ListItem", position: 2, name: "Mumbai Outstation Cabs", item: "https://budget-cab-services.vercel.app/mumbai-outstation-cabs" }] },
      { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
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
          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-8 items-start">
          <div>
            <p className="text-[#f59e0b] font-bold tracking-[0.18em] uppercase text-xs">Budget Cab Services</p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">Mumbai to Nashik, Shirdi &amp; Trimbakeshwar Taxi Service</h1>
            <p className="mt-5 text-gray-300 leading-relaxed text-base sm:text-lg">Planning an outstation trip from Mumbai or Nashik? Our Mumbai outstation cab service supports one-way and round-trip travel for business, family visits, airport transfers and temple journeys. Request a Mumbai to Nashik taxi, Nashik to Mumbai taxi, Shirdi cab or Trimbakeshwar taxi service with your preferred pickup time.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${SITE_CONFIG.phone}`} className="rounded-xl bg-gradient-to-r from-[#f26522] to-[#f59e0b] px-5 py-3 text-sm font-extrabold text-black">Call to Book: {SITE_CONFIG.phone}</a>
              <Link href="/cab-booking" className="rounded-xl border border-[#f59e0b]/70 px-5 py-3 text-sm font-bold text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black transition-colors">Book Your Cab</Link>
            </div>
          </div>
          <div className="rounded-3xl border border-[#f59e0b]/30 bg-[#10141e]/95 p-4 sm:p-5 shadow-2xl"><HeroSearchForm compact /><p className="px-2 pb-1 text-center text-xs text-gray-400">Your trip details open in WhatsApp for a booking quote.</p><div className="mx-2 mt-4 border-t border-[#263048] pt-4 text-center"><h2 className="font-heading text-sm font-extrabold text-white">Customer reviews</h2><p className="mt-1 text-xs leading-relaxed text-gray-400">Verified customer feedback can be added here when it is available. We do not publish unverified ratings or review totals.</p></div></div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#10141e] border-y border-[#23293a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div><p className="text-[#f59e0b] font-bold uppercase tracking-[0.16em] text-xs">Pilgrimage travel</p><h2 className="mt-2 text-2xl sm:text-3xl font-extrabold font-heading text-white">Jyotirlinga taxi service for Trimbakeshwar darshan</h2><p className="mt-4 text-gray-300 leading-relaxed">Trimbakeshwar Jyotirlinga is a popular temple visit from Nashik and Mumbai. Share your starting point, darshan plan and return preference to request a Nashik to Trimbakeshwar taxi or Mumbai to Trimbakeshwar taxi. For Nashik to Shirdi taxi and Mumbai to Shirdi taxi requests, the team can help you plan a comfortable outstation journey around your schedule.</p><p className="mt-4 text-gray-400 leading-relaxed">For a wider Jyotirlinga tour, tell the team the temples and dates you intend to visit. Multi-stop transport is confirmed only after itinerary and vehicle availability are checked; no fixed 12 Jyotirlinga tour package is represented on this page.</p></div>
          <aside className="rounded-3xl border border-[#263048] bg-[#0b0e14] p-6"><h3 className="font-heading font-extrabold text-white text-xl">Nashik taxi services to request</h3><ul className="mt-4 space-y-3 text-sm text-gray-300"><li>• Nashik Airport (Ozar) taxi service</li><li>• Nashik Road Railway Station taxi pickup</li><li>• Nashik sightseeing taxi for local travel</li><li>• Nashik outstation cab service for Mumbai, Shirdi and Trimbakeshwar</li></ul><a href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`} className="inline-block mt-6 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-extrabold text-[#062d12]">Ask on WhatsApp</a></aside>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-[#f59e0b] font-bold uppercase tracking-[0.16em] text-xs">Booking help</p><h2 className="mt-2 text-2xl sm:text-3xl font-extrabold font-heading text-white">Mumbai, Nashik &amp; Jyotirlinga taxi FAQs</h2><div className="mt-7 space-y-4">{faqs.map((faq) => <article key={faq.question} className="rounded-2xl border border-[#263048] bg-[#131722] p-5"><h3 className="font-bold text-white">{faq.question}</h3><p className="mt-2 text-sm leading-relaxed text-gray-400">{faq.answer}</p></article>)}</div></div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-7">
          <div className="rounded-3xl bg-[#131722] border border-[#263048] p-6 sm:p-8">
            <p className="text-[#f59e0b] font-bold uppercase tracking-[0.16em] text-xs">Follow our journeys</p><h2 className="mt-2 text-2xl sm:text-3xl font-extrabold font-heading text-white">Connect with Budget Cab Services</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">See travel updates, customer moments and cab service information on Instagram and YouTube. Scan the Instagram code or use the links below.</p>
            <div className="mt-6 flex gap-3 flex-wrap"><a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#e4405f] px-4 py-2.5 text-sm font-bold text-white">Instagram</a><a href={SITE_CONFIG.socials.youtube} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#ff0000] px-4 py-2.5 text-sm font-bold text-white">YouTube</a></div>
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
