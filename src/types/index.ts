export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  hasDropdown?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface FleetVehicle {
  id: string;
  name: string;
  category: "Economy" | "Sedan" | "SUV" | "Luxury" | "Tempo Traveller" | "Hatchback" | string;
  capacity: string;
  seats?: string;
  transmission?: "Auto" | "Manual";
  luggage: string;
  ac: boolean;
  ratePerKm?: string;
  startingPrice?: string;
  pricePerDay?: string;
  image: string;
  popular?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar?: string;
  location: string;
}

export interface BookingFormData {
  tripType: "oneWay" | "roundTrip" | "local" | "airport";
  pickupLocation: string;
  dropLocation: string;
  pickupDate: string;
  pickupTime: string;
  cabType: string;
  passengerName: string;
  passengerPhone: string;
}
