import Link from "next/link";
import NabidkaFocus from "./NabidkaFocus";
import { PRICING } from "@/lib/pricing";

const priceText = (id) => PRICING.find((p) => p.id === id).text;

/* Stránka /sluzby — nabídka produktů do detailu (konkrétní + obecné „na míru").
   Přehled zůstává na home; tady je každý produkt rozepsaný. Bez konkrétních cen. */

/* Pořadí = prodejní žebřík (od nejlevnějšího vstupu po zakázky na míru),
   proto číslování. Ilustrace sdílené s home (public/ilustrace). */
const SERVICES = [
  {
    name: "Digitální vizitka",
    flag: "rychlý start",
    img: "/ilustrace/nfc-web.png",
    what: "Stojánek na stůl nebo pult s vaším logem. Zákazník přiloží telefon k logu nebo naskenuje QR a otevře se mu, kam potřebujete — recenze, menu, věrnost.",
    benefit:
      "Recenze pomáhají tomu, aby vás Google ukázal dřív. Když jich máte víc, lidi vás snadněji najdou.",
    how: "Vyrábím ho na míru vašemu podniku: logo v plastickém reliéfu, barvy podle vás, QR panel a cedulka se jménem. NFC čip je schovaný pod logem, zvenku není vidět.",
    price: priceText("vizitka"),
  },
  {
    name: "Věrnostní systém",
    flag: "hlavní řešení",
    accent: true,
    img: "/ilustrace/vernost-web.jpg",
    what: "Věrnostní program, na který zákazníkům stačí telefon v kapse.",
    benefit:
      "Stálý zákazník utratí víc a nemusíte ho pokaždé znovu lákat reklamou. Navíc vidíte, kdo chodí a jak často.",
    how: "U pokladny stojí stojánek s displejem. Zákazník zmáčkne tlačítko, naskenuje QR, který se ukáže, a hned vidí, kolik mu chybí do odměny. QR se pokaždé mění, takže si body nikdo nepřipíše zpovzdálí.",
    price: priceText("vernost"),
  },
  {
    name: "Web podniku (jedna stránka)",
    img: "/ilustrace/foto-web.jpg",
    what: "Když vám stačí jedna přehledná stránka — menu, otevírací doba, fotky a kontakt, všechno pod sebou.",
    benefit:
      "Působíte důvěryhodně a změny menu nebo cen za vás udělám já. Nemusíte přepisovat PDF ani shánět webaře.",
    how: "Postavím ho na rychlém základu a upravím podle vašeho podniku. Změny menu, cen i otevírací doby jsou v měsíční správě.",
    price: priceText("web-jedna"),
  },
  {
    name: "Web podniku (víc stránek)",
    img: "/ilustrace/foto-web.jpg",
    what: "Když máte víc služeb, pobočky nebo reference a chcete pro každé téma vlastní stránku s vlastním menu.",
    benefit:
      "Každá stránka cílí na jiné vyhledávání, takže vás Google nabídne víc lidem. Web má prostor růst spolu s podnikem.",
    how: "V ceně je až pět stránek podle vašeho zadání (např. úvod, služby, reference, ceník, kontakt). Změny textů i přidávání obsahu jsou v měsíční správě.",
    price: priceText("web-vice"),
  },
  {
    name: "Online objednávky",
    img: "/ilustrace/foto-objednavky.jpg",
    what: "Objednávání a platba přímo na vašem webu. Bez rozvozových aplikací a jejich provizí.",
    benefit:
      "Rozvozové aplikace si z každé objednávky berou 25–30 %. Vlastní objednávky nechají peníze u vás.",
    how: "Zákazník objedná z mobilu a vám se objednávka ukáže v přehledu. Vy ji jen odbavíte.",
    price: priceText("objednavky"),
  },
  {
    name: "E-shop na míru",
    img: "/ilustrace/eshop-web2.jpg",
    what: "Vlastní e-shop, kde zákazník zaplatí kartou a zboží mu přijde domů. Produkty, košík, platby, doprava i admin, ve kterém si to spravujete sami.",
    benefit:
      "Prodáváte i mimo otevírací dobu a mimo své město. Bez provizí tržišť a bez měsíčních poplatků za pronajatou platformu.",
    how: "Napojím platby kartou i převodem a dopravu (PPL, Zásilkovna). Objednávky, sklad i faktury máte v jednom přehledu.",
    price: priceText("eshop"),
  },
  {
    name: "Hlídání podniku (HACCP)",
    img: "/ilustrace/foto-haccp.jpg",
    what: "Bezdrátová čidla, která měří teploty v lednicích a mrazácích.",
    benefit:
      "Záznamy pro HACCP se vedou samy. O vypadlém mrazáku víte za pár minut, ne až ráno, kdy je zboží zkažené.",
    how: "Čidlo měří nonstop a posílá data do přehledu. Jakmile teplota překročí limit, přijde vám zpráva na telefon.",
    price: priceText("haccp"),
  },
  {
    name: "Pokladna",
    flag: "připravujeme",
    soon: true,
    /* skutečný snímek z běžící pokladny (Software/pokladna), ne ilustrace */
    img: "/ilustrace/foto-pokladna.jpg",
    what: "Pokladna na tablet nebo počítač. Markování dotykem, účtenky, denní uzávěrka — a funguje i bez internetu.",
    benefit:
      "Neplatíte měsíční pronájem pokladny a data zůstávají u vás. Když vypadne připojení, prodáváte dál.",
    how: "Běží přímo v zařízení, nepotřebuje server. Účtenku vytisknete na běžnou termotiskárnu.",
    /* Záměrně bez ceny — není spuštěná. Proto taky není v lib/pricing.js:
       ten plní schema.org Offer a nabídka bez ceny by byla vadný structured data. */
    cta: { label: "Chci vědět, až bude hotová", href: "/kontakt" },
  },
  {
    name: "Něco na míru",
    img: "/ilustrace/foto-namiru.jpg",
    what: "Věc, kterou v podniku děláte pořád dokola ručně, se většinou dá zjednodušit. Postavím vám na ni nástroj.",
    benefit:
      "Naprogramuju software, navrhnu i zapojím hardware. Dostanete řešení pro tu jednu konkrétní situaci.",
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
    a: "Digitální vizitku vyrobím a přivezu obvykle do týdne od schůzky. Věrnostní stojánek vyrábím na míru, obvykle do dvou týdnů. Web bývá hotový v podobném termínu, podle rozsahu.",
  },
  {
    q: "Kolik to stojí doopravdy?",
    a: "Ceny výš jsou konečné, nejsem plátce DPH. Kde je uvedeno „od“, řeknu přesné číslo po schůzce, ne až po zahájení práce.",
  },
];

