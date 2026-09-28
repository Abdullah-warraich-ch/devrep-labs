"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  X,
  Check,
  Phone,
  ShieldCheck,
  Calendar,
  User,
  Sparkles,
  BedDouble,
  Bath,
  Users,
  MapPin,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { apartmentsData } from "../_data/apartments";
import { siteConfig } from "../_data/siteConfig";

export default function BookingModal({ isOpen, onClose, apartment, onSubmitSuccess }) {
  const selectedApt = apartment || apartmentsData[0];
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  useEffect(() => {
    setBookingSuccess(false);
    setCheckIn(null);
    setCheckOut(null);
  }, [apartment, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !selectedApt) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    if (onSubmitSuccess) {
      onSubmitSuccess();
    } else {
      setBookingSuccess(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60"
          />

          {/* Modal / Bottom Sheet Container */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[90vh] border border-stone-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Sheet Drag Indicator */}
            <div className="sm:hidden w-12 h-1 bg-stone-300 rounded-full mx-auto my-2.5 shrink-0" />

            {/* Header with Property Info Card */}
            <div className="p-4 sm:p-5 border-b border-stone-100 relative bg-stone-50/50">
              <button
                onClick={onClose}
                className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-stone-200/70 hover:bg-stone-300/80 text-stone-600 flex items-center justify-center transition-colors cursor-pointer active:scale-95 z-10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex gap-3.5 items-center pr-8">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shrink-0 shadow-xs border border-stone-200">
                  <Image
                    src={selectedApt.image}
                    alt={selectedApt.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand bg-brand/10 px-2 py-0.5 rounded-full mb-1">
                    <MapPin className="w-2.5 h-2.5" /> {selectedApt.city}
                  </span>
                  <h3 className="text-stone-900 text-sm sm:text-base font-bold truncate leading-tight">
                    {selectedApt.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-sm sm:text-base font-bold text-stone-900">
                      {selectedApt.price}
                    </span>
                    <span className="text-stone-400 text-[11px] font-normal">
                      {selectedApt.priceUnit}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form & Content Area */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
              {bookingSuccess ? (
                <div className="py-6 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#eef3f1] text-brand flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-stone-900">Booking Request Sent!</h4>
                    <p className="text-xs text-stone-500 max-w-xs mx-auto mt-1 leading-relaxed">
                      Our team will contact you shortly to confirm your reservation for <strong>{selectedApt.name}</strong>.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-full bg-brand hover:bg-brand-hover text-white font-medium py-3 rounded-2xl text-xs sm:text-sm transition-all cursor-pointer shadow-md"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Dates Row */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-3 focus-within:border-brand focus-within:bg-white transition-all cursor-pointer">
                      <label className="block text-[10px] font-semibold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1 cursor-pointer">
                        <Calendar className="w-3 h-3 text-brand" /> Check-In
                      </label>
                      <DatePicker
                        selected={checkIn}
                        onChange={(date) => setCheckIn(date)}
                        selectsStart
                        startDate={checkIn}
                        endDate={checkOut}
                        minDate={new Date()}
                        placeholderText="Add date"
                        dateFormat="MMM d, yyyy"
                        className="w-full bg-transparent text-xs font-semibold text-stone-800 outline-none cursor-pointer placeholder:text-stone-300"
                        required
                      />
                    </div>
                    <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-3 focus-within:border-brand focus-within:bg-white transition-all cursor-pointer">
                      <label className="block text-[10px] font-semibold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1 cursor-pointer">
                        <Calendar className="w-3 h-3 text-brand" /> Check-Out
                      </label>
                      <DatePicker
                        selected={checkOut}
                        onChange={(date) => setCheckOut(date)}
                        selectsEnd
                        startDate={checkIn}
                        endDate={checkOut}
                        minDate={checkIn || new Date()}
                        placeholderText="Add date"
                        dateFormat="MMM d, yyyy"
                        className="w-full bg-transparent text-xs font-semibold text-stone-800 outline-none cursor-pointer placeholder:text-stone-300"
                        required
                      />
                    </div>
                  </div>

                  {/* Name Input */}
                  <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-3 focus-within:border-brand focus-within:bg-white transition-all">
                    <label className="block text-[10px] font-semibold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <User className="w-3 h-3 text-brand" /> Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full bg-transparent text-xs font-semibold text-stone-800 outline-none placeholder:text-stone-300 placeholder:font-normal"
                    />
                  </div>

                  {/* WhatsApp / Phone Input */}
                  <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-3 focus-within:border-brand focus-within:bg-white transition-all">
                    <label className="block text-[10px] font-semibold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Phone className="w-3 h-3 text-brand" /> WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={siteConfig.contact.phoneDisplay}
                      className="w-full bg-transparent text-xs font-semibold text-stone-800 outline-none placeholder:text-stone-300 placeholder:font-normal"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-brand hover:bg-brand-hover active:scale-[0.99] text-white font-medium py-3.5 rounded-2xl text-xs sm:text-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-brand/20 mt-2"
                  >
                    <span>Request Reservation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[10px] text-stone-400 font-normal flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                    Instant confirmation · No prepayment required
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
