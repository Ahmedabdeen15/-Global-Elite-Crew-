import {
  localizedPath,
  locales,
  type Locale,
} from "@/i18n/config";

import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { buildAlternates } from "@/lib/seo";

type PageKey = "home" | "about" | "services" | "contactUs";

const STATIC_ROUTES: readonly {
  key: PageKey;
  path: string;
  priority: number;
}[] = [
  { key: "home", path: "/", priority: 1.0 },
  { key: "services", path: "/services", priority: 0.9 },
  { key: "about", path: "/about", priority: 0.8 },
  { key: "contactUs", path: "/contact-us", priority: 0.8 },
];

/**
 * Auto-generated sitemap: every static route x every locale, each entry
 * carrying hreflang alternates so search engines consolidate signals between
 * /en/* and /ar/* documents. Replaces the legacy hand-maintained sitemap.xml
 * whose lastmod dates were malformed ("T004:05").
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of STATIC_ROUTES) {
    for (const locale of locales as readonly Locale[]) {
      entries.push({
        url: absoluteUrl(localizedPath(locale, route.path)),
        lastModified,
        changeFrequency: route.key === "home" ? "weekly" : "monthly",
        priority: route.priority,
        alternates: { languages: buildAlternates(route.path) },
      });
    }
  }

  return entries;
}