import ProjectCard from "./ProjectCard";

/* Výběr portfolia — krátký výběr referencí na home.
   Plná /portfolio stránka přijde později (pak se ProjectCard použije znovu). */

const PROJECTS = [
  {
    type: "Web · objednávky",
    title: "Kebab [název — doplň]",
    description:
      "Web s vlastním objednávkovým systémem pro kebab provoz.",
    result:
      "Stálí zákazníci objednávají napřímo — provize rozvozovým platformám odpadá.",
  },
  {
    type: "Web",
    title: "[Projekt 2 — doplň]",
    description: "[Krátký popis — co to bylo, doplním.]",
  },
  {
    type: "E-shop",
    title: "[Projekt 3 — doplň]",
    description: "[Krátký popis — co to bylo, doplním.]",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-nadpis"
      className="relative border-t border-brown/10 py-[clamp(4rem,3rem+6vw,8rem)]"
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
          Pár věcí, co reálně běží — od webů po objednávkové systémy.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
