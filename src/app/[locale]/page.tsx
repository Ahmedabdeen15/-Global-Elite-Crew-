import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  FaCircleCheck,
  FaCertificate,
  FaRegCircleCheck,
  FaUserGroup,
} from "react-icons/fa6";

import { getDictionary } from "@/i18n";
import { isLocale, localizedPath, sitePaths, localeDirection } from "@/i18n/config";
import { Counter } from "@/components/counter";
import { LogoMarquee } from "@/components/logo-marquee";
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
  return buildMetadata(locale, "home", "/");
}

const STAT_ICONS = [
  <FaCertificate key="cert" aria-hidden className="h-9 w-9" />,
  <FaUserGroup key="clients" aria-hidden className="h-9 w-9" />,
  <FaRegCircleCheck key="rate" aria-hidden className="h-9 w-9" />,
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const t = dict.home;

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="bg-linear-to-b from-brand-50 to-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 pb-24 pt-20 text-center md:pb-32 md:pt-28">
          <Image
            src="/images/logo.png"
            alt={`${t.hero.brandLine1} ${t.hero.brandLine2}`}
            width={250}
            height={350}
            className="mx-auto mb-3 h-auto w-100"
          />
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.45em] text-ink-700 sm:text-base">
            {t.hero.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={localizedPath(locale, sitePaths.services)}
              className="rounded-full bg-brand-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href={localizedPath(locale, sitePaths.contactUs)}
              className="rounded-full border-2 border-brand-300 px-8 py-3.5 font-semibold text-brand-700 transition hover:border-brand-500 hover:bg-white"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who we are ──────────────────────────────────────────────────── */}
      <Section className="py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Image
            src="/images/secondary-banner.png"
            alt={t.whoWeAre.imageAlt}
            width={720}
            height={480}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="mx-auto h-auto w-full max-w-xl rounded-3xl object-cover"
          />
          <div className="text-center">
            <p className="mb-4 font-display text-xl font-bold uppercase tracking-[0.35em] text-accent-500">
              {t.whoWeAre.eyebrow}
            </p>
            <p className="text-xl leading-relaxed text-ink-700 md:text-2xl">
              {t.whoWeAre.body}
            </p>
          </div>
        </div>
      </Section>

      {/* ── Stats band ──────────────────────────────────────────────────── */}
      <Section>
        <dl className="grid gap-10 rounded-3xl border border-brand-100 bg-brand-50/60 px-6 py-12 sm:grid-cols-3 sm:gap-4">
          {t.stats.map((stat, i) => (
            <Counter
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              icon={STAT_ICONS[i]}
            />
          ))}
        </dl>
      </Section>

      {/* ── Mission / Values / Vision ───────────────────────────────────── */}
      <Section className="py-14">
        <div className="grid gap-8 lg:grid-cols-3">
          {t.pillars.map((pillar) => (
            <article
              key={pillar.id}
              dir={localeDirection[locale]}
              className="flex flex-col items-center rounded-3xl border border-ink-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                width={220}
                height={110}
                loading="lazy"
                className="mb-6 h-auto w-44 object-contain"
              />
              {"body" in pillar && pillar.body ? (
                <p className="text-start leading-relaxed text-ink-600 my-auto">
                  {pillar.body}
                </p>
              ) : null}
              {"items" in pillar && pillar.items ? (
                <ul className="w-full space-y-2 text-start text-ink-600 my-auto">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <FaCircleCheck aria-hidden className="mt-1 shrink-0 text-brand-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      {/* ── What we can offer ───────────────────────────────────────────── */}
      <Section className="py-14" heading={t.offer.title} intro={t.offer.intro}>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <ol className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {t.offer.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white p-3 leading-snug transition-colors hover:bg-brand-50"
              >
                <FaCircleCheck aria-hidden className="mt-0.5 shrink-0 text-brand-500" />
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <Image
            src="/images/offer.png"
            alt={t.offer.imageAlt}
            width={420}
            height={420}
            loading="lazy"
            className="hidden h-auto w-72 object-contain lg:block xl:w-80"
          />
        </div>
      </Section>

      {/* ── Certificates ────────────────────────────────────────────────── */}
      <Section className="py-14" heading={t.certificates.title}>
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <Image
            src={t.certificates.badgeImage}
            alt={t.certificates.badgeImageAlt}
            width={260}
            height={260}
            loading="lazy"
            className="mx-auto h-auto w-52 rounded-2xl object-contain shadow-md lg:w-64"
          />
          <div>
            <p className="mb-6 font-display text-lg font-semibold text-ink-800">
              {t.certificates.intro}
            </p>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {t.certificates.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <FaCertificate aria-hidden className="shrink-0 text-accent-500" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Clients marquee ─────────────────────────────────────────────── */}
      <LogoMarquee heading={t.clients.title} seeAllAria={t.clients.seeAllAria} />

      {/* Structured data */}
      <JsonLd data={breadcrumbSchema(locale, [])} />
    </>
  );
}