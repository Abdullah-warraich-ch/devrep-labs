import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";

const path = "/services/ai-automation";
export const metadata = articleMetadata("AI Automation for Businesses", "Scope AI-assisted workflows for enquiries, document sorting and drafting, with human review and a clear way to measure time saved.", path);

export default function ServicePage() {
  return (
    <ArticlePage path={path} title="AI automation for repetitive business work" parent={{ name: "Services", href: "/services" }} introduction="Start with a task your team repeats every week. Sorting enquiries, extracting fields or drafting replies can be a good fit when reviewers can tell a good result from a bad one.">
      <section><h2>Choose a manageable pilot</h2><p>Bring representative examples, including ambiguous requests. We define the expected output, who may access the input and which decisions a person must approve.</p></section>
      <section><h2>Measure the review effort</h2><p>Compare the assisted workflow with the current process. Count corrections and time spent reviewing as well as time spent drafting before deciding whether to expand.</p></section>
      <section><h2>What happens when an input is unclear?</h2><p>We design a review step so a person can correct the result or handle the request manually.</p></section>
      <section><h2>Related work</h2>
        <ul>
          <li><Link href="/projects/ustaad">Ustaad case study</Link></li>
        </ul>
      </section>
      <Link href="/contact">Discuss a workflow</Link>
    </ArticlePage>
  );
}
