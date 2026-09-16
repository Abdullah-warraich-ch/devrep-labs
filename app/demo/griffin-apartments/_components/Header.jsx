"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, Menu, X, Building2, PhoneCall } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../_data/siteConfig";

export default function Header({ onBookClick }) {
  const pathname = usePathname();
  const isDetailPage = pathname?.startsWith("/apartments/") && pathname !== "/apartments";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans pointer-events-auto">
      <nav className="h-16 flex items-center border-b border-stone-200/80 shadow-md bg-white/98 [transform:translateZ(0)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/demo/griffin-apartments" className="flex items-center gap-2.5 sm:gap-3 group">
              <Image
                src={siteConfig.assets.logoDark}
                alt={`${siteConfig.name} ${siteConfig.tagline}`}
                width={120}
                height={120}
                quality={95}
                className="h-9 sm:h-11 w-auto object-contain shrink-0 transition-transform duration-200"
                priority
              />
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-xl tracking-tight text-brand leading-none">
                  {siteConfig.name}
                </span>
                <span className="text-[9px] sm:text-[10px] text-stone-500 font-bold tracking-widest uppercase mt-0.5">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>

            {/* Dynamic Navigation Links per City (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
              {siteConfig.cities.map((city) => (
                <a
                  key={city}
                  href={`#${city.toLowerCase()}`}
                  className="text-stone-700 hover:text-brand transition-colors py-1 relative group"
                >
                  <span>{city}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Book Apartment Button (Hidden on Mobile) */}
            <div className="hidden sm:flex items-center">
              {isDetailPage ? (
                <button
                  onClick={onBookClick}
                  className="bg-brand text-white font-bold px-5 py-2.5 rounded-full text-xs tracking-wide hover:bg-brand-hover transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Book Apartment</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  href="/demo/griffin-apartments/apartments"
                  className="bg-brand text-white font-bold px-5 py-2.5 rounded-full text-xs tracking-wide hover:bg-brand-hover transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Book Apartment</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>

            {/* Mobile Clean Circular Hamburger Button */}
            <div className="flex sm:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Menu"
                className="p-2.5 rounded-full bg-stone-100 hover:bg-stone-200/80 text-brand border border-stone-200/80 shadow-sm active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center"
              >
                <Menu className="w-5 h-5 text-brand" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-In Sidebar from Right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 sm:hidden">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60"
            />

            {/* Right Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="fixed top-0 right-0 bottom-0 w-[82vw] max-w-xs bg-white z-50 flex flex-col justify-between p-6 shadow-2xl border-l border-stone-200"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <Image
                    src={siteConfig.assets.logoDark}
                    alt={siteConfig.name}
                    width={32}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                  <span className="font-bold text-sm text-brand">{siteConfig.name}</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer active:scale-95"
                  aria-label="Close Sidebar"
                >
                  <X className="w-4 h-4 text-stone-700" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 py-6 space-y-5 overflow-y-auto">
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  Navigation
                </p>
                <div className="flex flex-col space-y-1.5 text-sm font-medium text-stone-800">
                  <Link
                    href="/demo/griffin-apartments"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 px-4 rounded-2xl hover:bg-stone-50 flex items-center justify-between transition-colors border border-transparent hover:border-stone-200/60"
                  >
                    <span>Home</span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </Link>

                  {siteConfig.cities.map((city) => (
                    <a
                      key={city}
                      href={`#${city.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-3 px-4 rounded-2xl hover:bg-stone-50 flex items-center justify-between transition-colors border border-transparent hover:border-stone-200/60"
                    >
                      <span>{city} Residences</span>
                      <ChevronRight className="w-4 h-4 text-stone-400" />
                    </a>
                  ))}

                  <Link
                    href="/demo/griffin-apartments/apartments"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 px-4 rounded-2xl hover:bg-stone-50 flex items-center justify-between transition-colors border border-transparent hover:border-stone-200/60"
                  >
                    <span>All Apartments</span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </Link>
                </div>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="pt-4 border-t border-stone-100 space-y-3">
                {isDetailPage ? (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onBookClick) onBookClick();
                    }}
                    className="w-full bg-brand hover:bg-brand-hover text-white font-medium py-3.5 rounded-full text-xs tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-brand/20"
                  >
                    <span>Book Apartment</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href="/demo/griffin-apartments/apartments"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-brand hover:bg-brand-hover text-white font-medium py-3.5 rounded-full text-xs tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-brand/20 text-center"
                  >
                    <span>Book Apartment</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )}

                <p className="text-center text-[10px] text-stone-400 font-normal">
                  © {new Date().getFullYear()} {siteConfig.name} {siteConfig.tagline}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
