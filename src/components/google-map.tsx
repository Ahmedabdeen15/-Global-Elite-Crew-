interface GoogleMapProps {
  locale: string;
  title: string;
  heightClass?: string;
}

/**
 * Lazy-loaded Google Maps embed of the Alexandria office (replaces the
 * Leaflet + google-tiles hack from old-code/assets/js/main.js).
 * Rendering an iframe keeps zero JS on the client and works in RTL.
 */
export function GoogleMap({
  locale,
  title,
  heightClass = "h-64",
}: GoogleMapProps) {
  const query =
    locale === "ar"
      ? "49 شارع 5 سموحة، الإسكندرية، مصر"
      : "49 Street 5 Somuha, Alexandria, Egypt";

  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    "31.211273,29.945373",
  )}&z=16&hl=${locale}&output=embed&q_label=${encodeURIComponent(query)}`;

  return (
    <iframe
      title={title}
      src={embedSrc}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className={`w-full rounded-2xl border-0 shadow-md ${heightClass}`}
    />
  );
}