import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Web Development Portfolio",
  description:
    "Explore websites, web applications, e-commerce platforms, and digital products built by DevRep Labs.",

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Web Development Portfolio | DevRep Labs",
    description:
      "Explore websites, web applications, e-commerce platforms, and digital products built by DevRep Labs.",
    url: "https://www.devrep.site/projects",
    siteName: "DevRep Labs",
    images: [
      {
        url: "/share-card.png",
        width: 1200,
        height: 630,
        alt: "DevRep Labs Web Development Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development Portfolio | DevRep Labs",
    description:
      "Explore websites, web applications, e-commerce platforms, and digital products built by DevRep Labs.",
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
      name: "Projects",
      item: "https://www.devrep.site/projects",
    },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <ProjectsClient />
    </>
  );
}
