import { CONTACT } from "@/lib/contact";
import { PRICING } from "@/lib/pricing";

/* Strukturovaná data (JSON-LD, schema.org) pro vyhledávače a AI.
   Říká strojově: kdo je Robin Petr, co nabízí, kde působí — aby Google
   web správně zařadil a mohl doporučit u lokálních i oborových dotazů.

   Data jsou statická a plně pod kontrolou (žádný uživatelský vstup),
   proto je JSON-LD vkládán přes dangerouslySetInnerHTML — standardní
   a bezpečný postup pro schema.org v Next.js. */

const URL = "https://robinpetr.cz";

export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${URL}/#business`,
        name: "Robin Petr — digitalizace podniků",
        description:
          "Weby, objednávky a jednoduchý hardware pro malé podniky. Všechno navrhuju a propojuju sám.",
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
          itemListElement: PRICING.map((s) => {
            /* `price` znamená ve schema.org PŘESNOU cenu. U služeb účtovaných
               „od …" by to Googlu i AI asistentům tvrdilo pevnou částku,
               kterou pak ukážou zákazníkovi jako konečnou — a inzerovaná cena
               je podle § 1732 odst. 2 NOZ závazná nabídka. Proto se u nich
               posílá minPrice, ne price. Platí to zvlášť pro jednorázovou
               (oneTimeFrom) a zvlášť pro opakovanou částku (monthlyFrom) —
               pokladna má pevné zavedení a „od" jen u měsíčního provozu. */
            const jednorazova = s.oneTimeFrom
              ? {
                  "@type": "PriceSpecification",
                  minPrice: s.oneTimeCzk,
                  priceCurrency: "CZK",
                }
              : null;

            /* Měsíční poplatek se bez referenceQuantity nedá odlišit od
               jednorázové ceny — unitCode MON je „měsíc" podle UN/CEFACT. */
            const mesicni = s.monthlyCzk
              ? {
                  "@type": "UnitPriceSpecification",
                  ...(s.monthlyFrom
                    ? { minPrice: s.monthlyCzk }
                    : { price: s.monthlyCzk }),
                  priceCurrency: "CZK",
                  referenceQuantity: {
                    "@type": "QuantitativeValue",
                    value: 1,
                    unitCode: "MON",
                  },
                }
              : null;

            const spec = [jednorazova, mesicni].filter(Boolean);

            return {
              "@type": "Offer",
              /* Pevná jednorázová cena zůstává v `price` na úrovni Offeru;
                 „od" varianta jde do priceSpecification vedle měsíční. */
              ...(jednorazova ? {} : { price: s.oneTimeCzk, priceCurrency: "CZK" }),
              ...(spec.length
                ? { priceSpecification: spec.length === 1 ? spec[0] : spec }
                : {}),
              description: s.text,
              itemOffered: { "@type": "Service", name: s.name },
            };
          }),
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
