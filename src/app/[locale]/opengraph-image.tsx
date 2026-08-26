import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";

export const alt = "Global Elite Crew - The power to make difference";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND_BLUE = "#3AB2FE";
const AMBER = "#FFAE00";
const INK = "#232B32";

/** Branded Open Graph card generated per locale at request/build time. */
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const tagline = locale === "ar" ? "THE POWER TO MAKE DIFFERENCE · قوة تصنع الفرق" : "THE POWER TO MAKE DIFFERENCE";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background: `linear-gradient(135deg, ${INK} 0%, #10161b 60%, #123049 100%)`,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, color: AMBER, letterSpacing: "-2px" }}>
          Global Elite Crew
        </div>
        <div style={{ display: "flex", fontSize: 52, fontWeight: 500, color: BRAND_BLUE }}>
          for consultation
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#ffffffCC", letterSpacing: 14 }}>
          {tagline}
        </div>
        <div style={{ position: "absolute", bottom: 48, display: "flex", fontSize: 26, color: "#7fb8e6" }}>
          globalelitecrew.com
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 14,
            background: `linear-gradient(90deg, ${BRAND_BLUE}, ${AMBER})`,
          }}
        />
      </div>
    ),
    size,
  );
}