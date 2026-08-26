"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2 } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <section className="py-10 lg:py-25 bg-[#0b0e14] relative">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#131722] border border-[#23293a] rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl">
          {/* Subtle dotted background grid */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f26522_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                WE CREATE MEMORABLE JOURNEYS <br />
                <span className="text-[#f26522]">TOGETHER WITH YOU</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-medium">
                Subscribe to get updates &amp; exclusive offers straight to your inbox.
              </p>

              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-semibold">
                    Thank you for subscribing! Check your inbox soon for exclusive deals.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-4 bg-[#0b0e14] border border-[#23293a] rounded-2xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f26522] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-2xl bg-[#f26522] hover:bg-[#e05413] text-white font-extrabold text-sm transition-all shadow-lg shadow-[#f26522]/30 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Customer Visual */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm aspect-[4/3] lg:aspect-square">
                <Image
                  src="/images/resources/contact-one-img-1.png"
                  alt="Customer holding smartphone"
                  fill
                  className="object-contain drop-shadow-[0_15px_30px_rgba(242,101,34,0.2)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
