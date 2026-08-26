import Header from "@/components/layout/Header";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About Us | PrimeCab Premium Cab Services",
  description: "Learn more about PrimeCab's mission, experienced drivers, and 10+ years of quality service.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 overflow-x-hidden pt-20">
      <Header />
      <div className="bg-[#131722] border-b border-[#23293a] py-16 text-center">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold uppercase text-white tracking-wide">
            About <span className="text-[#f26522]">PrimeCab</span>
          </h1>
          <p className="text-sm text-gray-400 mt-2 max-w-lg mx-auto">
            Delivering safe, comfortable, and reliable cab rentals across India since 2014.
          </p>
        </div>
      </div>
      <AboutSection />
      <WhyChooseUsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
