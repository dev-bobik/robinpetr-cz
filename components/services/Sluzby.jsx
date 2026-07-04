import Link from "next/link";

/* Stránka /sluzby — nabídka produktů do detailu (konkrétní + obecné „na míru").
   Přehled zůstává na home; tady je každý produkt rozepsaný. Bez konkrétních cen. */

const SERVICES = [
  {
    name: "Věrnostní systém",
    flag: "vlajková loď",
    what: "Vracející se zákazníci — bez papírových kartiček a bez aplikací.",
    benefit:
      "Zákazník, co se vrací, je ten nejlevnější. Přivedu vám ho zpátky a vy poprvé uvidíte, kdo to vlastně je.",
    how: "U pokladny přiloží telefon, přičte se bod a hned vidí, kolik mu chybí do odměny. Podruhé už ho systém pozná sám.",
  },
  {
    name: "Hlídání podniku (HACCP)",
    what: "Bezdrátová čidla, co za vás hlídají teploty v lednicích a mrazácích.",
    benefit:
      "Klid v hlavě a papíry na HACCP hotové samy. O problému víte dřív, než se zboží zkazí.",
    how: "Čidlo měří nonstop, data tečou do přehledu. Když teplota uteče, cinkne vám alarm rovnou do telefonu.",
  },
  {
    name: "Web a online objednávky",
    what: "Web, kde si zákazník objedná a zaplatí online — a vy máte objednávky na jednom místě.",
    benefit:
      "Míň vyzvánějícího telefonu ve špičce, míň chyb a objednávky i mimo otevíračku.",
    how: "Zákazník objedná z mobilu, objednávka padne rovnou k vám. Žádných pět aplikací, co spolu nemluví.",
  },
  {
    name: "Recenze tag",
    flag: "levný začátek",
    what: "Malý tag na stůl nebo pult, co lidem usnadní napsat vám Google recenzi.",
    benefit:
      "Víc a lepších recenzí znamená víc lidí, co vás najdou. Malá věc s velkým efektem.",
    how: "Zákazník přiloží telefon nebo naskenuje kód a je rovnou u recenze — nemusí nic hledat.",
  },
  {
    name: "Něco na míru",
    what: "Máte věc, co pořád dokola děláte ručně a bere vám čas? Postavím vám na ni nástroj přesně na váš podnik.",
    benefit:
      "Software i hardware od jednoho člověka — ne šablona, ale řešení vaší konkrétní situace.",
    cta: { label: "Napište mi, co potřebujete", href: "/kontakt" },
  },
];

function ServiceDetail({ name, flag, what, benefit, how, cta }) {
  return (
    <article className="rounded-2xl border border-brown/15 bg-card p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
          {name}
        </h2>
        {flag ? (
          <span className="rounded-full bg-clay/15 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-clay-deep">
            {flag}
          </span>
        ) : null}
      </div>

      <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">{what}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-brown/10 bg-beige/50 p-4">
          <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-clay-deep">
            Co vám to přinese
          </p>
          <p className="mt-2 text-[0.96rem] leading-snug text-ink-soft">
            {benefit}
          </p>
        </div>
        {how ? (
          <div className="rounded-xl border border-brown/10 bg-beige/50 p-4">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-brown">
              Jak to funguje
            </p>
            <p className="mt-2 text-[0.96rem] leading-snug text-ink-soft">
              {how}
            </p>
          </div>
        ) : null}
      </div>

      {cta ? (
        <Link
          href={cta.href}
          className="group mt-5 inline-flex items-center gap-2 font-mono text-sm font-medium text-clay-deep underline decoration-clay/30 underline-offset-4 transition-colors hover:text-clay"
        >
          {cta.label}
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
      ) : null}
    </article>
  );
}

export default function Sluzby() {
  return (
    <section className="relative py-[clamp(3.5rem,2.5rem+5vw,7rem)]">
      <div className="mx-auto max-w-3xl px-6">
        {/* úvod */}
        <p className="eyebrow">Nabídka</p>
        <h1 className="mt-4 font-display text-[clamp(2rem,1.3rem+2.8vw,3.2rem)] font-semibold leading-[1.06] text-ink">
          Co pro váš podnik postavím
        </h1>
        <p className="mt-5 text-[1.15rem] leading-relaxed text-ink-soft">
          Konkrétní věci, co reálně pomůžou — a když potřebujete něco vlastního,{" "}
          <span className="font-medium text-ink">postavím to na míru</span>.
          Všechno od jednoho člověka a propojené do jednoho celku.
        </p>

        {/* produkty */}
        <div className="mt-12 space-y-5">
          {SERVICES.map((s) => (
            <ServiceDetail key={s.name} {...s} />
          ))}
        </div>

        {/* cena (obecně) */}
        <div className="mt-14">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brown">
            // Cena
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Na míru a férově
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
            Cenu dělám na míru vašemu podniku i rozpočtu.{" "}
            <span className="font-medium text-ink">
              Většina investice se vám vrátí
            </span>{" "}
            na tom, co ušetříte na čase a lidech. Konkrétní čísla řeknu, až spolu
            probereme, co přesně potřebujete — ne od stolu.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-clay/30 bg-clay/[0.05] p-8 text-center">
          <h2 className="font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Nevíte, co by vám sedlo? Probereme to.
          </h2>
          <div className="mt-6 flex justify-center">
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-clay px-8 py-4 font-medium text-card shadow-[0_14px_30px_-12px_rgba(192,121,79,0.8)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-clay-deep"
            >
              Napsat mi
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
          </div>
        </div>
      </div>
    </section>
  );
}
