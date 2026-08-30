import Header from "@/components/layout/Header";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import SlidingTextSection from "@/components/home/SlidingTextSection";
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
import ReadyToBook from "@/components/home/ReadyToBook";

const NEW_MARQUEE_ITEMS = [
  { text: "Budget Cab Services", icon: "icon-jeep" },
  { text: "Online Booking", icon: "icon-cuv" },
  { text: "Quick Cancelation", icon: "icon-jeep" },
  { text: "24/7 Fast Support", icon: "icon-cuv" },
  { text: "Best Price Guarantee", icon: "icon-jeep" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 overflow-x-hidden">
      <Header />
      <HeroSection />
      <SlidingTextSection items={NEW_MARQUEE_ITEMS} />

      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <FleetSlider />
      <VideoSection />
      <FaqSection />
      <ReadyToBook />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
