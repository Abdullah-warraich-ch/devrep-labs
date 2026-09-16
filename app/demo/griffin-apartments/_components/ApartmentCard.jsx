"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Heart, Star, ArrowUpRight, Bed, Bath, Users } from "lucide-react";

export default function ApartmentCard({ apartment, isLiked: initialIsLiked, onFavoriteToggle }) {
  const [isLiked, setIsLiked] = useState(Boolean(initialIsLiked));
  const apt = apartment;

  if (!apt) return null;

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked((prev) => !prev);
    if (onFavoriteToggle) onFavoriteToggle(apt.id);
  };

  return (
    <Link
      href={`/demo/griffin-apartments/apartments/${apt.id}`}
      className="bg-white border border-stone-200/80 rounded-2xl overflow-hidden flex flex-col cursor-pointer group"
    >
      {/* IMAGE HEADER */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Image
          src={apt.image}
          alt={apt.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 1024px) 50vw, 25vw"
        unoptimized
              />

        {/* LOCATION BADGE */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-stone-950/90 text-white text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center gap-1 shadow-sm">
          <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
          <span>{apt.city}</span>
        </div>

        {/* HEART / FAVORITE BUTTON */}
        <button
          onClick={handleFavoriteClick}
          aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-stone-950/60 hover:bg-stone-950/80 border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm group/heart z-10"
        >
          <Heart
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-200 stroke-[2] ${
              isLiked
                ? "fill-rose-500 text-rose-500"
                : "text-white/90 group-hover/heart:text-rose-400"
            }`}
          />
        </button>
      </div>

      {/* COMPACT CARD CONTENT */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3">
        <div className="space-y-1 sm:space-y-1.5">
          {/* TITLE & RATING */}
          <div className="flex items-start justify-between gap-1 sm:gap-2">
            <h3 className="text-xs sm:text-sm font-semibold text-stone-900 leading-snug line-clamp-1 group-hover:text-brand transition-colors">
              {apt.name}
            </h3>
            <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-[11px] font-medium text-stone-700 shrink-0">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>4.98</span>
            </div>
          </div>

          {/* SPECS ROW WITH ICONS */}
          <div className="flex items-center gap-1.5 sm:gap-3 text-[10px] sm:text-xs text-stone-500 font-medium pt-0.5 flex-wrap sm:flex-nowrap">
            <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
              <Bed className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand" />
              <span>{apt.specs.bedrooms} Bed</span>
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
              <Bath className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand" />
              <span>{apt.specs.baths} Bath</span>
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
              <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand" />
              <span>{apt.specs.guests} Guests</span>
            </div>
          </div>
        </div>

        {/* PRICE & RESERVE CTA */}
        <div className="pt-2 sm:pt-2.5 border-t border-stone-100 flex items-center justify-between gap-1.5 sm:gap-2">
          <div>
            {apt.originalPrice && (
              <div className="flex items-center gap-1 mb-0.5">
                <span className="line-through text-stone-400 text-[10px] sm:text-[11px] leading-none">
                  {apt.originalPrice}
                </span>
                {apt.discountBadge && (
                  <span className="text-emerald-700 bg-emerald-50 font-semibold text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-md leading-none">
                    {apt.discountBadge}
                  </span>
                )}
              </div>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-xs sm:text-sm font-bold text-stone-900">
                {apt.price}
              </span>
              <span className="text-[9px] sm:text-[10px] text-stone-400 font-normal">
                {apt.priceUnit}
              </span>
            </div>
          </div>

          <div className="w-full sm:w-auto bg-brand text-white font-medium text-[11px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 rounded-full shadow-sm flex items-center justify-center gap-1 cursor-pointer shrink-0 group-hover:bg-brand-hover transition-colors">
            <span>Reserve</span>
            <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45" />
          </div>
        </div>
      </div>
    </Link>
  );
}
