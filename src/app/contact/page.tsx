import Header from "@/components/layout/Header";

import NewsletterSection from "@/components/home/NewsletterSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Contact Us & Book | PrimeCab Support",
  description: "Get in touch with PrimeCab 24/7 customer support or book your ride instantly online.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 overflow-x-hidden pt-20">
      <Header />
      <div className="bg-[#131722] border-b border-[#23293a] py-16 text-center">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold uppercase text-white tracking-wide">
            Contact <span className="text-[#f26522]">Us</span>
          </h1>
          <p className="text-sm text-gray-400 mt-2 max-w-lg mx-auto">
            Have a question or need to book a custom trip? We are available 24/7.
          </p>
        </div>
      </div>

      <NewsletterSection />
      <Footer />
    </main>
  );
}
