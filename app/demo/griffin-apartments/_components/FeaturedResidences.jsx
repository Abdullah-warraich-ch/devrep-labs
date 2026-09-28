"use client";

import { useState } from "react";
import { apartmentsData } from "../_data/apartments";
import ApartmentCard from "./ApartmentCard";
import UnderDevelopmentModal from "./UnderDevelopmentModal";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "../_data/siteConfig";

export default function FeaturedResidences() {
  const [selectedCity, setSelectedCity] = useState("All");
  const [isDevModalOpen, setIsDevModalOpen] = useState(false);

  const filteredApartments =
    selectedCity === "All"
      ? apartmentsData
      : apartmentsData.filter(
          (apt) => apt.city.toLowerCase() === selectedCity.toLowerCase()
        );

  return (
    <section className="w-full bg-white py-10 sm:py-16 px-3 sm:px-8 md:px-12 border-b border-stone-200 font-sans select-none">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* SECTION HEADER & CITY FILTER TABS */}
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between sm:text-left gap-4 pb-4 border-b border-stone-100">
          <div>
            <h2 className="text-xl sm:text-3xl font-semibold text-stone-900 tracking-tight text-center sm:text-left">
              Featured Luxury Apartments
            </h2>
          </div>

          {/* CITY FILTER TABS */}
          <div className="flex items-center justify-center gap-1.5 bg-stone-100 p-1 rounded-full border border-stone-200 self-center sm:self-auto shrink-0">
            {["All", ...siteConfig.cities].map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCity === city
                    ? "bg-brand text-white shadow-sm"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/60"
                }`}
              >
                {city === "All" ? "All Cities" : city}
              </button>
            ))}
          </div>
        </div>

        {/* RESIDENCES COMPACT MINIMALIST GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {filteredApartments.map((apt) => (
            <ApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>

        {/* BOTTOM PILL-SHAPED 2PX BLACK BORDER BUTTON */}
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setIsDevModalOpen(true)}
            className="group flex items-center gap-2 bg-transparent hover:bg-black text-black hover:text-white font-normal px-7 sm:px-9 py-3 rounded-full text-xs sm:text-sm border border-black transition-all duration-300 cursor-pointer active:scale-95"
          >
            <span>View All Apartments</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* UNDER DEVELOPMENT MODAL */}
      <UnderDevelopmentModal
        isOpen={isDevModalOpen}
        onClose={() => setIsDevModalOpen(false)}
        featureName="All Apartments Directory"
      />
    </section>
  );
}
