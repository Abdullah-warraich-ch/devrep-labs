import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";
import { projects } from "@/data/projects";

const path = "/projects/ecommerce-product-page";
const project = projects.find((item) => item.caseStudy === path);
const title = "Simple E-Commerce Page: product and cart interface";
export const metadata = articleMetadata(title, "A shopper considering one product needs to inspect the item and see what they have added to their cart, including on a small screen.", path);

export default function CaseStudy() {
  return (
    <ArticlePage path={path} title={title} parent={{ name: "Projects", href: "/projects" }} introduction="A shopper considering one product needs to inspect the item and see what they have added to their cart, including on a small screen.">
      <section><h2>How the product works</h2><p>The responsive product showcase leads directly into an interactive cart. The finished interface demonstrates the selection and cart portions of a shopping journey.</p></section>
      <section><h2>Technology and preview</h2><p>{project.tags.join(", ")}.</p><a href={project.link}>Explore the {project.title} preview</a></section>
      <p>Explore our <Link href="/services/ecommerce-development">ecommerce website development service</Link> or <Link href="/contact">discuss a similar project</Link>.</p>
    </ArticlePage>
  );
}
