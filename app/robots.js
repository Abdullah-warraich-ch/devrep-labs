export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "PerplexityBot", "anthropic-ai", "Claude-Web", "ClaudeBot", "OAI-SearchBot", "omgili", "omgilibot"],
        allow: "/",
      },
    ],
    sitemap: "https://www.devrep.site/sitemap.xml",
  };
}