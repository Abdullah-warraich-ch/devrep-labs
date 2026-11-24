"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { IconArrowLeft, IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import { projects } from "@/data/projects";

const featured = projects.slice(0, 4);
const controlClass = "grid size-11 cursor-pointer place-items-center rounded-full border border-foreground/15 bg-white transition-colors hover:bg-neutral-100";

export default function ProjectsV2() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const project = featured[index];

  function move(offset) {
    setIndex((current) => (current + offset + featured.length) % featured.length);
  }

  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-14 bg-white px-5 pb-14 font-poppins-r text-foreground sm:px-10 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/15 pt-6 sm:mb-9">
          <h2 id="projects-heading" className="font-poppins-m text-[clamp(2rem,5vw,4.5rem)] leading-none tracking-[-0.065em]">
            Selected work<span className="text-primary">.</span>
          </h2>
          <Link href="/projects" className="inline-flex min-h-11 items-center gap-1 text-sm underline-offset-4 hover:underline">
            Browse our projects <IconArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </header>
        <p className="mb-6 max-w-2xl"><Link className="underline underline-offset-4" href="/projects">Browse our web development portfolio.</Link> Try the vehicle filters on AutoVault or follow a guest choosing dates at Griffin Heights.</p>

        <div className="isolate grid overflow-hidden rounded-3xl border border-foreground/10 bg-white">
          {featured.map((item, i) => (
            <motion.article key={item.id} initial={false} animate={{ opacity: i === index ? 1 : 0 }}
              inert={i !== index} aria-hidden={i !== index} style={{ zIndex: i === index ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeInOut" }}
              className="col-start-1 row-start-1 grid min-w-0 grid-rows-[auto_1fr] bg-white lg:grid-cols-[1.45fr_1fr] lg:grid-rows-1">
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-96">
                <Image src={item.image} alt={item.title + " website preview"} fill
                  sizes="(min-width: 1280px) 720px, (min-width: 1024px) 62vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col items-start p-6 sm:p-9 lg:p-10">
                <p className="text-xs font-poppins-m text-foreground/65">{item.category}</p>
                <h3 className="mt-4 text-balance font-poppins-m text-3xl leading-tight tracking-tight lg:text-4xl">{item.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground/75">{item.description}</p>
                <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-foreground/65">
                  {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
                  <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-poppins-m text-background hover:opacity-85">
                    Live preview <IconArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  {item.caseStudy && <Link href={item.caseStudy} className="text-sm underline underline-offset-4">Case study</Link>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p aria-live="polite" className="text-xs tabular-nums text-foreground/65">
            <span className="sr-only">{project.title}, project </span>{index + 1} / {featured.length}
          </p>
          <div className="flex gap-2">
            <button type="button" onClick={() => move(-1)} aria-label="Previous project" className={controlClass}><IconArrowLeft size={18} /></button>
            <button type="button" onClick={() => move(1)} aria-label="Next project" className={controlClass}><IconArrowRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
