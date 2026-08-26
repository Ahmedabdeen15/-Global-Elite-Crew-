import { sitePaths } from "../config";

/** Global chrome copy: SEO metadata, navigation, footer. */
export const common = {
  seo: {
    siteName: "Global Elite Crew",
    localeTag: "en",
    pages: {
      home: {
        title: "TQM Consulting & ISO Certification Preparation in Egypt",
        description:
          "Global Elite Crew is an expert Total Quality Management consultancy based in Alexandria, Egypt. Over 16 years of experience preparing companies for BSCI, SEDEX, GOTS, WRAP and Inditex audits and ISO 9001, 14001, 22000, 27001, 31000 and 45001 certifications.",
      },
      about: {
        title: "About Us - Quality Management Consulting Company",
        description:
          "Learn about Global Elite Crew: a TQM consultancy led by Ghada Esmat Abd Elmagid with over 16 years of experience helping organizations build quality management systems and achieve certification.",
      },
      services: {
        title: "Certification & Audit Preparation Services",
        description:
          "Expert preparation for ISO 27001, ISO 27020, ISO/IEC 17020, WRAP, BSCI, SEDEX, GOTS and Inditex audits - gap analysis, documentation, training, internal audits and certification-body coordination.",
      },
      contactUs: {
        title: "Contact Us",
        description:
          "Get in touch with Global Elite Crew in Alexandria, Egypt. Call +2 03 4253255, email ghada_esmat@globalelitecrew.com or send us a message through our contact form.",
      },
    },
    openGraphAlt: "Global Elite Crew for consultation",
  },

  nav: {
    ariaLabel: "Main navigation",
    links: [
      { label: "Home", href: sitePaths.home },
      { label: "About Us", href: sitePaths.about },
      { label: "Services", href: sitePaths.services },
      { label: "Contact Us", href: sitePaths.contactUs },
    ],
  },

  localeSwitcher: {
    ariaLabel: "Switch language",
    targetLabel: "العربية",
    targetLocale: "ar" as const,
  },

  skipToContent: "Skip to main content",

  footer: {
    brandLine1: "Global Elite Crew",
    brandLine2: "For consultation",
    contactHeading: "Contact Us",
    relatedLinksHeading: "Related Links",
    email: "ghada_esmat@globalelitecrew.com",
    phones: ["Tel: +2 03 4253255", "Tel: +2 01143711439"],
    copyrightPrefix: "Copyright ©",
    rightsReserved: "All Rights Reserved",
    termsLabel: "Terms and Conditions",
    privacyLabel: "Privacy Policy",
    socialAriaLabel: "Social media",
    facebookAria: "Facebook",
    linkedinAria: "LinkedIn",
    xAria: "X (Twitter)",
  },
} as const;
