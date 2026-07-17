import Link from "next/link";

/* Stránka /sluzby — nabídka produktů do detailu (konkrétní + obecné „na míru").
   Přehled zůstává na home; tady je každý produkt rozepsaný. Bez konkrétních cen. */

/* Pořadí = prodejní žebřík (od nejlevnějšího vstupu po zakázky na míru),
   proto číslování. Ilustrace sdílené s home (public/ilustrace). */
const SERVICES = [
  {
    name: "Recenze tag",
    flag: "levný začátek",
    img: "/ilustrace/foto-tag.jpg",
    what: "Kartička na stůl nebo pult, přes kterou zákazník napíše Google recenzi na jedno přiložení telefonu.",
    benefit:
      "Recenze rozhodují o tom, koho Google ukáže první. Čím víc jich máte, tím víc lidí vás najde.",
    how: "V kartičce je NFC čip a QR kód. Telefon ji přečte a rovnou otevře okno pro recenzi, zákazník nic nehledá.",
    price: "690 Kč s instalací",
  },
  {
    name: "Věrnostní systém",
    flag: "vlajková loď",
    accent: true,
    img: "/ilustrace/foto-vernost.jpg",
    what: "Věrnostní program, na který zákazníkům stačí telefon v kapse.",
    benefit:
      "Stálý zákazník utratí víc a nestojí vás reklamu. A konečně uvidíte, kdo k vám chodí a jak často.",
    how: "U pokladny přiloží telefon ke stojánku, přičte se mu bod a vidí, kolik chybí do odměny. Podruhé už ho systém pozná sám.",
    price: "2 990 Kč stojánek na míru + 490 Kč/měs provoz",
  },
  {
    name: "Web podniku",
    img: "/ilustrace/foto-web.jpg",
    what: "Web, který lidi najdou na Googlu: menu, otevírací doba, fotky a kontakt.",
    benefit:
      "Vypadáte důvěryhodně a změnu menu nebo cen za vás udělám já. Žádné přepisování PDF a shánění webaře.",
    how: "Postavím ho na rychlé šabloně a upravím vašemu podniku. Změny menu, cen a otevíračky jsou v měsíční správě.",
    price: "9 900 Kč + 390 Kč/měs správa",
  },
  {
    name: "Online objednávky",
    img: "/ilustrace/foto-objednavky.jpg",
    what: "Objednávání a placení přímo na vašem webu. Bez rozvozových aplikací a jejich provizí.",
    benefit:
      "Rozvozové aplikace si berou 25–30 % z každé objednávky. Vlastní objednávky vám ty peníze nechají a zaplatí se za pár týdnů.",
    how: "Zákazník objedná z mobilu a vám se objednávka objeví v přehledu. Vy ji jen odbavíte.",
    price: "od 19 900 Kč + 790 Kč/měs, bez provizí",
  },
  {
    name: "E-shop na míru",
    img: "/ilustrace/foto-objednavky.jpg",
    what: "Vlastní e-shop, kde zákazník zaplatí kartou a zboží mu přijde domů. Produkty, košík, platby, doprava i admin, ve kterém si to spravujete sami.",
    benefit:
      "Prodáváte i mimo otevírací dobu a mimo své město. Bez provizí tržišť a bez měsíčních poplatků za pronajatou platformu.",
    how: "Napojím platby kartou i převodem a dopravu (PPL, Zásilkovna). Objednávky, sklad a faktury máte v jednom přehledu.",
    price: "od 45 000 Kč + 1 500 Kč/měs správa",
  },
  {
    name: "Hlídání podniku (HACCP)",
    img: "/ilustrace/foto-haccp.jpg",
    what: "Bezdrátová čidla, která za vás měří teploty v lednicích a mrazácích.",
    benefit:
      "Papíry k HACCP se vyplňují samy. O vypadlém mrazáku víte za pár minut, ne ráno nad zkaženým zbožím.",
    how: "Čidlo měří nonstop a posílá data do přehledu. Když teplota vyletí, přijde vám zpráva na telefon.",
    price: "990 Kč instalace + 149 Kč/měs za čidlo",
  },
  {
    name: "Něco na míru",
    img: "/ilustrace/foto-namiru.jpg",
    what: "Věc, kterou v podniku děláte pořád dokola ručně, se většinou dá zautomatizovat. Postavím vám na ni nástroj.",
    benefit:
      "Naprogramuju software, navrhnu a zapojím hardware. Dostanete řešení té jedné vaší situace a člověka, který za něj ručí.",
    price: "cena po schůzce",
    cta: { label: "Napište mi, co potřebujete", href: "/kontakt" },
  },
];

