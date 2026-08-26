interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Rendered as h2 when provided (with optional overline kicker). */
  heading?: string;
  headingClassName?: string;
  /** Optional supporting sentence under the heading. */
  intro?: string;
}

/** Shared content section: max-width container + optional heading pair. */
export function Section({
  children,
  className = "",
  heading,
  headingClassName = "",
  intro,
}: SectionProps) {
  return (
    <section className={`mx-auto w-full max-w-6xl scroll-mt-28 px-5 md:px-8 ${className}`}>
      {heading ? (
        <header className="mb-10 text-center">
          <h2
            className={`font-display text-3xl font-bold tracking-tight text-brand-700 sm:text-4xl ${headingClassName}`}
          >
            {heading}
          </h2>
          {intro ? (
            <p className="mx-auto mt-3 max-w-2xl text-ink-600">{intro}</p>
          ) : null}
        </header>
      ) : null}
      {children}
    </section>
  );
}