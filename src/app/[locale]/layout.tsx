import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cairo, Montserrat, Outfit } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const LOCALES = ["en", "ar"] as const;
type Locale = (typeof LOCALES)[number];

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Global Elite Crew",
    template: "%s | Global Elite Crew",
  },
};

/** Pre-render both locales as fully static pages. */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as Locale)) notFound();

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${montserrat.variable} ${outfit.variable} ${cairo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}