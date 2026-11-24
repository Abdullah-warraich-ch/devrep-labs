import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Custom Web Development Services",
  description:
    "Explore DevRep Labs' services in custom web software, modern business websites, smart AI automation tools, online stores, and product design.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Custom Web Development Services | DevRep Labs",
    description:
      "Explore DevRep Labs' services in custom web software, modern business websites, smart AI automation tools, online stores, and product design.",
    url: "https://www.devrep.site/services",
    siteName: "DevRep Labs",
    images: [
      {
        url: "/share-card.png",
        width: 1200,
        height: 630,
        alt: "DevRep Labs Digital Services & Web Solutions",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development Services | DevRep Labs",
    description:
      "Explore DevRep Labs' services in custom web software, modern business websites, smart AI automation tools, online stores, and product design.",
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
      name: "Services",
      item: "https://www.devrep.site/services",
    },
  ],
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Web application development",
      description: "Give your staff and customers a shared place to manage requests and bookings.",
      provider: {
        "@type": "Organization",
        name: "DevRep Labs",
        url: "https://www.devrep.site",
      },
    },
    {
      "@type": "Service",
      position: 2,
      name: "Custom website development",
      description: "Explain your services, show your work and give visitors a clear way to enquire.",
      provider: {
        "@type": "Organization",
        name: "DevRep Labs",
        url: "https://www.devrep.site",
      },
    },
    {
      "@type": "Service",
      position: 3,
      name: "AI workflow automation",
      description: "Sort incoming enquiries and prepare replies for someone on your team to review.",
      provider: {
        "@type": "Organization",
        name: "DevRep Labs",
        url: "https://www.devrep.site",
      },
    },
    {
      "@type": "Service",
      position: 4,
      name: "Ecommerce website development",
      description: "Help shoppers choose a product, check delivery costs and pay.",
      provider: {
        "@type": "Organization",
        name: "DevRep Labs",
        url: "https://www.devrep.site",
      },
    },
    {
      "@type": "Service",
      position: 5,
      name: "UI/UX design services",
      description: "Try your main screens on a phone before development starts.",
      provider: {
        "@type": "Organization",
        name: "DevRep Labs",
        url: "https://www.devrep.site",
      },
    },
    {
      "@type": "Service",
      position: 6,
      name: "Speed, Security & Care",
      description: "We check page performance, review site security and plan ongoing maintenance with your team.",
      provider: {
        "@type": "Organization",
        name: "DevRep Labs",
        url: "https://www.devrep.site",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesClient />
    </>
  );
}
