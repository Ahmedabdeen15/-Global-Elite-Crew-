/** Single source of truth for company identity + domain facts. */
export const site = {
  name: "Global Elite Crew",
  legalName: "Global Elite Crew For Consultation",
  domain: "globalelitecrew.com",
  /** Canonical origin - apex domain standardized across all SEO surfaces. */
  url: "https://globalelitecrew.com",

  logo: "/images/logo.png",
  email: "ghada_esmat@globalelitecrew.com",
  phones: ["+2 03 4253255", "+2 01143711439"],

  address: {
    street: "49 Street 5 Somuha",
    city: "Alexandria",
    country: "Egypt",
    countryCode: "EG",
  },

  geo: {
    latitude: 31.211273,
    longitude: 29.945373,
  },

  founder: "Ghada Esmat Abd Elmagid",

  social: {
    facebook:
      "https://www.facebook.com/p/Global-Elite-Crew-For-Consultation-100069225498403/",
    linkedin: "https://www.linkedin.com/company/global-elite-crew/",
    x: null,
  },

  /** Optional Google Analytics id injected via <Script> when provided. */
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? null,

  contactPage: "/contact-us",
} as const;

export function absoluteUrl(path: string = "/"): string {
  return new URL(path, site.url).toString();
}
