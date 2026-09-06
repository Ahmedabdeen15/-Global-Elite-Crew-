/** Homepage copy. */
export const home = {
  hero: {
    brandLine1: "Global Elite Crew",
    brandLine2: "for consultation",
    tagline: "THE POWER TO MAKE DIFFERENCE",
    ctaPrimary: "Explore Our Services",
    ctaSecondary: "Contact Us",
  },

  whoWeAre: {
    eyebrow: "Who We Are?",
    body: "Global Elite Crew is a quality service provider of expert TQM Consultant services which has been established 5 years ago.",
    imageAlt: "Global Elite Crew team presentation",
  },

  stats: [
    { target: 110, suffix: "+", label: "Certificates" },
    { target: 100, suffix: "+", label: "Clients" },
    { target: 99, suffix: "%", label: "Success Rate" },
  ],

  pillars: [
    {
      id: "mission",
      title: "Our Mission",
      image: "/images/mission.png",
      imageAlt: "Our mission",
      body: "Add value to your business to provide positive benefits, and a great return on your investment; Helping your organization achieving its goals, quality specifications; also, the existence of documentary system for each department in the organization that makes it easier to develop the ERP system - Enterprise Resource Planning – which will be a mandatory for all commercial organization due to linking with the tax authority electronically.",
    },
    {
      id: "values",
      title: "Our Values",
      image: "/images/values.png",
      imageAlt: "Our values",
      items: [
        "Customer focus",
        "Excellence",
        "Passion",
        "Integrity",
        "Teamwork",
        "Continual improvement",
        "Process approach",
        "Decision-making",
      ],
    },
    {
      id: "vision",
      title: "Our Vision",
      image: "/images/vision.png",
      imageAlt: "Our vision",
      body: "To be the Global’s most Trusted and loyal Partner for Quality Consultancy, leading the industry through innovation, excellence, and unparalleled service, while fostering long-term relationships with our clients and contributing positively to the communities we serve.",
    },
  ],

  offer: {
    title: "What we can offer",
    intro:
      "We can offer consultation for the following management system:",
    items: [
      "Quality Management ISO 9001",
      "Environmental Management ISO 14001",
      "Occupational Health and Safety Management ISO 45001",
      "Food Safety ISO 22000",
      "Risk Management ISO 31000",
      "Information Security Management ISO 27001",
      "Testing and Calibration Laboratories ISO/IEC 17025",
      "ISO 17020 - General requirements for the competence of testing and calibration laboratories",
      "Social Accountability SA8000",
      "Inditex",
      "Business Social Compliance Initiative BSCI",
      "SMETA Audit (SEDEX Members Ethical Trade Audit)",
      "GLOBAL ORGANIC TEXTILE STANDARD (GOTS) Ecology & Social Responsibility",
      "OEKO TEX 100 - OEKO TEX STEP",
    ],
    imageAlt: "Overview of the management systems we support",
  },

  certificates: {
    title: "Certificates",
    intro: "We Can Help Your Company to Obtain the Following Certificates",
    badgeImage: "/images/iso9001.png",
    badgeImageAlt: "ISO 9001 certificate emblem",
    items: [
      "BSCI Preparation",
      "SEDEX Preparation",
      "GOTS Preparation",
      "WRAP Preparation",
      "ISO 17020",
      "ISO 27001",
      "ISO 31000",
      "ISO 9001 : 2015",
      "ISO 14001 : 2015",
      "ISO 22000 : 2018",
      "ISO 45001 : 2018",
    ],
  },

  clients: {
    title: "We worked with",
    seeAllAria: "client website opens in a new tab",
  },
} as const;
