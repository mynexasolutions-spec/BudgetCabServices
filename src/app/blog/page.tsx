import Header from "@/components/layout/Header";
import PageHeader from "@/components/about/PageHeader";
import BlogGrid from "@/components/blog/BlogGrid";
import TestimonialSection from "@/components/home/TestimonialSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Blog | PrimeCab Premium Cab Services",
  description: "Read our latest news, travel guides, and tips for booking the best cab services for your next journey.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 overflow-x-hidden pt-[72px] md:pt-[110px]">
      <Header />
      
      {/* Reusable Responsive Page Header */}
      <PageHeader
        title="Our"
        highlightText="Blog"
        tagline="Travel Guides & Industry News"
        bgImage="/images/backgrounds/page_bg.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      {/* Main Blog Grid Section */}
      <BlogGrid />

      {/* Verified Passenger Testimonials */}
      <TestimonialSection />

      <Footer />
    </main>
  );
}
