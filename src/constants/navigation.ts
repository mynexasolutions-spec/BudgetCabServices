import { NavItem } from "@/types";

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/", hasDropdown: true },
  { label: "About Us", href: "/about" },
  { label: "Pages", href: "/services", hasDropdown: true },
  { label: "Cars", href: "/#fleet", hasDropdown: true },
  { label: "Shop", href: "/services", hasDropdown: true },
  { label: "Blog", href: "/faq", hasDropdown: true },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Outstation Cabs", href: "/services" },
  { label: "Airport Transfer", href: "/services" },
  { label: "Local Taxi Rental", href: "/services" },
  { label: "One Way Taxi", href: "/services" },
  { label: "Corporate Rental", href: "/services" },
];

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];
