import { ar } from "./ar";
import { defaultLocale, isLocale } from "./config";
import { en } from "./en";
import type { Dictionary } from "./types";

export * from "./config";

/** All compiled dictionaries keyed by locale. */
const dictionaries: Record<string, unknown> = { en, ar };

/** Type-safe accessor with safe fallback for unexpected locales. */
export function getDictionary(locale: string): Dictionary {
  if (!isLocale(locale)) return dictionaries[defaultLocale] as Dictionary;
  return dictionaries[locale] as Dictionary;
}
