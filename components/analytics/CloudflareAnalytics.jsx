import Script from "next/script";

/* Cloudflare Web Analytics — bez cookies, bez souhlasu (privacy-first).
   Aktivní jen když je nastavený NEXT_PUBLIC_CF_BEACON_TOKEN (build-time).
   Token získáš v Cloudflare dashboardu: Web Analytics → Add a site → beacon token. */

export default function CloudflareAnalytics() {
  const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;
  if (!token) return null;

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
