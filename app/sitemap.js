const BASE = "https://robinpetr.cz";

/* sitemap.xml — seznam veřejných stránek pro vyhledávače.
   Priorita: úvod > nabídka > ostatní > právní. */
const ROUTES = [
  { path: "", priority: 1.0, changeFrequency: "monthly" },
  { path: "/sluzby", priority: 0.9, changeFrequency: "monthly" },
  { path: "/jak-to-funguje", priority: 0.7, changeFrequency: "yearly" },
  { path: "/o-mne", priority: 0.7, changeFrequency: "yearly" },
  { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" },
  { path: "/obchodni-podminky", priority: 0.3, changeFrequency: "yearly" },
  { path: "/ochrana-osobnich-udaju", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
