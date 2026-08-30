import Header from "@/components/layout/Header";
import PageHeader from "@/components/about/PageHeader";
import FaqSection from "@/components/home/FaqSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Frequently Asked Questions | PrimeCab",
  description: "Find answers to popular questions about cab bookings, cancellation policies, fares, and toll charges.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 overflow-x-hidden pt-[72px] md:pt-[110px]">
      <Header />
      <PageHeader
        title="Frequently"
        highlightText="Asked Questions"
        tagline="Got Questions? We've Got Answers"
        bgImage="/images/backgrounds/page_bg.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQs" },
        ]}
      />
      <FaqSection />
      <Footer />
    </main>
  );
}
