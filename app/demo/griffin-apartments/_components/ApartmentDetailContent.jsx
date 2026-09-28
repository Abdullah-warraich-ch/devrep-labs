"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Bed,
  Bath,
  Users,
  Maximize,
  MapPin,
  Star,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Wifi,
  Tv,
  Car,
  Wind,
  Coffee,
  Sparkles,
  Lock,
  ArrowRight,
  Check,
  Home,
  Search,
  Maximize2,
  Minus,
  Plus,
  CalendarDays,
  Key
} from "lucide-react";
import { apartmentsData } from "../_data/apartments";
import ApartmentCard from "./ApartmentCard";

const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

export default function ApartmentDetailContent({ apartment, onBookClick, onReserveClick }) {
  const currentApt = apartment || apartmentsData[0];
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guestsCount, setGuestsCount] = useState(2);
  const [isReserved, setIsReserved] = useState(false);

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    if (onReserveClick) {
      onReserveClick();
    } else {
      setIsReserved(true);
    }
  };

  const otherApartments = apartmentsData.filter((a) => a.id !== currentApt.id);

  const amenities = [
    { icon: Wifi, label: "500 Mbps High-Speed Wi-Fi" },
    { icon: Tv, label: '65" Ultra-HD Smart TV' },
    { icon: Wind, label: "Climate Control AC & Heating" },
    { icon: Coffee, label: "Nespresso Coffee Bar" },
    { icon: Car, label: "Reserved Basement Parking" },
    { icon: Lock, label: "Smart Keyless Entry" },
    { icon: Sparkles, label: "Daily Concierge Service" },
    { icon: ShieldCheck, label: "24/7 Private Security" },
  ];

  const houseRules = [
    { label: "Check-in Time", value: "12:00 PM onwards", icon: Clock },
    { label: "Check-out Time", value: "12:00 PM noon", icon: Clock },
    { label: "Check-in Method", value: "Digital Smart Keycode", icon: Key },
    { label: "Property Policy", value: "Strictly Non-Smoking Indoors", icon: ShieldCheck },
  ];

  return (
    <section className="w-full bg-white text-stone-900 font-sans select-none pt-2 sm:pt-4 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-14">
        
        {/* ── 1. MINIMALIST KEY SPECS STRIP ────────────────────────────────────────── */}
        <div className="py-5 border-y border-stone-200/80">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-3 sm:gap-0 divide-y-0 sm:divide-x divide-stone-200/70 text-xs sm:text-sm">
            
            <div className="flex items-center gap-3.5 sm:pr-4">
              <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-brand shrink-0" />
              <div>
                <span className="text-stone-400 text-[10px] uppercase tracking-wider font-semibold block">Bedrooms</span>
                <span className="font-bold text-stone-900">{currentApt.specs.bedrooms} Bedrooms</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:px-4">
              <Bath className="w-5 h-5 sm:w-6 sm:h-6 text-brand shrink-0" />
              <div>
                <span className="text-stone-400 text-[10px] uppercase tracking-wider font-semibold block">Bathrooms</span>
                <span className="font-bold text-stone-900">{currentApt.specs.baths} Bathrooms</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:px-4">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand shrink-0" />
              <div>
                <span className="text-stone-400 text-[10px] uppercase tracking-wider font-semibold block">Capacity</span>
                <span className="font-bold text-stone-900">Up to {currentApt.specs.guests} Guests</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:px-4">
              <Maximize className="w-5 h-5 sm:w-6 sm:h-6 text-brand shrink-0" />
              <div>
                <span className="text-stone-400 text-[10px] uppercase tracking-wider font-semibold block">Size</span>
                <span className="font-bold text-stone-900">{currentApt.specs.sqft}</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:pl-4 col-span-2 sm:col-span-1">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-brand shrink-0" />
              <div>
                <span className="text-stone-400 text-[10px] uppercase tracking-wider font-semibold block">Location</span>
                <span className="font-bold text-stone-900">{currentApt.city}</span>
              </div>
            </div>

          </div>
        </div>

        {/* ── 2. TWO-COLUMN MAIN DETAILS & RESERVATION SIDEBAR ──────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* ABOUT RESIDENCE */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 tracking-tight">
                About <span className="text-brand">{currentApt.name}</span>
              </h2>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base font-normal">
                Situated in the heart of <strong>{currentApt.area}, {currentApt.city}</strong>, 
                this curated executive suite seamlessly pairs minimalist architecture with warm, high-end 
                interiors. Designed for effortless stays, enjoy panoramic views, private security, and 
                tailored concierge amenities.
              </p>
              
              {/* Feature Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {currentApt.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-stone-100/80 text-stone-700 text-xs font-medium px-3 py-1 rounded-full border border-stone-200/50"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* MINIMALIST AMENITIES */}
            <div className="space-y-4 pt-6 border-t border-stone-100">
              <h3 className="text-lg font-semibold text-stone-900 tracking-tight">
                What This Residence Offers
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
                {amenities.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3.5 py-1.5 text-sm sm:text-base font-normal text-stone-800">
                      <Icon className="w-6 h-6 text-brand shrink-0" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* HOUSE GUIDELINES / STAY POLICIES */}
            <div className="space-y-4 pt-8 border-t border-stone-100">
              <h3 className="text-lg font-semibold text-stone-900 tracking-tight">
                Stay Policies & House Rules
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {houseRules.map((rule, idx) => {
                  const RuleIcon = rule.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-stone-50/80 border border-stone-200/50"
                    >
                      <div className="p-2.5 rounded-xl bg-white text-brand border border-stone-200/60 shrink-0 shadow-2xs">
                        <RuleIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-normal text-stone-400 uppercase tracking-wider block mb-0.5">
                          {rule.label}
                        </span>
                        <span className="text-sm font-normal text-stone-800">
                          {rule.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT STICKY RESERVATION CARD (DESKTOP ONLY - SHOWN IN HERO ON MOBILE) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24 z-20 space-y-4">
            <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">

              {/* PRICE */}
              <div className="mb-5 pb-5 border-b border-stone-100">
                <p className="text-[11px] font-normal text-stone-400 uppercase tracking-widest mb-0.5">Starting from</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-medium text-stone-900">{currentApt.price}</span>
                  <span className="text-stone-400 text-xs font-normal">{currentApt.priceUnit}</span>
                </div>
              </div>

              {isReserved ? (
                <div className="py-6 text-center space-y-2">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium text-stone-900">Reservation Sent!</p>
                  <p className="text-xs text-stone-400 font-normal">We'll confirm your booking shortly.</p>
                </div>
               ) : (
                <form onSubmit={handleReservationSubmit} className="space-y-2.5">

                  {/* CHECK-IN / CHECK-OUT ROW */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-stone-50 rounded-xl px-3.5 py-3 cursor-pointer hover:bg-stone-100/80 transition-colors">
                      <label className="block text-[10px] font-normal text-stone-400 uppercase tracking-wider mb-1.5 flex items-center gap-1 cursor-pointer">
                        <CalendarDays className="w-3 h-3 text-brand" /> Check-in
                      </label>
                      <DatePicker
                        selected={checkIn}
                        onChange={(date) => setCheckIn(date)}
                        selectsStart
                        startDate={checkIn}
                        endDate={checkOut}
                        minDate={new Date()}
                        placeholderText="Add date"
                        dateFormat="MMM d"
                        className="w-full bg-transparent text-sm font-medium text-stone-800 outline-none cursor-pointer placeholder:text-stone-300"
                        required
                      />
                    </div>
                    <div className="bg-stone-50 rounded-xl px-3.5 py-3 cursor-pointer hover:bg-stone-100/80 transition-colors">
                      <label className="block text-[10px] font-normal text-stone-400 uppercase tracking-wider mb-1.5 flex items-center gap-1 cursor-pointer">
                        <CalendarDays className="w-3 h-3 text-brand" /> Check-out
                      </label>
                      <DatePicker
                        selected={checkOut}
                        onChange={(date) => setCheckOut(date)}
                        selectsEnd
                        startDate={checkIn}
                        endDate={checkOut}
                        minDate={checkIn || new Date()}
                        placeholderText="Add date"
                        dateFormat="MMM d"
                        className="w-full bg-transparent text-sm font-medium text-stone-800 outline-none cursor-pointer placeholder:text-stone-300"
                        required
                      />
                    </div>
                  </div>

                  {/* GUESTS COUNTER */}
                  <div className="bg-stone-50 rounded-xl px-3.5 py-3 flex items-center justify-between hover:bg-stone-100/80 transition-colors">
                    <div>
                      <label className="block text-[10px] font-normal text-stone-400 uppercase tracking-wider mb-0.5">Guests</label>
                      <span className="text-sm font-medium text-stone-800">
                        {guestsCount} {guestsCount === 1 ? "Guest" : "Guests"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setGuestsCount((p) => Math.max(1, p - 1))}
                        className="w-7 h-7 rounded-full border border-stone-300 bg-white flex items-center justify-center text-stone-600 hover:border-stone-700 hover:text-stone-900 transition-colors disabled:opacity-30"
                        disabled={guestsCount <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-stone-900 w-4 text-center">{guestsCount}</span>
                      <button
                        type="button"
                        onClick={() => setGuestsCount((p) => Math.min(currentApt.specs.guests, p + 1))}
                        className="w-7 h-7 rounded-full border border-stone-300 bg-white flex items-center justify-center text-stone-600 hover:border-stone-700 hover:text-stone-900 transition-colors disabled:opacity-30"
                        disabled={guestsCount >= currentApt.specs.guests}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="w-full bg-brand hover:bg-brand-hover active:scale-[0.99] text-white font-medium py-3 rounded-2xl text-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-brand/20"
                  >
                    <span>Reserve Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-stone-400 font-normal flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                    Best price guaranteed · No hidden fees
                  </p>

                </form>
              )}
            </div>

            {/* MAP */}
            <LeafletMap apartment={currentApt} />

          </div>

        </div>

        {/* ── 3. EXPLORE OTHER RESIDENCES ────────────────────────────────────────── */}
        <div className="pt-10 border-t border-stone-200 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-2xl font-bold text-stone-900 tracking-tight">
              Explore Other <span className="text-brand">Residences</span>
            </h3>
            <Link
              href="/demo/griffin-apartments"
              className="text-xs font-semibold text-brand hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {otherApartments.slice(0, 4).map((apt) => (
              <ApartmentCard key={apt.id} apartment={apt} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
