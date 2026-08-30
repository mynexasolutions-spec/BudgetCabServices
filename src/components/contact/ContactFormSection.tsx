"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  User,
  Phone,
  Mail,
  Car,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Clock,
  Shield,
  Sparkles,
  Headphones,
  Award,
  Zap,
} from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

const SERVICE_OPTIONS = [
  "One Way Outstation Trip",
  "Round Trip Outstation",
  "Airport Pick & Drop",
  "Local Hourly Rental",
  "Corporate / Executive Cab",
  "Wedding & Event Fleet",
  "Other Inquiry / Support",
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    noOfPassenger: "",
    startDestination: "",
    endDestination: "",
    bookingDate: "",
    bookingTime: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim() || !formData.contactNumber.trim()) {
      setErrorMessage("Please fill in your full name and contact number.");
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      contactNumber: "",
      noOfPassenger: "",
      startDestination: "",
      endDestination: "",
      bookingDate: "",
      bookingTime: "",
    });
    setIsSubmitted(false);
  };

  return (
    <section className="relative py-14 md:py-20 bg-[#080b10] border-t border-b border-[#23293a]/80 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#f26522]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT: Contact & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#131722] border border-[#23293a] rounded-[5px] p-6 sm:p-8 md:p-10 shadow-2xl relative">
            <div className="mb-6 sm:mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#f26522] block mb-1">
                Fast & Direct Inquiries
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide font-heading">
                Send Us a <span className="text-[#f26522]">Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1.5">
                Fill out the quick form below and our dedicated travel desk will get back to you with custom pricing and route details.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 px-6 text-center space-y-6 bg-[#161c2b] border border-emerald-500/30 rounded-2xl"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-white font-heading">
                      Thank You, {formData.fullName || "Customer"}!
                    </h4>
                    <p className="text-sm text-gray-300 max-w-md mx-auto">
                      Your booking inquiry from{" "}
                      <span className="text-[#f26522] font-semibold">{formData.startDestination}</span> to <span className="text-[#f26522] font-semibold">{formData.endDestination}</span> has
                      been received. One of our support executives will call or WhatsApp you within 15 minutes.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-full bg-[#f26522] hover:bg-[#ff7d3b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-lg shadow-[#f26522]/30 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {errorMessage && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#f26522]" />
                        <span>Full Name *</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-[#0b0e14] border border-[#23293a] focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Contact Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#f26522]" />
                        <span>Contact Number *</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="contactNumber"
                          required
                          value={formData.contactNumber}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#0b0e14] border border-[#23293a] focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Passengers & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* No. of Passenger */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#f26522]" />
                        <span>No. of Passenger</span>
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="noOfPassenger"
                          min="1"
                          value={formData.noOfPassenger}
                          onChange={handleChange}
                          placeholder="e.g. 4"
                          className="w-full bg-[#0b0e14] border border-[#23293a] focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Booking Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#f26522]" />
                        <span>Booking Date</span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="bookingDate"
                          value={formData.bookingDate}
                          onChange={handleChange}
                          className="w-full bg-[#0b0e14] border border-[#23293a] focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] rounded-xl px-4 py-3 text-sm text-white outline-none transition-all cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Start & End Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Start Destination */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#f26522]" />
                        <span>Start Destination</span>
                      </label>
                      <input
                        type="text"
                        name="startDestination"
                        value={formData.startDestination}
                        onChange={handleChange}
                        placeholder="Pickup Location"
                        className="w-full bg-[#0b0e14] border border-[#23293a] focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                      />
                    </div>

                    {/* End Destination */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#f26522]" />
                        <span>End Destination</span>
                      </label>
                      <input
                        type="text"
                        name="endDestination"
                        value={formData.endDestination}
                        onChange={handleChange}
                        placeholder="Drop Location"
                        className="w-full bg-[#0b0e14] border border-[#23293a] focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 4: Booking Time */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#f26522]" />
                      <span>Booking Time</span>
                    </label>
                    <input
                      type="time"
                      name="bookingTime"
                      value={formData.bookingTime}
                      onChange={handleChange}
                      className="w-full bg-[#0b0e14] border border-[#23293a] focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] rounded-xl px-4 py-3 text-sm text-white outline-none transition-all cursor-pointer"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#f26522] to-[#ff7d3b] hover:from-[#ff7d3b] hover:to-[#f26522] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#f26522]/30 transition-all duration-300 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting Your Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Message & Get Fast Callback</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-gray-500 text-center">
                    🔒 We respect your privacy. No spam. Your phone number is strictly used for booking consultation.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Operational Desk & Direct Support Hub (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Operational Hotline Card */}
            <div className="bg-[#131722] border border-[#23293a] rounded-[5px] p-6 sm:p-7 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f26522]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Live Dispatch Desk
                  </span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-[5px] bg-[#161c2b] border border-[#23293a] text-gray-400 font-semibold">
                  24/7
                </span>
              </div>

              <h4 className="text-xl font-black text-white font-heading uppercase tracking-wide">
                Need an Instant Cab?
              </h4>
              <p className="text-xs text-gray-400 mt-1 mb-5">
For urgent airport transfers or quick pickups, call us directly for fast and reliable cab service.              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0b0e14] border border-[#23293a] hover:border-[#f26522] group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#f26522]/15 text-[#f26522] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 font-medium">Customer Hotline</div>
                      <div className="text-sm font-bold text-white group-hover:text-[#f26522] transition-colors">
                        {SITE_CONFIG.phone}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#f26522] uppercase tracking-wide">
                    Tap to Call
                  </span>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0b0e14] border border-[#23293a] hover:border-emerald-500 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 font-medium">WhatsApp Booking</div>
                      <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        Instant Fare Estimate
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
                    Chat Now
                  </span>
                </a>
              </div>
            </div>

            {/* Operating Hours & Timings */}
            <div className="bg-[#131722] border border-[#23293a] rounded-[5px] p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2.5 text-white font-bold text-sm uppercase tracking-wider font-heading">
                <Clock className="w-4 h-4 text-[#f26522]" />
                <span>Operating Timings</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2.5 border-b border-[#23293a]">
                  <span className="text-gray-400">Cab Services & Booking</span>
                  <span className="font-bold text-emerald-400">24 Hours / 7 Days</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-[#23293a]">
                  <span className="text-gray-400">Airport Pickup & Drop</span>
                  <span className="font-bold text-emerald-400">24/7 Available</span>
                </div>
                <div className="flex items-center justify-between pb-2.5 border-b border-[#23293a]">
                  <span className="text-gray-400">Customer Support</span>
                  <span className="font-bold text-emerald-400">24 Hours / 7 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Outstation Cab Services</span>
                  <span className="font-bold text-white">Available on Booking</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
