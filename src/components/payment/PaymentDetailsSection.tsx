"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Copy,
  Check,
  QrCode,
  ShieldCheck,
  Send,
  Sparkles,
  ExternalLink,
  Lock,
  PhoneCall,
  X
} from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface BankDetailItemProps {
  label: string;
  value: string;
  copyable?: boolean;
  highlight?: boolean;
  className?: string;
}

function BankDetailItem({ label, value, copyable = true, highlight = false, className = "" }: BankDetailItemProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className={`relative group flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-[#0b0e14]/80 border border-[#23293a] hover:border-[#f26522]/50 transition-all duration-200 gap-2.5 ${className}`}>
      <div className="space-y-0.5 min-w-0 flex-1">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 font-heading block truncate">
          {label}
        </span>
        <div className={`text-xs sm:text-sm md:text-base font-bold font-mono tracking-wide truncate ${highlight ? "text-[#f59e0b]" : "text-white"}`}>
          {value}
        </div>
      </div>

      {copyable && (
        <button
          onClick={handleCopy}
          type="button"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1a2030] hover:bg-[#f26522] text-gray-300 hover:text-white border border-[#2e374e] hover:border-[#f26522] text-[11px] font-bold transition-all shadow-sm active:scale-95 shrink-0"
          title={`Copy ${label}`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-bold hidden sm:inline">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
              <span>Copy</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default function PaymentDetailsSection() {
  const [copiedAll, setCopiedAll] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const bankInfo = {
    accountName: "BCSBUDGET CABS SERVICES PVT LTD",
    accountNumber: "9992929292",
    ifscCode: "KKBK0000694",
    bankName: "KOTAK MAHINDRA BANK",
    accountType: "Current Account",
  };

  const handleCopyAll = async () => {
    const text = `Bank Account Details:\nBank Name: ${bankInfo.bankName}\nAccount Name: ${bankInfo.accountName}\nAccount No.: ${bankInfo.accountNumber}\nIFSC Code: ${bankInfo.ifscCode}\nAccount Type: ${bankInfo.accountType}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2500);
    } catch (err) {
      console.error("Failed to copy all", err);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Budget Cab Services! I have completed payment for my cab booking. Please verify my receipt.`
  );
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <section className="py-6 sm:py-10 bg-[#0b0e14] relative overflow-hidden">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#f26522]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-[#f59e0b]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131722] border border-[#23293a] text-[11px] font-bold text-[#f59e0b] tracking-wider uppercase shadow-inner">
            <Sparkles className="w-3 h-3 text-[#f26522] animate-pulse" />
            <span>Secure & Official Payment Gateway</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white uppercase tracking-tight font-heading">
            Kotak Mahindra Bank <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f26522]">Account Details</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Pay safely for your cab booking via IMPS/NEFT direct bank transfer or instant UPI QR scan.
          </p>
        </div>

        {/* Main 2-Column Compact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Left Column: Bank Account Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-gradient-to-br from-[#131722] via-[#161c2d] to-[#0d1017] border border-[#23293a] rounded-2xl p-4 sm:p-6 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Top Accent Glowing Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f59e0b] via-[#f26522] to-[#f59e0b]" />

            <div>
              {/* Bank Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#23293a]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f26522]/20 to-[#f59e0b]/20 border border-[#f26522]/40 flex items-center justify-center text-[#f59e0b] shadow-md shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <ShieldCheck className="w-3 h-3" /> Verified Corporate
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5 font-heading">
                      {bankInfo.bankName}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleCopyAll}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#f26522] to-[#f59e0b] text-black font-extrabold text-xs shadow-md hover:brightness-110 active:scale-95 transition-all font-heading shrink-0"
                >
                  {copiedAll ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-black" />
                      <span>All Details Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-black" />
                      <span>Copy All Bank Info</span>
                    </>
                  )}
                </button>
              </div>

              {/* Bank Fields Grid Layout (Compact) */}
              <div className="mt-4 space-y-2.5">
                {/* Full Width Account Holder */}
                <BankDetailItem
                  label="Account Holder / Company Name"
                  value={bankInfo.accountName}
                  highlight={true}
                />

                {/* 2-Col Grid for Account Number & IFSC */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <BankDetailItem
                    label="Account Number"
                    value={bankInfo.accountNumber}
                    highlight={true}
                  />
                  <BankDetailItem
                    label="IFSC Code"
                    value={bankInfo.ifscCode}
                    highlight={true}
                  />
                </div>

                {/* 2-Col Grid for Bank Name & Account Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <BankDetailItem
                    label="Bank Name"
                    value={bankInfo.bankName}
                  />
                  <BankDetailItem
                    label="Account Type"
                    value={bankInfo.accountType}
                    copyable={false}
                  />
                </div>
              </div>
            </div>

            {/* Security Guarantee Note */}
            <div className="mt-4 p-2.5 sm:p-3 rounded-xl bg-[#080a0f] border border-[#23293a] flex items-center gap-2.5 text-[11px] text-gray-400">
              <Lock className="w-4 h-4 text-[#f59e0b] shrink-0" />
              <span>
                Payments to <strong className="text-gray-200">BCSBUDGET CABS SERVICES PVT LTD</strong> are protected & acknowledged with official GST receipts.
              </span>
            </div>
          </motion.div>

          {/* Right Column: QR Code & Fast Pay Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 bg-[#131722] border border-[#23293a] rounded-2xl p-4 sm:p-5 shadow-xl relative text-center flex flex-col justify-between space-y-4"
          >
            <div>
              {/* Card Title Header */}
              <div className="flex items-center justify-between gap-2 border-b border-[#23293a] pb-3 mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1b2234] border border-[#2e374e] text-[10px] sm:text-xs font-bold text-[#f59e0b]">
                  <QrCode className="w-3 h-3 text-[#f26522]" />
                  <span>Instant UPI Payment</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400">0% Convenience Fee</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                Scan QR Code to Pay
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">
                Scan using GPay, PhonePe, Paytm or any UPI app for quick deposit.
              </p>

              {/* QR Image Container (Compact) */}
              <div className="relative mt-3 max-w-[180px] sm:max-w-[200px] mx-auto group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f26522] to-[#f59e0b] rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-300" />
                
                <div className="relative bg-[#0b0e14] p-3 rounded-2xl border border-[#23293a] group-hover:border-[#f26522] transition-colors shadow-lg overflow-hidden">
                  <Image
                    src="https://budgetcabsservices.com/wp-content/themes/asr/images/qr.jpeg"
                    alt="Kotak Mahindra Bank UPI QR Code - Budget Cab Services"
                    width={200}
                    height={200}
                    priority
                    unoptimized
                    className="w-full h-auto rounded-xl object-contain mx-auto shadow-sm transform group-hover:scale-[1.02] transition-transform duration-300"
                  />

                  {/* Hover Overlay with Zoom Prompt */}
                  <button
                    onClick={() => setIsQrModalOpen(true)}
                    type="button"
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-1.5 rounded-2xl font-heading font-bold text-[11px]"
                  >
                    <ExternalLink className="w-5 h-5 text-[#f59e0b]" />
                    <span>Click to Enlarge QR</span>
                  </button>
                </div>
              </div>

              {/* Supported Apps Pills */}
              <div className="mt-3 pt-2.5 border-t border-[#23293a]">
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {["Google Pay", "PhonePe", "Paytm", "BHIM UPI", "Amazon Pay"].map((app) => (
                    <span
                      key={app}
                      className="px-2 py-0.5 rounded-md bg-[#0b0e14] border border-[#23293a] text-gray-300 text-[10px] font-semibold"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-3 border-t border-[#23293a]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-extrabold text-xs shadow-md shadow-emerald-900/30 transition-all font-heading active:scale-[0.98]"
              >
                <Send className="w-3.5 h-3.5 fill-current" />
                <span>Send Payment Receipt on WhatsApp</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* How to Confirm Payment - Compact 3 Simple Steps */}
        <div className="bg-[#131722] border border-[#23293a] rounded-2xl p-4 sm:p-5 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#23293a]">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white uppercase font-heading">
                3 Steps to <span className="text-[#f59e0b]">Confirm Your Ride</span>
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-400">
                Follow these simple steps after completing transfer for instant driver details.
              </p>
            </div>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1e2638] hover:bg-[#28324a] text-white text-xs font-bold transition-all border border-[#2e374e] shrink-0 font-heading"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>Helpline: {SITE_CONFIG.phone}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            
            {/* Step 1 */}
            <div className="p-3 rounded-xl bg-[#0b0e14] border border-[#23293a] flex items-start gap-3 group hover:border-[#f26522]/50 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-[#f26522]/10 border border-[#f26522]/30 flex items-center justify-center text-[#f26522] font-black text-xs font-heading shrink-0">
                01
              </div>
              <div className="space-y-0.5 min-w-0">
                <h4 className="text-xs font-bold text-white font-heading">Make Transfer / Scan QR</h4>
                <p className="text-[11px] text-gray-400 leading-snug">
                  Transfer via Kotak Bank info or scan QR with any UPI app.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-3 rounded-xl bg-[#0b0e14] border border-[#23293a] flex items-start gap-3 group hover:border-[#f59e0b]/50 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] font-black text-xs font-heading shrink-0">
                02
              </div>
              <div className="space-y-0.5 min-w-0">
                <h4 className="text-xs font-bold text-white font-heading">Take Screenshot</h4>
                <p className="text-[11px] text-gray-400 leading-snug">
                  Capture success screen showing UTR / Ref No. & amount paid.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-3 rounded-xl bg-[#0b0e14] border border-[#23293a] flex items-start gap-3 group hover:border-emerald-500/50 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-xs font-heading shrink-0">
                03
              </div>
              <div className="space-y-0.5 min-w-0">
                <h4 className="text-xs font-bold text-white font-heading">Share on WhatsApp</h4>
                <p className="text-[11px] text-gray-400 leading-snug">
                  Send to <strong className="text-white">{SITE_CONFIG.phone}</strong> for instant cab & driver assignment.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Enlarged QR Code Modal */}
      <AnimatePresence>
        {isQrModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsQrModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#131722] border border-[#23293a] p-5 rounded-2xl max-w-xs w-full text-center space-y-3 relative shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#23293a] pb-2">
                <h3 className="text-sm font-bold text-white font-heading">
                  Kotak Bank Payment QR
                </h3>
                <button
                  onClick={() => setIsQrModalOpen(false)}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="bg-[#0b0e14] p-3 rounded-xl border border-[#23293a]">
                <Image
                  src="https://budgetcabsservices.com/wp-content/themes/asr/images/qr.jpeg"
                  alt="Kotak Mahindra Bank Payment QR"
                  width={260}
                  height={260}
                  unoptimized
                  className="w-full h-auto rounded-lg object-contain mx-auto"
                />
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => setIsQrModalOpen(false)}
                  type="button"
                  className="flex-1 py-2 rounded-lg bg-[#1e2638] hover:bg-[#28324a] text-gray-200 text-xs font-bold transition-all border border-[#2e374e]"
                >
                  Close
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#f26522] to-[#f59e0b] text-black text-xs font-extrabold transition-all shadow-md font-heading flex items-center justify-center gap-1"
                >
                  <span>Confirm Pay</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

