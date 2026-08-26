/**
 * Shape of one certification-service block rendered on /services.
 * `bullets` covers both flat "strong-led" lists (ISO families) and
 * grouped nested lists (GOTS / SEDEX style).
 */
export type ServiceBullet =
  | { kind: "item"; title?: string; text: string }
  | { kind: "group"; title: string; items: readonly string[] };

export interface ServiceSection {
  /** Anchor id for deep links & structured data, e.g. "iso-27001". */
  id: string;
  /** Short label for cards/nav/metadata. */
  name: string;
  /** Page-level section heading (H2). */
  heading: string;
  /** Marketing lead sentence below the heading. */
  subheading: string;
  /** Standard intro paragraph. */
  intro: string;
  image: string;
  imageAlt: string;
  bulletsHeading: string;
  bulletsType: "ul" | "ol";
  bullets: readonly ServiceBullet[];
  /** Optional trailing block (e.g. BSCI "Why Choose Us?"). */
  secondary?: {
    heading: string;
    image: string;
    imageAlt: string;
    bullets: readonly ServiceBullet[];
  };
}
