import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CabBookingWidget from "@/components/booking/CabBookingWidget";
import TestimonialSection from "@/components/home/TestimonialSection";


export const metadata = {
  title: "Book Your Cab | Budget Cab Services — Fast, Reliable & Best Prices",
  description:
    "Book outstation cabs, one-way rides, airport transfers, and local hourly rentals with instant confirmation and transparent fares.",
};

export default function CabBookingPage() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 flex flex-col justify-between overflow-x-hidden pt-[72px] md:pt-[110px]">
      <Header />
      
      {/* Main Cab Booking Widget Section */}
      <CabBookingWidget />

      {/* Verified Reviews */}
      <TestimonialSection />

      <Footer />
    </main>
  );
}
