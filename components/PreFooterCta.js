import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function PreFooterCta() {
  return (
    <section id="contact" aria-labelledby="project-invitation" className="scroll-mt-14 bg-background px-5 text-foreground sm:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-x-2 gap-y-6 lg:grid-cols-[1fr_1fr_auto] border-t border-foreground/15 py-12 sm:py-20">
        <h2 id="project-invitation" className="font-poppins-m text-[clamp(2.5rem,6vw,5rem)] leading-[1.04] tracking-[-0.055em]">
          Have a project<br />in mind<span className="text-primary">?</span>
        </h2>
        <svg aria-hidden="true" focusable="false" viewBox="0 0 256 180" className="w-[clamp(4.5rem,22vw,16rem)] justify-self-center text-foreground">
          <g transform="rotate(-22 128 90)" fill="none" stroke="currentColor" strokeWidth="1.4">
            {Array.from({ length: 15 }, (_, i) => (
              <ellipse key={i} cx={79 + i * 7} cy="90" rx={26 + 7 * Math.cos(i * Math.PI / 7)} ry={52 - 15 * Math.sin(i * Math.PI / 14)}
                transform={`rotate(${i * 4 - 28} ${79 + i * 7} 90)`} />
            ))}
          </g>
          <path d="M211 15q0 13 13 13-13 0-13 13 0-13-13-13 13 0 13-13Z" className="fill-primary" />
        </svg>
        <Link href="/contact" className="col-span-2 inline-flex justify-self-start items-center gap-4 lg:col-span-1 rounded-full bg-foreground px-6 py-3.5 font-poppins-m text-sm text-background transition-opacity hover:opacity-85">
          Start a project <IconArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
