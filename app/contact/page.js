import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DevRep Labs. Let's discuss your next web development, custom software, UI/UX design, or AI automation project. We respond within 24 hours.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact DevRep Labs | Web Development & AI Solutions",
    description:
      "Get in touch with DevRep Labs to start your web development, e-commerce, or AI automation project.",
    url: "https://www.devrep.site/contact",
    siteName: "DevRep Labs",
    images: [
      {
        url: "/share-card.png",
        width: 1200,
        height: 630,
        alt: "Contact DevRep Labs",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact DevRep Labs | Web Development & AI Solutions",
    description:
      "Get in touch with DevRep Labs to start your web development, e-commerce, or AI automation project.",
    images: ["/share-card.png"],
  },
};

const breadcrumbsSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.devrep.site",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact Us",
      item: "https://www.devrep.site/contact",
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact DevRep Labs",
  url: "https://www.devrep.site/contact",
  description:
    "Contact DevRep Labs for web development, UI/UX design, and AI digital solutions.",
  mainEntity: {
    "@type": "Organization",
    name: "DevRep Labs",
    url: "https://www.devrep.site",
    email: "contact@devrep.site",
    telephone: "+923391719123",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+923391719123",
      contactType: "customer service",
      email: "contact@devrep.site",
      availableLanguage: ["English", "Urdu"],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <ContactClient />
    </>
  );
}

