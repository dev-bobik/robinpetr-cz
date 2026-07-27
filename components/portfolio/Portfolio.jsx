import ProjectCard from "./ProjectCard";

/* Výběr portfolia — krátký výběr referencí na home.
   Plná /portfolio stránka přijde později (pak se ProjectCard použije znovu). */

const PROJECTS = [
  {
    type: "Web · objednávky",
    title: "Kebab Deluxe",
    description:
      "Web restaurace v Hradci Králové s vlastním objednávkovým systémem.",
    result:
      "Stálí zákazníci objednávají napřímo — bez provize rozvozovým platformám.",
    image: "/portfolio/kebab-deluxe.webp",
    imageAlt: "Úvodní stránka webu Kebab Deluxe",
  },
  {
    type: "Webová aplikace",
    title: "Přihlašování na školní akce",
    description:
      "Nástroj pro přihlašování studentů na akce — s tříděním, filtry a párováním přihlášek proti školní evidenci.",
    result:
      "Přihlášky se samy spárují s reálnými studenty — žádné ruční dohledávání v seznamech.",
    image: "/portfolio/skola-akce.webp",
    imageAlt: "Přehled přihlášek na školní akci s kontrolou proti evidenci studentů",
  },
  {
    type: "Hardware · IoT",
    title: "HACCP měření teplot",
    description:
      "Vlastní čidlo na ESP32, které hlídá teploty lednic a mrazáků a posílá je do přehledu.",
    result:
      "Záznamy pro hygienickou kontrolu běží samy — konec papírových tabulek a ručního zapisování.",
    image: "/ilustrace/foto-haccp.jpg",
    imageAlt: "Teplotní čidlo umístěné v lednici s potravinami",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-nadpis"
      className="relative border-t border-brown/10 pb-[clamp(4rem,3rem+6vw,8rem)] pt-8"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow">Reference</p>
        <h2
          id="portfolio-nadpis"
          className="mt-4 font-display text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] font-semibold leading-[1.08] text-ink"
        >
          Výběr portfolia
        </h2>
        <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
          Pár věcí, co reálně slouží lidem — ne ukázky, ale živé weby, aplikace
          i vlastní hardware.
        </p>

        {/* 3 položky: 1 pod sebou (mobil/tablet) nebo 3 v řadě (desktop),
            nikdy ošklivé 2+1 z dvousloupcového rozložení. */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