/* Nejčastější obavy majitelů — odpovědi rovnou na stránce,
   aby nebrzdily rozhodnutí. */
const FAQ = [
  {
    q: "Musím něco umět nebo instalovat?",
    a: "Ne. Přijedu, všechno nainstaluju a ukážu vám i personálu, jak se to používá. Vaši zákazníci si nic nestahují, stačí jim telefon.",
  },
  {
    q: "Co se stane s daty mých zákazníků?",
    a: "Data zůstávají v EU a podepíšeme zpracovatelskou smlouvu podle GDPR. Data patří vašemu podniku, nikomu je neprodávám ani nepředávám.",
  },
  {
    q: "Co když se něco rozbije?",
    a: "Servis je v měsíční ceně. Voláte nebo píšete přímo mně, ne call centru. Systém stavím a spravuju sám, takže vím, kde hledat.",
  },
  {
    q: "Jak dlouho trvá, než to běží?",
    a: "Recenze tag nainstaluju na místě za pár minut. Věrnostní stojánek vyrábím na míru, obvykle do dvou týdnů od schůzky. Web podle rozsahu, obvykle do dvou týdnů.",
  },
  {
    q: "Kolik to stojí doopravdy?",
    a: "Ceny výš jsou konečné, nejsem plátce DPH. Kde je uvedeno „od“, řeknu přesné číslo po schůzce, ne až po zahájení práce.",
  },
];

/* Cena jako fyzická cenovka zavěšená přes spodní hranu karty — cenovky jsou
   doslova jeden z produktů, které prodávám. Očko = tečka vlevo. */
function PriceTag({ children, accent }) {
  return (
    <p
      className={`absolute -bottom-4 right-6 inline-flex rotate-[1.5deg] items-center gap-2 rounded-lg border px-3.5 py-2 font-mono text-[0.8rem] font-medium shadow-[0_10px_20px_-10px_rgba(46,42,34,0.5)] transition-transform duration-200 group-hover:rotate-[-1deg] motion-reduce:transition-none ${
        accent
          ? "border-clay-deep/40 bg-clay text-card"
          : "border-brown/25 bg-card text-ink"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent ? "bg-card/70" : "bg-brown/40"}`}
      />
      {children}
    </p>
  );
}

