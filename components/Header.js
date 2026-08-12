"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import EyeFollowButton from "@/components/ui/EyeFollowButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Work", link: "#work" },
    { name: "Products", link: "#products" },
    { name: "Pricing", link: "#pricing" },
    { name: "Blog", link: "#blog" },
  ];

  return (
    <header className="relative z-[99999] w-full px-2 sm:px-4 pt-2">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4 shrink-0">
            <EyeFollowButton
              text="Get in touch"
              href="#contact"
              buttonColor="#ffffff"
              textColor="#000000"
              eyeColor="#000000"
              pupilColor="#ffffff"
            />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-zinc-300 hover:text-white py-1 text-base font-medium transition-colors"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4 border-t border-zinc-800">
              <EyeFollowButton
                text="Get in touch"
                href="#contact"
                buttonColor="#ffffff"
                textColor="#000000"
                eyeColor="#000000"
                pupilColor="#ffffff"
                className="w-full justify-between"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
}
