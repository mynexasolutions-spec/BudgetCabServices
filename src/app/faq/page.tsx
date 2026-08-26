import Header from "@/components/layout/Header";
import FaqSection from "@/components/home/FaqSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Frequently Asked Questions | PrimeCab",
  description: "Find answers to popular questions about cab bookings, cancellation policies, fares, and toll charges.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 overflow-x-hidden pt-20">
      <Header />
      <div className="bg-[#131722] border-b border-[#23293a] py-16 text-center">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold uppercase text-white tracking-wide">
            Frequently <span className="text-[#f26522]">Asked Questions</span>
          </h1>
          <p className="text-sm text-gray-400 mt-2 max-w-lg mx-auto">
            Everything you need to know about booking, payments, and our services.
          </p>
        </div>
      </div>
      <FaqSection />
      <Footer />
    </main>
  );
}
