import Image from "next/image";
import HeroSearchForm from "@/components/home/HeroSearchForm";

export default function ReadyToBook() {
  return (
    <section className="py-20 bg-[#0b0e14] relative z-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/Ready _to_book.png"
          alt="Ready to book background"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e14]/60 via-transparent to-[#0b0e14]/80" />
      </div>
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-wide text-center font-heading">
            Book Your Ride <span className="text-[#f26522]">Today</span>
          </h2>
          <p className="text-gray-300 mt-2 text-sm max-w-2xl mx-auto text-center font-sans">
           Fill out our quick booking form and get your cab booked easily, safely, and conveniently.
          </p>
        </div>
        <HeroSearchForm className="relative z-[800]" />
      </div>
    </section>
  );
}
