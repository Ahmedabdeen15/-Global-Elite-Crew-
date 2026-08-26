"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  /** Final number to reach, e.g. 110. */
  target: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
  durationMs?: number;
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Accessible count-up statistic (replaces the legacy setTimeout loop):
 * starts when scrolled into view, honors prefers-reduced-motion by
 * rendering the final value immediately.
 */
export function Counter({
  target,
  suffix = "",
  label,
  icon,
  durationMs = 1600,
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setStarted(true);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const reduced = window.matchMedia(REDUCED_MOTION_QUERY).matches;

    // Defer all state writes into rAF callbacks so we never call setState
    // synchronously inside the effect body.
    let frame = 0;
    const t0 = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - t0) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame((now) => {
      if (reduced) {
        setValue(target);
        return;
      }
      tick(now);
    });

    return () => cancelAnimationFrame(frame);
  }, [started, target, durationMs]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      {icon ? <div className="text-brand-600">{icon}</div> : null}
      <p
        className="font-display text-4xl font-bold text-brand-700 tabular-nums sm:text-5xl"
        aria-label={`${target}${suffix} ${label}`}
      >
        <span aria-hidden>
          {value}
          {suffix}
        </span>
      </p>
      <span className="font-semibold tracking-wide text-ink-700">{label}</span>
    </div>
  );
}