"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import type { NavLink } from "@/i18n/types";
import { LocaleSwitcher } from "@/components/locale-switcher";
import {
  localizedPath,
  otherLocale,
  sitePaths,
  type Locale,
} from "@/i18n/config";

interface SiteHeaderProps {
  locale: Locale;
  links: readonly NavLink[];
  logoAlt: string;
  switcherLabel: string;
  switcherAria: string;
  menuOpenAria: string;
  menuCloseAria: string;
}

export function SiteHeader({
  locale,
  links,
  logoAlt,
  switcherLabel,
  switcherAria,
  menuOpenAria,
  menuCloseAria,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    path === sitePaths.home
      ? pathname === localizedPath(locale)
      : Boolean(pathname?.startsWith(localizedPath(locale, path)));

  return (
    <div className="sticky top-0 z-50 bg-brand-500 shadow-lg shadow-brand-500/30 rounded-[0_0_8rem_8rem] max-md:rounded-[0_0_4rem_4rem]" dir="ltr">
      <div className="mx-auto bg-white w-[99%] rounded-[0_0_8rem_8rem]">
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-20">
        <Link
          href={localizedPath(locale)}
          className="shrink-0"
          aria-label={logoAlt}
        >
          <Image
            src="/images/logo.png"
            alt={logoAlt}
            width={190}
            height={64}
            priority
            className="mx-10 h-auto w-20 md:w-42.5"
          />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizedPath(locale, link.href)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-full px-5 py-2 text-base font-semibold transition-colors ${
                    isActive(link.href)
                      ? "bg-brand-500 text-white shadow"
                      : "text-ink-800 hover:bg-brand-100/60"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher
            target={otherLocale(locale)}
            label={switcherLabel}
            ariaLabel={switcherAria}
          />
          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? menuCloseAria : menuOpenAria}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-ink-800 lg:hidden"
          >
            {open ? (
              <FaXmark aria-hidden className="h-5 w-5" />
            ) : (
              <FaBars aria-hidden className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile panel */}
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-brand-400/40 px-5 pb-6 pt-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizedPath(locale, link.href)}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-center text-lg font-semibold ${
                    isActive(link.href)
                      ? "bg-brand-500 text-white"
                      : "text-ink-800 hover:bg-brand-100/60"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      </div>
    </div>
  );
}