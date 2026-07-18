import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Content-Security-Policy — povoluje self, inline (Next hydratace + inline styly),
// self-hosted fonty a Cloudflare Web Analytics beacon. object/frame zakázáno.
// V dev navíc 'unsafe-eval' — Next.js hot-reload ho vyžaduje; v produkci NE.
const isDev = process.env.NODE_ENV !== "production";
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com"
  : "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com";

const csp = [
  "default-src 'self'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self' https://cloudflareinsights.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

// Zpřístupní Cloudflare bindings/env při `next dev`.
initOpenNextCloudflareForDev();

export default nextConfig;
