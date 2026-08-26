import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["en", "ar"];
const DEFAULT_LOCALE = "en";

/**
 * Root negotiation + legacy URL bridge (`proxy` replaces the deprecated
 * `middleware` convention as of Next.js 16).
 *
 * "/"                  -> "/en" (or "/ar" when Accept-Language prefers Arabic)
 * "/about"             -> "/en/about"     (legacy flat URLs keep working)
 * "/contact-us"        -> "/en/contact-us"
 */
export function proxy(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  const pathnameMissingLocale =
    !LOCALES.some(
      (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
    );

  if (!pathnameMissingLocale) return NextResponse.next();

  const acceptLanguage =
    request.headers.get("accept-language")?.toLowerCase() ?? "";
  const wantsArabic = acceptLanguage
    .split(",")
    .some((tag) => tag.trim().startsWith("ar"));

  const locale = wantsArabic ? "ar" : DEFAULT_LOCALE;
  // "307 Found": never cache a language guess client- or CDN-side.
  return NextResponse.redirect(
    new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url),
    307,
  );
}

export const config = {
  // Skip static assets, metadata routes and Next internals.
  matcher: [
    "/((?!api|_next/static|_next/image|images|robots.txt|sitemap.xml|llms.txt|favicon.ico).*)",
  ],
};