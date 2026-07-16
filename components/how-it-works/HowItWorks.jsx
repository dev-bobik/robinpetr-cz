import Link from "next/link";

/* „Jak to funguje" — obecná rovina: kdo jsem, jak se mnou spolupracovat,
   proč mi věřit. NE rozpis produktů (ten patří k jednotlivým řešením). */

const STEPS = [
  {
    title: "Ozvete se — nezávazně",
    desc: "Napíšete pár vět, ozvu se. Domluvíme se na kafi nebo hovoru, nic vás to nezavazuje.",
  },
  {
    title: "Probereme, co váš podnik potřebuje",
    desc: "Poslechnu si, co vás zdržuje a co by reálně pomohlo — bez technického žargonu.",
  },
  {
    title: "Navrhnu řešení na míru (ne šablonu)",
    desc: "Dostanete návrh přesně na váš podnik, ne univerzální krabici, kterou nikdo nepoužije.",
  },
  {
    title: "Postavím a nasadím",
    desc: "Software i hardware postavím, propojím a rozjedu u vás — ať to celé funguje jako jeden systém.",
  },
  {
    title: "Starám se dál — jsem po ruce, když něco hoří",
    desc: "Nezmizím po předání. Když je průšvih, řešíte ho se mnou, ne s call centrem.",
  },
];

const OFFER = [
  {
    title: "Vracející se zákazníci",
    text: "Věrnost, co zákazníka přivede zpátky — bez plastových kartiček a aplikací.",
  },
  {
    title: "Klidnější hlava",
    text: "Hlídám váš podnik — třeba teploty v lednicích — abyste o problému věděli hned.",
  },
  {
    title: "Míň chaosu",
    text: "Web a online objednávky přehledně na jednom místě.",
  },
  {
    title: "Hardware na míru",
    text: "Děláte něco ručně, co vás zdržuje? Postavím vám to — software i hardware.",
  },
];

function CtaLink({ children, className = "" }) {
  return (
    <Link
      href="/kontakt"
      className={`group inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 font-medium text-card shadow-[0_14px_30px_-12px_rgba(192,121,79,0.8)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-clay-deep ${className}`}
    >
      {children}
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
  );
}

function SectionKicker({ children }) {
  return (
    <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brown">
      {children}
    </p>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative py-[clamp(3.5rem,2.5rem+5vw,7rem)]">
      <div className="mx-auto max-w-3xl px-6">
        {/* 1 — CO DĚLÁM (obecně) */}
        <p className="eyebrow">Jak to funguje</p>
        <h1 className="mt-4 font-display text-[clamp(2rem,1.3rem+2.8vw,3.2rem)] font-semibold leading-[1.06] text-ink">
          Jeden parťák na celou digitalizaci
        </h1>
        <p className="mt-5 text-[1.15rem] leading-relaxed text-ink-soft">
          Digitalizuju podniky — spojuju{" "}
          <span className="font-medium text-ink">
            software a vlastní hardware do jednoho propojeného celku
          </span>
          , od jednoho člověka. Nejsem výčet krabiček, ale parťák, co vám to
          postaví, nasadí a postará se, aby to celé fungovalo.
        </p>

        {/* 2 — JAK SPOLUPRÁCE PROBÍHÁ (jádro) */}
        <div className="mt-16">
          <SectionKicker>// Jak spolupráce probíhá</SectionKicker>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,1.2rem+1.8vw,2.4rem)] font-semibold leading-tight text-ink">
            Pět kroků, žádná věda
          </h2>

          <ol className="mt-8 space-y-4">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="flex gap-4 rounded-2xl border border-brown/15 bg-card p-5 sm:gap-5 sm:p-6"
              >
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-clay font-mono text-base font-bold text-card"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[0.96rem] leading-snug text-ink-soft">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA v průběhu čtení */}
        <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-brown/15 bg-beige-deep/40 p-6">
          <p className="flex-1 text-[1.02rem] font-medium text-ink">
            Krok jedna je na vás — zbytek zařídím.
          </p>
          <CtaLink>Napsat mi</CtaLink>
        </div>

        {/* 3 — PROČ JÁ */}
        <div className="mt-16">
          <SectionKicker>// Proč já</SectionKicker>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Místní člověk, ne neosobní systém
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
            Software i hardware máte{" "}
            <span className="font-medium text-ink">v jedněch rukou</span>. Jsem
            lokální, po ruce a dělám řešení na míru — na rozdíl od velkých
            neosobních systémů i běžných webařů, co skončí u webu a hardware
            neřeší.
          </p>
        </div>

        {/* 4 — JAK PŘEMÝŠLÍM */}
        <div className="mt-16 rounded-2xl border-l-[3px] border-clay bg-card p-6 sm:p-8">
          <SectionKicker>// Jak přemýšlím</SectionKicker>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Neprodávám krabičky, řeším potřebu
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
            Hardware je ta hmatatelná část, ale hodnota je v{" "}
            <span className="font-medium text-ink">propojení a službě</span> —
            ne v zařízeních samotných. Všechno drží pohromadě jeden člověk —
            nic není ostrov a nikdo si nepřehazuje odpovědnost.
          </p>
        </div>

        {/* 5 — CO NABÍZÍM (krátce + odkaz) */}
        <div className="mt-16">
          <SectionKicker>// Co konkrétně získáváte</SectionKicker>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Ve zkratce
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {OFFER.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-brown/15 bg-card p-5"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {o.title}
                </h3>
                <p className="mt-1.5 text-[0.95rem] leading-snug text-ink-soft">
                  {o.text}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/#nabidka"
            className="group mt-5 inline-flex items-center gap-2 font-mono text-sm font-medium text-clay-deep underline decoration-clay/30 underline-offset-4 transition-colors hover:text-clay"
          >
            Detaily u jednotlivých řešení
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

        {/* 6 — CENA (obecně) */}
        <div className="mt-16">
          <SectionKicker>// Cena</SectionKicker>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Na míru a férově
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
            Cenu dělám na míru vašemu podniku i rozpočtu.{" "}
            <span className="font-medium text-ink">
              Většina investice se vám vrátí
            </span>{" "}
            na tom, co ušetříte na čase a lidech. Konkrétní čísla dávají smysl až
            u jednotlivých řešení, ne od stolu.
          </p>
        </div>

        {/* 7 — CTA */}
        <div className="mt-16 rounded-2xl border border-clay/30 bg-clay/[0.05] p-8 text-center">
          <h2 className="font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Ozvěte se, nezávazně to probereme
          </h2>
          <div className="mt-6 flex justify-center">
            <CtaLink className="px-8 py-4">Napsat mi</CtaLink>
          </div>
        </div>
      </div>

      {/* Plovoucí CTA během čtení (desktop) */}
      <Link
        href="/kontakt"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-clay px-5 py-3 text-sm font-medium text-card shadow-[0_16px_36px_-12px_rgba(192,121,79,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-clay-deep lg:inline-flex"
      >
        Napsat mi
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M3.5 9h11M10 4.5 14.5 9 10 13.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </section>
  );
}
