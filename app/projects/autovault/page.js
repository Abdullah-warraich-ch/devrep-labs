import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";
import { projects } from "@/data/projects";

const path = "/projects/autovault";
const project = projects.find((item) => item.caseStudy === path);
const title = "AutoVault Car Dealer: vehicle inventory concept";
export const metadata = articleMetadata(title, "A dealership visitor needs to narrow a lot full of vehicles to a few worth inspecting.", path);

export default function CaseStudy() {
  return (
    <ArticlePage path={path} title={title} parent={{ name: "Projects", href: "/projects" }} introduction="A dealership visitor needs to narrow a lot full of vehicles to a few worth inspecting.">
      <section><h2>How the product works</h2><p>The inventory gives shoppers one collection to browse. Search filters narrow the choice before a vehicle detail view gives each car room for a closer look.</p></section>
      <section><h2>Technology and preview</h2><p>{project.tags.join(", ")}.</p><a href={project.link}>Explore the {project.title} preview</a></section>
      <p>Explore our <Link href="/services/custom-web-development">custom website development service</Link> or <Link href="/contact">discuss a similar project</Link>.</p>
    </ArticlePage>
  );
}
