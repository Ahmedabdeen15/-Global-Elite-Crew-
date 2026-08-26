import type { ServiceSection } from "../../service-types";

/** ISO 27020:2019 · ISO/IEC 27001 · ISO/IEC 17020 blocks (verbatim legacy copy). */
export const part1: readonly ServiceSection[] = [
  {
    id: "iso-27020",
    name: "ISO 27020:2019 Preparation",
    heading: "ISO 27020:2019 Preparation Service",
    subheading:
      "Achieve ISO 27020:2019 Compliance with Our Expert Preparation Services",
    intro:
      "ISO 27020:2019 is an international standard titled \"Dentistry — Brackets and tubes for use in orthodontics.\" This standard specifies requirements and test methods for evaluating the functional dimensions of orthodontic brackets and tubes, their chemical ion release, as well as packaging and labeling information. It applies to brackets and tubes used in fixed orthodontic appliances and ensures quality, safety, and performance standards are met in the dental industry.",
    image: "/images/iso-27020.jpg",
    imageAlt: "ISO 27020 standard document",
    bulletsHeading: "Our Comprehensive Service Includes:",
    bulletsType: "ul",
    bullets: [
      {
        kind: "item",
        title: "Gap Analysis:",
        text: "We conduct a thorough assessment of your current manufacturing processes, quality control systems, and product specifications to identify areas that require alignment with ISO 27020:2019 requirements for orthodontic brackets and tubes.",
      },
      {
        kind: "item",
        title: "Technical Documentation Support:",
        text: "Assistance in preparing and organizing all necessary technical documentation, including specifications for functional dimensions, angles, chemical composition, ion release testing protocols, packaging requirements, and labeling information as specified in ISO 27020:2019.",
      },
      {
        kind: "item",
        title: "Test Method Implementation:",
        text: "Expert guidance in implementing the required test methods for evaluating functional dimensions, chemical ion release, and compliance with hazardous element requirements as outlined in the standard.",
      },
      {
        kind: "item",
        title: "Quality Control System Development:",
        text: "Development and implementation of quality control systems to ensure consistent compliance with dimensional requirements, chemical ion release limits, and packaging standards specified in ISO 27020:2019.",
      },
      {
        kind: "item",
        title: "Employee Training:",
        text: "Comprehensive training programs for your technical staff, quality assurance team, and manufacturing personnel to ensure they understand and can effectively implement ISO 27020:2019 requirements in their daily operations.",
      },
      {
        kind: "item",
        title: "Internal Audits:",
        text: "Pre-certification assessments and internal audits to ensure your manufacturing facility, testing laboratories, and quality systems are fully prepared for official ISO 27020:2019 compliance verification.",
      },
      {
        kind: "item",
        title: "Compliance Coordination:",
        text: "We help you coordinate with certification bodies and testing laboratories to ensure proper verification of compliance with ISO 27020:2019 requirements, including functional dimension testing and chemical ion release analysis.",
      },
      {
        kind: "item",
        title: "Ongoing Compliance Support:",
        text: "Continuous support to maintain ISO 27020:2019 compliance after certification and to prepare your organization for surveillance activities performed by certification bodies.",
      },
    ],
  },
] satisfies readonly ServiceSection[];
