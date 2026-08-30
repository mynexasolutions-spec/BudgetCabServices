import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0b0e14]/95 backdrop-blur-md flex flex-col items-center justify-center space-y-6 px-4">
      {/* Loader Container */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f59e0b]/30 via-[#f26522]/30 to-[#ff7d3b]/30 blur-xl animate-pulse" />

        {/* Outer Secondary Counter-Spinning Dashed Ring */}
        <div className="absolute -inset-4 sm:-inset-5 rounded-full border border-dashed border-[#f59e0b]/30 animate-spin [animation-duration:4s] [animation-direction:reverse]" />

        {/* Outer Primary Gradient Spinning Ring */}
        <div className="absolute -inset-2 sm:-inset-2.5 rounded-full border-2 border-transparent border-t-[#f59e0b] border-r-[#f26522] border-b-[#ff7d3b]/40 animate-spin [animation-duration:1.2s]" />

        {/* Inner Glass Center with loaders.webp image */}
        <div className="relative w-full h-full rounded-full bg-[#131722] border border-[#23293a] shadow-2xl p-2.5 flex items-center justify-center overflow-hidden group">
          <Image
            src="/loaders.webp"
            alt="Loading..."
            width={96}
            height={96}
            priority
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
      </div>

      {/* Brand & Loading Text */}
      <div className="text-center max-w-xs pt-5">
        <h3 className="text-[17px] sm:text-[16px] font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#f26522] to-[#ff7d3b] font-heading">
          BUDGET CAB SERVICES
        </h3>
      </div>
    </div>
  );
}
