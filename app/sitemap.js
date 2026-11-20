export default function sitemap() {
  const baseUrl = "https://www.devrep.site";
  const paths = [
    "/", "/services", "/services/custom-web-development", "/projects",
    "/projects/griffin-apartments", "/contact", "/book-a-demo", "/privacy", "/terms",
  ];
  return paths.map((path) => ({ url: new URL(path, baseUrl).href }));
}
