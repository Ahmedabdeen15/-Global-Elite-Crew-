import type { ServiceSection } from "../../service-types";

/** WRAP (Worldwide Responsible Accredited Production) block (verbatim legacy copy). */
export const wrap: readonly ServiceSection[] = [
  {
    id: "wrap",
    name: "WRAP Certification Preparation",
    heading: "WRAP Certification Preparation Service",
    subheading:
      "Achieve Ethical Excellence with Our WRAP Certification Preparation",
    intro:
      "We specialize in guiding businesses through the process of obtaining WRAP (Worldwide Responsible Accredited Production) certification. As a globally recognized standard for ethical manufacturing, WRAP certification demonstrates your commitment to responsible production practices.",
    image: "/images/wrap.svg",
    imageAlt: "WRAP certification emblem",
    bulletsHeading: "Our Comprehensive Service Includes:",
    bulletsType: "ul",
    bullets: [
      {
        kind: "item",
        title: "Gap Analysis:",
        text: "We conduct a thorough assessment of your current operations to identify areas that require alignment with WRAP's 12 Principles.",
      },
      {
        kind: "item",
        title: "Documentation Support:",
        text: "Assistance in preparing and organizing all necessary documents, including policies on labor, health and safety, environmental practices, and legal compliance.",
      },
      {
        kind: "item",
        title: "Employee Training:",
        text: "Tailored training programs to ensure that your workforce understands and adheres to WRAP standards.",
      },
      {
        kind: "item",
        title: "Implementation Assistance:",
        text: "Expert guidance in making the necessary changes to meet WRAP requirements, from improving working conditions to enhancing environmental practices.",
      },
      {
        kind: "item",
        title: "Internal Audits:",
        text: "Pre-audit assessments to ensure your facility is fully prepared for the official WRAP audit.",
      },
      {
        kind: "item",
        title: "Audit Coordination:",
        text: "We help you select a certified WRAP auditor and coordinate the external audit process, ensuring a smooth path to certification.",
      },
      {
        kind: "item",
        title: "Ongoing Compliance:",
        text: "Continuous support to maintain WRAP certification and promote long-term ethical practices within your organization.",
      },
    ],
  },
] satisfies readonly ServiceSection[];
