import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WhyUsV3() {
  return (
    <section id="about" aria-labelledby="growth-heading" className="scroll-mt-14 bg-white px-5 font-poppins-r text-foreground sm:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-x-10 py-14 sm:grid-cols-[1fr_0.85fr] sm:py-20 lg:gap-x-20">
        <div>
          <h2 id="growth-heading" className="font-poppins-m text-[clamp(2.65rem,5.8vw,5.25rem)] leading-[1.04] tracking-[-0.06em]">
            Websites built<br />
            for growth<span className="text-primary">.</span>
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-foreground/70 sm:text-base">
            Give customers a clear path from their first visit to their next step.
          </p>
          <Link href="/book-a-demo" className="mt-6 inline-flex min-h-11 items-center gap-4 border-b border-foreground font-poppins-m text-sm transition-opacity hover:opacity-65">
            Book a free demo <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="relative hidden aspect-[5/4] overflow-hidden rounded-2xl bg-neutral-100 sm:block">
          <Image src="/images/whyUsV3.avif" alt="DevRep Labs website project preview" fill
            sizes="(min-width: 1280px) 495px, 44vw" className="object-cover object-[center_35%]" />
        </div>
      </div>
    </section>
  );
}
