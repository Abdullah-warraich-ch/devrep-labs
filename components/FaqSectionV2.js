import FaqAccordion from "./FaqAccordion";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const faqs = [
  {
    question: "What’s included in a website project?",
    answer: "We design and build your site for phones, tablets and desktops. We also optimize loading speed, set up your domain and hosting, and guide you through launch.",
  },
  {
    question: "How long does a website take?",
    answer: "Most sites take two to four weeks. The timeline depends on the number of pages and the features you need.",
  },
  {
    question: "Can I add bookings or payments?",
    answer: "Yes. We can build booking systems, integrate Stripe or PayPal, and connect your site to a customer portal or content management system.",
  },
  {
    question: "Can you help after launch?",
    answer: "Yes. We offer ongoing maintenance, security updates and support as your site grows.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function FaqSectionV2() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-14 bg-neutral-50 px-5 py-14 font-poppins-r text-foreground sm:px-10 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className="mb-7 font-poppins-m sm:mb-10 text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.055em]">
          FAQs<span className="text-primary">.</span>
        </h2>
        <div>
          <FaqAccordion faqs={faqs} />
          <Link href="/contact" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm underline decoration-foreground/30 underline-offset-4 hover:decoration-current">
            Ask another question <IconArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
