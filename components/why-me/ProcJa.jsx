import Link from "next/link";

const DIFFERENCES = [
  {
    title: "Věci, které jinde nedostanete",
    text: "Věrnostní stojánek, čidla do lednic nebo cenovky na baru — vlastní zařízení, které běžný webař nenabídne.",
  },
  {
    title: "Jeden dodavatel, jeden přehled",
    text: "Věrnost, web, objednávky i čidla máte od jednoho člověka a vidíte je na jednom místě.",
  },
  {
    title: "Dotažené do detailu",
    text: "Nedodávám polotovar. Věci vypadají i fungují tak, aby dávaly smysl v provozu.",
  },
  {
    title: "Řešíte to se mnou",
    text: "Když je potřeba něco změnit nebo je problém, voláte přímo mně.",
  },
];

const RENTAL_COSTS = [
  "Šablona splývá s konkurencí a zákazník nemá důvod vybrat si zrovna vás.",
  "Když nástroje nefungují spolu, dělají v provozu chyby.",
  "Než zákazník něco prokliká, často radši odejde jinam.",
  "Za pronajatou platformu platíte pořád a stejně vypadáte podobně jako ostatní.",
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

export default function ProcJa() {
  return (
    <section className="relative py-[clamp(3.5rem,2.5rem+5vw,7rem)]">
      <div className="mx-auto max-w-3xl px-6">
        <p className="eyebrow">Proč já</p>
        <h1 className="mt-4 font-display text-[clamp(2rem,1.3rem+2.8vw,3.2rem)] font-semibold leading-[1.06] text-ink">
          Proč spolupracovat se mnou
        </h1>
        <p className="mt-5 text-[1.15rem] leading-relaxed text-ink-soft">
          Většina konkurence nabízí stejnou šablonu všem. Ode mě dostanete
          řešení, které je přizpůsobené vašemu provozu, propojené a dotažené do
          detailu.
        </p>

        <div className="mt-16">
          <SectionKicker>// Dvě cesty</SectionKicker>
          <h2 className="mt-3 font-display text-[clamp(1.7rem,1.2rem+1.8vw,2.4rem)] font-semibold leading-tight text-ink">
            Dvě cesty: šablona, nebo řešení na míru
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-brown/15 bg-card p-6">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-brown">
                Krabice od velké firmy
              </p>
              <p className="mt-3 text-[0.98rem] leading-snug text-ink-soft">
                Stejná šablona jako u stovek jiných podniků. Platíte měsíčně,
                mluvíte s podporou a hardware si řešíte zvlášť.
              </p>
            </article>
            <article className="rounded-2xl border border-clay/35 bg-clay/[0.05] p-6">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-clay-deep">
                Řešení ode mě
              </p>
              <p className="mt-3 text-[0.98rem] leading-snug text-ink-soft">
                Postavené pro váš podnik, od webu po hardware na pultě. Vypadá
                to jako váš podnik, ne jako cizí šablona.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-16">
          <SectionKicker>// Co je v tom navíc</SectionKicker>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Čtyři věci navíc
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {DIFFERENCES.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-brown/15 bg-card p-5"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[0.95rem] leading-snug text-ink-soft">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border-l-[3px] border-clay bg-card p-6 sm:p-8">
          <SectionKicker>// Co vás stojí šablonovost</SectionKicker>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Nejdražší je zákazník, který odejde jinam
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
            Když web, objednávky a věrnost nefungují spolu, zákazník to pozná
            hned. A jakmile odejde ke konkurenci, bývá to dražší než úspora na
            začátku.
          </p>
          <ul className="mt-5 space-y-2">
            {RENTAL_COSTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay"
                />
                <span className="text-[0.98rem] leading-snug text-ink-soft">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <SectionKicker>// Pro koho to je</SectionKicker>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Pro podniky, které chtějí fungovat líp
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
            Pokud chcete, aby si vás zákazník zapamatoval a vracel se, dává smysl
            mít podnik jako jeden propojený celek. Přesně na to jsem tu.
          </p>
        </div>

        <div className="mt-16 rounded-2xl border border-clay/30 bg-clay/[0.05] p-8 text-center">
          <h2 className="font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Ozvěte se, projdeme to spolu
          </h2>
          <div className="mt-6 flex justify-center">
            <CtaLink className="px-8 py-4">Napsat mi</CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}