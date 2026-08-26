/** نصوص صفحة الاتصال بالعربية. */
export const contact = {
  header: "اتصل بنا",

  form: {
    firstName: { label: "الاسم الأول", placeholder: "الاسم الأول" },
    lastName: { label: "اسم العائلة", placeholder: "اسم العائلة" },
    email: { label: "البريد الإلكتروني", placeholder: "بريدك الإلكتروني" },
    phone: { label: "رقم الهاتف", placeholder: "أدخل رقم هاتفك" },
    address: { label: "العنوان", placeholder: "العنوان" },
    message: { label: "رسالتك", placeholder: "" },
    submit: "إرسال",
    spamDetected: "يبدو أن البيانات المدخلة غير صحيحة أو مشبوهة، برجاء المراجعة والمحاولة مجددًا.",
    success: "تم إرسال رسالتك بنجاح ✔",
    failure: "تعذر إرسال الرسالة ❌",
  },

  infoPanel: {
    slogan1: "Global Elite Crew",
    slogan2: "للاستشارات",
    addressLabel: "العنوان",
    addressValue: "49 شارع 5 سموحة، الإسكندرية - مصر",
    phoneLabel: "الهاتف",
    phones: ["+2 03 4253255", "+2 01143711439"],
    emailLabel: "البريد الإلكتروني",
    emailValue: "ghada_esmat@globalelitecrew.com",
  },

  map: {
    iframeTitle: "خريطة جوجل توضح مقرنا الرئيسي في الإسكندرية بمصر",
    popupText: "مقرنا الرئيسي\n49 شارع 5 سموحة،\nالإسكندرية - مصر",
  },
} as const;
