"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconShoppingBag } from "@tabler/icons-react";
import Navbar from "@/components/Navbar";
import PreFooterCta from "@/components/PreFooterCta";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "AI & Web Apps", "E-Commerce", "Portals & Tools"];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AI & Web Apps")
      return project.category.includes("AI") || project.category.includes("Web App") || project.category.includes("EdTech");
    if (activeCategory === "E-Commerce")
      return project.category.includes("E-Commerce");
    if (activeCategory === "Portals & Tools")
      return project.category.includes("Portal") || project.category.includes("GPS") || project.category.includes("Dashboard") || project.category.includes("Booking");
    return true;
  });

  return (
    <div className="bg-white font-poppins-r text-foreground">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 pb-16 sm:px-10 lg:px-16">
        <header className="grid items-end gap-5 py-12 sm:py-16 md:grid-cols-[1.3fr_1fr]">
          <h1 className="font-poppins-m text-[clamp(3rem,8vw,7rem)] leading-none tracking-[-0.065em]">
            Our projects<span className="text-primary">.</span>
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-foreground/70 sm:text-base md:justify-self-end">
            Explore the websites, stores and tools we’ve built. Open a live project to see how it works.
          </p>
        </header>
        <div role="group" aria-label="Filter projects" className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-1 border-y border-foreground/15 sm:mb-10 sm:gap-x-8">
          {categories.map((cat) => (
            <button key={cat} type="button" aria-pressed={activeCategory === cat} onClick={() => setActiveCategory(cat)}
              className="min-h-12 cursor-pointer border-b-2 border-transparent text-sm text-foreground/70 hover:text-foreground aria-pressed:border-primary aria-pressed:font-poppins-m aria-pressed:text-foreground">
              {cat}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="sr-only">{filteredProjects.length} projects shown</p>
        <section aria-label="Project gallery" className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-y-14">
          {filteredProjects.map((project, index) => {
            const featured = index === 0;
            return (
              <article key={project.id} className={featured ? "grid overflow-hidden rounded-2xl bg-neutral-100 sm:col-span-2 md:grid-cols-[1.45fr_1fr]" : "min-w-0"}>
                <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live preview`}
                  className={`relative block overflow-hidden bg-neutral-100 transition-opacity hover:opacity-95 ${featured ? "aspect-[3/2] md:aspect-auto md:min-h-80" : "aspect-[16/10] rounded-xl"}`}>
                  {project.image ? (
                    <Image src={project.image} alt={`${project.title} website preview`} fill priority={featured}
                      sizes={featured ? "(min-width: 1280px) 680px, (min-width: 768px) 57vw, 100vw" : "(min-width: 1280px) 560px, (min-width: 640px) 48vw, 100vw"}
                      className="object-cover object-center" />
                  ) : (
                    <span className="absolute inset-0 grid place-items-center bg-[#191a20] text-white">
                      <IconShoppingBag aria-hidden="true" size={84} stroke={1} />
                    </span>
                  )}
                </a>
                <div className={featured ? "flex flex-col justify-center p-6 lg:p-10" : "pt-5"}>
                  <p className="text-xs font-poppins-m text-foreground/65">{project.category}</p>
                  <h2 className={`mt-2 font-poppins-m leading-tight tracking-tight ${featured ? "text-3xl lg:text-5xl" : "text-2xl sm:text-3xl"}`}>{project.title}</h2>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground/70">{project.description}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-6">
                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1.5 font-poppins-m text-sm hover:underline">
                      Live preview <IconArrowUpRight aria-hidden="true" size={16} className="text-primary" />
                    </a>
                    {project.caseStudy && <Link href={project.caseStudy} className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">Read case study</Link>}
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
      <PreFooterCta />
      <Footer />
    </div>
  );
}
