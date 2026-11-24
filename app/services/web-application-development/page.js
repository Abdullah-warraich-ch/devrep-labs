import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";

const path = "/services/web-application-development";
export const metadata = articleMetadata("Web Application Development", "Plan a booking platform, dashboard or internal tool around the people who use it. Explore workflows, permissions and handoffs with DevRep Labs.", path);

export default function ServicePage() {
  return (
    <ArticlePage path={path} title="Custom web applications for everyday work" parent={{ name: "Services", href: "/services" }} introduction="If a booking lives in a spreadsheet and its latest update sits in someone's inbox, staff have to check both. Custom web software can keep the request, its status and the next action together.">
      <section><h2>Map one complete workflow</h2><p>For a booking tool, start with the request, identify who can approve it and decide what happens when dates change. These decisions shape the screens, permissions and data model.</p></section>
      <section><h2>Test the handoffs</h2><p>We walk through the workflow with each role, including incomplete submissions and conflicting updates, before agreeing which integrations belong in the first release.</p></section>
      <section><h2>What should we bring to scoping?</h2><p>A sample form, anonymised spreadsheet or walkthrough of a recent request helps us identify the most expensive manual step.</p></section>
      <section><h2>Which booking website features do we need?</h2><p>Start with availability, confirmation and cancellations. An online booking system should tell the customer whether the booking went through and give staff a way to change it. See the <Link href="/projects/griffin-apartments">Griffin Heights booking concept</Link>.</p></section>
      <section><h2>Already using React or Next.js?</h2><p>Send us the screen you need help with. We can discuss React development for an existing interface or a new Next.js application.</p></section>
      <section><h2>Related work</h2>
        <ul>
          <li><Link href="/projects/rehloo">Rehloo, Find A Hostel case study</Link></li>
          <li><Link href="/projects/quiz-app">Quiz App case study</Link></li>
          <li><Link href="/projects/ramadan-time">Ramadan Time case study</Link></li>
          <li><Link href="/projects/griffin-apartments">Griffin Heights Apartments case study</Link></li>
        </ul>
      </section>
      <Link href="/contact">Discuss your application</Link>
    </ArticlePage>
  );
}
