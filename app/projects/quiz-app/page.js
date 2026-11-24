import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";
import { projects } from "@/data/projects";

const path = "/projects/quiz-app";
const project = projects.find((item) => item.caseStudy === path);
const title = "Quiz App: interactive learning application";
export const metadata = articleMetadata(title, "A learner practising with a quiz needs feedback while the questions are still fresh.", path);

export default function CaseStudy() {
  return (
    <ArticlePage path={path} title={title} parent={{ name: "Projects", href: "/projects" }} introduction="A learner practising with a quiz needs feedback while the questions are still fresh.">
      <section><h2>How the product works</h2><p>The interface pairs interactive questions with instant scoring. A learner can work through the quiz and see a result in the same session.</p></section>
      <section><h2>Technology and preview</h2><p>{project.tags.join(", ")}.</p><a href={project.link}>Explore the {project.title} preview</a></section>
      <p>Explore our <Link href="/services/web-application-development">web application development service</Link> or <Link href="/contact">discuss a similar project</Link>.</p>
    </ArticlePage>
  );
}
