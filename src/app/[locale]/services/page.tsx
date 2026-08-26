import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaCircleCheck, FaListCheck } from "react-icons/fa6";

import { getDictionary } from "@/i18n";
import { isLocale } from "@/i18n/config";
import type { ServiceBullet } from "@/i18n/service-types";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata(locale, "services", "/services");
}

function BulletList({ bullets }: { bullets: readonly ServiceBullet[] }) {
  return (
    <ul className="space-y-4">
      {bullets.map((bullet, index) =>
        bullet.kind === "item" ? (
          <li key={bullet.title ?? index} className="flex items-start gap-3 leading-relaxed text-ink-600">
            <FaCircleCheck aria-hidden className="mt-1 shrink-0 text-brand-500" />
            <span>
              {bullet.title ? (
                <>
                  <strong className="text-ink-800">{bullet.title}</strong>{" "}
                </>
              ) : null}
              {bullet.text}
            </span>
          </li>
        ) : (
          <li key={bullet.title} className="leading-relaxed">
            <strong className="mb-2 flex items-center gap-2 text-ink-800">
              <FaListCheck aria-hidden className="shrink-0 text-accent-500" />
              {bullet.title}
            </strong>
            <ul className="ms-7 space-y-2 border-s-2 border-brand-100 ps-5 text-ink-600">
              {bullet.items.map((sub) => (
                <li key={sub}>{sub}</li>
              ))}
            </ul>
          </li>
        ),
      )}
    </ul>
  );
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const services = dict.services;

  return (
    <>
      {/* Quick nav to each certification block */}
      <nav
        aria-label={dict.common.nav.links[2]?.label ?? "Services"}
        className="mx-auto max-w-6xl px-5 pt-10 md:px-8"
      >
        <ul className="flex flex-wrap justify-center gap-2.5">
          {services.map((service) => (
            <li key={service.id}>
              <a
                href={`#${service.id}`}
                className="inline-block rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 transition hover:border-brand-400 hover:bg-brand-50"
              >
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── One section per certification service ──────────────────────── */}
      <div className="mt-12 space-y-20 pb-16">
        {services.map((service, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-32"
              aria-labelledby={`${service.id}-heading`}
            >
              {/* ── Section header ── */}
              <h2
                id={`${service.id}-heading`}
                className="text-center font-display text-3xl font-bold tracking-tight text-brand-700"
              >
                {service.heading}
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-center text-lg font-semibold text-accent-600">
                {service.subheading}
              </p>

              {/* ── Intro + image, alternating sides ── */}
              <div className="mt-10 grid items-center gap-10 lg:grid-cols-5">
                <div className={`leading-relaxed text-ink-600 lg:col-span-3 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
                  {service.intro}
                </div>
                <div className={`flex justify-center lg:col-span-2 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={360}
                    height={300}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-auto w-full max-w-xs rounded-2xl object-contain p-4 shadow-md lg:max-w-sm"
                  />
                </div>
              </div>

              {/* ── Bullets ── */}
              <div className="mt-12">
                <p className="mb-6 font-display text-xl font-bold text-brand-700">
                  {service.bulletsHeading}
                </p>
                <BulletList bullets={service.bullets} />
              </div>

              {/* ── Optional secondary block (BSCI "Why choose us") ── */}
              {"secondary" in service && service.secondary ? (
                <div className="mt-14 grid items-center gap-10 rounded-3xl bg-brand-50/70 p-8 md:p-10 lg:grid-cols-2">
                  <div>
                    <p className="mb-5 font-display text-xl font-bold text-brand-700">
                      {service.secondary.heading}
                    </p>
                    <BulletList bullets={service.secondary.bullets} />
                  </div>
                  <Image
                    src={service.secondary.image}
                    alt={service.secondary.imageAlt}
                    width={480}
                    height={340}
                    loading="lazy"
                    className="mx-auto h-auto w-full max-w-sm rounded-2xl object-cover shadow"
                  />
                </div>
              ) : null}

              {/* ── Divider between services ── */}
              {index < services.length - 1 ? (
                <hr aria-hidden className="mx-auto mt-20 max-w-xl border-t border-dashed border-brand-200" />
              ) : null}
            </section>
          );
        })}
      </div>

      {/* Structured data */}
      <JsonLd
        data={[
          breadcrumbSchema(locale, [
            { name: dict.common.nav.links[2]?.label ?? "Services", path: "/services" },
          ]),
          ...services.map((service) => serviceSchema(service, locale)),
        ]}
      />
    </>
  );
}