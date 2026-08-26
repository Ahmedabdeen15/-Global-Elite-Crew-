import type { ServiceSection } from "../../service-types";

/** GOTS - Global Organic Textile Standard block (verbatim legacy copy). */
export const gots: readonly ServiceSection[] = [
  {
    id: "gots",
    name: "GOTS Preparation Services",
    heading: "GOTS Preparation Services",
    subheading:
      "Prepare for Success with Global Organic Textile Standard (GOTS) Certification",
    intro:
      "At Global Elite Crew, we specialize in helping businesses achieve Global Organic Textile Standard (GOTS) certification. GOTS is the world’s leading standard for organic fibers, encompassing both ecological and social criteria. Our comprehensive service ensures your textile products meet the highest organic and sustainable standards, enhancing your brand’s credibility and marketability.",
    image: "/images/gots.png",
    imageAlt: "Global Organic Textile Standard logo",
    bulletsHeading: "Our Services Include:",
    bulletsType: "ol",
    bullets: [
      {
        kind: "group",
        title: "Preliminary Assessment:",
        items: [
          "Gap Analysis: We conduct a thorough internal audit to identify areas needing improvement.",
          "Supply Chain Review: We ensure all raw materials are sourced from GOTS-certified suppliers.",
        ],
      },
      {
        kind: "group",
        title: "Documentation and Record Keeping:",
        items: [
          "Comprehensive Record Management: We assist in maintaining detailed records of all materials, chemicals, and processes.",
          "Policy Development: We help develop and document policies to comply with GOTS standards.",
        ],
      },
      {
        kind: "group",
        title: "Training and Implementation:",
        items: [
          "Staff Training: We provide education and training sessions to ensure your team understands and complies with GOTS requirements.",
          "Procedure Integration: We help integrate GOTS-compliant practices into your daily operations.",
        ],
      },
      {
        kind: "group",
        title: "Environmental Management:",
        items: [
          "Chemical and Waste Management: We implement effective systems for chemical management and waste reduction.",
        ],
      },
      {
        kind: "group",
        title: "Certification Process Assistance:",
        items: [
          "Application Support: We guide you through the application process with an approved GOTS certification body.",
          "On-Site Audit Preparation: We prepare your facility for the certification body's on-site inspection and audit.",
        ],
      },
      {
        kind: "group",
        title: "Continuous Support:",
        items: [
          "Ongoing Compliance: We offer continuous support to maintain compliance and prepare for annual re-certification audits.",
          "Regular Updates: We keep you informed about any changes or updates in GOTS standards.",
        ],
      },
    ],
  },
] satisfies readonly ServiceSection[];
