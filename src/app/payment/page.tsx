import Header from "@/components/layout/Header";
import PageHeader from "@/components/about/PageHeader";
import PaymentDetailsSection from "@/components/payment/PaymentDetailsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Payment & Bank Details | Kotak Mahindra Bank | Budget Cab Services",
  description:
    "Official Kotak Mahindra Bank account details and UPI QR code payment options for Budget Cab Services. Transfer securely for outstation cabs & airport pickups.",
};

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 overflow-x-hidden pt-[72px] md:pt-[110px]">
      <Header />

      {/* Visual Page Header with Breadcrumbs */}
      <PageHeader
        title="Payment"
        highlightText="& Bank Details"
        tagline="Official Corporate Account & Instant UPI Scan"
        bgImage="/images/backgrounds/page_bg.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Payment Details" },
        ]}
      />

      {/* Main Payment & Bank Details Section */}
      <PaymentDetailsSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
