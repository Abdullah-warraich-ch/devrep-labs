"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";
import BrandLogo from "@/components/ui/BrandLogo";

const primary = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
const secondary = [
  { name: "Home", href: "/" },
  { name: "Book a demo", href: "/book-a-demo" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const pathname = usePathname();

  function renderLink({ name, href }) {
    const active = pathname === href || (href !== "/" && pathname?.startsWith(href + "/"));
    return (
      <Link key={href} href={href} aria-current={active ? "page" : undefined}
        onClick={() => setOpen(false)}
        className="inline-flex min-h-11 items-center gap-1.5 underline-offset-[6px] decoration-primary hover:underline aria-[current=page]:underline">
        {name}
        {href === "/contact" && <IconArrowUpRight size={16} aria-hidden="true" className="text-primary" />}
      </Link>
    );
  }

  return (
    <header className="relative z-30 bg-white font-poppins-r text-foreground"
      onKeyDown={(event) => {
        if (open && event.key === "Escape") {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
        <div className="flex min-h-16 items-center justify-between sm:min-h-20">
          <BrandLogo />
          <nav aria-label="Main navigation" className="hidden items-center gap-8 font-poppins-m text-sm md:flex lg:gap-10">
            {primary.map(renderLink)}
          </nav>
          <button ref={menuButton} type="button" aria-expanded={open} aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 font-poppins-m text-sm md:hidden">
            {open ? "Close" : "Menu"}
            {open ? <IconX size={20} aria-hidden="true" /> : <IconMenu2 size={20} aria-hidden="true" />}
          </button>
        </div>
        <nav hidden={!open} id="mobile-navigation" aria-label="Mobile navigation" className="border-y border-foreground/15 py-4 md:hidden">
          <div className="grid grid-cols-2 gap-x-6 font-poppins-m text-xl tracking-tight">
            {primary.map(renderLink)}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-6 border-t border-foreground/10 pt-2 text-sm text-foreground/70">
            {secondary.map(renderLink)}
          </div>
        </nav>
      </div>
    </header>
  );
}
