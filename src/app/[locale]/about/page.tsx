import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";
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
  return buildMetadata(locale, "about", "/about");
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const t = dict.about;

  return (
    <>
      {/* ── Who we are ──────────────────────────────────────────────────── */}
      <Section className="pt-16" heading={t.header}>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-2xl font-bold text-accent-500">
              {t.whoWeAre.title}
            </h3>
            <p className="leading-relaxed text-ink-700">{t.whoWeAre.body}</p>
          </div>
          <Image
            src="/images/secondary-banner.png"
            alt={t.whoWeAre.imageAlt}
            width={720}
            height={480}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="mx-auto h-auto w-full max-w-xl rounded-3xl object-cover"
          />
        </div>
      </Section>

      {/* ── Consulting description / QMS ───────────────────────────────── */}
      <Section className="py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Image
            src="/images/swot.png"
            alt={t.qms.swotImageAlt}
            width={520}
            height={360}
            loading="lazy"
            className="mx-auto h-auto w-full max-w-md rounded-2xl object-contain"
          />
          <div>
            <h3 className="mb-4 font-display text-2xl font-bold text-brand-700">
              {t.qms.title}
            </h3>
            <p className="mb-3 font-semibold text-ink-800">{t.qms.question}</p>
            <p className="leading-relaxed text-ink-600">{t.qms.body1}</p>
          </div>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="leading-relaxed text-ink-600">{t.qms.isoParagraph}</p>
            <Image
              src="/images/qms.jpg"
              alt={t.qms.qmsImageAlt}
              width={520}
              height={340}
              loading="lazy"
              className="mt-8 mx-auto h-auto w-full max-w-md rounded-2xl object-cover shadow-sm"
            />
          </div>
          <div>
            <Image
              src="/images/risk.png"
              alt={t.assessment.riskImageAlt}
              width={420}
              height={320}
              loading="lazy"
              className="mx-auto mb-8 h-auto w-full max-w-sm rounded-2xl object-contain"
            />
            <p className="mb-4 font-semibold text-ink-800">
              {t.assessment.intro}
            </p>
            <ol className="list-decimal space-y-2 ps-6 leading-relaxed text-ink-600">
              {t.assessment.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* ── Competitive advantages ──────────────────────────────────────── */}
      <Section className="py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr]">
          <div className="lg:flex-1">
            <h3 className="mb-6 font-display text-xl font-bold uppercase tracking-wide text-accent-500">
              {t.advantages.title}
            </h3>
            <ul className="space-y-3">
              {t.advantages.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-700">
                  <span
                    aria-hidden
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/competitive-advantages.png"
            alt={t.advantages.imageAlt}
            width={460}
            height={400}
            loading="lazy"
            className="hidden h-auto w-80 object-contain xl:block"
          />
        </div>
      </Section>

      {/* ── Quality strategy ────────────────────────────────────────────── */}
      <Section className="py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Image
            src="/images/strategic-management.webp"
            alt={t.strategy.imageAlt}
            width={520}
            height={520}
            loading="lazy"
            className="mx-auto h-auto w-full max-w-md rounded-3xl object-cover shadow-sm"
          />
          <div>
            <h3 className="mb-4 font-display text-xl font-bold uppercase tracking-wide text-brand-700">
              {t.strategy.title}
            </h3>
            <p className="leading-relaxed text-ink-600">{t.strategy.body}</p>
          </div>
        </div>
      </Section>

      {/* ── Quality culture ─────────────────────────────────────────────── */}
      <Section className="pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-2xl font-bold text-brand-700">
              {t.culture.title}
            </h3>
            <p className="mb-6 leading-relaxed text-ink-600">{t.culture.principle}</p>
            <p className="mb-2 font-semibold text-ink-800">{t.culture.buildingTitle}</p>
            <p className="mb-6 leading-relaxed text-ink-600">{t.culture.buildingBody}</p>
            <p className="mb-3 font-semibold text-ink-800">
              {t.culture.characteristicsTitle}
            </p>
            <ul className="space-y-2 ps-5 leading-relaxed text-ink-600 [list-style-type:disc] marker:text-brand-400">
              {t.culture.characteristics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/quality-culture.png"
            alt={t.culture.imageAlt}
            width={640}
            height={420}
            loading="lazy"
            className="mx-auto h-auto w-full max-w-lg rounded-3xl object-contain lg:sticky lg:top-32"
          />
        </div>
      </Section>

      {/* Structured data */}
      <JsonLd
        data={breadcrumbSchema(locale, [{ name: t.header, path: "/about" }])}
      />
    </>
  );
}