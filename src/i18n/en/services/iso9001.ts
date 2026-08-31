import type { ServiceSection } from "../../service-types";

/** ISO 9001 Quality Management System block. */

export const iso9001: readonly ServiceSection[] = [
  {
    id: "iso-9001",
    name: "ISO 9001 Preparation",
    heading: "ISO 9001 Preparation Service",
    subheading:
      "Achieve ISO 9001 Certification with Our Expert Preparation Services",
    intro:
      "ISO 9001 is an internationally recognized standard that specifies requirements for establishing, implementing, maintaining, and continually improving a Quality Management System (QMS). It helps organizations consistently deliver products and services that meet customer and applicable statutory and regulatory requirements while enhancing customer satisfaction. The standard is based on key quality management principles, including customer focus, leadership, engagement of people, process approach, improvement, evidence-based decision making, and relationship management.",

    image: "/images/ISO_9001-2015.webp",

    imageAlt: "ISO 9001 quality management standard",

    bulletsHeading: "Our Comprehensive Service Includes:",

    bulletsType: "ul",

    bullets: [
      {
        kind: "item",
        title: "QMS Gap Analysis:",
        text: "We conduct a comprehensive assessment of your current quality management practices, policies, procedures, and processes to identify gaps and areas requiring alignment with ISO 9001 requirements.",
      },

      {
        kind: "item",
        title: "QMS Documentation Development:",
        text: "Assistance in developing and organizing the necessary Quality Management System documentation, including quality policies, procedures, process documentation, work instructions, objectives, and required records.",
      },

      {
        kind: "item",
        title: "Quality Risk and Opportunity Assessment:",
        text: "Expert guidance in identifying and evaluating risks and opportunities that may affect the conformity of products and services, customer satisfaction, and the effectiveness of your Quality Management System.",
      },

      {
        kind: "item",
        title: "Process Management and Implementation:",
        text: "Support in establishing and implementing effective quality management processes, including operational planning, customer requirements, supplier management, production and service controls, monitoring, and measurement.",
      },

      {
        kind: "item",
        title: "Employee Training and Awareness:",
        text: "Comprehensive training programs covering ISO 9001 requirements, quality policies and objectives, documented procedures, employee responsibilities, process awareness, and continual improvement practices.",
      },

      {
        kind: "item",
        title: "Internal QMS Audits:",
        text: "Pre-certification internal audits to evaluate the effectiveness of your Quality Management System, verify compliance with ISO 9001 requirements, identify non-conformities, and ensure your organization is fully prepared for the certification audit.",
      },

      {
        kind: "item",
        title: "Management Review Support:",
        text: "Assistance in conducting management reviews of the QMS, including evaluating quality performance, customer satisfaction, audit results, process performance, risks and opportunities, and improvement initiatives.",
      },

      {
        kind: "item",
        title: "Certification Audit Coordination:",
        text: "We help you prepare for and coordinate the external ISO 9001 certification audit with an accredited certification body, supporting your organization throughout the certification process.",
      },

      {
        kind: "item",
        title: "Ongoing QMS Maintenance:",
        text: "Continuous support to maintain ISO 9001 certification, including periodic system reviews, internal audits, corrective action support, performance monitoring, continual improvement, and preparation for surveillance and recertification audits.",
      },
    ],
  },
] satisfies readonly ServiceSection[];