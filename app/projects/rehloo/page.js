import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";
import { projects } from "@/data/projects";

const path = "/projects/rehloo";
const project = projects.find((item) => item.caseStudy === path);
const title = "Rehloo, Find A Hostel: hostel booking application";
export const metadata = articleMetadata(title, "Someone searching for a hostel needs a way to move from finding accommodation to starting a booking.", path);

export default function CaseStudy() {
  return (
    <ArticlePage path={path} title={title} parent={{ name: "Projects", href: "/projects" }} introduction="Someone searching for a hostel needs a way to move from finding accommodation to starting a booking.">
      <section><h2>How the product works</h2><p>Rehloo brings hostel discovery and booking into one application. Keeping the accommodation search and booking journey together gives visitors a next step once they find a suitable hostel.</p></section>
      <section><h2>Technology and preview</h2><p>{project.tags.join(", ")}.</p><a href={project.link}>Explore the {project.title} preview</a></section>
      <p>Explore our <Link href="/services/web-application-development">web application development service</Link> or <Link href="/contact">discuss a similar project</Link>.</p>
    </ArticlePage>
  );
}
