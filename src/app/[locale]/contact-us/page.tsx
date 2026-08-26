import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

import { getDictionary } from "@/i18n";
import { isLocale, sitePaths } from "@/i18n/config";
import { ContactForm } from "@/components/contact-form";
import { GoogleMap } from "@/components/google-map";
import { Section } from "@/components/section";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata(locale, "contactUs", "/contact-us");
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const t = dict.contact;

  return (
    <>
      <Section className="pt-16 pb-20" heading={t.header}>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form column */}
          <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-sm sm:p-10">
            <ContactForm copy={t.form} />
          </div>

          {/* Info panel column */}
          <aside className="flex flex-col gap-8 rounded-3xl bg-gradient-to-b from-brand-50 to-brand-100/60 p-6 sm:p-10">
            <div className="text-center">
              <Image
                src="/images/logo.png"
                alt={`${dict.home.hero.brandLine1} ${t.infoPanel.slogan2}`}
                width={140}
                height={140}
                className="mx-auto mb-3 h-auto w-24"
              />
              <p className="font-display text-xl font-semibold text-accent-500">
                {t.infoPanel.slogan1}
              </p>
              <p className="font-display text-lg text-brand-700">
                {t.infoPanel.slogan2}
              </p>
            </div>

            <ul className="space-y-6">
              <InfoRow
                icon={<FaLocationDot aria-hidden className="h-7 w-7 text-brand-500" />}
                label={t.infoPanel.addressLabel}
                value={t.infoPanel.addressValue}
              />
              <InfoRow
                icon={<FaPhone aria-hidden className="h-7 w-7 text-brand-500" />}
                label={t.infoPanel.phoneLabel}
                value={t.infoPanel.phones.join(" · ")}
              />
              <InfoRow
                icon={<FaEnvelope aria-hidden className="h-7 w-7 text-brand-500" />}
                label={t.infoPanel.emailLabel}
                value={t.infoPanel.emailValue}
                href={`mailto:${t.infoPanel.emailValue}`}
              />
            </ul>
          </aside>
        </div>

        {/* Map */}
        <div className="mt-14 overflow-hidden rounded-3xl shadow-md ring-1 ring-ink-100">
          <GoogleMap
            locale={locale}
            title={t.map.iframeTitle}
            heightClass="h-[420px]"
          />
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: t.header, path: sitePaths.contactUs },
        ])}
      />
    </>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
        {icon}
      </span>
      <span>
        <span className="block font-bold uppercase tracking-wide text-accent-600 [font-size:0.8rem]">
          {label}
        </span>
        {href ? (
          <a href={href} dir="ltr" className="font-medium text-ink-800 underline-offset-4 hover:text-brand-700 hover:underline rtl:inline-block rtl:w-full">
            {value}
          </a>
        ) : (
          <span className="font-medium text-ink-800">{value}</span>
        )}
      </span>
    </li>
  );
}