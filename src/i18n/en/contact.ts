/** Contact page copy (form + info panel). */
export const contact = {
  header: "Contact Us",

  form: {
    firstName: { label: "First Name", placeholder: "First Name" },
    lastName: { label: "Last Name", placeholder: "Last Name" },
    email: { label: "Email", placeholder: "Your Email address" },
    phone: { label: "Phone Number", placeholder: "Enter your phone number" },
    address: { label: "Address", placeholder: "Address" },
    message: { label: "Message", placeholder: "" },
    submit: "Submit",
    spamDetected:
      "Potential spam detected. Please enter valid data.",
    success: "Message sent successfully ✔",
    failure: "Message sending failed ❌",
  },

  infoPanel: {
    slogan1: "Global Elite Crew",
    slogan2: "for consultation",
    addressLabel: "Address",
    addressValue: "49 Street 5 Somuha, Alexandria - Egypt",
    phoneLabel: "Phone",
    phones: ["+2 03 4253255", "+2 01143711439"],
    emailLabel: "Email",
    emailValue: "ghada_esmat@globalelitecrew.com",
    whatsappLabel: "WhatsApp",
    whatsappValue: "+201143711439",
  },

  map: {
    iframeTitle: "Google Map showing our main office in Alexandria, Egypt",
    popupText: "Our Main Office\n49 Street 5 Somuha,\nAlexandria - Egypt",
  },
} as const;
