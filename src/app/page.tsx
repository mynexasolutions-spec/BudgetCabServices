import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import FleetSlider from "@/components/home/FleetSlider";
import VideoSection from "@/components/home/VideoSection";
import FaqSection from "@/components/home/FaqSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 overflow-x-hidden">
      <Header />
      <HeroSection />

      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <FleetSlider />
      <VideoSection />
      <FaqSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
