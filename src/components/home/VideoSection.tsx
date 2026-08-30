"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="video" className="py-10 lg:py-25 bg-[#0b0e14] relative">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[5px] overflow-hidden border border-[#f26522] bg-[#131722] py-20 px-6 sm:px-12 text-center shadow-2xl">
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/backgrounds/bg_02.webp"
              alt="Promotional Video Banner"
              fill
              className="object-cover object-center-center opacity-80 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e14] via-[#0b0e14]/20 to-[#0b0e14]"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            {/* Animated Play Button */}
            <div className="flex justify-center">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="w-16 h-16 rounded-full bg-[#f26522] text-white flex items-center justify-center text-center shadow-2xl pulse-button  transition-transform focus:outline-none cursor-pointer"
                aria-label="Play Promotional Video"
              >
                <Play className="w-6 h-6 fill-current" />
              </button>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide leading-tight text-center font-heading">
           Your Journey, <br className="hidden sm:inline" />{" "}
              <span className="text-[#f26522]">Our Responsibility</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-[#131722] border border-[#23293a] rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#0b0e14]/80 text-white hover:text-[#f26522] flex items-center justify-center border border-[#23293a]"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="PrimeCab Video Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
