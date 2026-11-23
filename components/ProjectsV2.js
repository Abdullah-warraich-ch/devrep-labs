"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { IconArrowLeft, IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import { projects } from "@/data/projects";

const featured = projects.slice(0, 4);
const controlClass = "grid size-11 cursor-pointer place-items-center rounded-full border border-foreground/20 transition-colors hover:bg-foreground/5";

export default function ProjectsV2() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const project = featured[index];

  function move(offset) {
    setIndex((current) => (current + offset + featured.length) % featured.length);
  }

  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-14 bg-white px-5 py-16 font-poppins-r text-foreground sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-7 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <h2 id="projects-heading" className="font-poppins-m text-[clamp(2.25rem,5vw,4rem)] leading-none tracking-[-0.055em]">
            Selected work<span className="text-primary">.</span>
          </h2>
          <Link href="/projects" className="inline-flex items-center gap-1.5 py-2 text-sm underline decoration-foreground/30 underline-offset-4 hover:decoration-current">
            All projects <IconArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </header>

        <div className="isolate grid overflow-hidden rounded-3xl bg-[#f4f5f6]">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              initial={false}
              animate={{ opacity: i === index ? 1 : 0 }}
              inert={i !== index}
              aria-hidden={i !== index}
              style={{ zIndex: i === index ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeInOut" }}
              className="col-start-1 row-start-1 grid min-w-0 grid-rows-[auto_1fr] bg-[#f4f5f6] lg:grid-cols-[1.45fr_1fr] lg:grid-rows-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-96">
                <Image src={project.image} alt={project.title + " website preview"} fill
                  sizes="(min-width: 1280px) 680px, (min-width: 1024px) 56vw, 100vw"
                  className="object-cover" />
              </div>
              <div className="flex flex-col items-start p-6 sm:p-9 lg:p-10">
                <p className="text-xs font-poppins-m text-foreground/65">{project.category}</p>
                <h3 className="mt-4 text-balance font-poppins-m text-3xl leading-tight tracking-tight lg:text-4xl">{project.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground/75">{project.description}</p>
                <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-foreground/65">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-poppins-m text-background hover:opacity-85">
                    Live preview <IconArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  {project.caseStudy && <Link href={project.caseStudy} className="text-sm underline underline-offset-4">Case study</Link>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div aria-hidden="true" className="flex gap-1.5">
            {featured.map((item, i) => (
              <span key={item.id} className={`h-1 rounded-full ${i === index ? "w-8 bg-primary" : "w-3 bg-foreground/20"}`} />
            ))}
          </div>
          <p className="sr-only" aria-live="polite">Project {index + 1} of {featured.length}, {project.title}</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => move(-1)} aria-label="Previous project" className={controlClass}><IconArrowLeft size={18} /></button>
            <button type="button" onClick={() => move(1)} aria-label="Next project" className={controlClass}><IconArrowRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
