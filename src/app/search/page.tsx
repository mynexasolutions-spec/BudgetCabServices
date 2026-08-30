"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MOCK_FLEET } from "@/constants/mockData";
import { MapPin, Calendar, Clock, Car, CheckCircle2, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

function SearchResultsContent() {
  const searchParams = useSearchParams();

  const type = searchParams.get("type") || "oneWay";
  const from = searchParams.get("from") || "Nashik";
  const fromId = searchParams.get("fromId") || "";
  const fromLat = searchParams.get("fromLat") || "";
  const fromLng = searchParams.get("fromLng") || "";
  const to = searchParams.get("to") || "Mumbai";
  const toId = searchParams.get("toId") || "";
  const toLat = searchParams.get("toLat") || "";
  const toLng = searchParams.get("toLng") || "";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";
  const returnDate = searchParams.get("returnDate") || "";
  const pkg = searchParams.get("package") || "";
  const airport = searchParams.get("airport") || "";

  return (
    <div className="pt-28 pb-20 max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search Summary Header Bar */}
      <div className="bg-[#131722] border border-[#23293a] rounded-2xl p-5 sm:p-6 shadow-2xl mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#23293a] pb-4 mb-4">
          <div>
            <span className="text-xs font-heading font-extrabold text-[#f59e0b] uppercase tracking-wider bg-[#f59e0b]/10 border border-[#f59e0b]/30 px-3 py-1 rounded-full">
              {type === "oneWay"
                ? "One Way Ride"
                : type === "roundTrip"
                ? "Round Trip Journey"
                : type === "local"
                ? "Local Hourly Rental"
                : "Airport Transfer"}
            </span>
            <h1 className="text-xl sm:text-3xl font-heading font-black text-white mt-2">
              Available Cabs &amp; Taxis
            </h1>
          </div>

          <Link
            href="/#home"
            className="text-xs font-heading font-bold text-gray-300 hover:text-[#f59e0b] border border-[#23293a] hover:border-[#f59e0b] px-4 py-2 rounded-xl transition-all"
          >
            Modify Search
          </Link>
        </div>

        {/* Query Summary Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center gap-2.5 bg-[#0b0e14] p-3 rounded-xl border border-[#23293a]">
            <MapPin className="w-4 h-4 text-[#f59e0b] shrink-0" />
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-bold">From</span>
              <span className="font-semibold text-white truncate block">{from}</span>
              {fromLat && (
                <span className="text-[10px] text-gray-500 font-mono">
                  [{fromLat}, {fromLng}]
                </span>
              )}
            </div>
          </div>

          {(type === "oneWay" || type === "roundTrip") && (
            <div className="flex items-center gap-2.5 bg-[#0b0e14] p-3 rounded-xl border border-[#23293a]">
              <MapPin className="w-4 h-4 text-[#f59e0b] shrink-0" />
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">To</span>
                <span className="font-semibold text-white truncate block">{to}</span>
                {toLat && (
                  <span className="text-[10px] text-gray-500 font-mono">
                    [{toLat}, {toLng}]
                  </span>
                )}
              </div>
            </div>
          )}

          {type === "local" && (
            <div className="flex items-center gap-2.5 bg-[#0b0e14] p-3 rounded-xl border border-[#23293a]">
              <Car className="w-4 h-4 text-[#f59e0b] shrink-0" />
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Package</span>
                <span className="font-semibold text-white truncate block">{pkg}</span>
              </div>
            </div>
          )}

          {type === "airport" && (
            <div className="flex items-center gap-2.5 bg-[#0b0e14] p-3 rounded-xl border border-[#23293a]">
              <Car className="w-4 h-4 text-[#f59e0b] shrink-0" />
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold">Airport</span>
                <span className="font-semibold text-white truncate block">{airport}</span>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2.5 bg-[#0b0e14] p-3 rounded-xl border border-[#23293a]">
            <Calendar className="w-4 h-4 text-[#f59e0b] shrink-0" />
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-bold">Departure Date</span>
              <span className="font-semibold text-white block">{date}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-[#0b0e14] p-3 rounded-xl border border-[#23293a]">
            <Clock className="w-4 h-4 text-[#f59e0b] shrink-0" />
            <div>
              <span className="text-gray-400 block text-[10px] uppercase font-bold">Time</span>
              <span className="font-semibold text-white block">{time || "Flexible"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Vehicles List */}
      <div className="space-y-6">
        <h2 className="text-lg font-heading font-extrabold text-white">
          Choose Your Vehicle ({MOCK_FLEET.length} Cabs Available)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_FLEET.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-[#131722] border border-[#23293a] hover:border-[#f59e0b]/50 rounded-2xl p-5 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-heading font-bold text-[#f59e0b] bg-[#f59e0b]/10 px-2.5 py-0.5 rounded-full border border-[#f59e0b]/20">
                    {vehicle.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" /> AC Verified
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#f59e0b] transition-colors">
                  {vehicle.name}
                </h3>

                <div className="my-4 pt-3 border-t border-[#23293a] grid grid-cols-3 gap-2 text-center text-xs text-gray-300">
                  <div className="bg-[#0b0e14] p-2 rounded-xl">
                    <span className="block text-[10px] text-gray-400">Seats</span>
                    <span className="font-bold text-white">{vehicle.seats || vehicle.capacity}</span>
                  </div>
                  <div className="bg-[#0b0e14] p-2 rounded-xl">
                    <span className="block text-[10px] text-gray-400">Luggage</span>
                    <span className="font-bold text-white">{vehicle.luggage}</span>
                  </div>
                  <div className="bg-[#0b0e14] p-2 rounded-xl">
                    <span className="block text-[10px] text-gray-400">Rate</span>
                    <span className="font-bold text-[#f59e0b]">{vehicle.ratePerKm}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#23293a] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block">Est. Fare</span>
                  <span className="text-xl font-heading font-black text-white">
                    {vehicle.startingPrice}
                  </span>
                </div>

                <Link
                  href="/#booking"
                  className="py-2.5 px-4 rounded-xl bg-[#f59e0b] hover:bg-[#d98206] text-black font-heading font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-[#f59e0b]/20 cursor-pointer"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#0b0e14] text-gray-100 flex flex-col justify-between">
      <Header />
      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center text-gray-400">
            Loading search results...
          </div>
        }
      >
        <SearchResultsContent />
      </Suspense>
      <Footer />
    </main>
  );
}
