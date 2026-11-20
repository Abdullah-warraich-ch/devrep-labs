import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";

const title = "Custom web development";
const description = "Explore custom business websites and web applications from DevRep Labs, from responsive service pages to searchable catalogs and booking flows.";
export const metadata = articleMetadata(title, description, "/services/custom-web-development");

export default function WebDevelopmentPage() {
  return (
    <ArticlePage title={title} parent={{ name: "Services", href: "/services" }} introduction="Your website should make the next step easy for a customer. We build business websites, searchable catalogs and web applications around the tasks your visitors come to complete.">
      <section><h2>What do your visitors need to do?</h2><p>A service business may need a clear offer, examples of completed work and a short inquiry form. A property catalog needs filters, comparable listing details and a booking flow that carries the selected property into the request.</p></section>
      <section><h2>From workflow to working website</h2><p>We map the main visitor journey, design the desktop and mobile screens, and implement the pages and interactions in React and Next.js. The scope can include forms, dashboards and integrations with tools your team already uses.</p></section>
      <section><h2>Explore a project</h2><p>Our <Link href="/projects/griffin-apartments">Griffin Heights Apartments case study</Link> shows how visitors can compare properties, inspect a gallery and explore a reservation flow on a phone.</p></section>
      <p><Link href="/contact">Request a web development quote</Link> or <Link href="/book-a-demo">book a free demo</Link> to discuss your workflow.</p>
    </ArticlePage>
  );
}
