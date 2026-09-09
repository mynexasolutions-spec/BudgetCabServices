import { NavItem } from "@/types";

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Book Cab", href: "/cab-booking" },
  { label: "About Us", href: "/about" },
  { label: "Cab Services", href: "/cab-services" },
  { label: "Outstation Routes", href: "/mumbai-outstation-cabs" },
  { label: "Blog", href: "/blog" },
  { label: "Payment", href: "/payment" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Outstation Cabs", href: "/cab-services" },
  { label: "Airport Transfer", href: "/cab-services" },
  { label: "Local Taxi Rental", href: "/cab-services" },
  { label: "One Way Taxi", href: "/cab-services" },
  { label: "Corporate Rental", href: "/cab-services" },
];

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/terms-and-conditions#refund" },
];
