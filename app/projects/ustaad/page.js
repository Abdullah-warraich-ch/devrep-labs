import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";
import { projects } from "@/data/projects";

const path = "/projects/ustaad";
const project = projects.find((item) => item.caseStudy === path);
const title = "Ustaad: AI tutor discovery platform";
export const metadata = articleMetadata(title, "Students looking for help need a way to discover educators suited to their learning needs.", path);

export default function CaseStudy() {
  return (
    <ArticlePage path={path} title={title} parent={{ name: "Projects", href: "/projects" }} introduction="Students looking for help need a way to discover educators suited to their learning needs.">
      <section><h2>How the product works</h2><p>The product focuses AI assistance on tutor discovery. The result is a finder that connects the student’s search with educators, giving the learner a starting point for choosing a tutor.</p></section>
      <section><h2>Technology and preview</h2><p>{project.tags.join(", ")}.</p><a href={project.link}>Explore the {project.title} preview</a></section>
      <p>Explore our <Link href="/services/ai-automation">AI automation service</Link> or <Link href="/contact">discuss a similar project</Link>.</p>
    </ArticlePage>
  );
}
