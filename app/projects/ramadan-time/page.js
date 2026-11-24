import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";
import { projects } from "@/data/projects";

const path = "/projects/ramadan-time";
const project = projects.find((item) => item.caseStudy === path);
const title = "Ramadan Time: location-based schedule application";
export const metadata = articleMetadata(title, "Prayer and fasting schedules depend on location. A generic timetable leaves users to check whether the times apply where they are.", path);

export default function CaseStudy() {
  return (
    <ArticlePage path={path} title={title} parent={{ name: "Projects", href: "/projects" }} introduction="Prayer and fasting schedules depend on location. A generic timetable leaves users to check whether the times apply where they are.">
      <section><h2>How the product works</h2><p>The application uses geolocation to select local schedules. Prayer and fasting times share a location context so users can consult both in one place.</p></section>
      <section><h2>Technology and preview</h2><p>{project.tags.join(", ")}.</p><a href={project.link}>Explore the {project.title} preview</a></section>
      <p>Explore our <Link href="/services/web-application-development">web application development service</Link> or <Link href="/contact">discuss a similar project</Link>.</p>
    </ArticlePage>
  );
}
