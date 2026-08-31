import type { ServiceSection } from "../../service-types";

/** ISO 45001 Occupational Health and Safety Management System block. */

export const iso45001: readonly ServiceSection[] = [
  {
    id: "iso-45001",
    name: "ISO 45001 Preparation",
    heading: "ISO 45001 Preparation Service",
    subheading:
      "Achieve ISO 45001 Certification with Our Expert Occupational Health and Safety Preparation Services",
    intro:
      "ISO 45001:2018 is an internationally recognized standard that specifies requirements for an Occupational Health and Safety (OH&S) Management System. It provides a systematic framework for organizations to prevent work-related injury and ill health, eliminate hazards where possible, reduce OH&S risks, meet applicable legal and other requirements, and continually improve OH&S performance. The standard emphasizes leadership commitment, worker participation, hazard identification and risk assessment, operational controls, emergency preparedness and response, incident investigation, performance evaluation, and continual improvement. ISO 45001 is applicable to organizations of all sizes, types, and sectors.",

    image: "/images/ISO-45001.webp",

    imageAlt: "ISO 45001 occupational health and safety management standard",

    bulletsHeading: "Our Comprehensive Service Includes:",

    bulletsType: "ul",

    bullets: [
      {
        kind: "item",
        title: "OH&S Gap Analysis:",
        text: "We conduct a comprehensive assessment of your existing occupational health and safety practices, policies, procedures, and processes to identify gaps against ISO 45001:2018 requirements and establish a practical roadmap for implementation.",
      },

      {
        kind: "item",
        title: "OH&S Management System Documentation:",
        text: "Assistance in developing and organizing the documented information required to support your OH&S Management System, including OH&S policies, objectives, procedures, risk assessment records, operational controls, emergency arrangements, and other applicable documented information.",
      },

      {
        kind: "item",
        title: "Hazard Identification and OH&S Risk Assessment:",
        text: "Expert guidance in systematically identifying workplace hazards, assessing OH&S risks and opportunities, determining appropriate controls, and establishing processes for reviewing risks when activities, conditions, or other relevant factors change.",
      },

      {
        kind: "item",
        title: "Legal and Other Requirements:",
        text: "Support in identifying applicable occupational health and safety legal and other requirements, establishing processes for keeping them up to date, and evaluating compliance as part of the OH&S Management System.",
      },

      {
        kind: "item",
        title: "Operational Controls and Emergency Preparedness:",
        text: "Support in establishing and implementing appropriate operational controls to eliminate hazards and reduce OH&S risks, together with emergency preparedness and response processes for relevant potential emergency situations.",
      },

      {
        kind: "item",
        title: "Worker Training, Consultation and Participation:",
        text: "Training and awareness programs covering OH&S responsibilities, workplace hazards, safe working practices, emergency procedures, and the requirements of the management system, while supporting effective worker consultation and participation in OH&S activities.",
      },

      {
        kind: "item",
        title: "Incident Investigation and Corrective Action:",
        text: "Support in establishing processes for reporting, investigating, and analyzing incidents and nonconformities, determining appropriate corrective actions, and addressing root causes to prevent recurrence.",
      },

      {
        kind: "item",
        title: "Internal OH&S Audits and Management Review:",
        text: "Pre-certification internal audits to evaluate the conformity and effectiveness of the OH&S Management System, identify nonconformities and improvement opportunities, followed by support for management review and evaluation of OH&S performance.",
      },

      {
        kind: "item",
        title: "Certification Audit Preparation and Ongoing Support:",
        text: "We help prepare your organization for the external ISO 45001 certification audit by an accredited certification body and provide ongoing support for maintaining the management system, addressing findings, preparing for surveillance audits, and supporting continual improvement.",
      },
    ],
  },
] satisfies readonly ServiceSection[];