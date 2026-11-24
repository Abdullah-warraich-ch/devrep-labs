import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function PreFooterCta() {
  return (
    <section id="contact" aria-labelledby="project-invitation" className="scroll-mt-14 bg-white px-5 text-foreground sm:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-x-2 gap-y-6 lg:grid-cols-[1fr_1fr_auto] border-t border-foreground/15 py-12 sm:py-20">
        <h2 id="project-invitation" className="font-poppins-m text-[clamp(2.5rem,6vw,5rem)] leading-[1.04] tracking-[-0.055em]">
          Have a project<br />in mind<span className="text-primary">?</span>
        </h2>
        <svg aria-hidden="true" focusable="false" viewBox="0 0 256 180" className="w-[clamp(4.5rem,22vw,16rem)] justify-self-center text-foreground">
          <g stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
            {[24, 16, 8, 0].map((offset) => (
              <path key={offset} transform={`translate(${-offset} ${offset})`}
                d="M74 96 145 55l-37-9 10-23 88 21-25 85-23-7 12-38-76 44Z"
                className={offset === 0 ? "fill-primary" : "fill-white"} />
            ))}
          </g>
        </svg>
        <Link href="/contact" className="col-span-2 inline-flex justify-self-start items-center gap-4 lg:col-span-1 rounded-full bg-foreground px-6 py-3.5 font-poppins-m text-sm text-background transition-opacity hover:opacity-85">
          Start a project <IconArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
