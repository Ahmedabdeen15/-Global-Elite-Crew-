import { getDictionary } from "@/i18n";
import { localizedPath, type Locale } from "@/i18n/config";
import type { ServiceSection } from "@/i18n/service-types";
import { absoluteUrl, site } from "./site";

/**
 * JSON-LD structured data helpers.
 * Rendered through <JsonLd/> with `<` escaped to prevent XSS via injected markup.
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const ORGANIZATION_ID = absoluteUrl("/#organization");

/** ProfessionalService graph: NAP, geo, founder, social links, offer catalogue. */
export function professionalServiceSchema(locale: Locale) {
  const dict = getDictionary(locale);
  const knowAbout = [...dict.home.offer.items];

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: site.name,
    alternateName: dict.common.footer.brandLine2,
    legalName: site.legalName,
    url: absoluteUrl("/"),
    logo: absoluteUrl(site.logo),
    image: absoluteUrl(site.logo),
    email: site.email,
    telephone: site.phones.map((p) => p.replace("Tel: ", "")),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: { "@type": "Country", name: site.address.country },
    founder: {
      "@type": "Person",
      name: site.founder,
      jobTitle: "Owner & TQM Consultant",
    },
    sameAs: Object.values(site.social).filter(Boolean),
    knowsAbout: knowAbout,
    slogan: dict.home.hero.tagline,
    description: dict.common.seo.pages.home.description,
  };
}

/** Per-service Service schema with provider back-reference. */
export function serviceSchema(service: ServiceSection, locale: Locale) {
  const basePath = locale === "ar" ? "/ar/services" : "/en/services";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(basePath)}#${service.id}`,
    name: service.name,
    description: service.intro,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: site.address.country },
    audience: { "@type": "BusinessAudience", audienceType: "Manufacturers & Exporters" },
    inLanguage: locale === "ar" ? "ar-EG" : "en",
  };
}

export interface BreadcrumbEntry {
  name: string;
  /** Locale-free path ("/about") or "/" for home. */
  path: string;
}

/** BreadcrumbList for localized navigation context. */
export function breadcrumbSchema(
  locale: Locale,
  entries: readonly BreadcrumbEntry[],
) {
  const items = [
    { name: "Home", path: "/" },
    ...entries,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: absoluteUrl(localizedPath(locale, entry.path)),
    })),
  };
}
