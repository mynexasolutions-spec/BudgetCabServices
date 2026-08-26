import Header from "@/components/layout/Header";
import ServicesSection from "@/components/home/ServicesSection";
import FleetSlider from "@/components/home/FleetSlider";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Our Services | PrimeCab Car Rental Packages",
  description: "Explore outstation one-way cabs, airport pick & drop, round trips, and hourly taxi rentals.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 overflow-x-hidden pt-20">
      <Header />
      <div className="bg-[#131722] border-b border-[#23293a] py-16 text-center">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold uppercase text-white tracking-wide">
            Our <span className="text-[#f26522]">Services</span>
          </h1>
          <p className="text-sm text-gray-400 mt-2 max-w-lg mx-auto">
            Tailored ride options for every travel requirement with transparent pricing.
          </p>
        </div>
      </div>
      <ServicesSection />
      <FleetSlider />
      <Footer />
    </main>
  );
}
