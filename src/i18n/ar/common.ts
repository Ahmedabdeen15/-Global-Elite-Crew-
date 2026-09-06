import { sitePaths } from "../config";

/** النسخة العربية من نصوص الواجهة العامة والميتا. */
export const common = {
  seo: {
    siteName: "Global Elite Crew",
    localeTag: "ar-EG",
    pages: {
      home: {
        title: "استشارات إدارة الجودة الشاملة وتجهيز شهادات الأيزو في مصر",
        description:
          "جلوبيال إيليت كرو للاستشارات: خبرة تتجاوز 16 عامًا في استشارات إدارة الجودة الشاملة من الإسكندرية بمصر، وتجهيز الشركات لتدقيقات BSCI وSEDEX وGOTS وWRAP وInditex، وشهادات ISO 9001 و14001 و22000 و27001 و31000 و45001.",
      },
      about: {
        title: "نبذة عنا - شركة استشارات إدارة الجودة",
        description:
          "تعرّف على جلوبيال إيليت كرو للاستشارات بقيادة غادة عصمت عبد المجيد، بخبرة تفوق 16 عامًا في مساعدة المؤسسات على بناء أنظمة إدارة الجودة والحصول على الشهادات الدولية.",
      },
      services: {
        title: "خدمات تجهيز الشهادات والتدقيقات",
        description:
          "خدمات متخصصة لتجهيز تدقيقات ISO 27001 وISO 27020 وISO/IEC 17020 وWRAP وBSCI وSEDEX وGOTS وInditex: تحليل الفجوات، التوثيق، التدريب، التدقيق الداخلي، والتنسيق مع جهات الاعتماد.",
      },
      contactUs: {
        title: "اتصل بنا",
        description:
          "تواصل مع جلوبيال إيليت كرو للاستشارات في الإسكندرية بمصر. اتصل على 4253255 03 02+ أو راسلنا عبر البريد ghada_esmat@globalelitecrew.com أو من خلال نموذج التواصل.",
      },
    },
    openGraphAlt: "جلوبيال إيليت كرو للاستشارات",
  },

  nav: {
    ariaLabel: "التنقل الرئيسي",
    links: [
      { label: "الرئيسية", href: sitePaths.home },
      { label: "نبذة عنا", href: sitePaths.about },
      { label: "خدماتنا", href: sitePaths.services },
      { label: "اتصل بنا", href: sitePaths.contactUs },
    ],
  },

  localeSwitcher: {
    ariaLabel: "تبديل اللغة",
    targetLabel: "English",
    targetLocale: "en" as const,
  },

  skipToContent: "الانتقال إلى المحتوى الرئيسي",

  footer: {
    brandLine1: "Global Elite Crew",
    brandLine2: "للاستشارات",
    contactHeading: "تواصل معنا",
    relatedLinksHeading: "روابط ذات صلة",
    email: "ghada_esmat@globalelitecrew.com",
    phones: ["هاتف: +2 03 4253255", "هاتف: +2 01143711439"],
    copyrightPrefix: "حقوق النشر ©",
    rightsReserved: "جميع الحقوق محفوظة",
    termsLabel: "الشروط والأحكام",
    privacyLabel: "سياسة الخصوصية",
    socialAriaLabel: "حسابات التواصل الاجتماعي",
    facebookAria: "فيسبوك",
    linkedinAria: "لينكدإن",
    whatsappAria: "واتساب",
    xAria: "إكس (تويتر)",
  },
} as const;
