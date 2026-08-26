/**
 * Placeholder home route — real localized homepage sections land in
 * feat(home) / design-system commits. Kept minimal so the app builds.
 */
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-ink-900 text-center text-white">
      <p className="font-display text-accent-500 text-4xl font-bold tracking-tight">
        Global Elite Crew
      </p>
      <p className="font-display text-brand-500 text-2xl font-semibold">
        for consultation
      </p>
      <p className="text-sm tracking-[0.4em] uppercase">
        The power to make difference
      </p>
      <p className="text-xs text-white/50">
        Refactor in progress — full sections arrive in upcoming commits.
      </p>
    </main>
  );
}