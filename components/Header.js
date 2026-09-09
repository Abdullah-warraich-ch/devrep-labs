"use client";

import { useState } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useContactModal } from "@/context/ContactModalContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openContactModal } = useContactModal();

  const navItems = [
    { name: "Services", link: "/#services" },
    { name: "Work", link: "/projects" },
    { name: "About", link: "/#about" },
    { name: "FAQ", link: "/#faq" },
    { name: "Contact", isContactTrigger: true },
  ];

  return (
    <header className="fixed top-0 inset-x-0 w-full h-11 sm:h-13 z-50 bg-primary-gradient">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 flex items-center justify-between">
        {/* Text Logo */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0 group">
          <span className="text-base sm:text-lg font-bold tracking-tight text-white select-none flex items-center font-['poppins-sb'] group-hover:opacity-95 transition-opacity">
            DevRep
            <span className="text-[#FFE566] ml-1 font-semibold">Labs</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] ml-1 inline-block"></span>
          </span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) =>
            item.isContactTrigger ? (
              <button
                key={item.name}
                type="button"
                onClick={openContactModal}
                className="pago-nav-link cursor-pointer bg-transparent border-none"
              >
                {item.name}
              </button>
            ) : (
              <a
                key={item.name}
                href={item.link}
                className="pago-nav-link"
              >
                {item.name}
              </a>
            )
          )}
        </nav>

        {/* Right CTA (Small Button) */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={openContactModal}
            className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium font-['poppins-m'] text-[#090814] bg-[#00F5D4] hover:bg-[#00E5FF] shadow-sm hover:shadow-[0_0_12px_rgba(0,245,212,0.45)] transition-all cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <IconX className="size-5" /> : <IconMenu2 className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-primary-gradient border-b border-white/20 p-5 shadow-xl flex flex-col gap-3 font-poppins">
          {navItems.map((item) =>
            item.isContactTrigger ? (
              <button
                key={item.name}
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openContactModal();
                }}
                className="pago-nav-link text-left cursor-pointer bg-transparent border-none"
              >
                {item.name}
              </button>
            ) : (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="pago-nav-link"
              >
                {item.name}
              </a>
            )
          )}
          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false);
              openContactModal();
            }}
            className="mt-2 w-full text-center py-2 rounded-full text-xs font-medium font-['poppins-m'] text-[#090814] bg-[#00F5D4] hover:bg-[#00E5FF] shadow-sm transition-colors cursor-pointer"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
}
