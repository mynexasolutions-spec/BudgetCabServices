"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Car,
  ArrowRightLeft,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  ShieldCheck,
  Award,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Plane,
  Clock3,
  Repeat,
  Check,
  Loader2,
  AlertCircle,
  Building2,
  Train,
} from "lucide-react";
import { LocationItem, LOCATIONS_DATABASE } from "@/constants/locations";
import { SITE_CONFIG } from "@/constants/siteConfig";

const LOCAL_PACKAGES = [
  "4 Hours / 40 Kms",
  "8 Hours / 80 Kms (Full Day)",
  "12 Hours / 120 Kms",
  "24 Hours / 200 Kms",
];

const AIRPORTS = [
  "Mumbai Airport (BOM) T1 & T2",
  "Pune Airport (PNQ)",
  "Nashik Airport (Ozar)",
  "Surat Airport (STV)",
  "Shirdi Airport (SAG)",
  "Goa Airport (GOI/GOX)",
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Generate 30-minute interval times
const TIME_SLOTS = Array.from({ length: 48 }, (_, i) => {
  const hours24 = Math.floor(i / 2);
  const minutes = i % 2 === 0 ? "00" : "30";
  const period = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  return `${hours12.toString().padStart(2, "0")}:${minutes} ${period}`;
});

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"oneWay" | "roundTrip" | "local" | "airport">("oneWay");

  // Form input text states
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [localPackage, setLocalPackage] = useState(LOCAL_PACKAGES[1]);
  const [selectedAirport, setSelectedAirport] = useState(AIRPORTS[0]);

  // Selected structured location objects (name, id, lat, lng, type)
  const [pickupLocationItem, setPickupLocationItem] = useState<LocationItem | null>(null);
  const [dropLocationItem, setDropLocationItem] = useState<LocationItem | null>(null);

  // Real-time location search autocomplete states
  const [pickupSearchResults, setPickupSearchResults] = useState<LocationItem[]>(LOCATIONS_DATABASE.slice(0, 8));
  const [isPickupLoading, setIsPickupLoading] = useState(false);

  const [dropSearchResults, setDropSearchResults] = useState<LocationItem[]>(LOCATIONS_DATABASE.slice(0, 8));
  const [isDropLoading, setIsDropLoading] = useState(false);

  // Form submission and validation states
  const [isSearching, setIsSearching] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    pickup?: string;
    drop?: string;
    date?: string;
    returnDate?: string;
    time?: string;
    fullName?: string;
    contactNumber?: string;
    passengers?: string;
  }>({});

  // Departure Date State (Default: Today)
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [returnDate, setReturnDate] = useState<Date>(
    new Date(today.getTime() + 24 * 60 * 60 * 1000)
  );

  // Calendar Picker View States
  const [calendarMonth, setCalendarMonth] = useState(today.getMonth());
  const [calendarYear, setCalendarYear] = useState(today.getFullYear());
  const [returnCalendarMonth, setReturnCalendarMonth] = useState(today.getMonth());
  const [returnCalendarYear] = useState(today.getFullYear());

  // Time state (Default: 10:30 AM)
  const [selectedTime, setSelectedTime] = useState("10:30 AM");

  // Dropdown visibility states
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [showDropDropdown, setShowDropDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  // Dynamic positioning states
  const [calendarPosition, setCalendarPosition] = useState<"top" | "bottom">("bottom");
  const [returnCalendarPosition, setReturnCalendarPosition] = useState<"top" | "bottom">("bottom");
  const [timePosition, setTimePosition] = useState<"top" | "bottom">("bottom");

  // User Info States
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [passengers, setPassengers] = useState("");

  const toggleCalendar = (e: React.MouseEvent, type: "departure" | "return") => {
    setShowPickupDropdown(false);
    setShowDropDropdown(false);
    setShowTimeDropdown(false);

    const rect = e.currentTarget.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    
    // Only show on top if there is not enough space below AND there IS enough space above.
    const position = (spaceBelow < 380 && spaceAbove >= 380) ? "top" : "bottom";

    if (type === "departure") {
      if (showCalendar) {
        setShowCalendar(false);
        return;
      }
      setShowReturnCalendar(false);
      setCalendarPosition(position);
      setShowCalendar(true);
    } else {
      if (showReturnCalendar) {
        setShowReturnCalendar(false);
        return;
      }
      setShowCalendar(false);
      setReturnCalendarPosition(position);
      setShowReturnCalendar(true);
    }
  };

  const toggleTimeDropdown = (e: React.MouseEvent) => {
    setShowPickupDropdown(false);
    setShowDropDropdown(false);
    setShowCalendar(false);
    setShowReturnCalendar(false);
    
    if (showTimeDropdown) {
      setShowTimeDropdown(false);
      return;
    }
    
    const rect = e.currentTarget.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    
    const position = (spaceBelow < 250 && spaceAbove >= 250) ? "top" : "bottom";
    
    setTimePosition(position);
    setShowTimeDropdown(true);
  };

  // Refs for click outside
  const formRef = useRef<HTMLDivElement>(null);
  const timeListRef = useRef<HTMLDivElement>(null);

  // Real-time debounced location search for Pickup
  useEffect(() => {
    if (!pickupLocation.trim()) {
      const resetTimer = setTimeout(() => {
        setPickupSearchResults(LOCATIONS_DATABASE.slice(0, 8));
        setIsPickupLoading(false);
      }, 0);
      return () => clearTimeout(resetTimer);
    }

    const timer = setTimeout(async () => {
      setIsPickupLoading(true);
      try {
        const res = await fetch(`/api/locations?query=${encodeURIComponent(pickupLocation.trim())}`);
        const data = await res.json();
        if (data.success && Array.isArray(data.locations)) {
          setPickupSearchResults(data.locations);
        }
      } catch {
        const fallback = LOCATIONS_DATABASE.filter(
          (loc) =>
            loc.name.toLowerCase().includes(pickupLocation.toLowerCase()) ||
            loc.city.toLowerCase().includes(pickupLocation.toLowerCase())
        );
        setPickupSearchResults(fallback);
      } finally {
        setIsPickupLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [pickupLocation]);

  // Real-time debounced location search for Drop
  useEffect(() => {
    if (!dropLocation.trim()) {
      const resetTimer = setTimeout(() => {
        setDropSearchResults(LOCATIONS_DATABASE.slice(0, 8));
        setIsDropLoading(false);
      }, 0);
      return () => clearTimeout(resetTimer);
    }

    const timer = setTimeout(async () => {
      setIsDropLoading(true);
      try {
        const res = await fetch(`/api/locations?query=${encodeURIComponent(dropLocation.trim())}`);
        const data = await res.json();
        if (data.success && Array.isArray(data.locations)) {
          setDropSearchResults(data.locations);
        }
      } catch {
        const fallback = LOCATIONS_DATABASE.filter(
          (loc) =>
            loc.name.toLowerCase().includes(dropLocation.toLowerCase()) ||
            loc.city.toLowerCase().includes(dropLocation.toLowerCase())
        );
        setDropSearchResults(fallback);
      } finally {
        setIsDropLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [dropLocation]);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setShowPickupDropdown(false);
        setShowDropDropdown(false);
        setShowCalendar(false);
        setShowReturnCalendar(false);
        setShowTimeDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll time list into view when opened
  useEffect(() => {
    if (showTimeDropdown && timeListRef.current) {
      const activeEl = timeListRef.current.querySelector("[data-active='true']");
      if (activeEl) {
        activeEl.scrollIntoView({ block: "center", behavior: "instant" });
      }
    }
  }, [showTimeDropdown]);

  // Format date helper: "27 August 2026"
  const formatDateDisplay = (date: Date) => {
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Format date helper ISO: "2026-08-27"
  const formatDateISO = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Select location handlers
  const handleSelectPickup = (item: LocationItem) => {
    setPickupLocation(item.name);
    setPickupLocationItem(item);
    setShowPickupDropdown(false);
    setValidationErrors((prev) => ({ ...prev, pickup: undefined }));
  };

  const handleSelectDrop = (item: LocationItem) => {
    setDropLocation(item.name);
    setDropLocationItem(item);
    setShowDropDropdown(false);
    setValidationErrors((prev) => ({ ...prev, drop: undefined }));
  };

  // Swap pickup and drop
  const handleSwapLocations = () => {
    const tempName = pickupLocation;
    const tempItem = pickupLocationItem;
    setPickupLocation(dropLocation);
    setPickupLocationItem(dropLocationItem);
    setDropLocation(tempName);
    setDropLocationItem(tempItem);
    setValidationErrors((prev) => ({ ...prev, pickup: undefined, drop: undefined }));
  };

  // Handle Search Submission & Validation
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { pickup?: string; drop?: string; date?: string; returnDate?: string; time?: string; fullName?: string; contactNumber?: string; passengers?: string; } = {};

    if (!fullName.trim()) {
      errors.fullName = "Name is required";
    }
    if (!contactNumber.trim()) {
      errors.contactNumber = "Contact is required";
    }
    if (!passengers.trim()) {
      errors.passengers = "Required";
    }

    // Validate Pickup Location
    let currentPickup = pickupLocationItem;
    if (!currentPickup || currentPickup.name.toLowerCase() !== pickupLocation.trim().toLowerCase()) {
      const matched = LOCATIONS_DATABASE.find(
        (l) => l.name.toLowerCase() === pickupLocation.trim().toLowerCase() || l.city.toLowerCase() === pickupLocation.trim().toLowerCase()
      );
      if (matched) {
        currentPickup = matched;
        setPickupLocationItem(matched);
      }
    }

    if (!pickupLocation.trim() || !currentPickup) {
      errors.pickup = "Please select a valid pickup location from suggestions";
    }

    // One Way & Round Trip require Drop Location
    let currentDrop = dropLocationItem;
    if (activeTab === "oneWay" || activeTab === "roundTrip") {
      if (!currentDrop || currentDrop.name.toLowerCase() !== dropLocation.trim().toLowerCase()) {
        const matchedDrop = LOCATIONS_DATABASE.find(
          (l) => l.name.toLowerCase() === dropLocation.trim().toLowerCase() || l.city.toLowerCase() === dropLocation.trim().toLowerCase()
        );
        if (matchedDrop) {
          currentDrop = matchedDrop;
          setDropLocationItem(matchedDrop);
        }
      }

      if (!dropLocation.trim() || !currentDrop) {
        errors.drop = "Please select a valid drop location from suggestions";
      } else if (currentPickup && currentDrop && currentPickup.id === currentDrop.id) {
        errors.drop = "Pickup and drop location cannot be the same";
      }
    }

    if (!selectedDate) {
      errors.date = "Please select departure date";
    }

    if (activeTab === "roundTrip" && !returnDate) {
      errors.returnDate = "Please select return date";
    }

    if (!selectedTime) {
      errors.time = "Please select departure time";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});
    setIsSearching(true);

    const queryParams = new URLSearchParams({
      type: activeTab,
      from: currentPickup?.name || pickupLocation,
      fromId: currentPickup?.id || "",
      fromLat: currentPickup?.lat?.toString() || "",
      fromLng: currentPickup?.lng?.toString() || "",
      date: formatDateISO(selectedDate),
      time: selectedTime,
      name: fullName,
      phone: contactNumber,
      passengers: passengers,
    });

    if (activeTab === "oneWay" || activeTab === "roundTrip") {
      queryParams.set("to", currentDrop?.name || dropLocation);
      queryParams.set("toId", currentDrop?.id || "");
      queryParams.set("toLat", currentDrop?.lat?.toString() || "");
      queryParams.set("toLng", currentDrop?.lng?.toString() || "");
    }

    if (activeTab === "roundTrip") {
      queryParams.set("returnDate", formatDateISO(returnDate));
    }

    if (activeTab === "local") {
      queryParams.set("package", localPackage);
    }

    if (activeTab === "airport") {
      queryParams.set("airport", selectedAirport);
    }

    const whatsappMessage = [
      "Hello Budget Cab Services, I would like a cab quote.",
      `Trip type: ${activeTab === "oneWay" ? "One way" : activeTab === "roundTrip" ? "Round trip" : activeTab === "local" ? "Local rental" : "Airport transfer"}`,
      `Name: ${fullName}`,
      `Phone: ${contactNumber}`,
      `Pickup: ${queryParams.get("from")}`,
      `Drop: ${queryParams.get("to") || queryParams.get("airport") || "Not specified"}`,
      `Date: ${queryParams.get("date")}`,
      `Time: ${queryParams.get("time")}`,
      `Passengers: ${passengers}`,
    ].join("\n");

    window.location.href = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
  };

  // Helper icon for location type
  const renderLocationIcon = (type: LocationItem["type"]) => {
    switch (type) {
      case "airport":
        return <Plane className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />;
      case "station":
        return <Train className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />;
      case "landmark":
        return <Building2 className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />;
      default:
        return <MapPin className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />;
    }
  };

  // Render Calendar Matrix
  const renderCalendar = (
    currentMonth: number,
    currentYear: number,
    currentSelectedDate: Date,
    onSelectDate: (d: Date) => void,
    onPrevMonth: () => void,
    onNextMonth: () => void
  ) => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

    const days = [];

    // Previous month trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date: new Date(currentYear, currentMonth - 1, prevMonthDays - i),
      });
    }

    // Current month days
    for (let i = 1; i <= totalDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(currentYear, currentMonth, i),
      });
    }

    // Next month leading days
    const remainingSlots = (days.length <= 35 ? 35 : 42) - days.length;
    for (let i = 1; i <= remainingSlots; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(currentYear, currentMonth + 1, i),
      });
    }

    return (
      <div className="w-[300px] sm:w-[320px] lg:w-[260px] bg-[#131722] border-2 border-[#23293a] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden p-4 lg:p-3 z-50">
        {/* Month Year Header */}
        <div className="flex items-center justify-between pb-3 lg:pb-2 border-b border-[#23293a] mb-3 lg:mb-2">
          <button
            type="button"
            onClick={onPrevMonth}
            className="w-8 h-8 lg:w-7 lg:h-7 rounded-lg bg-[#0b0e14] hover:bg-[#23293a] text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 lg:w-3.5 lg:h-3.5" />
          </button>
          <span className="font-heading font-extrabold text-white text-sm lg:text-xs tracking-wide">
            {MONTH_NAMES[currentMonth]} {currentYear}
          </span>
          <button
            type="button"
            onClick={onNextMonth}
            className="w-8 h-8 lg:w-7 lg:h-7 rounded-lg bg-[#0b0e14] hover:bg-[#23293a] text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 lg:w-3.5 lg:h-3.5" />
          </button>
        </div>

        {/* Days of Week Header */}
        <div className="grid grid-cols-7 gap-1 lg:gap-0.5 bg-[#f59e0b] rounded-lg py-1.5 lg:py-1 mb-2.5 lg:mb-1.5 text-center text-[11px] lg:text-[10px] font-heading font-black text-black tracking-wider">
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-1 lg:gap-0.5 text-center font-sans text-xs lg:text-[11px]">
          {days.map((item, index) => {
            const isSelected =
              item.isCurrentMonth &&
              item.date.getDate() === currentSelectedDate.getDate() &&
              item.date.getMonth() === currentSelectedDate.getMonth() &&
              item.date.getFullYear() === currentSelectedDate.getFullYear();

            const isToday =
              item.isCurrentMonth &&
              item.date.getDate() === today.getDate() &&
              item.date.getMonth() === today.getMonth() &&
              item.date.getFullYear() === today.getFullYear();

            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  onSelectDate(item.date);
                }}
                className={`h-8 w-8 lg:h-7 lg:w-7 mx-auto rounded-lg flex items-center justify-center text-xs lg:text-[11px] transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#f59e0b] text-black font-extrabold shadow-lg shadow-[#f59e0b]/40 scale-105"
                    : isToday
                    ? "border border-[#f59e0b] text-[#f59e0b] font-bold"
                    : item.isCurrentMonth
                    ? "text-gray-200 hover:bg-white/10 hover:text-white"
                    : "text-gray-600 hover:text-gray-400"
                }`}
              >
                {item.day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="home" className="relative sm:min-h-[90vh] lg:min-h-[95vh] pt-[70px] pb-10 lg:pt-[120px] lg:pb-15 bg-[#0b0e14] flex flex-col justify-between">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/hero_banners.png"
          alt="Luxury Car Driving on Coastal Mountain Road"
          fill
          className="object-cover object-bottom brightness-70 contrast-90"
          priority
        />
        {/* Dark Gradients for Content Legibility & Seamless Integration */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e14]/80 via-[#0b0e14]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-[#0b0e14]/50"></div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1350px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        <div className="max-w-2xl space-y-4 text-center lg:text-left pt-6 lg:mt-10 pb-8 sm:pb-6">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight sm:leading-[1.08] tracking-tight font-heading text-center lg:text-left">
            Reliable · Safe · <span className="text-[#f59e0b]">On Time</span>
          </h1>
        </div>

        {/* Top Tabs (ONE WAY, ROUND TRIP, LOCAL, AIRPORT) */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3 lg:mt-3">
          <button
            type="button"
            onClick={() => {
              setActiveTab("oneWay");
              setShowCalendar(false);
              setShowTimeDropdown(false);
              setValidationErrors({});
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-[5px] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "oneWay"
                ? "bg-[#131722] text-[#f59e0b] border border-[#f59e0b]/80 shadow-lg shadow-[#f59e0b]/10"
                : "bg-[#131722]/80 backdrop-blur-md text-gray-300 border border-[#23293a] hover:text-white hover:border-[#38425d] hover:bg-[#131722]"
            }`}
          >
            <Car className="w-4 h-4 text-[#f59e0b]" />
            <span>One Way</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("roundTrip");
              setShowCalendar(false);
              setShowTimeDropdown(false);
              setValidationErrors({});
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-[5px] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "roundTrip"
                ? "bg-[#131722] text-[#f59e0b] border border-[#f59e0b]/80 shadow-lg shadow-[#f59e0b]/10"
                : "bg-[#131722]/80 backdrop-blur-md text-gray-300 border border-[#23293a] hover:text-white hover:border-[#38425d] hover:bg-[#131722]"
            }`}
          >
            <Repeat className="w-4 h-4 text-[#f59e0b]" />
            <span>Round Trip</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("local");
              setShowCalendar(false);
              setShowTimeDropdown(false);
              setValidationErrors({});
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-[5px] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "local"
                ? "bg-[#131722] text-[#f59e0b] border border-[#f59e0b]/80 shadow-lg shadow-[#f59e0b]/10"
                : "bg-[#131722]/80 backdrop-blur-md text-gray-300 border border-[#23293a] hover:text-white hover:border-[#38425d] hover:bg-[#131722]"
            }`}
          >
            <Clock3 className="w-4 h-4 text-[#f59e0b]" />
            <span>Local / Hourly</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("airport");
              setShowCalendar(false);
              setShowTimeDropdown(false);
              setValidationErrors({});
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-[5px] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "airport"
                ? "bg-[#131722] text-[#f59e0b] border border-[#f59e0b]/80 shadow-lg shadow-[#f59e0b]/10"
                : "bg-[#131722]/80 backdrop-blur-md text-gray-300 border border-[#23293a] hover:text-white hover:border-[#38425d] hover:bg-[#131722]"
            }`}
          >
            <Plane className="w-4 h-4 text-[#f59e0b]" />
            <span>Airport Transfer</span>
          </button>
        </div>

        {/* Integrated Floating Booking Search Bar */}
        <div
          ref={formRef}
          className="backdrop-blur-[10px] border border-[#fafbfc38] rounded-[5px] p-3 sm:p-3 lg:p-4 shadow-2xl relative z-40"
        >
          {/* Form Content */}
          <form onSubmit={handleSearch}>
            {/* Form Title & User Details */}
            <div className="mb-5 sm:mb-6">
              {/* <h2 className="text-sm sm:text-base font-heading font-extrabold text-[#f59e0b] tracking-wider uppercase mb-4 flex items-center gap-2">
                CAB BOOKING FORM
              </h2> */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={fullName}
                    onChange={(e) => { setFullName(e.target.value); setValidationErrors(prev => ({ ...prev, fullName: undefined })); }}
                    className={`w-full bg-[#0b0e14] border ${
                      validationErrors.fullName ? "border-rose-500" : "border-[#23293a] focus:border-[#f59e0b]"
                    } rounded-[5px] px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none transition-colors font-sans`}
                  />
                  {validationErrors.fullName && (
                    <span className="text-[11px] font-semibold text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {validationErrors.fullName}
                    </span>
                  )}
                </div>

                {/* Contact Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    Contact Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={contactNumber}
                    onChange={(e) => { setContactNumber(e.target.value); setValidationErrors(prev => ({ ...prev, contactNumber: undefined })); }}
                    className={`w-full bg-[#0b0e14] border ${
                      validationErrors.contactNumber ? "border-rose-500" : "border-[#23293a] focus:border-[#f59e0b]"
                    } rounded-[5px] px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none transition-colors font-sans`}
                  />
                  {validationErrors.contactNumber && (
                    <span className="text-[11px] font-semibold text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {validationErrors.contactNumber}
                    </span>
                  )}
                </div>

                {/* No. of Passenger */}
                <div className="space-y-1.5">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    No. of Passenger <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="Eg: 4"
                    value={passengers}
                    onChange={(e) => { setPassengers(e.target.value); setValidationErrors(prev => ({ ...prev, passengers: undefined })); }}
                    className={`w-full bg-[#0b0e14] border ${
                      validationErrors.passengers ? "border-rose-500" : "border-[#23293a] focus:border-[#f59e0b]"
                    } rounded-[5px] px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none transition-colors font-sans`}
                  />
                  {validationErrors.passengers && (
                    <span className="text-[11px] font-semibold text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {validationErrors.passengers}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="w-full h-px bg-[#23293a] mb-5 sm:mb-6"></div>

            {/* ONE WAY FORM LAYOUT */}
            {activeTab === "oneWay" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
                {/* Field 1: PICKUP LOCATION */}
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    PICKUP LOCATION
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#f59e0b]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Eg: Nashik"
                      value={pickupLocation}
                      onFocus={() => {
                        setShowPickupDropdown(true);
                        setShowDropDropdown(false);
                      }}
                      onChange={(e) => {
                        setPickupLocation(e.target.value);
                        setPickupLocationItem(null);
                        setShowPickupDropdown(true);
                      }}
                      className={`w-full bg-[#0b0e14] border ${
                        validationErrors.pickup ? "border-rose-500" : "border-[#23293a] focus:border-[#f59e0b]"
                      } rounded-[5px] pl-10 pr-8 py-3 text-sm text-white placeholder-gray-400 focus:outline-none transition-colors font-sans`}
                    />
                    {isPickupLoading && (
                      <Loader2 className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#f59e0b] animate-spin" />
                    )}
                  </div>

                  {validationErrors.pickup && (
                    <span className="text-[11px] font-semibold text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {validationErrors.pickup}
                    </span>
                  )}

                  {/* Real-time Autocomplete Dropdown */}
                  {showPickupDropdown && (
                    <div className="absolute left-0 right-0 top-[105%] bottom-auto mt-1 bg-[#131722] border-2 border-[#23293a] rounded-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-56 overflow-y-auto z-50 py-1">
                      {isPickupLoading ? (
                        <div className="px-3.5 py-3 text-xs text-gray-400 flex items-center gap-2">
                          <Loader2 className="w-3.5 h-3.5 text-[#f59e0b] animate-spin" />
                          <span>Searching locations...</span>
                        </div>
                      ) : pickupSearchResults.length > 0 ? (
                        pickupSearchResults.map((loc) => (
                          <button
                            key={loc.id}
                            type="button"
                            onClick={() => handleSelectPickup(loc)}
                            className="w-full text-left px-3.5 py-2 text-xs text-gray-200 hover:bg-[#f59e0b]/15 hover:text-[#f59e0b] transition-colors flex items-center justify-between cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              {renderLocationIcon(loc.type)}
                              <span className="font-medium">{loc.name}</span>
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase font-mono bg-[#0b0e14] px-1.5 py-0.5 rounded border border-[#23293a]">
                              {loc.type}
                            </span>
                          </button>
                        ))
                      ) : (
                        <div className="px-3.5 py-3 text-xs text-gray-400">No locations found.</div>
                      )}
                    </div>
                  )}
                </div>

                {/* Field 2: DROP LOCATION */}
                <div className="space-y-1.5 relative">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                      DROP LOCATION
                    </label>
                    {pickupLocation && dropLocation && (
                      <button
                        type="button"
                        onClick={handleSwapLocations}
                        title="Swap locations"
                        className="text-[10px] text-[#f59e0b] hover:text-[#fbbf24] flex items-center gap-1 font-semibold cursor-pointer"
                      >
                        <ArrowRightLeft className="w-2.5 h-2.5" /> Swap
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#f59e0b]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Eg: Mumbai"
                      value={dropLocation}
                      onFocus={() => {
                        setShowDropDropdown(true);
                        setShowPickupDropdown(false);
                      }}
                      onChange={(e) => {
                        setDropLocation(e.target.value);
                        setDropLocationItem(null);
                        setShowDropDropdown(true);
                      }}
                      className={`w-full bg-[#0b0e14] border ${
                        validationErrors.drop ? "border-rose-500" : "border-[#23293a] focus:border-[#f59e0b]"
                      } rounded-[5px] pl-10 pr-8 py-3 text-sm text-white placeholder-gray-400 focus:outline-none transition-colors font-sans`}
                    />
                    {isDropLoading && (
                      <Loader2 className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#f59e0b] animate-spin" />
                    )}
                  </div>

                  {validationErrors.drop && (
                    <span className="text-[11px] font-semibold text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {validationErrors.drop}
                    </span>
                  )}

                  {/* Real-time Autocomplete Dropdown */}
                  {showDropDropdown && (
                    <div className="absolute left-0 right-0 top-[105%] bottom-auto mt-1 bg-[#131722] border-2 border-[#23293a] rounded-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-56 overflow-y-auto z-50 py-1">
                      {isDropLoading ? (
                        <div className="px-3.5 py-3 text-xs text-gray-400 flex items-center gap-2">
                          <Loader2 className="w-3.5 h-3.5 text-[#f59e0b] animate-spin" />
                          <span>Searching locations...</span>
                        </div>
                      ) : dropSearchResults.length > 0 ? (
                        dropSearchResults.map((loc) => (
                          <button
                            key={loc.id}
                            type="button"
                            onClick={() => handleSelectDrop(loc)}
                            className="w-full text-left px-3.5 py-2 text-xs text-gray-200 hover:bg-[#f59e0b]/15 hover:text-[#f59e0b] transition-colors flex items-center justify-between cursor-pointer"
                          >
                            <div className="flex items-center gap-2">
                              {renderLocationIcon(loc.type)}
                              <span className="font-medium">{loc.name}</span>
                            </div>
                            <span className="text-[10px] text-gray-400 uppercase font-mono bg-[#0b0e14] px-1.5 py-0.5 rounded border border-[#23293a]">
                              {loc.type}
                            </span>
                          </button>
                        ))
                      ) : (
                        <div className="px-3.5 py-3 text-xs text-gray-400">No locations found.</div>
                      )}
                    </div>
                  )}
                </div>

                {/* Field 3: DEPARTURE */}
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    DEPARTURE
                  </label>
                  <button
                    type="button"
                    onClick={(e) => toggleCalendar(e, "departure")}
                    className="w-full bg-[#0b0e14] border border-[#23293a] hover:border-[#f59e0b]/60 focus:border-[#f59e0b] rounded-[5px] pl-3.5 pr-3 py-3 text-sm text-white flex items-center gap-2.5 transition-colors font-sans text-left cursor-pointer"
                  >
                    <CalendarIcon className="w-4 h-4 text-[#f59e0b] shrink-0" />
                    <span className="truncate font-medium text-xs sm:text-sm">
                      {formatDateDisplay(selectedDate)}
                    </span>
                  </button>

                  {showCalendar && (
                    <div className={`absolute left-0 sm:left-auto sm:right-0 lg:left-0 z-50 ${calendarPosition === "top" ? "bottom-[105%] top-auto" : "top-[105%] bottom-auto mt-1"}`}>
                      {renderCalendar(
                        calendarMonth,
                        calendarYear,
                        selectedDate,
                        (d) => {
                          setSelectedDate(d);
                          setShowCalendar(false);
                        },
                        () => {
                          if (calendarMonth === 0) {
                            setCalendarMonth(11);
                            setCalendarYear(calendarYear - 1);
                          } else {
                            setCalendarMonth(calendarMonth - 1);
                          }
                        },
                        () => {
                          if (calendarMonth === 11) {
                            setCalendarMonth(0);
                            setCalendarYear(calendarYear + 1);
                          } else {
                            setCalendarMonth(calendarMonth + 1);
                          }
                        }
                      )}
                    </div>
                  )}
                </div>

                {/* Field 4: TIME */}
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    TIME
                  </label>
                  <button
                    type="button"
                    onClick={(e) => toggleTimeDropdown(e)}
                    className="w-full bg-[#0b0e14] border border-[#23293a] hover:border-[#f59e0b]/60 focus:border-[#f59e0b] rounded-[5px] pl-3.5 pr-3 py-3 text-sm text-white flex items-center gap-2.5 transition-colors font-sans text-left cursor-pointer"
                  >
                    <Clock className="w-4 h-4 text-[#f59e0b] shrink-0" />
                    <span className="font-medium text-xs sm:text-sm">{selectedTime}</span>
                  </button>

                  {showTimeDropdown && (
                    <div
                      ref={timeListRef}
                      className="absolute left-0 right-0 z-50 bg-[#131722] border-2 border-[#23293a] rounded-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-56 overflow-y-auto py-1.5 scroll-smooth top-[105%] bottom-auto mt-1"
                    >
                      {TIME_SLOTS.map((slot) => {
                        const isActive = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            data-active={isActive ? "true" : "false"}
                            onClick={() => {
                              setSelectedTime(slot);
                              setShowTimeDropdown(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                              isActive
                                ? "bg-[#f59e0b] text-black font-extrabold"
                                : "text-gray-200 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            <span>{slot}</span>
                            {isActive && <Check className="w-3.5 h-3.5 text-black" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Field 5: WHATSAPP ENQUIRY BUTTON */}
                <div >
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="w-full py-2.5 px-4 rounded-[5px] bg-[#f59e0b] hover:bg-[#d98206] text-black font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all shadow-lg shadow-[#f59e0b]/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>OPENING WHATSAPP...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 stroke-[2.5]" />
                        <span>SUBMIT</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* ROUND TRIP FORM LAYOUT */}
            {activeTab === "roundTrip" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
                {/* Pickup Location */}
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    PICKUP LOCATION
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#f59e0b]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Eg: Nashik"
                      value={pickupLocation}
                      onFocus={() => setShowPickupDropdown(true)}
                      onChange={(e) => {
                        setPickupLocation(e.target.value);
                        setPickupLocationItem(null);
                        setShowPickupDropdown(true);
                      }}
                      className={`w-full bg-[#0b0e14] border ${
                        validationErrors.pickup ? "border-rose-500" : "border-[#23293a] focus:border-[#f59e0b]"
                      } rounded-[5px] pl-10 pr-8 py-3 text-sm text-white placeholder-gray-400 focus:outline-none transition-colors font-sans`}
                    />
                    {isPickupLoading && (
                      <Loader2 className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#f59e0b] animate-spin" />
                    )}
                  </div>

                  {validationErrors.pickup && (
                    <span className="text-[11px] font-semibold text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {validationErrors.pickup}
                    </span>
                  )}

                  {showPickupDropdown && (
                    <div className="absolute left-0 right-0 top-[105%] bottom-auto mt-1 bg-[#131722] border-2 border-[#23293a] rounded-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-56 overflow-y-auto z-50 py-1">
                      {pickupSearchResults.map((loc) => (
                        <button
                          key={loc.id}
                          type="button"
                          onClick={() => handleSelectPickup(loc)}
                          className="w-full text-left px-3.5 py-2 text-xs text-gray-200 hover:bg-[#f59e0b]/15 hover:text-[#f59e0b] transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            {renderLocationIcon(loc.type)}
                            <span className="font-medium">{loc.name}</span>
                          </div>
                          <span className="text-[10px] text-gray-400 uppercase font-mono bg-[#0b0e14] px-1.5 py-0.5 rounded border border-[#23293a]">
                            {loc.type}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Drop Location */}
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    DROP LOCATION
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#f59e0b]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Eg: Mumbai"
                      value={dropLocation}
                      onFocus={() => setShowDropDropdown(true)}
                      onChange={(e) => {
                        setDropLocation(e.target.value);
                        setDropLocationItem(null);
                        setShowDropDropdown(true);
                      }}
                      className={`w-full bg-[#0b0e14] border ${
                        validationErrors.drop ? "border-rose-500" : "border-[#23293a] focus:border-[#f59e0b]"
                      } rounded-[5px] pl-10 pr-8 py-3 text-sm text-white placeholder-gray-400 focus:outline-none transition-colors font-sans`}
                    />
                    {isDropLoading && (
                      <Loader2 className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#f59e0b] animate-spin" />
                    )}
                  </div>

                  {validationErrors.drop && (
                    <span className="text-[11px] font-semibold text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {validationErrors.drop}
                    </span>
                  )}

                  {showDropDropdown && (
                    <div className="absolute left-0 right-0 top-[105%] bottom-auto mt-1 bg-[#131722] border-2 border-[#23293a] rounded-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-56 overflow-y-auto z-50 py-1">
                      {dropSearchResults.map((loc) => (
                        <button
                          key={loc.id}
                          type="button"
                          onClick={() => handleSelectDrop(loc)}
                          className="w-full text-left px-3.5 py-2 text-xs text-gray-200 hover:bg-[#f59e0b]/15 hover:text-[#f59e0b] transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            {renderLocationIcon(loc.type)}
                            <span className="font-medium">{loc.name}</span>
                          </div>
                          <span className="text-[10px] text-gray-400 uppercase font-mono bg-[#0b0e14] px-1.5 py-0.5 rounded border border-[#23293a]">
                            {loc.type}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Departure Date */}
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    DEPARTURE
                  </label>
                  <button
                    type="button"
                    onClick={(e) => toggleCalendar(e, "departure")}
                    className="w-full bg-[#0b0e14] border border-[#23293a] hover:border-[#f59e0b]/60 rounded-[5px] pl-3.5 pr-3 py-3 text-sm text-white flex items-center gap-2 font-sans text-left cursor-pointer"
                  >
                    <CalendarIcon className="w-4 h-4 text-[#f59e0b] shrink-0" />
                    <span className="truncate text-xs font-medium">{formatDateDisplay(selectedDate)}</span>
                  </button>

                  {showCalendar && (
                    <div className={`absolute left-0 z-50 ${calendarPosition === "top" ? "bottom-[105%] top-auto" : "top-[105%] bottom-auto mt-1"}`}>
                      {renderCalendar(
                        calendarMonth,
                        calendarYear,
                        selectedDate,
                        (d) => {
                          setSelectedDate(d);
                          setShowCalendar(false);
                        },
                        () => setCalendarMonth(calendarMonth === 0 ? 11 : calendarMonth - 1),
                        () => setCalendarMonth(calendarMonth === 11 ? 0 : calendarMonth + 1)
                      )}
                    </div>
                  )}
                </div>

                {/* Return Date */}
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    RETURN
                  </label>
                  <button
                    type="button"
                    onClick={(e) => toggleCalendar(e, "return")}
                    className="w-full bg-[#0b0e14] border border-[#23293a] hover:border-[#f59e0b]/60 rounded-[5px] pl-3.5 pr-3 py-3 text-sm text-white flex items-center gap-2 font-sans text-left cursor-pointer"
                  >
                    <CalendarIcon className="w-4 h-4 text-[#f59e0b] shrink-0" />
                    <span className="truncate text-xs font-medium">{formatDateDisplay(returnDate)}</span>
                  </button>

                  {showReturnCalendar && (
                    <div className={`absolute left-0 z-50 ${returnCalendarPosition === "top" ? "bottom-[105%] top-auto" : "top-[105%] bottom-auto mt-1"}`}>
                      {renderCalendar(
                        returnCalendarMonth,
                        returnCalendarYear,
                        returnDate,
                        (d) => {
                          setReturnDate(d);
                          setShowReturnCalendar(false);
                        },
                        () => setReturnCalendarMonth(returnCalendarMonth === 0 ? 11 : returnCalendarMonth - 1),
                        () => setReturnCalendarMonth(returnCalendarMonth === 11 ? 0 : returnCalendarMonth + 1)
                      )}
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <div >
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="w-full py-2.5 px-4 rounded-[5px] bg-[#f59e0b] hover:bg-[#d98206] text-black font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all shadow-lg shadow-[#f59e0b]/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>OPENING WHATSAPP...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 stroke-[2.5]" />
                        <span>GET QUOTE ON WHATSAPP</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* LOCAL / HOURLY RENTAL LAYOUT */}
            {activeTab === "local" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
                {/* City */}
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    CITY
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#f59e0b]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Eg: Nashik / Mumbai"
                      value={pickupLocation}
                      onFocus={() => setShowPickupDropdown(true)}
                      onChange={(e) => {
                        setPickupLocation(e.target.value);
                        setPickupLocationItem(null);
                        setShowPickupDropdown(true);
                      }}
                      className={`w-full bg-[#0b0e14] border ${
                        validationErrors.pickup ? "border-rose-500" : "border-[#23293a] focus:border-[#f59e0b]"
                      } rounded-[5px] pl-10 pr-8 py-3 text-sm text-white placeholder-gray-400 focus:outline-none transition-colors font-sans`}
                    />
                    {isPickupLoading && (
                      <Loader2 className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#f59e0b] animate-spin" />
                    )}
                  </div>

                  {validationErrors.pickup && (
                    <span className="text-[11px] font-semibold text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {validationErrors.pickup}
                    </span>
                  )}

                  {showPickupDropdown && (
                    <div className="absolute left-0 right-0 top-[105%] bottom-auto mt-1 bg-[#131722] border-2 border-[#23293a] rounded-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-56 overflow-y-auto z-50 py-1">
                      {pickupSearchResults.map((loc) => (
                        <button
                          key={loc.id}
                          type="button"
                          onClick={() => handleSelectPickup(loc)}
                          className="w-full text-left px-3.5 py-2 text-xs text-gray-200 hover:bg-[#f59e0b]/15 hover:text-[#f59e0b] transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            {renderLocationIcon(loc.type)}
                            <span className="font-medium">{loc.name}</span>
                          </div>
                          <span className="text-[10px] text-gray-400 uppercase font-mono bg-[#0b0e14] px-1.5 py-0.5 rounded border border-[#23293a]">
                            {loc.type}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Rental Package */}
                <div className="space-y-1.5">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    PACKAGE
                  </label>
                  <select
                    value={localPackage}
                    onChange={(e) => setLocalPackage(e.target.value)}
                    className="w-full bg-[#0b0e14] border border-[#23293a] focus:border-[#f59e0b] rounded-[5px] px-4 py-3 text-sm text-white focus:outline-none transition-colors font-sans cursor-pointer"
                  >
                    {LOCAL_PACKAGES.map((pkg) => (
                      <option key={pkg} value={pkg} className="bg-[#131722] text-white">
                        {pkg}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Departure Date */}
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    DEPARTURE
                  </label>
                  <button
                    type="button"
                    onClick={(e) => toggleCalendar(e, "departure")}
                    className="w-full bg-[#0b0e14] border border-[#23293a] hover:border-[#f59e0b]/60 rounded-[5px] pl-3.5 pr-3 py-3 text-sm text-white flex items-center gap-2 font-sans text-left cursor-pointer"
                  >
                    <CalendarIcon className="w-4 h-4 text-[#f59e0b] shrink-0" />
                    <span className="truncate text-xs font-medium">{formatDateDisplay(selectedDate)}</span>
                  </button>

                  {showCalendar && (
                    <div className={`absolute left-0 z-50 ${calendarPosition === "top" ? "bottom-[105%] top-auto" : "top-[105%] bottom-auto mt-1"}`}>
                      {renderCalendar(
                        calendarMonth,
                        calendarYear,
                        selectedDate,
                        (d) => {
                          setSelectedDate(d);
                          setShowCalendar(false);
                        },
                        () => setCalendarMonth(calendarMonth === 0 ? 11 : calendarMonth - 1),
                        () => setCalendarMonth(calendarMonth === 11 ? 0 : calendarMonth + 1)
                      )}
                    </div>
                  )}
                </div>

                {/* Time */}
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    TIME
                  </label>
                  <button
                    type="button"
                    onClick={(e) => toggleTimeDropdown(e)}
                    className="w-full bg-[#0b0e14] border border-[#23293a] hover:border-[#f59e0b]/60 rounded-[5px] pl-3.5 pr-3 py-3 text-sm text-white flex items-center gap-2 font-sans text-left cursor-pointer"
                  >
                    <Clock className="w-4 h-4 text-[#f59e0b] shrink-0" />
                    <span className="font-medium text-xs sm:text-sm">{selectedTime}</span>
                  </button>

                  {showTimeDropdown && (
                    <div className="absolute left-0 right-0 z-50 bg-[#131722] border-2 border-[#23293a] rounded-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-56 overflow-y-auto py-1.5 scroll-smooth top-[105%] bottom-auto mt-1">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setSelectedTime(slot);
                            setShowTimeDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                            selectedTime === slot
                              ? "bg-[#f59e0b] text-black font-extrabold"
                              : "text-gray-200 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span>{slot}</span>
                          {selectedTime === slot && <Check className="w-3.5 h-3.5 text-black" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <div >
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="w-full py-3 px-4 rounded-[5px] bg-[#f59e0b] hover:bg-[#d98206] text-black font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all shadow-lg shadow-[#f59e0b]/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>OPENING WHATSAPP...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 stroke-[2.5]" />
                        <span>GET QUOTE ON WHATSAPP</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* AIRPORT TRANSFER LAYOUT */}
            {activeTab === "airport" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
                {/* City */}
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    CITY
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#f59e0b]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Eg: Nashik / Mumbai / Pune"
                      value={pickupLocation}
                      onFocus={() => setShowPickupDropdown(true)}
                      onChange={(e) => {
                        setPickupLocation(e.target.value);
                        setPickupLocationItem(null);
                        setShowPickupDropdown(true);
                      }}
                      className={`w-full bg-[#0b0e14] border ${
                        validationErrors.pickup ? "border-rose-500" : "border-[#23293a] focus:border-[#f59e0b]"
                      } rounded-[5px] pl-10 pr-8 py-3 text-sm text-white placeholder-gray-400 focus:outline-none transition-colors font-sans`}
                    />
                    {isPickupLoading && (
                      <Loader2 className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#f59e0b] animate-spin" />
                    )}
                  </div>

                  {validationErrors.pickup && (
                    <span className="text-[11px] font-semibold text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" /> {validationErrors.pickup}
                    </span>
                  )}

                  {showPickupDropdown && (
                    <div className="absolute left-0 right-0 top-[105%] bottom-auto mt-1 bg-[#131722] border-2 border-[#23293a] rounded-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-56 overflow-y-auto z-50 py-1">
                      {pickupSearchResults.map((loc) => (
                        <button
                          key={loc.id}
                          type="button"
                          onClick={() => handleSelectPickup(loc)}
                          className="w-full text-left px-3.5 py-2 text-xs text-gray-200 hover:bg-[#f59e0b]/15 hover:text-[#f59e0b] transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            {renderLocationIcon(loc.type)}
                            <span className="font-medium">{loc.name}</span>
                          </div>
                          <span className="text-[10px] text-gray-400 uppercase font-mono bg-[#0b0e14] px-1.5 py-0.5 rounded border border-[#23293a]">
                            {loc.type}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Airport Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    AIRPORT
                  </label>
                  <select
                    value={selectedAirport}
                    onChange={(e) => setSelectedAirport(e.target.value)}
                    className="w-full bg-[#0b0e14] border border-[#23293a] focus:border-[#f59e0b] rounded-[5px] px-4 py-3 text-sm text-white focus:outline-none transition-colors font-sans cursor-pointer"
                  >
                    {AIRPORTS.map((airport) => (
                      <option key={airport} value={airport} className="bg-[#131722] text-white">
                        {airport}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Departure Date */}
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    DEPARTURE
                  </label>
                  <button
                    type="button"
                    onClick={(e) => toggleCalendar(e, "departure")}
                    className="w-full bg-[#0b0e14] border border-[#23293a] hover:border-[#f59e0b]/60 rounded-[5px] pl-3.5 pr-3 py-3 text-sm text-white flex items-center gap-2 font-sans text-left cursor-pointer"
                  >
                    <CalendarIcon className="w-4 h-4 text-[#f59e0b] shrink-0" />
                    <span className="truncate text-xs font-medium">{formatDateDisplay(selectedDate)}</span>
                  </button>

                  {showCalendar && (
                    <div className={`absolute left-0 z-50 ${calendarPosition === "top" ? "bottom-[105%] top-auto" : "top-[105%] bottom-auto mt-1"}`}>
                      {renderCalendar(
                        calendarMonth,
                        calendarYear,
                        selectedDate,
                        (d) => {
                          setSelectedDate(d);
                          setShowCalendar(false);
                        },
                        () => setCalendarMonth(calendarMonth === 0 ? 11 : calendarMonth - 1),
                        () => setCalendarMonth(calendarMonth === 11 ? 0 : calendarMonth + 1)
                      )}
                    </div>
                  )}
                </div>

                {/* Time */}
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-heading font-extrabold text-gray-200 block uppercase tracking-wider">
                    TIME
                  </label>
                  <button
                    type="button"
                    onClick={(e) => toggleTimeDropdown(e)}
                    className="w-full bg-[#0b0e14] border border-[#23293a] hover:border-[#f59e0b]/60 rounded-[5px] pl-3.5 pr-3 py-3 text-sm text-white flex items-center gap-2 font-sans text-left cursor-pointer"
                  >
                    <Clock className="w-4 h-4 text-[#f59e0b] shrink-0" />
                    <span className="font-medium text-xs sm:text-sm">{selectedTime}</span>
                  </button>

                  {showTimeDropdown && (
                    <div className="absolute left-0 right-0 z-50 bg-[#131722] border-2 border-[#23293a] rounded-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-56 overflow-y-auto py-1.5 scroll-smooth top-[105%] bottom-auto mt-1">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setSelectedTime(slot);
                            setShowTimeDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                            selectedTime === slot
                              ? "bg-[#f59e0b] text-black font-extrabold"
                              : "text-gray-200 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span>{slot}</span>
                          {selectedTime === slot && <Check className="w-3.5 h-3.5 text-black" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <div >
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="w-full py-3 px-4 rounded-[5px] bg-[#f59e0b] hover:bg-[#d98206] text-black font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all shadow-lg shadow-[#f59e0b]/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>OPENING WHATSAPP...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 stroke-[2.5]" />
                        <span>GET QUOTE ON WHATSAPP</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* 3 Key Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-3 sm:gap-6 sm:pt-4">
          {/* Feature 1 */}
          <div className="flex items-center gap-3 p-3.5  shadow-lg">
            <div className="w-10 h-10 rounded-full border-2 border-[#f59e0b] bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight font-heading">
                No Hidden Charges
              </h4>
              <p className="text-[11px] text-gray-400 mt-0.5">Transparent Pricing</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3 p-3.5 shadow-lg">
            <div className="w-10 h-10 rounded-full border-2 border-[#f59e0b] bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight font-heading">
                Best Experience
              </h4>
              <p className="text-[11px] text-gray-400 mt-0.5">Safe &amp; Reliable</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3 first-line:p-3.5 shadow-lg">
            <div className="w-10 h-10 rounded-full border-2 border-[#f59e0b] bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b] shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight font-heading">
                24/7 Support
              </h4>
              <p className="text-[11px] text-gray-400 mt-0.5">We&apos;re here for you</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