/* Cena jako fyzická cenovka zavěšená přes spodní hranu karty — cenovky jsou
   doslova jeden z produktů, které prodávám. Očko = tečka vlevo.
   Na úzké obrazovce zůstává v normálním toku: delší ceny se tam lámou na dva
   řádky a zavěšená cenovka pak přerůstala přes odkaz na kontakt pod ní. */
function PriceTag({ children, accent }) {
  return (
    <p
      className={`mt-5 flex w-fit rotate-[1.5deg] items-center gap-2 rounded-lg border px-3.5 py-2 font-mono text-[0.8rem] font-medium shadow-[0_10px_20px_-10px_rgba(46,42,34,0.5)] transition-transform duration-200 group-hover:rotate-[-1deg] motion-reduce:transition-none sm:absolute sm:-bottom-4 sm:right-6 sm:mt-0 sm:inline-flex ${
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

function ServiceDetail({ index, name, flag, accent, soon, img, what, benefit, how, price, cta }) {
  /* Výchozí odkaz na kontakt; produkty s vlastním textem (na míru, pokladna)
     si ho přebijí přes `cta`. */
  const link = cta ?? { label: "Napište mi", href: "/kontakt" };

  return (
    <article
      className={`group relative rounded-2xl border p-6 pb-8 shadow-[0_10px_30px_-18px_rgba(46,42,34,0.4)] transition duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8 sm:pb-9 ${
        /* „připravujeme" = zašedlá karta bez barvy značky, ať je na první
           pohled jasné, že tohle se ještě neprodává */
        soon
          ? "border-dashed border-brown/25 bg-beige/40 shadow-none"
          : accent
            ? "border-clay/40 bg-clay/[0.05]"
            : "border-brown/15 bg-card"
      }`}
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brown">
            {String(index + 1).padStart(2, "0")}
            {flag ? (
              /* „připravujeme" schválně jinou barvou než prodejní štítky
                 („rychlý start", „hlavní řešení"), ať se nedá splést s nabídkou */
              <span
                className={`ml-3 rounded-full px-2.5 py-1 text-[0.6rem] tracking-wider ${
                  soon
                    ? "bg-brown/12 text-brown"
                    : "bg-clay/15 text-clay-deep"
                }`}
              >
                {flag}
              </span>
            ) : null}
          </p>
          <h2
            className={`mt-2 font-display text-xl font-semibold sm:text-2xl ${
              soon ? "text-ink/55" : "text-ink"
            }`}
          >
            {name}
          </h2>
          {/* „what" vedle fotky až od tabletu; na mobilu je pod fotkou (níž) */}
          <p
            className={`mt-3 hidden text-[1.02rem] leading-relaxed sm:block ${
              soon ? "text-ink-soft/65" : "text-ink-soft"
            }`}
          >
            {what}
          </p>
        </div>
        {/* fotka jako polaroid — na tabletu/desktopu malá vpravo u nadpisu */}
        {img ? (
          <img
            src={img}
            alt=""
            className={`-mr-1 -mt-1 hidden h-28 w-40 shrink-0 rounded-lg border-4 object-cover sm:block sm:h-44 sm:w-60 lg:h-48 lg:w-64 ${
              index % 2 ? "-rotate-2" : "rotate-2"
            } ${
              /* odbarvená fotka = další signál, že produkt ještě neběží */
              soon
                ? "border-white/70 opacity-60 shadow-[0_10px_20px_-14px_rgba(46,42,34,0.4)] grayscale"
                : "border-white shadow-[0_14px_28px_-14px_rgba(46,42,34,0.55)]"
            }`}
          />
        ) : null}
      </div>

      {/* mobil: velká fotka přes celou šířku + „what" pod ní, ať karta není
          jen hutný text (na tabletu/desktopu je fotka i text výš, viz nahoře) */}
      {img ? (
        <img
          src={img}
          alt=""
          className={`mt-4 aspect-[16/10] w-full rounded-lg border-4 object-cover sm:hidden ${
            index % 2 ? "-rotate-1" : "rotate-1"
          } ${
            soon
              ? "border-white/70 opacity-60 shadow-[0_10px_20px_-14px_rgba(46,42,34,0.4)] grayscale"
              : "border-white shadow-[0_14px_28px_-14px_rgba(46,42,34,0.55)]"
          }`}
        />
      ) : null}
      <p
        className={`mt-4 text-[1.02rem] leading-relaxed sm:hidden ${
          soon ? "text-ink-soft/65" : "text-ink-soft"
        }`}
      >
        {what}
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className={`rounded-xl p-4 ${soon ? "bg-brown/[0.06]" : "bg-beige/60"}`}>
          <p
            className={`font-mono text-[0.64rem] uppercase tracking-[0.16em] ${
              soon ? "text-brown/70" : "text-clay-deep"
            }`}
          >
            Co vám to přinese
          </p>
          <p
            className={`mt-2 text-[0.96rem] leading-snug ${
              soon ? "text-ink-soft/65" : "text-ink-soft"
            }`}
          >
            {benefit}
          </p>
        </div>
        {how ? (
          <div className={`rounded-xl p-4 ${soon ? "bg-brown/[0.06]" : "bg-beige/60"}`}>
            <p
              className={`font-mono text-[0.64rem] uppercase tracking-[0.16em] ${
                soon ? "text-brown/70" : "text-brown"
              }`}
            >
              Jak to funguje
            </p>
            <p
              className={`mt-2 text-[0.96rem] leading-snug ${
                soon ? "text-ink-soft/65" : "text-ink-soft"
              }`}
            >
              {how}
            </p>
          </div>
        ) : null}
      </div>

      {price ? <PriceTag accent={accent}>{price}</PriceTag> : null}

      {/* Odkaz na kontakt má KAŽDÁ karta — ať nikdo nemusí kontakt hledat
          jinde na stránce. Produkt si může vlastní text přebít přes `cta`. */}
      <Link
        href={link.href}
        className="group mt-5 inline-flex items-center gap-2 font-mono text-sm font-medium text-clay-deep underline decoration-clay/30 underline-offset-4 transition-colors hover:text-clay"
      >
        {link.label}
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
    </article>
  );
}

export default function Sluzby() {
  /* FAQ jako strukturovaná data — může Googlu vygenerovat rozbalovací
     otázky přímo ve výsledcích a pomáhá AI pochopit odpovědi. Statická
     data pod kontrolou, proto dangerouslySetInnerHTML (standard schema.org). */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="relative py-[clamp(3.5rem,2.5rem+5vw,7rem)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        {/* úvod */}
        <p className="eyebrow">Nabídka</p>
        <h1 className="mt-4 font-display text-[clamp(2rem,1.3rem+2.8vw,3.2rem)] font-semibold leading-[1.06] text-ink">
          Co pro váš podnik{" "}
          <span className="relative inline-block whitespace-nowrap">
            udělám
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
          Tohle dělám v podnicích nejčastěji. Můžete si vzít jednu věc, nebo si
          postupně poskládat víc —{" "}
          <span className="font-medium text-ink">
            všechno spolu funguje a máte to na jednom místě
          </span>
          . Věrnostní stojánek nebo čidla do lednic u běžného webaře nedostanete.
        </p>
      </div>

      {/* produkty — na desktopu vodorovný scroll (sekce se přilepí a produkty
          jedou do strany), na mobilu klasicky pod sebou. Plná šířka kvůli
          vodorovnému posunu. Řízení je čisté CSS, viz .services* v globals.css. */}
      <div className="services mt-12" style={{ "--n": SERVICES.length }}>
        <div className="services__viewport">
          <div className="services__track">
            {SERVICES.map((s, i) => (
              <div key={s.name} className="services__cell">
                <ServiceDetail index={i} {...s} />
              </div>
            ))}
          </div>
        </div>
        <NabidkaFocus />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        {/* společný přehled — patří ke všem produktům výš, proto není samostatná karta */}
        <div className="mt-14">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brown">
            // Přehled
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Všechno vidíte na jednom místě
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
            Věrnost, teploty z čidel i denní tržby máte v jednom přehledu, který
            si otevřete v telefonu. Zapnuté v něm je jen to, co u vás běží, a je
            součástí měsíční částky u produktů výš — neplatí se zvlášť.{" "}
            <Link
              href="/#prehled"
              className="font-medium text-clay-deep underline decoration-clay/30 underline-offset-4 transition-colors hover:text-clay"
            >
              Jak vypadá
            </Link>
            .
          </p>
        </div>

        {/* jak platíte */}
        <div className="mt-14">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brown">
            // Cena
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Ceny dopředu
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
            Jednorázová částka pokrývá výrobu a zavedení, měsíční částka provoz
            a servis.{" "}
            <span className="font-medium text-ink">
              Nejsem plátce DPH, ceny jsou konečné.
            </span>{" "}
            U větších projektů řeknu přesné číslo po schůzce, dřív než začnu
            pracovat. Smlouva vzniká až potvrzením objednávky — víc v{" "}
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
