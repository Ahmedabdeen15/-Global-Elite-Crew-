import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cairo, Montserrat, Outfit } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, localeDirection } from "@/i18n/config";
import { site } from "@/lib/site";
import "../globals.css";

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
  // Required anchor for every canonical/OG URL built across locales.
  metadataBase: new URL(site.url),
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },
};

/** Pre-render both locales as fully static pages. */
export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ar" },
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      dir={localeDirection[locale]}
      className={`${montserrat.variable} ${outfit.variable} ${cairo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}