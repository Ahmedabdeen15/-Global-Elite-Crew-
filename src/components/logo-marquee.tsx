import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/clients";

interface LogoMarqueeProps {
  heading: string;
  seeAllAria: string;
}

/**
 * Infinite CSS marquee replacing the legacy jQuery Owl Carousel.
 * The track is duplicated aria-hidden so screen readers hear one list
 * only; animation is disabled under prefers-reduced-motion via globals.
 */
export function LogoMarquee({ heading, seeAllAria }: LogoMarqueeProps) {
  return (
    <section aria-labelledby="clients-heading" className="mt-24 overflow-hidden">
      <h2
        id="clients-heading"
        className="mx-auto max-w-6xl px-5 text-center font-display text-2xl font-semibold text-ink-800 md:px-8 md:text-start"
      >
        {heading}
      </h2>

      <div className="group relative mt-8 py-4">
        <ul className="marquee-track flex w-max items-center gap-12 px-6">
          {[false, true].map((isClone) => (
            <li className="flex items-center gap-12" key={String(isClone)} aria-hidden={isClone}>
              {CLIENT_LOGOS.map((logo) => {
                const img = (
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={140}
                    height={72}
                    loading="lazy"
                    className="h-14 w-auto object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 group-hover:[animation-play-state:paused]"
                  />
                );
                return logo.website ? (
                  <a
                    key={`${logo.name}-${String(isClone)}`}
                    href={logo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={seeAllAria}
                    tabIndex={isClone ? -1 : undefined}
                  >
                    {img}
                  </a>
                ) : (
                  <span key={`${logo.name}-${String(isClone)}`}>{img}</span>
                );
              })}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}