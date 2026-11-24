import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Web Design and Web App Projects",
  description:
    "Explore websites, ecommerce stores, booking platforms and web applications built by DevRep Labs. See the problems solved, the approach, and the finished work.",

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Web Design and Web App Projects | DevRep Labs",
    description:
      "Explore websites, ecommerce stores, booking platforms and web applications built by DevRep Labs. See the problems solved, the approach, and the finished work.",
    url: "https://www.devrep.site/projects",
    siteName: "DevRep Labs",
    images: [
      {
        url: "/share-card.png",
        width: 1200,
        height: 630,
        alt: "DevRep Labs Web Design and Web App Projects",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Design and Web App Projects | DevRep Labs",
    description:
      "Explore websites, ecommerce stores, booking platforms and web applications built by DevRep Labs. See the problems solved, the approach, and the finished work.",
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
