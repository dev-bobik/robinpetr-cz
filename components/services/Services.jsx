import Link from "next/link";
import BenefitCard from "./BenefitCard";

/* "Co pro váš podnik udělám" — přínosy, ne seznam produktů.
   Karty jsou znovupoužitelné (BenefitCard) i pro budoucí /sluzby. */

/* Ručně kreslené ilustrace v paletě webu (public/ilustrace).
   Dekorativní — prázdný alt. Zdrojová PNG jsou malá, proto pevná menší výška.
   Pozadí dlaždice = barva vypálená v PNG, aby obrázek splynul beze švů. */
function CardIllustration({ src }) {
  return (
    <div className="flex h-28 items-center justify-center overflow-hidden rounded-xl border border-brown/10 bg-[#f9f5ec]">
      <img src={src} alt="" className="h-full w-auto object-contain" />
    </div>
  );
}

const BENEFITS = [
  {
    visual: <CardIllustration src="/ilustrace/vernost.png" />,
    title: "Věrnostní systém bez stahování aplikací",
    description:
      "Zákazník jen přiloží telefon k dřevěnému stojánku na stole, okamžitě sbírá body a vidí své odměny. Žádné papírové kartičky a žádné otravné aplikace, které si nikdo nechce instalovat.",
    tags: ["Věrnostní systém", "NFC stojánek"],
  },
  {
    visual: <CardIllustration src="/ilustrace/teploty.png" />,
    title: "Už žádné vyhozené suroviny kvůli vypadlému mrazáku",
    description:
      "Chytrá čidla nonstop hlídají teploty v lednicích a skladech. Jakmile teplota stoupne, okamžitě vám pípne varování na mobilu. Zachráníte zboží včas, ne až ráno, když už je pozdě.",
    tags: ["Hlídání teplot", "HACCP", "Alarm"],
  },
  {
    visual: <CardIllustration src="/ilustrace/provoz.png" />,
    title: "Celý provoz pod palcem přímo z mobilu",
    description:
      "Aktualizace menu na webu, změna cenovek na baru nebo správa online objednávek. Všechno upravíte na pár kliknutí z telefonu. Konec ručního přepisování tabulí a chaosu v papírech.",
    tags: ["Web", "Objednávky", "E-shop", "Cenovky"],
  },
  {
    visual: <CardIllustration src="/ilustrace/na-miru.png" />,
    title: "Máte specifický problém? Vyřeším ho.",
    description:
      "Děláte v podniku nějakou rutinu pořád dokola ručně? Řekněte mi to. Navrhnu a vyrobím hardware nebo naprogramuju software přesně pro tento jeden účel. Na klíč a bez starostí.",
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
          Místo pěti různých systémů jen jeden, co opravdu funguje
        </h2>
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
          Zapomeňte na pět aplikací od různých firem, které spolu nekomunikují.
          Postavím vám jeden propojený systém — od webu přes objednávky až po
          chytrá čidla. A hlavně: máte na telefonu jednoho člověka, který za to
          celé osobně ručí.
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
