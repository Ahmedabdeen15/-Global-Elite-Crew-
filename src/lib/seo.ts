import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import {
  defaultLocale,
  localizedPath,
  locales,
  type Locale,
} from "@/i18n/config";
import type { SeoPageMeta } from "@/i18n/types";
import { absoluteUrl } from "./site";

export type PageKey = "home" | "about" | "services" | "contactUs";

/**
 * hreflang language map for a locale-free site path.
 * Emits every locale plus x-default pointing at the default locale.
 */
export function buildAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = absoluteUrl(localizedPath(locale, path));
  }
  languages["x-default"] = absoluteUrl(
    localizedPath(defaultLocale, path),
  );
  return languages;
}

function ogLocaleTag(locale: Locale): string {
  return locale === "ar" ? "ar_EG" : "en_US";
}

/**
 * Compose full Next.js Metadata (canonical, hreflang, Open Graph, Twitter,
 * crawler hints) from a dictionary entry. Used by every localized page.
 */
export function buildMetadata(
  locale: Locale,
  page: PageKey,
  path: string,
): Metadata {
  const dict = getDictionary(locale);
  const meta: SeoPageMeta = dict.common.seo.pages[page];
  const canonical = absoluteUrl(localizedPath(locale, path));

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: buildAlternates(path),
    },
    openGraph: {
      type: "website",
      siteName: dict.common.seo.siteName,
      locale: ogLocaleTag(locale),
      url: canonical,
      title: meta.title,
      description: meta.description,
      images: [
        {
          // Dynamic generated card via src/app/[locale]/opengraph-image.tsx
          url: absoluteUrl(`${localizedPath(locale)}/opengraph-image`),
          width: 1200,
          height: 630,
          alt: dict.common.seo.openGraphAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@GlobalEliteCrew",
      title: meta.title,
      description: meta.description,
      images: [absoluteUrl(`${localizedPath(locale)}/opengraph-image`)],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: { telephone: true, address: true, email: true },
  };
}
