import Link from "next/link";

/**
 * Branded 404 for unknown /en/* or /ar/* paths. Static by nature — the
 * message speaks both languages since the unmatched URL carries no locale.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-brand-500 px-6 text-center">
      <p className="font-display text-accent-300 text-7xl font-black tracking-tight sm:text-9xl">
        404
      </p>
      <p className="text-xl font-semibold text-white" lang="en">
        This page could not be found.
      </p>
      <p dir="rtl" lang="ar" className="text-xl font-semibold text-white">
        الصفحة غير موجودة.
      </p>
      <Link
        href="/en"
        hrefLang="en"
        className="rounded-full bg-white px-6 py-3 font-semibold text-brand-700 shadow transition-colors hover:bg-accent-100"
      >
        Home / الرئيسية
      </Link>
    </main>
  );
}