import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Cairo, Montserrat, Outfit } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n";
import { isLocale, localeDirection, sitePaths } from "@/i18n/config";
import { JsonLd, professionalServiceSchema } from "@/lib/schema";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
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
    icon: [{ url: "/images/mini-logo.png", type: "image/png" }],
    apple: "/images/mini-logo.png",
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

  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      dir={localeDirection[locale]}
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${outfit.variable} ${cairo.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white text-ink-900 antialiased">
        {/* Keyboard users land here first */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:inset-s-4 focus:top-4 focus:z-70 focus:rounded-full focus:bg-accent-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          {dict.common.skipToContent}
        </a>

        <SiteHeader
          locale={locale}
          links={dict.common.nav.links}
          logoAlt={`${dict.home.hero.brandLine1} ${dict.home.hero.brandLine2}`}
          switcherLabel={dict.common.localeSwitcher.targetLabel}
          switcherAria={dict.common.localeSwitcher.ariaLabel}
          menuOpenAria={dict.common.nav.ariaLabel}
          menuCloseAria={dict.common.localeSwitcher.ariaLabel}
        />

        <main id="main-content" className="grow">
          {children}
        </main>

        <SiteFooter
          locale={locale}
          copy={dict.common.footer}
          relatedLinks={dict.common.nav.links.filter(
            (link) => link.href !== sitePaths.contactUs,
          )}
        />

        {/* Organization-wide structured data */}
        <JsonLd data={professionalServiceSchema(locale)} />

        {/* Optional GA4 - loaded only when NEXT_PUBLIC_GA_ID is configured */}
        {site.gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}