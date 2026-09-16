"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  ArrowRight,
  Star,
  MapPin,
  X,
  Check,
  ShieldCheck,
  Share2,
  Link2,
  Copy,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CalendarDays,
  Minus,
  Plus
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa6";
import { apartmentsData } from "../_data/apartments";
import BookingModal from "./BookingModal";

export default function ApartmentHero({ apartmentId, apartment, isBookingModalOpen, setIsBookingModalOpen, onReserveClick }) {
  const currentApt =
    (apartmentId && apartmentsData.find((a) => a.id === apartmentId)) ||
    apartment ||
    apartmentsData[0];

  const [selectedApartmentForBooking, setSelectedApartmentForBooking] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  // Reservation Widget State for Mobile
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guestsCount, setGuestsCount] = useState(2);

  // Fullscreen Lightbox State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index = 0) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev + 1) % currentApt.gallery.length);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev - 1 + currentApt.gallery.length) % currentApt.gallery.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, currentApt.gallery.length]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsAppShare = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Check out ${currentApt.name} at Griffin Apartments!`);
      window.open(`https://wa.me/?text=${text}%20${url}`, "_blank");
    }
  };

  const handleNativeShare = async () => {
    if (typeof window !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: currentApt.name,
          text: `Check out ${currentApt.name} at Griffin Apartments!`,
          url: window.location.href,
        });
      } catch (err) {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const handleBookClick = (apt) => {
    setSelectedApartmentForBooking(apt);
    setBookingSuccess(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setSelectedApartmentForBooking(null);
      setBookingSuccess(false);
      if (setIsBookingModalOpen) setIsBookingModalOpen(false);
    }, 2500);
  };

  return (
    <div className="w-full bg-white text-stone-900 pt-20 sm:pt-24 pb-4 sm:pb-6 overflow-hidden relative font-sans select-none">
      
      {/* MAIN HERO CONTAINER (RESPONSIVE ORDER FOR SMALL SCREENS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 flex flex-col lg:grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center min-h-0 lg:min-h-[580px]">
        
        {/* MOBILE ONLY: CITY & RATING PILLS AT TOP */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-2.5 w-full">
          <div className="bg-brand text-white px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-medium uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-emerald-300" />
            <span>{currentApt.city}</span>
          </div>

          <div className="flex items-center gap-1 text-stone-800 text-[11px] font-normal bg-stone-100/90 px-3 py-1.5 rounded-full border border-stone-200/60">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>4.98</span>
          </div>
        </div>

        {/* PICTURE GRID: 5-PHOTO BENTO GRID (POSITIONS DIRECTLY AFTER PILLS ON MOBILE, RIGHT COLUMN ON DESKTOP) */}
        <div className="w-full lg:col-span-7 relative order-1 lg:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentApt.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="w-full h-[280px] sm:h-[420px] lg:h-[500px] grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 sm:gap-2.5 rounded-2xl sm:rounded-3xl overflow-hidden relative group"
            >
              {/* LARGE FEATURED MAIN PHOTO (SPANS 2 COLUMNS AND 2 ROWS) */}
              <div
                onClick={() => openLightbox(0)}
                className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden"
              >
                <Image
                  src={currentApt.gallery[0] || currentApt.image}
                  alt={`${currentApt.name} main view`}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              </div>

              {/* TILE 2 (TOP RIGHT 1) */}
              <div
                onClick={() => openLightbox(1)}
                className="col-span-1 row-span-1 relative hidden lg:block cursor-pointer overflow-hidden"
              >
                <Image
                  src={currentApt.gallery[1] || currentApt.image}
                  alt={`${currentApt.name} interior 1`}
                  fill
                  className="object-cover object-center"
                  sizes="25vw"
                unoptimized
              />
              </div>

              {/* TILE 3 (TOP RIGHT 2) */}
              <div
                onClick={() => openLightbox(2)}
                className="col-span-1 row-span-1 relative hidden lg:block cursor-pointer overflow-hidden"
              >
                <Image
                  src={currentApt.gallery[2] || currentApt.image}
                  alt={`${currentApt.name} interior 2`}
                  fill
                  className="object-cover object-center"
                  sizes="25vw"
                unoptimized
              />
              </div>

              {/* TILE 4 (BOTTOM RIGHT 1) */}
              <div
                onClick={() => openLightbox(3)}
                className="col-span-1 row-span-1 relative hidden lg:block cursor-pointer overflow-hidden"
              >
                <Image
                  src={currentApt.gallery[3] || currentApt.image}
                  alt={`${currentApt.name} interior 3`}
                  fill
                  className="object-cover object-center"
                  sizes="25vw"
                unoptimized
              />
              </div>

              {/* TILE 5 (BOTTOM RIGHT 2) */}
              <div
                onClick={() => openLightbox(4)}
                className="col-span-1 row-span-1 relative hidden lg:block cursor-pointer overflow-hidden"
              >
                <Image
                  src={currentApt.gallery[4] || currentApt.gallery[0] || currentApt.image}
                  alt={`${currentApt.name} interior 4`}
                  fill
                  className="object-cover object-center"
                  sizes="25vw"
                unoptimized
              />
              </div>

              {/* FLOATING MOBILE & DESKTOP "SHOW ALL PHOTOS" BUTTON */}
              <button
                onClick={() => openLightbox(0)}
                className="absolute bottom-4 right-4 bg-white/98 hover:bg-white text-stone-900 font-medium text-xs px-3.5 py-2 rounded-full shadow-lg border border-stone-200 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all z-10"
              >
                <Maximize2 className="w-3.5 h-3.5 text-brand" />
                <span>Show all photos</span>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* LEFT COLUMN: DETAILS, RATING, PRICE, CTA, SOCIALS (ORDER-2 ON MOBILE, LEFT COLUMN ON DESKTOP) */}
        <div className="w-full lg:col-span-5 space-y-6 sm:space-y-9 z-10 pr-0 lg:pr-2 order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentApt.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6"
            >
              {/* DESKTOP ONLY: EYEBROWS BADGES */}
              <div className="hidden lg:flex items-center gap-2.5">
                <div className="bg-brand text-white px-4 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                  <span>{currentApt.city}</span>
                </div>

                <div className="flex items-center gap-1 text-stone-800 text-[11px] font-normal">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.98</span>
                </div>
              </div>

              {/* APARTMENT TITLE & SUBTITLE */}
              <div className="space-y-1.5 sm:space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-[1.1]">
                  {currentApt.name}
                </h1>
                <p className="text-stone-500 text-xs sm:text-base font-normal">
                  Located in {currentApt.area} • Executive Furnished Suite
                </p>
              </div>

              {/* ELEGANT STACKED PRICING BLOCK */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center gap-2">
                  <span className="line-through text-stone-400 text-xs sm:text-sm font-normal">
                    {currentApt.originalPrice}
                  </span>
                  <span className="bg-brand/10 text-brand text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-brand/20">
                    {currentApt.discountBadge}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-5xl font-medium text-stone-900 tracking-tight">
                    {currentApt.price}
                  </span>
                  <span className="text-xs sm:text-sm font-normal text-stone-500 uppercase tracking-widest">
                    {currentApt.priceUnit}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA SECTION: DESKTOP BUTTON VS MOBILE RESERVE WIDGET */}
          <div className="pt-1 sm:pt-2">
            {/* DESKTOP ONLY: BOOK APARTMENT BUTTON */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => handleBookClick(currentApt)}
                className="bg-brand hover:bg-brand-hover text-white font-medium px-8 py-4 rounded-full text-base transition-all duration-300 shadow-xl shadow-brand/25 flex items-center gap-3 group cursor-pointer active:scale-95"
              >
                <span>Book Apartment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* MOBILE ONLY: FULL RESERVE WIDGET IN PLACE OF BOOK BUTTON */}
            <div className="block lg:hidden w-full">
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-2.5">
                {/* CHECK-IN / CHECK-OUT ROW */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-stone-50 rounded-xl px-3.5 py-3 cursor-pointer hover:bg-stone-100/80 transition-colors">
                    <label className="block text-[10px] font-normal text-stone-400 uppercase tracking-wider mb-1.5 flex items-center gap-1 cursor-pointer">
                      <CalendarDays className="w-3 h-3" /> Check-in
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
                    />
                  </div>
                  <div className="bg-stone-50 rounded-xl px-3.5 py-3 cursor-pointer hover:bg-stone-100/80 transition-colors">
                    <label className="block text-[10px] font-normal text-stone-400 uppercase tracking-wider mb-1.5 flex items-center gap-1 cursor-pointer">
                      <CalendarDays className="w-3 h-3" /> Check-out
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
                      onClick={() => setGuestsCount((p) => Math.min(currentApt.specs?.guests || 4, p + 1))}
                      className="w-7 h-7 rounded-full border border-stone-300 bg-white flex items-center justify-center text-stone-600 hover:border-stone-700 hover:text-stone-900 transition-colors disabled:opacity-30"
                      disabled={guestsCount >= (currentApt.specs?.guests || 4)}
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* RESERVE NOW BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand-hover active:scale-[0.99] text-white font-medium py-3 rounded-2xl text-xs sm:text-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-brand/20"
                >
                  <span>Reserve Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[10px] text-stone-400 font-normal flex items-center justify-center gap-1.5 pt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                  Best price guaranteed · No hidden fees
                </p>
              </div>
            </div>
          </div>

          {/* SHARE LINKS & ACTIONS BAR */}
          <div className="pt-4 sm:pt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs font-normal text-stone-500">
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto"> 
              <div className="flex items-center gap-2 w-full sm:w-auto">
                {/* WHATSAPP SHARE */}
                <button
                  onClick={handleWhatsAppShare}
                  className="flex-1 sm:flex-initial h-8 px-3 rounded-full bg-stone-100 hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-1.5 text-stone-700 text-xs font-normal cursor-pointer"
                  aria-label="Share via WhatsApp"
                  title="Share via WhatsApp"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                  <span>Share on WhatsApp</span>
                </button>

                {/* COPY LINK */}
                <button
                  onClick={handleCopyLink}
                  className="flex-1 sm:flex-initial h-8 px-3 rounded-full bg-stone-100 hover:bg-brand hover:text-white transition-all flex items-center justify-center gap-1.5 text-stone-700 text-xs font-normal cursor-pointer"
                  aria-label="Copy Link"
                  title="Copy Link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Link2 className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOOKING MODAL */}
      <BookingModal
        isOpen={!!selectedApartmentForBooking || isBookingModalOpen}
        onClose={() => {
          setSelectedApartmentForBooking(null);
          if (setIsBookingModalOpen) setIsBookingModalOpen(false);
        }}
        apartment={selectedApartmentForBooking || currentApt}
      />

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/98 flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* LIGHTBOX TOP HEADER */}
          <div
            className="flex items-center justify-between z-10 max-w-7xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="text-white text-sm sm:text-base font-medium tracking-tight">
                {currentApt.name}
              </h3>
              <p className="text-stone-400 text-xs font-normal">
                Photo {lightboxIndex + 1} of {currentApt.gallery.length}
              </p>
            </div>

            <button
              onClick={() => setIsLightboxOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* LIGHTBOX MAIN DISPLAY AREA WITH PREV/NEXT */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* PREVIOUS BUTTON */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (prev) => (prev - 1 + currentApt.gallery.length) % currentApt.gallery.length
                )
              }
              className="absolute left-2 sm:left-6 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* MAIN LARGE IMAGE */}
            <div className="relative w-full h-full max-h-[75vh] max-w-[88vw] sm:max-w-[80vw] flex items-center justify-center">
              <Image
                key={lightboxIndex}
                src={currentApt.gallery[lightboxIndex]}
                alt={`${currentApt.name} large view ${lightboxIndex + 1}`}
                fill
                unoptimized
                priority
                className="object-contain transition-all duration-300 rounded-xl"
              />
            </div>

            {/* NEXT BUTTON */}
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev + 1) % currentApt.gallery.length)
              }
              className="absolute right-2 sm:right-6 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* LIGHTBOX BOTTOM THUMBNAILS STRIP */}
          <div
            className="flex items-center justify-center gap-2.5 overflow-x-auto py-2 z-10 max-w-4xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {currentApt.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden shrink-0 cursor-pointer transition-all duration-200 ${
                  idx === lightboxIndex
                    ? "ring-2 ring-emerald-400 scale-105 opacity-100"
                    : "opacity-40 hover:opacity-80"
                }`}
              >
                <Image src={img} alt="" fill unoptimized className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
