import Link from "next/link";
import BenefitCard from "./BenefitCard";

/* "Co pro váš podnik udělám" — přínosy, ne seznam produktů.
   Karty jsou znovupoužitelné (BenefitCard) i pro budoucí /sluzby. */

/* Ručně kreslené ilustrace v paletě webu (public/ilustrace).
   Dekorativní — prázdný alt. Volně na kartě (bez rámečku), mix-blend-multiply
   nechá světlé pozadí PNG splynout s podkladem karty. */
function CardIllustration({ src }) {
  return (
    <img src={src} alt="" className="h-24 w-auto mix-blend-multiply sm:h-28" />
  );
}

const BENEFITS = [
  {
    visual: <CardIllustration src="/ilustrace/vernost.png" />,
    title: "Věrnostní systém bez aplikací",
    description:
      "Zákazník přiloží telefon ke stojánku, hned sbírá body a vidí odměny. Žádné papírové kartičky ani aplikace navíc.",
    tags: ["Věrnostní systém", "Stojánek u pokladny"],
  },
  {
    visual: <CardIllustration src="/ilustrace/teploty.png" />,
    title: "Méně škod při výpadku chlazení",
    description:
      "Čidla hlídají teploty v lednicích a skladech. Když se něco mění, hned přijde upozornění na mobil.",
    tags: ["Hlídání teplot", "HACCP", "Alarm"],
  },
  {
    visual: <CardIllustration src="/ilustrace/provoz.png" />,
    title: "Přehled o provozu z mobilu",
    description:
      "Menu na webu, ceny nebo online objednávky upravíte z telefonu. Místo přepisování papírů máte všechno na jednom místě.",
    tags: ["Web", "Objednávky", "E-shop", "Cenovky"],
  },
  {
    visual: <CardIllustration src="/ilustrace/na-miru.png" />,
    title: "Potřebujete něco na míru?",
    description:
      "Když něco děláte pořád dokola ručně, často se to dá zjednodušit. Navrhnu k tomu hardware nebo software přesně pro ten jeden konkrétní úkol.",
    cta: { label: "Napište mi", href: "/kontakt" },
    accent: true,
  },
];

export default function Services() {
  return (
    <section
      id="nabidka"
      aria-labelledby="nabidka-nadpis"
      className="relative border-t border-brown/10 pb-[clamp(4rem,3rem+6vw,8rem)] pt-4"
    >
      <div className="relative mx-auto max-w-5xl px-6">
        <p className="eyebrow">Co konkrétně získáváte</p>
        <h2
          id="nabidka-nadpis"
          className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] font-semibold leading-[1.08] text-ink"
        >
          Místo pěti různých systémů jeden přehledný
        </h2>
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
          Nemusíte skládat pět aplikací od různých firem dohromady. Postavím vám
          jeden propojený systém — od webu přes objednávky až po čidla. Když je
          potřeba něco řešit, ozvete se přímo mně.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/sluzby"
            className="group inline-flex items-center gap-2 text-[1.05rem] font-semibold text-clay-deep underline decoration-clay/30 underline-offset-4 transition-colors hover:text-clay"
          >
            Celá nabídka
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 ease-out group-hover:translate-x-1"
            >
              <path
                d="M3.5 9h11M10 4.5 14.5 9 10 13.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/jak-to-funguje"
            className="group inline-flex items-center gap-2 text-[0.95rem] font-medium text-ink-soft underline decoration-brown/25 underline-offset-4 transition-colors hover:text-clay-deep"
          >
            Jak to funguje
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 ease-out group-hover:translate-x-1"
            >
              <path
                d="M3.5 9h11M10 4.5 14.5 9 10 13.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {BENEFITS.map((b) => (
            <BenefitCard key={b.title} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
