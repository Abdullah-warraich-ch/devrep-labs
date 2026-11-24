import { projects } from "@/data/projects";

export default function sitemap() {
  const baseUrl = "https://www.devrep.site";
  const paths = [
    "/", "/about", "/services", "/services/custom-web-development", "/projects",
    "/services/web-application-development",
    "/services/ecommerce-development",
    "/services/ai-automation",
    "/services/ui-ux-design",
    ...projects.map((project) => project.caseStudy),
  ];
  return paths.map((path) => ({ url: new URL(path, baseUrl).href }));
}
