"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Calendar, Users, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import { siteConfig } from "../_data/siteConfig";

// ─── Mini Calendar ────────────────────────────────────────────────────────────
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const DAYS = ["Su","Mo","Tu","We","Th","Fr","Sa"];

function CalendarPicker({ label, value, onChange, minDate, onClose }) {
  const today = new Date();
  const [viewDate, setViewDate] = useState(value ? new Date(value) : (minDate ? new Date(minDate) : new Date()));

  const year  = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const isDisabled = (day) => {
    const d = new Date(year, month, day);
    if (minDate) return d < new Date(minDate);
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const isSelected = (day) => {
    if (!value) return false;
    const v = new Date(value);
    return v.getFullYear() === year && v.getMonth() === month && v.getDate() === day;
  };

  const isToday = (day) => {
    return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
  };

  const select = (day) => {
    if (isDisabled(day)) return;
    const d = new Date(year, month, day);
    onChange(d);
    onClose();
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-4 w-72 max-w-[calc(100vw-2rem)] select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={prevMonth}
          className="p-1.5 rounded-full hover:bg-stone-100 transition cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-stone-600" />
        </button>
        <span className="text-sm font-bold text-stone-800">
          {MONTHS[month]} {year}
        </span>
        <button
          onClick={nextMonth}
          className="p-1.5 rounded-full hover:bg-stone-100 transition cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 text-stone-600" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-1">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[10px] font-bold text-stone-400 uppercase py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Date cells */}
      <div className="grid grid-cols-7 gap-y-0.5">
        {cells.map((day, i) =>
          day === null ? (
            <div key={`empty-${i}`} />
          ) : (
            <button
              key={day}
              onClick={() => select(day)}
              disabled={isDisabled(day)}
              className={`
                aspect-square flex items-center justify-center rounded-full text-xs font-medium transition-all cursor-pointer
                ${isSelected(day)
                  ? "bg-brand text-white font-bold"
                  : isToday(day)
                  ? "border border-brand text-brand font-bold hover:bg-brand/10"
                  : isDisabled(day)
                  ? "text-stone-300 cursor-not-allowed"
                  : "text-stone-700 hover:bg-stone-100"
                }
              `}
            >
              {day}
            </button>
          )
        )}
      </div>
    </div>
  );
}

// ─── Format date for display ──────────────────────────────────────────────────
function fmtDate(d) {
  if (!d) return null;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

// ─── SearchBar ────────────────────────────────────────────────────────────────
export default function SearchBar() {
  const [city, setCity]           = useState(siteConfig.cities[0] || "Lahore");
  const [checkIn, setCheckIn]     = useState(null);
  const [checkOut, setCheckOut]   = useState(null);
  const [guests, setGuests]       = useState(1);

  const [openPanel, setOpenPanel] = useState(null); // "city" | "checkin" | "checkout" | "guests"

  const barRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (barRef.current && !barRef.current.contains(e.target)) {
        setOpenPanel(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (panel) => setOpenPanel((p) => (p === panel ? null : panel));

  const guestLabel = guests === 6 ? "5+ Guests" : `${guests} Guest${guests > 1 ? "s" : ""}`;

  return (
    <section className="w-full bg-white border-b border-stone-100 shadow-sm font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div
          ref={barRef}
          className="relative flex flex-col sm:flex-row sm:items-stretch bg-white rounded-3xl sm:rounded-full shadow-lg border border-stone-100 sm:border-none divide-y sm:divide-y-0 divide-stone-100"
          style={{ boxShadow: "0 2px 24px 0 rgba(48,77,67,0.10), 0 1px 4px 0 rgba(0,0,0,0.06)" }}
        >

          {/* ── City ───────────────────────────────────────────────────────── */}
          <div className="relative flex-1">
            <button
              onClick={() => toggle("city")}
              className={`w-full flex items-center gap-3 sm:gap-3.5 px-5 sm:px-4 lg:px-6 py-4 sm:py-5 text-left transition-colors cursor-pointer rounded-t-3xl sm:rounded-l-full sm:rounded-tr-none ${openPanel === "city" ? "bg-stone-50/80" : "hover:bg-stone-50/60"}`}
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-brand shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-stone-400 leading-none mb-0.5">City</p>
                <p className="text-xs sm:text-sm font-medium text-stone-800 truncate">{city}</p>
              </div>
            </button>

            {openPanel === "city" && (
              <div className="absolute top-full left-0 sm:left-0 mt-2 z-50 bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden w-full sm:w-52">
                {siteConfig.cities.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setCity(c); setOpenPanel(null); }}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                      city === c
                        ? "bg-brand/10 text-brand"
                        : "text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${city === c ? "border-brand" : "border-stone-300"}`}>
                      {city === c && <span className="w-2 h-2 rounded-full bg-brand" />}
                    </span>
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* divider */}
          <div className="hidden sm:block w-px bg-stone-200 my-3 shrink-0" />

          {/* ── Check-In ────────────────────────────────────────────────────── */}
          <div className="relative flex-1">
            <button
              onClick={() => toggle("checkin")}
              className={`w-full flex items-center gap-3 sm:gap-3.5 px-5 sm:px-4 lg:px-6 py-4 sm:py-5 text-left transition-colors cursor-pointer ${openPanel === "checkin" ? "bg-stone-50/80" : "hover:bg-stone-50/60"}`}
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-brand shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-stone-400 leading-none mb-0.5">Check-In</p>
                <p className={`text-xs sm:text-sm font-medium truncate ${checkIn ? "text-stone-800" : "text-stone-400"}`}>
                  {fmtDate(checkIn) ?? "Select date"}
                </p>
              </div>
              {checkIn && (
                <button
                  onClick={(e) => { e.stopPropagation(); setCheckIn(null); }}
                  className="ml-auto p-0.5 rounded-full hover:bg-stone-200 text-stone-400 hover:text-stone-600 transition cursor-pointer shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </button>

            {openPanel === "checkin" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-0 mt-2 z-50 max-w-[calc(100vw-2rem)]">
                <CalendarPicker
                  label="Check-In"
                  value={checkIn}
                  onChange={(d) => { setCheckIn(d); if (checkOut && d >= checkOut) setCheckOut(null); }}
                  onClose={() => setOpenPanel(null)}
                />
              </div>
            )}
          </div>

          {/* divider */}
          <div className="hidden sm:block w-px bg-stone-200 my-3 shrink-0" />

          {/* ── Check-Out ────────────────────────────────────────────────────── */}
          <div className="relative flex-1">
            <button
              onClick={() => toggle("checkout")}
              className={`w-full flex items-center gap-3 sm:gap-3.5 px-5 sm:px-4 lg:px-6 py-4 sm:py-5 text-left transition-colors cursor-pointer ${openPanel === "checkout" ? "bg-stone-50/80" : "hover:bg-stone-50/60"}`}
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-brand shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-stone-400 leading-none mb-0.5">Check-Out</p>
                <p className={`text-xs sm:text-sm font-medium truncate ${checkOut ? "text-stone-800" : "text-stone-400"}`}>
                  {fmtDate(checkOut) ?? "Select date"}
                </p>
              </div>
              {checkOut && (
                <button
                  onClick={(e) => { e.stopPropagation(); setCheckOut(null); }}
                  className="ml-auto p-0.5 rounded-full hover:bg-stone-200 text-stone-400 hover:text-stone-600 transition cursor-pointer shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </button>

            {openPanel === "checkout" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-0 mt-2 z-50 max-w-[calc(100vw-2rem)]">
                <CalendarPicker
                  label="Check-Out"
                  value={checkOut}
                  onChange={(d) => setCheckOut(d)}
                  minDate={checkIn ?? undefined}
                  onClose={() => setOpenPanel(null)}
                />
              </div>
            )}
          </div>

          {/* divider */}
          <div className="hidden sm:block w-px bg-stone-200 my-3 shrink-0" />

          {/* ── Guests ───────────────────────────────────────────────────────── */}
          <div className="relative flex-1">
            <button
              onClick={() => toggle("guests")}
              className={`w-full flex items-center gap-3 sm:gap-3.5 px-5 sm:px-4 lg:px-6 py-4 sm:py-5 text-left transition-colors cursor-pointer ${openPanel === "guests" ? "bg-stone-50/80" : "hover:bg-stone-50/60"}`}
            >
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-stone-400 leading-none mb-0.5">Guests</p>
                <p className="text-xs sm:text-sm font-medium text-stone-800 truncate">{guestLabel}</p>
              </div>
            </button>

            {openPanel === "guests" && (
              <div className="absolute top-full left-0 sm:left-auto sm:right-0 md:left-0 mt-2 z-50 bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden w-full sm:w-64 p-4 max-w-[calc(100vw-2rem)]">
                <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-stone-400 mb-3">Select Guests</p>
                <div className="space-y-1">
                  {[1, 2, 3, 4, 5, 6].map((n) => {
                    const label = n === 6 ? "5+ Guests" : `${n} Guest${n > 1 ? "s" : ""}`;
                    const sub = n === 1 ? "Solo traveller" : n === 2 ? "A couple" : n === 6 ? "Large group" : "Group";
                    return (
                      <button
                        key={n}
                        onClick={() => { setGuests(n); setOpenPanel(null); }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                          guests === n
                            ? "bg-brand text-white"
                            : "text-stone-700 hover:bg-stone-50"
                        }`}
                      >
                        <span>{label}</span>
                        <span className={`text-[10px] font-medium ${guests === n ? "text-white/70" : "text-stone-400"}`}>{sub}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ── Search Button ────────────────────────────────────────────────── */}
          <div className="flex items-center justify-center p-3 sm:py-0 sm:px-3 lg:px-4">
            <button
              aria-label="Search"
              className="w-full sm:w-12 h-12 flex items-center justify-center gap-2 rounded-2xl sm:rounded-full bg-brand hover:bg-brand-hover active:scale-95 text-white transition-all duration-200 shadow-md cursor-pointer shrink-0 font-medium text-sm sm:text-base"
            >
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="sm:hidden font-semibold">Search Residences</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
