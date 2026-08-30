import React from "react";
import Header from "@/components/layout/Header";
import PageHeader from "@/components/about/PageHeader";
import Footer from "@/components/layout/Footer";
import {
  ShieldCheck,
  Lock,
  Database,
  FileText,
  Cookie,
  Eye,
  Share2,
  Clock,
  UserCheck,
  Send,
  Mail,
  Phone,
} from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export const metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.name}`,
  description: `Privacy Policy and data protection details for ${SITE_CONFIG.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-gray-100 font-sans flex flex-col justify-between pt-[72px] md:pt-[110px]">
      {/* Header */}
      <Header />

      {/* Responsive Compact Page Header */}
      <PageHeader
        title="Privacy"
        highlightText="Policy"
        tagline="Data Protection & Privacy Guidelines"
        compact={true}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      {/* Main Content */}
      <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-8">
        
        {/* Intro Subtext */}
        <div className="p-4 rounded-xl bg-[#0e121a] border border-[#1d2536] text-xs sm:text-sm text-gray-400 text-center">
          Our website address is:{" "}
          <a
            href="https://budgetcabsservices.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f26522] font-semibold hover:underline"
          >
            https://budgetcabsservices.com
          </a>
        </div>

        {/* Content Section */}
        <section className="space-y-6">
          
          {/* 1. Comments */}
          <div className="bg-[#0e121a] rounded-2xl p-6 sm:p-8 border border-[#1d2536] shadow-xl space-y-4">
            <div className="flex items-center gap-3 border-b border-[#1b2232] pb-3">
              <div className="w-9 h-9 rounded-xl bg-[#f26522]/10 border border-[#f26522]/30 flex items-center justify-center text-[#f26522] shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white font-heading">
                Comments
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available at{" "}
              <a
                href="https://automattic.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f26522] hover:underline font-medium"
              >
                https://automattic.com/privacy/
              </a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.
            </p>
          </div>

          {/* 2. Media */}
          <div className="bg-[#0e121a] rounded-2xl p-6 sm:p-8 border border-[#1d2536] shadow-xl space-y-4">
            <div className="flex items-center gap-3 border-b border-[#1b2232] pb-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Eye className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white font-heading">
                Media
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
            </p>
          </div>

          {/* 3. Cookies */}
          <div className="bg-[#0e121a] rounded-2xl p-6 sm:p-8 border border-[#1d2536] shadow-xl space-y-4">
            <div className="flex items-center gap-3 border-b border-[#1b2232] pb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Cookie className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white font-heading">
                Cookies
              </h2>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300 leading-relaxed list-disc list-inside">
              <li>
                If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
              </li>
              <li>
                If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
              </li>
              <li>
                When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
              </li>
              <li>
                If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
              </li>
            </ul>
          </div>

          {/* 4. Embedded content from other websites */}
          <div className="bg-[#0e121a] rounded-2xl p-6 sm:p-8 border border-[#1d2536] shadow-xl space-y-4">
            <div className="flex items-center gap-3 border-b border-[#1b2232] pb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white font-heading">
                Embedded content from other websites
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
            </p>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
            </p>
          </div>

          {/* 5. Data Sharing, Retention & Rights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Who we share your data with */}
            <div className="bg-[#0e121a] rounded-2xl p-6 border border-[#1d2536] shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-[#f26522] font-bold text-sm">
                <Share2 className="w-4 h-4" />
                <h3 className="text-white font-heading text-base font-bold">Who we share your data with</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                If you request a password reset, your IP address will be included in the reset email.
              </p>
            </div>

            {/* How long we retain your data */}
            <div className="bg-[#0e121a] rounded-2xl p-6 border border-[#1d2536] shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Clock className="w-4 h-4" />
                <h3 className="text-white font-heading text-base font-bold">How long we retain your data</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
              </p>
            </div>

            {/* What rights you have over your data */}
            <div className="bg-[#0e121a] rounded-2xl p-6 border border-[#1d2536] shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <UserCheck className="w-4 h-4" />
                <h3 className="text-white font-heading text-base font-bold">What rights you have over your data</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
              </p>
            </div>

            {/* Where your data is sent */}
            <div className="bg-[#0e121a] rounded-2xl p-6 border border-[#1d2536] shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                <Send className="w-4 h-4" />
                <h3 className="text-white font-heading text-base font-bold">Where your data is sent</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Visitor comments may be checked through an automated spam detection service.
              </p>
            </div>

          </div>

          {/* Privacy Contact Card */}
          <div className="bg-[#121724] rounded-2xl p-6 border border-[#232c3f] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base font-bold text-white font-heading">
                Have questions regarding your privacy?
              </h3>
              <p className="text-xs text-gray-400">
                Contact our support team anytime at {SITE_CONFIG.email}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f26522] text-black font-bold text-xs hover:bg-[#ff7534] transition-all shadow-md font-heading"
              >
                <Mail className="w-4 h-4" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone_nasik}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#182030] border border-[#2e3a54] text-white font-bold text-xs hover:border-[#f26522] hover:text-[#f26522] transition-all font-heading"
              >
                <Phone className="w-4 h-4 text-[#f26522]" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>

        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
