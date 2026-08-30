import Header from "@/components/layout/Header";
import PageHeader from "@/components/about/PageHeader";
import CabServicesGrid from "@/components/services/CabServicesGrid";
import CabPricingEstimator from "@/components/services/CabPricingEstimator";
import CabHighlights from "@/components/services/CabHighlights";
import ProcessSection from "@/components/home/ProcessSection";
import FleetSlider from "@/components/home/FleetSlider";
import ReadyToBook from "@/components/home/ReadyToBook";
import TestimonialSection from "@/components/home/TestimonialSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Cab Services | Budget Cab Services Intercity, Airport & Local Taxi Rentals",
  description:
    "Book affordable outstation one-way cabs, round-trips, airport transfers, and local hourly rentals with verified professional chauffeurs across India.",
};

export default function CabServicesPage() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 overflow-x-hidden pt-[72px] md:pt-[110px]">
      <Header />
      
      {/* Page Header banner matching About Us style */}
      <PageHeader
        title="Cab"
        highlightText="Services"
        tagline="Safe, Fast & Reliable Rides 24/7"
        bgImage="/images/backgrounds/page_bg.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cab Services" },
        ]}
      />

      {/* Our Services, 6 Premium Services Grid & Why Choose Us */}
      <CabServicesGrid />

      {/* Interactive Live Fare Calculator */}
      <div id="estimator">
        <CabPricingEstimator />
      </div>

      {/* Trust & Safety Highlights & Guarantees */}
      <CabHighlights />

      {/* 4-Step Booking Process */}
      <ProcessSection />

      {/* Ready To Book CTA Banner */}
      <ReadyToBook />

      {/* Premium Car Fleet Showcase */}
      <FleetSlider />

      {/* Why Choose PrimeCab Services */}
      {/* <WhyChooseUsSection /> */}

      {/* Verified Passenger Testimonials */}
      <TestimonialSection />

      {/* Newsletter Subscription */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
