"use client";

import Image from "next/image";
import { ArrowRight, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig } from "../_data/siteConfig";

export default function Footer({ onBookClick }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { footer, contact, assets } = siteConfig;

  return (
    <footer className={`relative w-full bg-brand text-white ${isHomePage ? "pt-16 sm:pt-20" : "pt-10 sm:pt-12"} pb-10 font-sans select-none border-t border-brand-hover`}>
      
      {/* MINIMALIST FLOATING BANNER CARD (ONLY ON HOME PAGE "/") */}
      {isHomePage && (
        <div className="absolute top-0 left-0 right-0 transform -translate-y-1/2 z-30 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
          <div className="bg-stone-950 text-white border border-stone-800 rounded-xl sm:rounded-3xl p-3.5 sm:px-10 sm:py-7 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-5 relative overflow-hidden">
            
            {/* PUNCHLINE WITH MINIMAL GREEN DOT */}
            <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 shrink-0" />
              <h3 className="text-sm sm:text-2xl font-bold tracking-tight text-white leading-tight">
                {footer.bannerTitle}
              </h3>
            </div>

            {/* MINIMAL CTA BUTTON */}
            <button
              onClick={onBookClick}
              className="bg-white hover:bg-stone-100 text-stone-950 font-bold text-[11px] sm:text-sm px-4 py-2 sm:px-6 sm:py-3.5 rounded-full transition-all duration-200 shadow-md flex items-center gap-1.5 sm:gap-2 shrink-0 cursor-pointer active:scale-95 group"
            >
              <span>{footer.bannerButtonText}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      )}

      {/* FOOTER MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-6 space-y-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pt-4">
          
          {/* BRAND COLUMN */}
          <div className="space-y-3.5 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src={assets.logoWhite}
                alt={`${siteConfig.name} Logo`}
                width={120}
                height={120}
                quality={95}
                className="h-10 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white leading-none">
                  {siteConfig.name}
                </span>
                <span className="text-[9px] text-emerald-200/80 font-semibold tracking-widest uppercase mt-0.5">
                  {siteConfig.tagline}
                </span>
              </div>
            </div>
            <p className="text-stone-300/90 text-xs leading-relaxed font-normal">
              {footer.description}
            </p>
          </div>

          {/* LOCATIONS */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-emerald-300">
              Locations
            </h4>
            <ul className="space-y-2 text-xs font-medium text-stone-200">
              {contact.locations.map((loc, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{loc.address}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AMENITIES / GUARANTEES */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-emerald-300">
              Guaranteed
            </h4>
            <ul className="space-y-2 text-xs font-medium text-stone-200">
              {footer.guaranteed.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT & DIRECT BOOKING */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-emerald-300">
              Contact Us
            </h4>
            <div className="space-y-2 text-xs font-medium text-stone-200">
              <a href={`tel:${contact.phoneRaw}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{contact.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL ROW */}
        <div className="pt-6 border-t border-brand-hover flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-stone-300">
          <p>© {new Date().getFullYear()} {siteConfig.name} {siteConfig.tagline}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">House Rules</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
