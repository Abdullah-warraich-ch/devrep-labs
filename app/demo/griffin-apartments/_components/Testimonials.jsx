"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "../_data/siteConfig";

const testimonialsData = [
  {
    id: 1,
    name: "Dr. Hamza Shah",
    location: "Lahore",
    stayType: "Business Stay • 5 Nights",
    rating: 5,
    date: "August 2026",
    comment:
      "Zabardast stay tha! Lightning-fast Wi-Fi aur 100% power backup ki waja se mera kaam bilkul seamless raha. Bohot clean aur secure jagah hai.",
    initials: "HS",
  },
  {
    id: 2,
    name: "Ayesha & Farhan",
    location: "Islamabad",
    stayType: "Family Vacation • 4 Nights",
    rating: 5,
    date: "July 2026",
    comment:
      "Aisa laga jaise 5-star hotel ho lekin ghar jaisa sukoon. Digital check-in bilkul fast tha aur apartment bohot hi haseen aur spotless tha.",
    initials: "AF",
  },
  {
    id: 3,
    name: "Marcus Vance",
    location: "Lahore",
    stayType: "Solo Traveler • 7 Nights",
    rating: 5,
    date: "August 2026",
    comment:
      "Direct booking saved me money and the support team responded on WhatsApp within minutes. Best hospitality service I have experienced in Pakistan.",
    initials: "MV",
  },
  {
    id: 4,
    name: "Zainab Rizvi",
    location: "Karachi",
    stayType: "Weekend Getaway • 3 Nights",
    rating: 5,
    date: "August 2026",
    comment:
      "Location bohot prime hai! Prime restaurants aur shopping centers bilkul paas hain. Interior aesthetic & cleanliness super high standard ki thi.",
    initials: "ZR",
  },
  {
    id: 5,
    name: "Omer Chaudhry",
    location: "Peshawar",
    stayType: "Family Stay • 6 Nights",
    rating: 5,
    date: "July 2026",
    comment:
      "Super comfortable beds and ultra-clean washrooms. Kids enjoyed the smart TV and cozy ambiance. Will definitely book again on our next trip!",
    initials: "OC",
  },
  {
    id: 6,
    name: "Sarah Jenkins",
    location: "Dubai, UAE",
    stayType: "Business & Leisure • 10 Nights",
    rating: 5,
    date: "June 2026",
    comment:
      "Exceeded all my expectations! High security building, smart door locks, and kitchen stocked with essentials. Truly a luxury residence.",
    initials: "SJ",
  },
  {
    id: 7,
    name: "Bilal & Sana",
    location: "Multan",
    stayType: "Honeymoon Stay • 5 Nights",
    rating: 5,
    date: "August 2026",
    comment:
      "Check-in was smooth as butter. Extremely peaceful atmosphere with beautiful balcony views. 10/10 recommendation for couples!",
    initials: "BS",
  },
  {
    id: 8,
    name: "Tariq Mehmood",
    location: "Faisalabad",
    stayType: "Executive Stay • 4 Nights",
    rating: 5,
    date: "July 2026",
    comment:
      "Dedicated parking space, prompt response from staff, and total privacy. Serviced Apartments has raised the bar for premium serviced stays.",
    initials: "TM",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - visibleCount);

  // Clamp current index if window resize reduces maxIndex
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-switch timer (switches every 4 seconds when not hovered)
  useEffect(() => {
    if (isHovered || maxIndex === 0) return;

    const timer = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(timer);
  }, [isHovered, maxIndex, handleNext]);

  return (
    <section className="w-full bg-white pt-12 sm:pt-16 pb-24 sm:pb-28 lg:pb-32 px-4 sm:px-8 md:px-12 font-sans select-none overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between items-center md:items-start gap-4 md:gap-6 pb-4 border-b border-stone-100 text-center md:text-left">
          <div className="space-y-1 w-full md:w-auto text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950 tracking-tight text-center md:text-left">
              {siteConfig.testimonials.title.split("Our")[0]}<span className="text-brand">Our {siteConfig.testimonials.title.split("Our")[1]}</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 self-center md:self-auto flex-wrap">
            {/* RATING SUMMARY BADGE (HIDDEN ON SMALL SCREENS) */}
            <div className="hidden md:flex items-center gap-3 bg-stone-50 px-4 py-2 rounded-2xl border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="h-4 w-[1px] bg-stone-300" />
              <div className="text-xs font-bold text-stone-900">
                {siteConfig.testimonials.averageRating} <span className="text-stone-500 font-normal">/ {siteConfig.testimonials.maxRating}</span>
                <span className="text-stone-400 font-normal ml-1">{siteConfig.testimonials.totalStaysLabel}</span>
              </div>
            </div>

            {/* HEADER NAVIGATION BUTTONS (DESKTOP ONLY) */}
            <div className="hidden md:flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.05 }}
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="w-10 h-10 rounded-full border border-stone-200/90 bg-white hover:bg-stone-900 hover:text-white hover:border-stone-900 text-stone-700 transition-colors duration-200 flex items-center justify-center shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2]" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.05 }}
                onClick={handleNext}
                aria-label="Next testimonials"
                className="w-10 h-10 rounded-full border border-stone-200/90 bg-white hover:bg-stone-900 hover:text-white hover:border-stone-900 text-stone-700 transition-colors duration-200 flex items-center justify-center shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 stroke-[2]" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL CARDS CAROUSEL */}
        <div
          className="relative overflow-hidden -mx-2 sm:-mx-3 px-2 sm:px-3 py-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex"
            animate={{
              x: `-${currentIndex * (100 / visibleCount)}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 28,
              mass: 0.8,
            }}
          >
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2 sm:px-3"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-stone-50/70 border border-stone-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs relative overflow-hidden h-full hover:border-stone-300 hover:shadow-md transition-all duration-300"
                >
                  {/* TOP RATING & QUOTE ICON */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-stone-300 stroke-[1.5]" />
                    </div>

                    {/* REVIEW COMMENT */}
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-normal">
                      "{item.comment}"
                    </p>
                  </div>

                  {/* REVIEWER INFO FOOTER */}
                  <div className="pt-5 mt-6 border-t border-stone-200/60 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* AVATAR INITIALS */}
                      <div className="w-9 h-9 rounded-full bg-brand text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                        {item.initials}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-xs sm:text-sm font-bold text-stone-950 leading-tight">
                            {item.name}
                          </h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        </div>
                        <p className="text-[11px] text-stone-500 font-medium leading-tight mt-0.5">
                          {item.location} • <span className="text-stone-400">{item.stayType.split("•")[0]}</span>
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] text-stone-400 font-medium shrink-0">
                      {item.date}
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* PAGINATION & NAVIGATION CONTROLS */}
        <div className="flex items-center justify-center gap-4 pt-3 sm:pt-4">
          {/* Small screen previous button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.05 }}
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="md:hidden w-9 h-9 rounded-full border border-stone-200/90 bg-white text-stone-700 flex items-center justify-center shadow-xs cursor-pointer active:bg-stone-100"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2]" />
          </motion.button>

          {/* Indicator dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full cursor-pointer transition-colors ${
                  currentIndex === idx
                    ? "bg-brand"
                    : "bg-stone-200 hover:bg-stone-300"
                }`}
                animate={{
                  width: currentIndex === idx ? 28 : 10,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            ))}
          </div>

          {/* Small screen next button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleNext}
            aria-label="Next testimonials"
            className="md:hidden w-9 h-9 rounded-full border border-stone-200/90 bg-white text-stone-700 flex items-center justify-center shadow-xs cursor-pointer active:bg-stone-100"
          >
            <ChevronRight className="w-4 h-4 stroke-[2]" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}

