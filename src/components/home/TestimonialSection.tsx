"use client";

import React, { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { MOCK_TESTIMONIALS } from "@/constants/mockData";

const TestimonialCard = ({ testimonial }: { testimonial: typeof MOCK_TESTIMONIALS[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const shouldTruncate = testimonial.comment.length > maxLength;

  const displayComment = !isExpanded && shouldTruncate 
    ? testimonial.comment.slice(0, maxLength) + "..." 
    : testimonial.comment;

  return (
    <motion.div layout className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 inline-flex flex-col bg-[#131722] border border-[#23293a] rounded-2xl p-5 md:p-6 hover:border-[#f26522]/30 transition-colors duration-300">
      <motion.div layout="position" className="flex justify-between items-start mb-4">
        <div className="flex text-[#f26522]">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        <Quote className="w-8 h-8 text-[#23293a] opacity-50" />
      </motion.div>
      
      <motion.p layout="position" className="text-gray-300 font-body text-sm md:text-base leading-relaxed mb-6 whitespace-normal min-h-[80px]">
        &quot;{displayComment}&quot;
        {shouldTruncate && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#f59e0b] hover:text-[#f26522] font-semibold ml-2 text-sm focus:outline-none transition-colors cursor-pointer"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </motion.p>
      
      <motion.div layout="position" className="mt-auto flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f26522] to-orange-400 flex items-center justify-center text-white font-bold text-xl shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div className="overflow-hidden">
          <h4 className="text-white font-bold font-heading truncate">{testimonial.name}</h4>
          <p className="text-gray-500 text-xs truncate mt-0.5">{testimonial.location}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function TestimonialSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // For a continuous marquee effect, we duplicate the testimonials
  const displayTestimonials = [...MOCK_TESTIMONIALS, ...MOCK_TESTIMONIALS, ...MOCK_TESTIMONIALS];

  useAnimationFrame((t, delta) => {
    if (!scrollerRef.current || isHovered) return;
    
    // Fast auto-slide speed
    const moveBy = 0.05 * delta;
    
    scrollerRef.current.scrollLeft += moveBy;

    // Reset when reaching the end of the first original set
    if (scrollerRef.current.scrollLeft >= scrollerRef.current.scrollWidth / 3) {
      scrollerRef.current.scrollLeft = 0;
    }
  });

  return (
    <section id="testimonials" className="py-10 relative bg-[#0b0e14] overflow-hidden">
      {/* Background abstract shapes for modern look */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-[#f26522]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#131722] border border-[#23293a] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f26522]" />
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white mb-4 sm:mb-6 text-center">
            What Our <span className="text-[#f26522]">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-body">
            Hear from our happy customers about their safe, comfortable, and reliable travel experiences with Budget Cab Services.
          </p>
        </div>

        {/* Auto-sliding Scroller */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          {/* Gradient Masks for smooth fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0b0e14] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0b0e14] to-transparent z-10" />

          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-hidden whitespace-nowrap py-4"
            style={{ WebkitOverflowScrolling: "touch" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {displayTestimonials.map((testimonial, idx) => (
              <TestimonialCard key={`${testimonial.id}-${idx}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
