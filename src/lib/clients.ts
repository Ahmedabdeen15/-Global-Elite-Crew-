import type { ClientLogo } from "@/i18n/types";

/**
 * Client roster replicated from the legacy "We worked with" Owl slider
 * (old-code/index.html) - order preserved, ELVY has no public website.
 */
export const CLIENT_LOGOS: readonly ClientLogo[] = [
  { image: "/images/logos/edge.png", name: "EDGE", website: "https://edgeforgarments.com/" },
  { image: "/images/logos/khaliji.png", name: "Khaliji Tex", website: "https://khalijitex.com.eg/" },
  { image: "/images/logos/eshratex.png", name: "Eshra Tex", website: "https://www.eshratex.com/" },
  { image: "/images/logos/sogic.png", name: "SOGIC", website: "https://www.sogic-company.com/" },
  { image: "/images/logos/puttmann.webp", name: "Püttmann", website: "https://puttmann-egypt.com/" },
  { image: "/images/logos/spinalex.png", name: "Spinalex", website: "http://www.spinalex.com/" },
  { image: "/images/logos/elvy.png", name: "ELVY" },
  { image: "/images/logos/arabian-mills.png", name: "Arabian Mills", website: "https://arabian-milling.com/" },
  { image: "/images/logos/eric-maritime.png", name: "Eric Maritime", website: "https://ericmaritime.com/" },
  { image: "/images/logos/abo-donkol-feed.png", name: "Abo Donkol Feed", website: "http://agri-db.org/ar/agri-inputs/company/abo-donkol-feed" },
  { image: "/images/logos/woodpecker.png", name: "Woodpecker", website: "https://woodpecker-eg.com/" },
  { image: "/images/logos/lafinestra.png", name: "La Finestra", website: "https://lafinestra.com.eg/" },
  { image: "/images/logos/lycheeegypt.png", name: "Lychee Egypt", website: "https://www.lycheeegypt.com/" },
  { image: "/images/logos/gostegypt.png", name: "GOST Egypt", website: "https://www.gostegypt.com/" },
] as const;
