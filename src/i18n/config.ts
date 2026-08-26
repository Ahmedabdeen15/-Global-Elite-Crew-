export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

/** Site paths are defined locale-free (`/about`, `/services`, ...). */
export const sitePaths = {
  home: "/",
  about: "/about",
  services: "/services",
  contactUs: "/contact-us",
} as const;

/**
 * Build a fully localized href, e.g.
 * localizedPath("ar", sitePaths.services) === "/ar/services"
 */
export function localizedPath(locale: Locale, path: string = sitePaths.home): string {
  const trimmed = path.replace(/^\/+$/, ""); // keep "/" as-is -> empty suffix
  return `/${locale}${trimmed === "" ? "" : path}`;
}

/** The complementary locale of a two-locale site. */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ar" : "en";
}

/** Sibling page URL used by the locale switcher and hreflang alternates. */
export function switchLocale(
  current: Locale,
  next: Locale,
  path: string = sitePaths.home,
): string {
  return localizedPath(next, path);
}
