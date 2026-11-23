"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import { IconArrowUp, IconArrowRight, IconCheck } from "@tabler/icons-react";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Book a Demo", href: "/book-a-demo" },
    { name: "Why Us", href: "/#about" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-background px-5 font-poppins-r text-foreground sm:px-10">
      <div className="mx-auto max-w-6xl border-t border-foreground/15">
        <div className="grid gap-9 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16 lg:py-14">
          <div>
            <BrandLogo />
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">Web design, development and AI solutions.</p>
            <div className="mt-4 flex flex-col items-start gap-2 text-sm">
              <Link href="/contact" className="hover:underline">contact@devrep.site</Link>
              <a href="https://wa.me/923391719123" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:underline">+92 339 1719123</a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="mb-4 text-sm font-poppins-m">Explore</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-foreground/70">
              {navLinks.map(({ name, href }) => (
                <li key={href}><Link href={href} className="hover:underline">{name}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="max-w-sm">
            <h2 className="text-sm font-poppins-m">Newsletter</h2>
            <p className="mt-2 text-sm text-foreground/70">Updates on web design and development.</p>
            {subscribed ? (
              <p role="status" className="mt-4 flex min-h-11 items-center gap-2 text-sm">
                <IconCheck size={16} aria-hidden="true" /> Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-3 flex items-center border-b border-foreground/30 focus-within:border-foreground">
                <input type="email" required autoComplete="email" aria-label="Email for newsletter" placeholder="Your email"
                  value={emailInput} onChange={(e) => setEmailInput(e.target.value)}
                  className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-foreground/55" />
                <button type="submit" aria-label="Subscribe" className="grid size-11 cursor-pointer place-items-center rounded-full hover:bg-foreground/5">
                  <IconArrowRight size={18} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-foreground/10 py-5 text-xs text-foreground/65">
          <p className="flex items-center gap-2">
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="size-5 fill-primary">
              <path d="M12 1c.7 7.4 3.6 10.3 11 11-7.4.7-10.3 3.6-11 11C11.3 15.6 8.4 12.7 1 12c7.4-.7 10.3-3.6 11-11Z" />
            </svg>
            © {new Date().getFullYear()} DevRep Labs
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <button type="button" onClick={scrollToTop} aria-label="Back to top" className="grid size-10 cursor-pointer place-items-center rounded-full border border-foreground/15 hover:bg-foreground/5">
              <IconArrowUp size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
