import ArticlePage, { articleMetadata } from "@/components/ArticlePage";

const title = "Terms of Service";
const description = "How inquiries, project proposals and interactive portfolio demos work at DevRep Labs.";
export const metadata = articleMetadata(title, description, "/terms");

export default function TermsPage() {
  return (
    <ArticlePage title={title} introduction="You can use this website to explore our work, discuss a project or request a demo.">
      <section><h2>Project inquiries</h2><p>The budget you select in a form helps us understand your project. Final pricing, scope, delivery dates and deliverables are agreed separately in a project proposal.</p></section>
      <section><h2>Demo requests</h2><p>Your preferred time helps us schedule a conversation. Check your email for a confirmed meeting time and invitation.</p></section>
      <section><h2>Portfolio previews</h2><p>Interactive concept projects demonstrate design and development work. The Griffin Apartments preview uses sample listings and prices. Exploring the booking flow does not reserve accommodation.</p></section>
      <section><h2>Contact</h2><p>For questions about a proposal or use of this site, email <a href="mailto:contact@devrep.site">contact@devrep.site</a>.</p></section>
    </ArticlePage>
  );
}
