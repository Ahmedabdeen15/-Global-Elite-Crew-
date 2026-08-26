import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Search-engine robots policy.
 *
 * Everything on this marketing site is meant to be crawled and quoted by both
 * classic search engines AND AI answer engines, so no allow-list dance is
 * needed: the wildcard rule permits it all while explicit entries document
 * our welcome for the major AI crawlers (and survive future rule additions).
 */
const AI_CRAWLERS = [
  "GPTBot", // OpenAI training/citation crawler
  "OAI-SearchBot", // ChatGPT search index
  "ChatGPT-User", // user-triggered fetches
  "Google-Extended", // Gemini grounding
  "ClaudeBot", // Anthropic
  "PerplexityBot", // Perplexity answers
  "Perplexity-User",
  "CCBot", // Common Crawl corpus
  "Amazonbot",
  "Applebot-Extended",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Explicit welcome mat for AI answer engines.
        userAgent: [...AI_CRAWLERS],
        allow: "/",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
