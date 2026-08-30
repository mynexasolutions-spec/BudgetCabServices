"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { MOCK_FAQS } from "@/constants/mockData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-10 lg:py-25 bg-[#0b0e14] relative">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#f26522] block text-center">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-wide text-center font-heading">
            FREQUENTLY <span className="text-[#f26522]">ASKED QUESTIONS</span>
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {MOCK_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="bg-[#131722] border border-[#23293a] rounded-[5px] overflow-hidden transition-all duration-300 w-[90%] mx-auto"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-[15px] sm:text-[16px] font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#f26522] border-[#f26522] text-white"
                        : "border-[#23293a] text-gray-400"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-gray-300 leading-relaxed border-t border-[#23293a]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
