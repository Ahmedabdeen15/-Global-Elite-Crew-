import Link from "next/link";
import { FaGlobe } from "react-icons/fa6";
import { localizedPath, sitePaths, type Locale } from "@/i18n/config";

interface LocaleSwitcherProps {
  currentLocale: Locale;
  target: Locale;
  /** Visible label of the target language ("العربية" / "English"). */
  label: string;
  ariaLabel: string;
  /**
   * Current canonical path without the locale prefix ("/about"),
   * so switching preserves the page you are on.
   */
  path?: string;
}

/**
 * Server-rendered link pair node — no JS needed. Renders an hreflang-aware
 * anchor to the same page in the other locale.
 */
export function LocaleSwitcher({
  currentLocale,
  target,
  label,
  ariaLabel,
  path = sitePaths.home,
}: LocaleSwitcherProps) {
  return (
    <Link
      href={localizedPath(target, path)}
      hrefLang={target}
      lang={target}
      aria-label={ariaLabel}
      title={label}
      className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-400 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
    >
      <FaGlobe aria-hidden className="h-4 w-4 text-brand-600" />
      <span>{label}</span>
    </Link>
  );
}