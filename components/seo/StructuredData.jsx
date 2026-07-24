import { CONTACT } from "@/lib/contact";

/* Strukturovaná data (JSON-LD, schema.org) pro vyhledávače a AI.
   Říká strojově: kdo je Robin Petr, co nabízí, kde působí — aby Google
   web správně zařadil a mohl doporučit u lokálních i oborových dotazů.

   Data jsou statická a plně pod kontrolou (žádný uživatelský vstup),
   proto je JSON-LD vkládán přes dangerouslySetInnerHTML — standardní
   a bezpečný postup pro schema.org v Next.js. */

const URL = "https://robinpetr.cz";

const SLUZBY = [
  "Recenzní NFC tag",
  "Věrnostní systém",
  "Web podniku",
  "Online objednávky bez provizí",
  "E-shop na míru",
  "Hlídání teplot (HACCP monitoring)",
];

export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${URL}/#business`,
        name: "Robin Petr — digitalizace podniků",
        description:
          "Weby, objednávkové systémy a chytrý hardware pro malé podniky — od jednoho člověka, co to celé propojí.",
        url: URL,
        image: `${URL}/foto.png`,
        email: `info@robinpetr.cz`,
        telephone: CONTACT.phoneDisplay,
        priceRange: "££",
        founder: { "@id": `${URL}/#robin` },
        provider: { "@id": `${URL}/#robin` },
        areaServed: [
          { "@type": "City", name: "Hradec Králové" },
          { "@type": "City", name: "Pardubice" },
          { "@type": "Country", name: "Česko" },
        ],
        knowsAbout: [
          "tvorba webů",
          "e-shopy",
          "online objednávky",
          "věrnostní systémy",
          "HACCP monitoring teplot",
          "digitalizace provozů",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Služby",
          itemListElement: SLUZBY.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${URL}/#robin`,
        name: "Robin Petr",
        jobTitle: "Vývojář a zakladatel",
        url: URL,
        email: `info@robinpetr.cz`,
        worksFor: { "@id": `${URL}/#business` },
      },
      {
        "@type": "WebSite",
        "@id": `${URL}/#website`,
        url: URL,
        name: "Robin Petr — digitalizace podniků",
        inLanguage: "cs-CZ",
        publisher: { "@id": `${URL}/#business` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
