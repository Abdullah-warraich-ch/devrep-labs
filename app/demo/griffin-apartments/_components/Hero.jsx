"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  Check,
  ShieldCheck,
  BedDouble,
  Bath,
  Users,
  Maximize,
  MapPin,
  Wifi,
  Phone,
} from "lucide-react";
import { apartmentsData } from "../_data/apartments";
import BookingModal from "./BookingModal";

const AUTO_PLAY_INTERVAL = 6000;

export default function Hero({ isBookingModalOpen, setIsBookingModalOpen }) {
  const apartments = apartmentsData;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [selectedApt, setSelectedApt] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [activeGalleryImg, setActiveGalleryImg] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // ─── Touch / Swipe Handlers for Mobile ──────────────────────────────────────
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40; // 40px threshold

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // ─── Auto-play ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((p) => (p + 1) % apartments.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [isAutoPlaying, apartments.length]);

  const goTo = (idx, dir = 1) => {
    setIsAutoPlaying(false);
    setDirection(dir);
    setCurrentIndex(idx);
  };
  const handlePrev = () => goTo((currentIndex - 1 + apartments.length) % apartments.length, -1);
  const handleNext = () => goTo((currentIndex + 1) % apartments.length, 1);

  // ─── Modal helpers ────────────────────────────────────────────────────────
  useEffect(() => {
    if (isBookingModalOpen && !selectedApt) {
      setSelectedApt(apartments[currentIndex]);
      setBookingSuccess(false);
      setActiveGalleryImg(0);
    }
  }, [isBookingModalOpen, apartments, currentIndex, selectedApt]);

  const openModal = (apt) => {
    setSelectedApt(apt);
    setBookingSuccess(false);
    setActiveGalleryImg(0);
    if (setIsBookingModalOpen) setIsBookingModalOpen(true);
  };

  const closeModal = () => {
    setSelectedApt(null);
    if (setIsBookingModalOpen) setIsBookingModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  const currentApt = apartments[currentIndex];

  return (
    <div className="w-full font-sans select-none">
      {/* ══════════════════════════════════════════════════════════════════════
          HERO — full-screen immersive carousel
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[55vh] min-h-[420px] max-h-[600px] bg-stone-950 overflow-hidden mt-16 touch-pan-y"
      >

        {/* ── Slide Images ────────────────────────────────────────────────── */}
        <div className="absolute inset-0 z-0">
          {apartments.map((apt, i) => (
            <div
              key={apt.id}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: i === currentIndex ? 1 : 0 }}
            >
              <Image
                src={apt.image}
                alt={apt.name}
                fill
                priority={i === 0}
                unoptimized
                quality={100}
                className="object-cover object-center transition-transform duration-[8000ms] ease-out"
                style={{ transform: i === currentIndex ? "scale(1.06)" : "scale(1)" }}
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* ── Gradient Overlays ───────────────────────────────────────────── */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
          <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        {/* ── Progress Bar (top) ──────────────────────────────────────────── */}
        <div className="absolute top-0 left-0 right-0 z-30 h-0.5 bg-white/10 overflow-hidden">
          <div
            key={currentIndex}
            className={`h-full bg-brand ${isAutoPlaying ? "animate-hero-progress" : "w-0"}`}
          />
        </div>


        {/* ── Slide Nav Arrows (top-right) ────────────────────────────────── */}
        <div className="absolute top-4 right-5 sm:right-10 z-30 flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-900/60 hover:bg-stone-900/80 border border-white/15 text-white flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-900/60 hover:bg-stone-900/80 border border-white/15 text-white flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── Main Content (bottom-left) ──────────────────────────────────── */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-6 sm:px-10 lg:px-16 pb-8 sm:pb-12">
          <div className="max-w-3xl">

            {/* Headline */}
            <div
              key={`title-${currentIndex}`}
              className="animate-fade-up"
            >
              {/* City eyebrow above title */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-brand rounded-full" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  {currentApt.city}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-1">
                {currentApt.name}
              </h1>
              <p className="text-white/50 text-sm sm:text-base font-medium mt-1">
                {currentApt.area} · {currentApt.specs.bedrooms} Bed · {currentApt.specs.sqft}
              </p>
            </div>

            {/* Price + CTA row */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 mt-5 sm:mt-7">
              {/* Price block */}
              <div key={`price-${currentIndex}`} className="animate-fade-up">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="line-through text-white/35 text-xs sm:text-sm font-medium">
                    {currentApt.originalPrice}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    {currentApt.discountBadge}
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {currentApt.price}
                  </span>
                  <span className="text-white/50 text-xs sm:text-sm font-medium uppercase tracking-wider">
                    {currentApt.priceUnit}
                  </span>
                </div>
              </div>

              {/* Book CTA */}
              <button
                onClick={() => openModal(currentApt)}
                className="group flex items-center gap-2 bg-brand hover:bg-brand-hover active:scale-95 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm transition-all duration-200 shadow-2xl cursor-pointer border border-white/10 shrink-0"
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>

            {/* Dot Navigation */}
            <div className="flex items-center gap-2 mt-6">
              {apartments.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > currentIndex ? 1 : -1)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    i === currentIndex
                      ? "w-6 h-1.5 bg-white"
                      : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Apartment Thumbnail Strip (right-side, desktop) ─────────────── */}
        <div className="absolute right-5 sm:right-8 bottom-10 z-20 hidden lg:flex flex-col gap-2">
          {apartments.map((apt, i) => (
            <button
              key={apt.id}
              onClick={() => goTo(i, i > currentIndex ? 1 : -1)}
              className={`relative w-16 h-12 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                i === currentIndex
                  ? "ring-2 ring-white scale-105 opacity-100"
                  : "opacity-40 hover:opacity-70 hover:scale-105"
              }`}
              aria-label={apt.name}
            >
              <Image src={apt.image} alt={apt.name} fill className="object-cover" unoptimized />
            </button>
          ))}
        </div>

      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BOOKING MODAL
      ══════════════════════════════════════════════════════════════════════ */}
      <BookingModal
        isOpen={!!selectedApt || isBookingModalOpen}
        onClose={() => {
          setSelectedApt(null);
          if (setIsBookingModalOpen) setIsBookingModalOpen(false);
        }}
        apartment={selectedApt || apartments[currentIndex]}
      />

      {/* ── Keyframe animations (injected once) ─────────────────────────── */}
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .animate-fade-up {
          animation: fade-up 0.55s cubic-bezier(.22,.68,0,1.2) both;
        }
        .animate-hero-progress {
          animation: hero-progress 6000ms linear forwards;
        }
      `}</style>
    </div>
  );
}
