import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";

const path = "/services/web-application-development";
export const metadata = articleMetadata("Web Application Development", "Plan a booking platform, dashboard or internal tool around the people who use it. Explore workflows, permissions and handoffs with DevRep Labs.", path);

export default function ServicePage() {
  return (
    <ArticlePage path={path} title="Web applications that simplify daily work" parent={{ name: "Services", href: "/services" }} introduction="When a booking moves between spreadsheets and inboxes, nobody knows which record to trust. We build applications around the people who create, review and act on each record.">
      <section><h2>Map one complete workflow</h2><p>For a booking tool, start with the request, identify who can approve it and decide what happens when dates change. These decisions shape the screens, permissions and data model.</p></section>
      <section><h2>Test the handoffs</h2><p>We walk through the workflow with each role, including incomplete submissions and conflicting updates, before agreeing which integrations belong in the first release.</p></section>
      <section><h2>What should we bring to scoping?</h2><p>A sample form, anonymised spreadsheet or walkthrough of a recent request helps us identify the most expensive manual step.</p></section>
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
