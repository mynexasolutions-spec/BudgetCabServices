"use client";

import { MapPin, Navigation, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export default function ContactMap() {
  return (
    <section id="map-section" className="relative py-12 md:py-16 bg-[#080b10] border-t border-[#23293a]/70">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#f26522] block">
            Locations & Directions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight font-heading">
            Find Our <span className="text-[#f26522]">Offices</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Visit our conveniently located offices in Nashik and Mumbai for reliable cab services and support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Nasik Map Container */}
          <div className="relative rounded-[5px] overflow-hidden border border-[#f26522] shadow-2xl bg-[#131722] flex flex-col">
            <div className="p-5 bg-[#0b0e14]/90 backdrop-blur-md border-b border-[#23293a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Nasik Office
                  </span>
                </div>
                <p className="text-xs text-gray-300 max-w-xs">{SITE_CONFIG.address_nasik}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={`tel:+919860689292`}
                  className="py-2 px-3 rounded-xl bg-[#131722] hover:bg-[#161c2b] border border-[#23293a] text-gray-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f26522]" />
                  <span>Call</span>
                </a>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.393326451596!2d73.79394669999999!3d19.9920002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb713e55c10b%3A0x25e6c56455165659!2sBudget%20cab%20services!5e0!3m2!1sen!2sin!4v1779376188875!5m2!1sen!2sin" 
                width="100%" 
                height="100%"  
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Mumbai Map Container */}
          <div className="relative rounded-[5px] overflow-hidden border border-[#f26522] shadow-2xl bg-[#131722] flex flex-col">
            <div className="p-5 bg-[#0b0e14]/90 backdrop-blur-md border-b border-[#23293a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Mumbai Office
                  </span>
                </div>
                <p className="text-xs text-gray-300 max-w-xs">{SITE_CONFIG.address_mumbai}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={`tel:+918975900092`}
                  className="py-2 px-3 rounded-xl bg-[#131722] hover:bg-[#161c2b] border border-[#23293a] text-gray-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f26522]" />
                  <span>Call</span>
                </a>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3753949053494!2d72.86749490000001!3d19.135038299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7e32f37f147%3A0xf285cb577b1cf1aa!2sVARUN%20TRAVELS!5e0!3m2!1sen!2sin!4v1779376075729!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
