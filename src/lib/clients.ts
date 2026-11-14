import type { ClientLogo } from "@/i18n/types";

/**
 * Client roster replicated from the legacy "We worked with" Owl slider
 * (old-code/index.html) - order preserved, ELVY has no public website.
 */
export const CLIENT_LOGOS: readonly ClientLogo[] = [
  { image: "/images/logos/jade-textile.png", name: "Jade Textile", website: "http://jade-textile.com/" },
  { image: "/images/logos/edge.png", name: "EDGE", website: "https://edgeforgarments.com/" },
  { image: "/images/logos/galina.webp", name: "Galina Fruits & Vegetables", website: "https://www.galina-eg.com/" },
  { image: "/images/logos/cookingegypt-logo.png", name: "COOKING EGYPT", website: "https://cookkingegypt.com/web/" },
  { image: "/images/logos/phoenix-marketing-group.png", name: "Phoenix Marketing Group", website: "https://phoenix-grp.org/" },
  { image: "/images/logos/khaliji.png", name: "Khaliji Tex", website: "https://khalijitex.com.eg/" },
  { image: "/images/logos/elmajd.jpg", name: "El Majd Stevedoring" , website: "http://elmajd-group.com/" },
  { image: "/images/logos/Egyptian-French-Porcelain-Factory.jpg", name: "Egyptian French Porcelain Factory" },
  { image: "/images/logos/first.jpg", name: "first Egypt (F.S.E.G)" },
  { image: "/images/logos/el-shorouk-for-electromechanical-business.jpg", name: "el shorouk for electromechanical business" },
  { image: "/images/logos/denis-textile-egypt.jpg", name: "Denis Textile Egypt" },
  { image: "/images/logos/Indigo-Textile-Egypt.jpg", name: "Indigo Textile Egypt" },
  {image: "/images/logos/green-house.jpg", name: "Green House" },
  { image: "/images/logos/ALMAAMONEY.jpg", name: "ALMAAMONEY S.A.E. For Export and Import" },
  { image: "/images/logos/blue-sky.jpg", name: "Blue Sky Jeans" },
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
  { image: "/images/logos/the-factry.jpg", name: "The Factry" },
  { image: "/images/logos/alalamiatex.jpg", name: "Al-Alamia Textile" , website: "https://www.facebook.com/alalamiatex/" },
] as const;
