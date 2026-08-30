import React from "react";
import Header from "@/components/layout/Header";
import PageHeader from "@/components/about/PageHeader";
import Footer from "@/components/layout/Footer";
import {
  FileText,
  ShieldCheck,
  RotateCcw,
  Clock,
  Phone,
  Mail,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export const metadata = {
  title: `Terms & Conditions, Cancellation & Refund Policy | ${SITE_CONFIG.name}`,
  description: `Official Terms & Conditions, Cancellation Policies, and Refund Policy for booking cabs with ${SITE_CONFIG.name}.`,
};

export default function TermsAndConditionsPage() {
  const termsList = [
    "Car air-conditioner will not be working in hilly routes & also when the vehicle is not in motion.",
    "Parking charges are excluded and will have to be paid directly to the driver.",
    "The driver shall wait for 45 min. Post that booking will be canceled with no refund.",
    "Waiting charges would be applicable after the cab reaches the boarding point. The first 45 minutes are free but post that the charge is ₹ 2 per minute and this amount has to be paid to the driver directly.",
    "In the case of partial payment, the balance payment of trip needs to be paid in advance at the time of pick-up.",
    "You need to collect the receipts from the driver for any toll tax, state tax, night charges or extra km paid directly to the driver during the trip. Budget Cab Services is not liable to provide invoices for such amount.",
    "Any grievances or claims related to the cab travel should be reported to Budget Cab Services within 24 hours of travel time.",
    "The booking will be for cab type SUV or SEDAN and we do not commit to providing any preferred cab model.",
    "You can accommodate 2 bags in Sedan and 3 bags in SUV.",
    "We do not commit on particular fuel type vehicle like Petrol, Diesel or CNG.",
    "Cab will be provided on the basis of availability.",
    "You are not allowed to take pets with you inside the cab.",
    "Due to traffic or any other unavoidable reason, the pickup may be delayed by 30 mins.",
    "Driver details will be shared up to 6 hrs prior to departure.",
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-gray-100 font-sans flex flex-col justify-between pt-[72px] md:pt-[110px]">
      {/* Navbar Header */}
      <Header />

      {/* Responsive Compact Page Header */}
      <PageHeader
        title="Terms &"
        highlightText="Conditions"
        tagline="Official Policy & Service Agreements"
        compact={true}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />

      {/* Main Container */}
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-8">
        
        {/* Quick Section Anchors & Policy Intro */}
        <div className="p-5 rounded-2xl bg-[#0e121a] border border-[#1d2536] text-center space-y-3">
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Please read our terms of service, cancellation rules, and refund policies carefully before booking your ride with {SITE_CONFIG.name}.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1">
            <a
              href="#terms"
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-[#141924] border border-[#242d42] text-gray-200 hover:border-[#f26522] hover:text-[#f26522] transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#cancellation"
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-[#141924] border border-[#242d42] text-gray-200 hover:border-[#f26522] hover:text-[#f26522] transition-colors"
            >
              Cancellation Policies
            </a>
            <a
              href="#refund"
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-[#141924] border border-[#242d42] text-gray-200 hover:border-[#f26522] hover:text-[#f26522] transition-colors"
            >
              Refund Policy
            </a>
          </div>
        </div>

        {/* 1. Terms & Conditions Section */}
        <section id="terms" className="scroll-mt-36 bg-[#0e121a] rounded-2xl p-6 sm:p-8 border border-[#1d2536] shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1b2232] pb-4">
            <div className="w-10 h-10 rounded-xl bg-[#f26522]/10 border border-[#f26522]/30 flex items-center justify-center text-[#f26522] shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Term & Conditions
              </h2>
              <p className="text-xs text-gray-400">
                General rules and operational guidelines for cab bookings
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {termsList.map((term, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#141924] border border-[#202738] hover:border-[#2a344a] transition-all group"
              >
                <div className="w-6 h-6 rounded-full bg-[#f26522]/15 text-[#f26522] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:bg-[#f26522] group-hover:text-black transition-colors">
                  {index + 1}
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                  {term}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Cancellation Policies Section */}
        <section id="cancellation" className="scroll-mt-36 bg-[#0e121a] rounded-2xl p-6 sm:p-8 border border-[#1d2536] shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1b2232] pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Cancellation Policies
              </h2>
              <p className="text-xs text-gray-400">
                Rules governing booking cancellations and applicable charges
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-[#141924] border border-[#202738]">
              <p className="font-medium text-gray-200">
                You may cancel your booking with us any time before your scheduled date and time of pickup. This may be done by calling us anytime on the 24×7 Customer Care Helpline{" "}
                <a href={`tel:${SITE_CONFIG.phone_nasik}`} className="text-[#f26522] font-bold hover:underline">
                  {SITE_CONFIG.phone_nasik}
                </a>{" "}
                or writing to us at{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#f26522] font-bold hover:underline">
                  {SITE_CONFIG.email}
                </a>.
              </p>
            </div>

            <p className="font-semibold text-white pt-2">
              However, you may be liable to pay cancellation charges under the following circumstances:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Charge Case 1 */}
              <div className="p-4 rounded-xl bg-[#141924] border border-rose-500/20 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Cancellation within 24 Hours</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  If your booking is canceled within 24 hours of the scheduled pickup date and time, <strong>no refund shall be applicable</strong> in such cases and the entire Booking Amount/Advance shall be treated as Cancellation Charges.
                </p>
              </div>

              {/* Charge Case 2 */}
              <div className="p-4 rounded-xl bg-[#141924] border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Cancellation Prior to 24 Hours</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  If your booking is canceled prior to 24 hours of the scheduled pickup date and time, the <strong>entire advance amount shall be refunded</strong> and the refund will be initiated within 48 hours of receiving cancellation requests.
                </p>
              </div>

              {/* Charge Case 3 */}
              <div className="p-4 rounded-xl bg-[#141924] border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Driver Excessive Delay</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  If for any reason your driver takes too long to get to you then the cancellation charge will be waived in the event of a cancellation request made at your end and the advance amount shall be credited to your <strong>Budget Cab Services Credits</strong> that can be used for any future booking throughout India.
                </p>
              </div>

              {/* Charge Case 4 */}
              <div className="p-4 rounded-xl bg-[#141924] border border-rose-500/20 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Customer No-Show</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  If there is a No-Show from your end, i.e. you are not at the pickup location and/or your assigned Driver is unable to get in touch with you on your registered phone number on the scheduled pickup date and time, the Driver shall wait for a reasonable period of <strong>45 minutes</strong> from the scheduled Booking time and thereafter may treat the Booking as canceled with no refund.
                </p>
              </div>
            </div>

            {/* Rescheduling Onus Note */}
            <div className="p-4 rounded-xl bg-[#121724] border border-[#232c3f] space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#f26522]">Rescheduling Policy</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                The onus for rescheduling of departure time and confirmation from Budget Cab Services about the availability of the car at such rescheduled time will be with the customer and such request can be made only in writing by sending us an email at{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#f26522] font-semibold hover:underline">
                  {SITE_CONFIG.email}
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Refund Policy Section */}
        <section id="refund" className="scroll-mt-36 bg-[#0e121a] rounded-2xl p-6 sm:p-8 border border-[#1d2536] shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-[#1b2232] pb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Refund Policy
              </h2>
              <p className="text-xs text-gray-400">
                Timeline, process, and conditions for advance refunds
              </p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-[#141924] border border-[#202738] space-y-3">
              <p className="text-gray-200 font-medium">
                In the event of cancellation of your booking, Budget Cab Services shall be issuing a refund of the entire amount paid to us in advance for the given booking (subject to cancellation charges, if applicable).
              </p>
              
              <div className="pt-2 border-t border-[#1b2232] space-y-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#f26522]" />
                  How to Request a Refund:
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  To request a refund, simply drop us an email with your booking details. Please include your <strong>Booking ID</strong> (sent to you via SMS and email after booking).
                </p>
                <p className="text-xs text-gray-400 italic">
                  Optionally, please let us know why you’re requesting a refund – we take customer feedback very seriously and use it to constantly improve our offering and quality of service.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#141924] border border-[#202738] space-y-1">
                <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-wider">Initiation Timeframe</h4>
                <p className="text-xs sm:text-sm text-gray-200">
                  Refunds are usually initiated within <strong>48 hours</strong> from the date of request and is limited to the amount paid to us in advance for the given booking.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141924] border border-[#202738] space-y-1">
                <h4 className="font-bold text-amber-400 text-xs uppercase tracking-wider">Applicable Charges</h4>
                <p className="text-xs sm:text-sm text-gray-200">
                  Refunds are subject to Cancellation charges, if applicable (for details please refer to our Cancellation Policy above).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#121724] border border-[#232c3f] space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#f26522]">Rescheduling Requirement</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                The onus for rescheduling of departure time and confirmation from Budget Cab Services about the availability of the car at such rescheduled time will be with the customer and such request can be made only in writing by sending us an email at{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#f26522] font-semibold hover:underline">
                  {SITE_CONFIG.email}
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* 24/7 Helpline Card */}
        <section className="bg-gradient-to-r from-[#121724] via-[#161c2c] to-[#121724] rounded-2xl p-6 sm:p-8 border border-[#252f45] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs">
              <HelpCircle className="w-4 h-4" />
              <span>Need Help with Cancellation or Refund?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Our 24×7 Customer Care Support
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Reach out to us anytime for instant support, booking adjustments, or grievances.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phone_nasik}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#f26522] text-black font-extrabold hover:bg-[#ff7534] transition-all shadow-lg text-sm font-heading"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98606 89292</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#182030] border border-[#2e3a54] text-white font-bold hover:border-[#f26522] hover:text-[#f26522] transition-all text-sm font-heading"
            >
              <Mail className="w-4 h-4 text-[#f26522]" />
              <span>Email Support</span>
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
