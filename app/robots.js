const BASE = "https://robinpetr.cz";

/* robots.txt — povolit indexaci všeho kromě API, odkázat na sitemapu. */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
