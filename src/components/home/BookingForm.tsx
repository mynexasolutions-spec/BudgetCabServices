"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function BookingForm() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="booking" className="relative py-10 lg:py-25 bg-[#0b0e14]">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#131722] border border-[#23293a] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Accent glow line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f26522] to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Booking Form */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-4 h-1 bg-[#f26522] rounded-full"></span>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
                  BOOK <span className="text-[#f26522]">A CAR</span>
                </h2>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-semibold">
                    Booking request submitted! Our team will contact you shortly.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Pickup Location */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Pickup Location
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#f26522]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="Enter pickup location"
                        className="w-full pl-10 pr-4 py-3 bg-[#0b0e14] border border-[#23293a] rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f26522] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Drop Location */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Drop Location
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#f26522]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={drop}
                        onChange={(e) => setDrop(e.target.value)}
                        placeholder="Enter drop location"
                        className="w-full pl-10 pr-4 py-3 bg-[#0b0e14] border border-[#23293a] rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f26522] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Pickup Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Pickup Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#f26522]">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-[#0b0e14] border border-[#23293a] rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f26522] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Pickup Time */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Pickup Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#f26522]">
                        <Clock className="w-4 h-4" />
                      </div>
                      <input
                        type="time"
                        required
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-[#0b0e14] border border-[#23293a] rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f26522] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full py-4 text-base flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-[#23293a] group">
                <Image
                  src="/images/resources/booking-two-img-1.jpg"
                  alt="Couple loading luggage into PrimeCab"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b0e14]/80 backdrop-blur-md border border-[#23293a]">
                  <p className="text-xs text-gray-300 font-semibold">
                    Instant confirmation & transparent fares with no hidden charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
