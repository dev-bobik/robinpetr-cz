import Link from "next/link";
import BenefitCard from "./BenefitCard";
import StampsMotif from "./motifs/StampsMotif";
import PulseMotif from "./motifs/PulseMotif";
import NodesMotif from "./motifs/NodesMotif";
import BuildMotif from "./motifs/BuildMotif";

/* "Co pro váš podnik udělám" — přínosy, ne seznam produktů.
   Karty jsou znovupoužitelné (BenefitCard) i pro budoucí /sluzby. */

const BENEFITS = [
  {
    visual: <StampsMotif />,
    title: "Vracející se zákazníci",
    description:
      "Zákazník přiloží telefon, sbírá body a vidí, kolik mu chybí do odměny. Žádné papírové kartičky, co se ztrácejí, ani aplikace, co si nikdo nenainstaluje.",
    tags: ["Věrnostní systém", "NFC stojánek"],
  },
  {
    visual: <PulseMotif />,
    title: "Míň starostí",
    description:
      "Čidla hlídají teploty v lednicích a mrazácích nonstop. Když něco hrozí, cinkne vám to rovnou do telefonu — ne až ráno nad zkaženým zbožím.",
    tags: ["Hlídání teplot", "HACCP", "Alarm"],
  },
  {
    visual: <NodesMotif />,
    title: "Zjednodušený podnik",
    description:
      "Web, online objednávky i cenovky, co přepíšete z mobilu. Všechno na jednom místě a propojené — konec papírů a aplikací, co spolu nemluví.",
    tags: ["Web", "Objednávky", "E-shop", "Cenovky"],
  },
  {
    visual: <BuildMotif />,
    title: "Něco na míru?",
    description:
      "Máte věc, co pořád dokola děláte ručně? Řekněte mi ji — postavím vám na ni nástroj. Software i hardware, od jednoho člověka.",
    cta: { label: "Napište mi", href: "/kontakt" },
    accent: true,
  },
];

export default function Services() {
  return (
    <section
      id="nabidka"
      aria-labelledby="nabidka-nadpis"
      className="relative border-t border-brown/10 pb-[clamp(4rem,3rem+6vw,8rem)] pt-6"
    >
      <div className="relative mx-auto max-w-5xl px-6">
        <p className="eyebrow">Co nabízím</p>
        <h2
          id="nabidka-nadpis"
          className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] font-semibold leading-[1.08] text-ink"
        >
          Co pro váš podnik udělám
        </h2>
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
          Ne pět aplikací od pěti dodavatelů, co se navzájem neznají.{" "}
          <span className="font-medium text-ink">Jeden propojený celek</span> —
          web, věrnost, čidla i objednávky spolu mluví a drží je{" "}
          <span className="font-medium text-ink">jeden člověk</span>, co za to
          ručí.
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
