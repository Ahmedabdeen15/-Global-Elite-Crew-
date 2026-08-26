import type { ServiceSection } from "../../service-types";

/** ISO/IEC 27001 Information Security Management System block (verbatim legacy copy). */
export const iso27001: readonly ServiceSection[] = [
  {
    id: "iso-27001",
    name: "ISO 27001 Preparation",
    heading: "ISO 27001 Preparation Service",
    subheading:
      "Achieve ISO/IEC 27001 Certification with Our Expert Preparation Services",
    intro:
      "ISO/IEC 27001 is an international standard that specifies requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). It helps organizations manage the security of assets such as financial information, intellectual property, employee details, and information entrusted by third parties. The standard includes 93 security controls organized into four categories: organizational controls, people controls, physical controls, and technological controls, ensuring comprehensive protection against evolving cyber threats.",
    image: "/images/iso-27001.jpg",
    imageAlt: "ISO 27001 information security standard",
    bulletsHeading: "Our Comprehensive Service Includes:",
    bulletsType: "ul",
    bullets: [
      {
        kind: "item",
        title: "ISMS Gap Analysis:",
        text: "We conduct a comprehensive assessment of your current information security practices, policies, and procedures to identify gaps and areas requiring alignment with ISO/IEC 27001 requirements, including risk assessment processes and security control implementation.",
      },
      {
        kind: "item",
        title: "ISMS Documentation Development:",
        text: "Assistance in developing and organizing all necessary ISMS documentation, including information security policies, risk assessment reports, Statement of Applicability (SOA), risk treatment plans, procedures for security controls, and incident management protocols.",
      },
      {
        kind: "item",
        title: "Risk Assessment and Treatment:",
        text: "Expert guidance in conducting systematic information security risk assessments, identifying threats and vulnerabilities, evaluating impacts, and developing risk treatment plans aligned with Annex A controls and your organization's risk appetite.",
      },
      {
        kind: "item",
        title: "Security Controls Implementation:",
        text: "Implementation support for the 93 security controls across organizational (A.5), people (A.6), physical (A.7), and technological (A.8) categories, including access control, cryptography, network security, incident management, and business continuity planning.",
      },
      {
        kind: "item",
        title: "Employee Training and Awareness:",
        text: "Comprehensive training programs on information security awareness, ISMS requirements, security policies and procedures, incident response, and role-specific security responsibilities to ensure your workforce understands and adheres to ISO/IEC 27001 standards.",
      },
      {
        kind: "item",
        title: "Internal ISMS Audits:",
        text: "Pre-certification internal audits to assess ISMS effectiveness, verify control implementation, identify non-conformities, and ensure your organization is fully prepared for the official ISO/IEC 27001 certification audit.",
      },
      {
        kind: "item",
        title: "Management Review Support:",
        text: "Assistance in conducting management reviews of the ISMS, including performance evaluation, monitoring and measurement of security controls, and ensuring top management commitment to continual improvement.",
      },
      {
        kind: "item",
        title: "Certification Audit Coordination:",
        text: "We help you select an accredited certification body and coordinate the external ISO/IEC 27001 certification audit process, including Stage 1 (documentation review) and Stage 2 (on-site audit), ensuring a smooth path to certification.",
      },
      {
        kind: "item",
        title: "Ongoing ISMS Maintenance:",
        text: "Continuous support to maintain ISO/IEC 27001 certification, including regular security reviews, control effectiveness monitoring, incident response support, and assistance with surveillance audits and recertification.",
      },
    ],
  },
] satisfies readonly ServiceSection[];
