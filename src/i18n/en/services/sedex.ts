import type { ServiceSection } from "../../service-types";

/**
 * SEDEX/SMETA preparation block.
 * Note: the legacy page accidentally duplicated the "Engaging learning
 * methods" bullet twice; the duplicate is dropped here on purpose.
 */
export const sedex: readonly ServiceSection[] = [
  {
    id: "sedex-smeta",
    name: "SEDEX Exam Preparation",
    heading: "SEDEX Exam Preparation Service",
    subheading:
      "Conquer the SEDEX Exam with Our Expert Preparation Services",
    intro:
      "Are you gearing up for the SEDEX exam and seeking a comprehensive, structured preparation approach? Our SEDEX Exam Preparation Service is designed to equip you with the knowledge, skills, and confidence needed to excel.",
    image: "/images/sedex.png",
    imageAlt: "Sedex membership logo",
    bulletsHeading: "Our Services Include:",
    bulletsType: "ol",
    bullets: [
      {
        kind: "group",
        title: "Tailored Study Plans:",
        items: [
          "Personalized study schedules crafted to fit your individual pace and learning style.",
          "Daily and weekly goals to ensure consistent progress and effective time management.",
        ],
      },
      {
        kind: "group",
        title: "Comprehensive Study Materials:",
        items: [
          "Access to recommended textbooks, reference materials, and exclusive online resources.",
          "Practice with past exam papers to familiarize yourself with question patterns and improve your answering strategies.",
        ],
      },
      {
        kind: "group",
        title: "Effective Study Techniques:",
        items: [
          "Engaging learning methods, including active learning, mind mapping, and concise note-taking for efficient revisions.",
        ],
      },
      {
        kind: "group",
        title: "Health and Well-being Support:",
        items: [
          "Guidance on maintaining a balanced lifestyle with proper rest, nutrition, and exercise.",
          "Stress management tips to keep you calm and focused throughout your preparation journey.",
        ],
      },
      {
        kind: "group",
        title: "Exam Day Readiness:",
        items: [
          "Final revision strategies to ensure you’re fully prepared.",
          "A checklist of necessary materials to avoid last-minute stress.",
        ],
      },
    ],
  },
] satisfies readonly ServiceSection[];
