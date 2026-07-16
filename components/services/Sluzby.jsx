import Link from "next/link";

/* Stránka /sluzby — nabídka produktů do detailu (konkrétní + obecné „na míru").
   Přehled zůstává na home; tady je každý produkt rozepsaný. Bez konkrétních cen. */

const SERVICES = [
  {
    name: "Věrnostní systém",
    flag: "vlajková loď",
    what: "Věrnostní program, na který zákazníkům stačí telefon v kapse.",
    benefit:
      "Stálý zákazník utratí víc a nestojí vás reklamu. A konečně uvidíte, kdo k vám chodí a jak často.",
    how: "U pokladny přiloží telefon ke stojánku, přičte se mu bod a vidí, kolik chybí do odměny. Podruhé už ho systém pozná sám.",
  },
  {
    name: "Hlídání podniku (HACCP)",
    what: "Bezdrátová čidla, která za vás měří teploty v lednicích a mrazácích.",
    benefit:
      "Papíry k HACCP se vyplňují samy. O vypadlém mrazáku víte za pár minut, ne ráno nad zkaženým zbožím.",
    how: "Čidlo měří nonstop a posílá data do přehledu. Když teplota vyletí, přijde vám zpráva na telefon.",
  },
  {
    name: "Web a online objednávky",
    what: "Web, kde si zákazník objedná a zaplatí. Objednávky vám padají na jedno místo.",
    benefit:
      "Ve špičce vám míň zvoní telefon a objednávky chodí i po zavíračce.",
    how: "Zákazník objedná z mobilu a vám se objednávka objeví v přehledu. Vy ji jen odbavíte.",
  },
  {
    name: "Recenze tag",
    flag: "levný začátek",
    what: "Kartička na stůl nebo pult, přes kterou zákazník napíše Google recenzi na jedno přiložení telefonu.",
    benefit:
      "Recenze rozhodují o tom, koho Google ukáže první. Čím víc jich máte, tím víc lidí vás najde.",
    how: "V kartičce je NFC čip a QR kód. Telefon ji přečte a rovnou otevře okno pro recenzi, zákazník nic nehledá.",
  },
  {
    name: "Něco na míru",
    what: "Věc, kterou v podniku děláte pořád dokola ručně, se většinou dá zautomatizovat. Postavím vám na ni nástroj.",
    benefit:
      "Naprogramuju software, navrhnu a zapojím hardware. Dostanete řešení té jedné vaší situace a člověka, který za něj ručí.",
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
          Tohle stavím v podnicích nejčastěji. Když potřebujete něco jiného,{" "}
          <span className="font-medium text-ink">udělám to na míru</span>.
          Všechno dodává jeden člověk a všechno je propojené do jednoho celku.
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
            Cena se odvíjí od velikosti podniku a od toho, co potřebujete.
            Konkrétní číslo vám řeknu po první schůzce, až si projdeme váš
            provoz.{" "}
            <span className="font-medium text-ink">
              Počítám to tak, aby se vám investice vrátila
            </span>{" "}
            na ušetřeném čase.
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
