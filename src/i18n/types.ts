import type { ServiceSection } from "./service-types";

/**
 * Explicit bilingual copy contract.
 *
 * The English dictionary is authored first and remains the reference text,
 * but both locales are independently validated against this interface so a
 * missing section/key fails the build either way. Reuse of `ServiceSection`
 * keeps service blocks fully typed end-to-end.
 */

export interface SeoPageMeta {
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterCopy {
  brandLine1: string;
  brandLine2: string;
  contactHeading: string;
  relatedLinksHeading: string;
  email: string;
  phones: readonly string[];
  copyrightPrefix: string;
  rightsReserved: string;
  termsLabel: string;
  privacyLabel: string;
  socialAriaLabel: string;
  facebookAria: string;
  linkedinAria: string;
  whatsappAria: string;
  xAria: string;
}

export interface CommonDictionary {
  seo: {
    siteName: string;
    localeTag: string;
    pages: Record<"home" | "about" | "services" | "contactUs", SeoPageMeta>;
    openGraphAlt: string;
  };
  nav: { ariaLabel: string; links: readonly NavLink[] };
  localeSwitcher: { ariaLabel: string; targetLabel: string };
  skipToContent: string;
  footer: FooterCopy;
}

export interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

export interface PillarItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  /** Present for mission / vision cards. */
  body?: string;
  /** Present for the values card. */
  items?: readonly string[];
}

export interface ClientLogo {
  /** public URL, e.g. /images/logos/edge.png */
  image: string;
  name: string;
  /** Optional website link. */
  website?: string;
}

export interface HomeDictionary {
  hero: {
    brandLine1: string;
    brandLine2: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  whoWeAre: { eyebrow: string; body: string; imageAlt: string };
  stats: readonly StatItem[];
  pillars: readonly PillarItem[];
  offer: { title: string; intro: string; items: readonly string[]; imageAlt: string };
  certificates: {
    title: string;
    intro: string;
    badgeImage: string;
    badgeImageAlt: string;
    items: readonly string[];
  };
  clients: { title: string; seeAllAria: string };
}

export interface AboutDictionary {
  header: string;
  whoWeAre: { title: string; body: string; imageAlt: string };
  qms: {
    title: string;
    question: string;
    body1: string;
    isoParagraph: string;
    swotImageAlt: string;
    qmsImageAlt: string;
  };
  assessment: {
    intro: string;
    steps: readonly string[];
    riskImageAlt: string;
  };
  advantages: {
    title: string;
    items: readonly string[];
    imageAlt: string;
  };
  strategy: { title: string; body: string; imageAlt: string };
  culture: {
    title: string;
    principle: string;
    buildingTitle: string;
    buildingBody: string;
    characteristicsTitle: string;
    characteristics: readonly string[];
    imageAlt: string;
  };
}

export interface FormFieldCopy {
  label: string;
  placeholder: string;
}

export interface ContactDictionary {
  header: string;
  form: {
    firstName: FormFieldCopy;
    lastName: FormFieldCopy;
    email: FormFieldCopy;
    phone: FormFieldCopy;
    address: FormFieldCopy;
    message: FormFieldCopy;
    submit: string;
    spamDetected: string;
    success: string;
    failure: string;
  };
  infoPanel: {
    slogan1: string;
    slogan2: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    phones: readonly string[];
    emailLabel: string;
    emailValue: string;
    whatsappLabel: string;
    whatsappValue: string;
  };
  map: { iframeTitle: string; popupText: string };
}

export interface Dictionary {
  common: CommonDictionary;
  home: HomeDictionary;
  about: AboutDictionary;
  contact: ContactDictionary;
  services: readonly ServiceSection[];
}

