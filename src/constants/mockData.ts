import { FleetVehicle, ServiceItem, FaqItem, Testimonial } from "@/types";

export const MOCK_FLEET: FleetVehicle[] = [
  {
    id: "honda-city",
    name: "Honda City / Verna",
    category: "Sedan",
    capacity: "4 Seats",
    seats: "4 Seats",
    transmission: "Auto",
    luggage: "2 Bags",
    ac: true,
    ratePerKm: "₹13/km",
    startingPrice: "₹4,200",
    pricePerDay: "Full Day — ₹4,200",
    image: "/images/listing/img_01.webp",
    popular: true,
  },
  {
    id: "ertiga",
    name: "Ertiga / Triber",
    category: "Family MPV",
    capacity: "6 Seats",
    seats: "6 Seats",
    transmission: "Manual",
    luggage: "3 Bags",
    ac: true,
    ratePerKm: "₹15/km",
    startingPrice: "₹4,500",
    pricePerDay: "Full Day — ₹4,500",
    image: "/images/listing/img_03.webp",
    popular: true,
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Luxury SUV",
    capacity: "7 Seats",
    seats: "7 Seats",
    transmission: "Auto",
    luggage: "4 Bags",
    ac: true,
    ratePerKm: "₹18/km",
    startingPrice: "₹5,500",
    pricePerDay: "Full Day — ₹5,500",
    image: "/images/listing/img_04.webp",
    popular: true,
  },
  {
    id: "tempo",
    name: "Tempo Traveller",
    category: "Group Travel",
    capacity: "3 Seats",
    seats: "3 Seats",
    transmission: "Manual",
    luggage: "8 Bags",
    ac: true,
    ratePerKm: "₹24/km",
    startingPrice: "₹4,500",
    pricePerDay: "Full Day — ₹4,500",
    image: "/images/listing/dummy.webp",
  }
];

export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: "outstation",
    title: "Outstation One-Way & Round Trip",
    description: "Comfortable inter-city travel with verified drivers and zero hidden tolls.",
    icon: "Car",
    badge: "Popular",
  },
  {
    id: "airport",
    title: "Airport Pick & Drop",
    description: "On-time airport transfers with flight tracking and free waiting time.",
    icon: "Plane",
  },
  {
    id: "local",
    title: "Hourly Local Rentals",
    description: "Flexible packages (8hrs/80km, 12hrs/120km) for local city errands and meetings.",
    icon: "Clock",
  },
];

export const MOCK_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How can I book a cab?",
    answer:
      "You can easily book a cab through our website or by contacting us directly.",
  },
  {
    id: "faq-2",
    question: "Do you provide airport transfer services?",
    answer:
      "Yes, we provide reliable and on-time airport pickup and drop services.",
  },
  {
    id: "faq-3",
    question: "Do you offer outstation cab services?",
    answer:
      "Yes, we offer comfortable and affordable one-way and round-trip outstation cab services.",
  },
  {
    id: "faq-4",
    question: "Are your drivers experienced?",
    answer:
      "Yes, our drivers are professional, experienced, and committed to your safety.",
  },
  {
    id: "faq-5",
    question: "Are cab services available 24/7?",
    answer:
      "Yes, our services are available 24/7 based on booking and vehicle availability.",
  },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Vikas Aahuja",
    rating: 5,
    comment:
      "Amit Sharma (Driver) was helpful & polite. His driving was very perfect. I would recommend. But I would request to Budget Cab Services that pricing is very costly so kindly look into it & reduce price.",
    location: "Mumbai",
  },
  {
    id: "test-2",
    name: "Neha Mittal",
    rating: 5,
    comment:
      "Excellent service. Driver Rahul Gupta arrived on time. Happy with safe driving behaviour of Ashish. Helped us to reach as close to the destination as possible in spite of several road closures in Nasik. Very happy with the service of Budget Cab Services and will recommend to others.",
    location: "Nasik",
  },
  {
    id: "test-3",
    name: "Aman Khan",
    rating: 5,
    comment:
      "It was an excellent experience to travel with Budget Cab Services. The booking system is very smooth and drivers were well mannered, punctual and cooperative. I wish to recommend their services to all my friends and family.",
    location: "Mumbai",
  },
  {
    id: "test-4",
    name: "Ankit Kumar",
    rating: 5,
    comment:
      "Budget Cab Services offers an excellent service with prompt, professional drivers and well-maintained, clean cars. Booking is easy, and their customer support is responsive. Prices are competitive, making it great value for money. A reliable and comfortable choice for travel. Highly recommended!",
    location: "Nasik",
  },
];
