import Header from "@/components/layout/Header";
import PageHeader from "@/components/about/PageHeader";
import AboutUsSection from "@/components/about/AboutUsSection";
import ReadyToBook from "@/components/home/ReadyToBook";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/home/ServicesSection";

export const metadata = {
  title: "About Us | PrimeCab Premium Cab Services",
  description: "Learn more about PrimeCab's mission, experienced drivers, and 25+ years of quality service.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 overflow-x-hidden pt-[72px] md:pt-[110px]">
      <Header />
      <PageHeader
        title="About"
        highlightText="Us"
        bgImage="/images/backgrounds/page_bg.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutUsSection />
      <ServicesSection />
      <ReadyToBook />
      <WhyChooseUsSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