function ServiceDetail({ index, name, flag, accent, img, what, benefit, how, price, cta }) {
  return (
    <article
      className={`group relative rounded-2xl border p-6 pb-8 shadow-[0_10px_30px_-18px_rgba(46,42,34,0.4)] transition duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8 sm:pb-9 ${
        accent ? "border-clay/40 bg-clay/[0.05]" : "border-brown/15 bg-card"
      }`}
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brown">
            {String(index + 1).padStart(2, "0")}
            {flag ? (
              <span className="ml-3 rounded-full bg-clay/15 px-2.5 py-1 text-[0.6rem] tracking-wider text-clay-deep">
                {flag}
              </span>
            ) : null}
          </p>
          <h2 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
            {name}
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
            {what}
          </p>
        </div>
        {/* fotka jako polaroid připnutý do zápisníku — střídavý náklon */}
        {img ? (
          <img
            src={img}
            alt=""
            className={`-mr-1 -mt-1 hidden h-28 w-40 shrink-0 rounded-lg border-4 border-white object-cover shadow-[0_14px_28px_-14px_rgba(46,42,34,0.55)] min-[420px]:block sm:h-32 sm:w-44 ${
              index % 2 ? "-rotate-2" : "rotate-2"
            }`}
          />
        ) : null}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-beige/60 p-4">
          <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-clay-deep">
            Co vám to přinese
          </p>
          <p className="mt-2 text-[0.96rem] leading-snug text-ink-soft">
            {benefit}
          </p>
        </div>
        {how ? (
          <div className="rounded-xl bg-beige/60 p-4">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-brown">
              Jak to funguje
            </p>
            <p className="mt-2 text-[0.96rem] leading-snug text-ink-soft">
              {how}
            </p>
          </div>
        ) : null}
      </div>

      {price ? <PriceTag accent={accent}>{price}</PriceTag> : null}

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
          Co pro váš podnik{" "}
          <span className="relative inline-block whitespace-nowrap">
            postavím
            {/* stejný ruční akcent jako v hero na home */}
            <svg
              className="absolute left-0 top-full h-2 w-full text-clay"
              viewBox="0 0 120 10"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 6 C 34 3, 86 4, 118 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                pathLength="300"
                className="motion-safe:[stroke-dasharray:300] motion-safe:[animation:draw-underline_0.9s_var(--ease-out-soft)_0.15s_both]"
              />
            </svg>
          </span>
        </h1>
        <p className="mt-5 text-[1.15rem] leading-relaxed text-ink-soft">
          Tohle stavím v podnicích nejčastěji. Když potřebujete něco jiného,{" "}
          <span className="font-medium text-ink">udělám to na míru</span>.
          Všechno dodává jeden člověk a všechno je propojené do jednoho celku.
        </p>
      </div>

      {/* produkty — na desktopu vodorovný scroll (sekce se přilepí a produkty
          jedou do strany), na mobilu klasicky pod sebou. Plná šířka kvůli
          vodorovnému posunu. Řízení je čisté CSS, viz .services* v globals.css. */}
      <div className="services mt-12" style={{ "--n": SERVICES.length }}>
        <div className="services__viewport">
          <div className="services__track">
            {SERVICES.map((s, i) => (
              <ServiceDetail key={s.name} index={i} {...s} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6">
        {/* jak platíte */}
        <div className="mt-14">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brown">
            // Cena
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Žádná překvapení
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
            Jednorázová částka pokrývá výrobu a zavedení, měsíční částka provoz
            a servis.{" "}
            <span className="font-medium text-ink">
              Nejsem plátce DPH, ceny jsou konečné.
            </span>{" "}
            U větších projektů řeknu přesné číslo po schůzce, dřív než začnu
            pracovat. Smlouva vzniká až vzájemným potvrzením objednávky — víc v{" "}
            <Link
              href="/obchodni-podminky"
              className="text-clay-deep underline decoration-brown/30 underline-offset-4 hover:text-clay"
            >
              obchodních podmínkách
            </Link>
            .
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-14">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brown">
            // Časté otázky
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Na co se majitelé ptají
          </h2>
          {/* rozklikávací bez JS (details/summary) — stránka zůstává statická */}
          <div className="mt-6 space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-brown/15 bg-card open:border-clay/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.q}
                  </h3>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 text-clay-deep transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  >
                    <path
                      d="M9 3v12M3 9h12"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-[0.98rem] leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA — ilustrace stojánku podpírá text „položím stojánek na pult" */}
        <div className="mt-14 flex flex-col items-center gap-6 rounded-2xl border border-clay/30 bg-clay/[0.05] p-8 text-center sm:flex-row sm:text-left">
          <img
            src="/ilustrace/foto-vernost.jpg"
            alt=""
            className="h-32 w-44 shrink-0 rotate-[-3deg] rounded-lg border-4 border-white object-cover shadow-[0_16px_32px_-14px_rgba(46,42,34,0.55)] sm:h-36 sm:w-52"
          />
          <div className="flex-1">
            <h2 className="font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
              Chcete to vidět naživo?
            </h2>
            <p className="mt-3 max-w-md text-[1.02rem] leading-relaxed text-ink-soft">
              Přijedu, položím stojánek na pult a vyzkoušíte si ho vlastním
              telefonem. Ukázka vás nic nestojí.
            </p>
            <div className="mt-6 flex justify-center sm:justify-start">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 rounded-full bg-clay px-8 py-4 font-medium text-card shadow-[0_14px_30px_-12px_rgba(192,121,79,0.8)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-clay-deep"
              >
                Domluvit ukázku
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
      </div>
    </section>
  );
}
