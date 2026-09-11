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
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development Portfolio | DevRep Labs",
    description:
      "Explore websites, web applications, e-commerce platforms, and digital products built by DevRep Labs.",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
