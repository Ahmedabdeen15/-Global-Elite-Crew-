import type { ServiceSection } from "../../service-types";

/** BSCI exam-prep block incl. the legacy "Why Choose Us?" secondary block. */
export const bsci: readonly ServiceSection[] = [
  {
    id: "bsci",
    name: "BSCI Exam Preparation",
    heading: "BSCI Exam Preparation Services",
    subheading:
      "Master the BSCI Exam with Our Expert Preparation Services",
    intro:
      "Preparing for the Business Solutions Consultant Institute (BSCI) exam can be daunting, but with our specialized services, you can confidently tackle the challenge and achieve certification success.",
    image: "/images/bsci.png",
    imageAlt: "BSCI certification illustration",
    bulletsHeading: "Our Services Include:",
    bulletsType: "ul",
    bullets: [
      {
        kind: "item",
        title: "Personalized Study Plans:",
        text: "Tailored to fit your schedule and focus on your unique needs.",
      },
      {
        kind: "item",
        title: "Comprehensive Study Materials:",
        text: "Access official guides, textbooks, and exclusive online courses covering all key topics.",
      },
      {
        kind: "item",
        title: "Practice Tests and Mock Exams:",
        text: "Simulate the real exam environment to identify areas for improvement.",
      },
      {
        kind: "item",
        title: "Expert-Led Training:",
        text: "Interactive sessions with industry experts on essential subjects.",
      },
      {
        kind: "item",
        title: "Community Support:",
        text: "Join study groups and forums for peer interaction and support.",
      },
    ],
    secondary: {
      heading: "Why Choose Us?",
      image: "/images/why-choose-us.webp",
      imageAlt: "Team receiving quality consulting guidance",
      bullets: [
        {
          kind: "item",
          title: "Expert Guidance:",
          text: "Learn from seasoned professionals.",
        },
        {
          kind: "item",
          title: "Tailored Approach:",
          text: "Study plans designed for your success.",
        },
        {
          kind: "item",
          title: "Comprehensive Resources:",
          text: "High-quality materials and practice tests.",
        },
        {
          kind: "item",
          title: "Supportive Community:",
          text: "Engage with a vibrant learning community.",
        },
      ],
    },
  },
] satisfies readonly ServiceSection[];
