import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import type { FooterCopy } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import { GoogleMap } from "./google-map";

interface SiteFooterProps {
  locale: Locale;
  copy: FooterCopy;
  relatedLinks: readonly { label: string; href: string }[];
}

export function SiteFooter({ locale, copy, relatedLinks }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t-8 border-accent-500 bg-ink-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {/* Brand column */}
        <div className="text-center">
          <Link href={localizedPath(locale)} className="inline-block">
            <Image
              src="/images/mini-logo.png"
              alt={`${copy.brandLine1} ${copy.brandLine2}`}
              width={120}
              height={120}
              className="mx-auto mb-4 h-auto w-28"
            />
          </Link>
          <p className="font-display text-xl font-semibold text-accent-500">
            {copy.brandLine1}
          </p>
          <p className="font-display text-lg text-white/90">
            {copy.brandLine2}
          </p>
        </div>

        {/* Contact column */}
        <div className="text-center md:text-start" aria-label={copy.contactHeading}>
          <h6 className="mb-5 text-lg font-bold text-accent-500">
            {copy.contactHeading}
          </h6>
          <ul className="space-y-3 font-light text-white/85">
            {copy.phones.map((phone) => (
              <li key={phone}>{phone}</li>
            ))}
            <li>
              <a
                href={`mailto:${copy.email}`}
                className="text-sm underline-offset-4 hover:text-brand-300 hover:underline"
              >
                {copy.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Related links */}
        <nav
          aria-label={copy.relatedLinksHeading}
          className="text-center md:text-start"
        >
          <h6 className="mb-5 text-lg font-bold text-accent-500">
            {copy.relatedLinksHeading}
          </h6>
          <ul className="space-y-4 font-light text-white/85">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizedPath(locale, link.href)}
                  className="hover:text-brand-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Map */}
        <div>
          <GoogleMap locale={locale} title="Our Main Office" heightClass="h-52" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-white/70 md:flex-row lg:px-10">
          <p>
            {copy.copyrightPrefix} {year} | {copy.rightsReserved} |{" "}
            <span className="cursor-default">{copy.termsLabel}</span> |{" "}
            <span className="cursor-default">{copy.privacyLabel}</span>
          </p>
          <div className="flex items-center gap-5" aria-label={copy.socialAriaLabel}>
            <a
              href="https://www.facebook.com/p/Global-Elite-Crew-For-Consultation-100069225498403/"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={copy.facebookAria}
              className="transition-colors hover:text-brand-400"
            >
              <FaFacebookF aria-hidden className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/global-elite-crew/"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={copy.linkedinAria}
              className="transition-colors hover:text-brand-400"
            >
              <FaLinkedinIn aria-hidden className="h-6 w-6" />
            </a>
            <span
              role="img"
              aria-label={copy.xAria}
              title={copy.xAria}
              className="text-white/30"
            >
              <FaXTwitter aria-hidden className="h-6 w-6" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}