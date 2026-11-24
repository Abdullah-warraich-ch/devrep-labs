import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";

const path = "/services/ui-ux-design";
export const metadata = articleMetadata("UI UX Design for Websites and Apps", "Plan navigation, mobile screens and interactive prototypes around the tasks your website visitors and product users need to complete.", path);

export default function ServicePage() {
  return (
    <ArticlePage path={path} title="Clear interfaces for websites and products" parent={{ name: "Services", href: "/services" }} introduction="A visitor comparing apartments needs a different screen from the person managing reservations. We map each audience and design around the decision in front of them.">
      <section><h2>From task to prototype</h2><p>We trace a common task, sketch the shortest understandable path and prototype the screens where people have to compare, choose or enter information.</p></section>
      <section><h2>Handoff for implementation</h2><p>Responsive layouts, form states, labels and interaction notes give developers a reference for small screens, missing data and keyboard navigation.</p></section>
      <section><h2>Can you redesign just one flow?</h2><p>Yes. A search, sign-up or booking journey can be scoped separately when the surrounding product already works.</p></section>
      <section><h2>Related work</h2>
        <ul>
          <li><Link href="/projects/griffin-apartments">Griffin Heights Apartments case study</Link></li>
        </ul>
      </section>
      <Link href="/contact">Discuss your design</Link>
    </ArticlePage>
  );
}
