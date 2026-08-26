import React from "react";
import { Car } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0b0e14] flex flex-col items-center justify-center space-y-6">
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-[#f26522]/10 border-2 border-[#f26522] flex items-center justify-center text-[#f26522] animate-pulse">
          <Car className="w-10 h-10 animate-bounce" />
        </div>
        <div className="absolute inset-0 rounded-full border-2 border-[#f26522] border-t-transparent animate-spin"></div>
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-white tracking-wider">PRIMECAB</h3>
        <p className="text-xs text-gray-400 font-medium">Preparing your premium ride experience...</p>
      </div>
    </div>
  );
}
