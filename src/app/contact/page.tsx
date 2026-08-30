import Header from "@/components/layout/Header";
import PageHeader from "@/components/about/PageHeader";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMap from "@/components/contact/ContactMap";
import NewsletterSection from "@/components/home/NewsletterSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Contact Us & Book | Budget Cab Services 24/7 Support",
  description:
    "Get in touch with Budget Cab Services for 24/7 outstation cabs, airport transfers, corporate fleet bookings, and customer support. Transparent pricing and immediate assistance.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 overflow-x-hidden pt-[72px] md:pt-[110px]">
      <Header />
      
      {/* Visual Page Header with Breadcrumbs */}
      <PageHeader
        title="Contact"
        highlightText="Us"
        tagline="24/7 Dedicated Support & Instant Bookings"
        bgImage="/images/backgrounds/page_bg.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* Top 4 Quick Interactive Contact Channels */}
      <ContactInfoCards />

      {/* Main Interactive Contact & Booking Inquiry Form + Live Dispatch Desk */}
      <ContactFormSection />


      {/* Interactive Headquarters Location Map */}
      <ContactMap />



      {/* Newsletter Subscription */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
