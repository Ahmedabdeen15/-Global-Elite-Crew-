import type { NextConfig } from "next";

/**
 * Permanent bridges preserving every legacy URL's ranking equity:
 * English flat pages -> /en/* and the old "-arabic" slugs -> their /ar/* twins.
 * The proxy only needs to handle "/" negotiation afterwards.
 */
const LEGACY_REDIRECTS = [
  { source: "/index", destination: "/" },
  { source: "/about", destination: "/en/about" },
  { source: "/services", destination: "/en/services" },
  { source: "/contact-us", destination: "/en/contact-us" },
  { source: "/index-arabic", destination: "/ar" },
  { source: "/about-arabic", destination: "/ar/about" },
  { source: "/services-arabic", destination: "/ar/services" },
  { source: "/contact-us-arabic", destination: "/ar/contact-us" },
] as const;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return LEGACY_REDIRECTS.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;