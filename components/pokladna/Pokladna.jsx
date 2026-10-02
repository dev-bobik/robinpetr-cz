import Link from "next/link";
import { PRICING } from "@/lib/pricing";

const cena = PRICING.find((p) => p.id === "pokladna");

/* Stránka pokladny s evidencí tržeb (EET 2.0), vznikla 2026-10-02 jako cíl
   odkazu z oslovovacích e-mailů. Fakta o EET jen se zdrojem (eet.gov.cz):
   zákon podepsán 17. 9. 2026, registrace v DIS+ od 1. 11. 2026, evidence
   od 1. 1. 2027. Výjimka pro paušalisty ověřena u SME Union 2026-10-02.
   Nepsat výši pokut ani „povinné pro všechny" — obojí bez zdroje.

   Kontakt jen písemně (Robin 2026-10-02): žádný slib telefonátu ani
   návštěvy. Cena se bere z lib/pricing.js; důvod „od" u měsíční částky
   musí zůstat ve větě (§ 1732 odst. 2 NOZ). */

const TERMINY = [
  {
    datum: "1. 11. 2026",
    text: "V daňovém portálu se dá zaregistrovat k evidenci a vyřídit si certifikát.",
  },
  {
    datum: "1. 1. 2027",
    text: "Začíná evidence tržeb. Leden je zkušební provoz.",
  },
];

const EVIDUJE_SE = [
  "Platby přímo v provozovně: hotově, kartou i QR kódem.",
  "Odesílá se jen částka, datum a číslo dokladu. Žádné položky ani rozpis DPH.",
  "Účtenku tisknout ani předávat povinně nemusíte.",
];

const UMI = [
  {
    title: "Tržby odešle sama",
    text: "Každý prodej pokladna sama nahlásí finanční správě. Vy jen markujete jako dosud.",
  },
  {
    title: "Jede i bez internetu",
    text: "Když vypadne připojení, prodáváte dál. Tržby se odešlou, jakmile je síť zpátky, se zákonnou lhůtou 48 hodin si poradí sama.",
  },
  {
    title: "Žádná procenta z karet",
    text: "Z plateb kartou si nikdo nic nebere. Platební terminál zůstává ten Váš.",
  },
  {
    title: "Všechno, co pokladna má mít",
    text: "Markování dotykem, účtenky, denní uzávěrka, sklad, stoly a obsluha. Na Vašem tabletu nebo počítači.",
  },
];

const POSTUP = [
  "Napíšete mi, jaký máte provoz a na čem chcete markovat.",
  "Provedu Vás instalací pokladny na tablet nebo počítač.",
  "Projdeme spolu registraci v daňovém portálu. Přihlašujete se tam sami, já Vám řeknu, co kam vyplnit.",
  "Nastavíme sortiment a zkusíme první zkušební prodej. Pak už jen prodáváte.",
];

const OTAZKY = [
  {
    q: "Mám paušální daň. Týká se mě to?",
    a: "Ve druhém a třetím pásmu ano. V prvním pásmu (příjmy do 1 milionu Kč) se můžete z evidence odhlásit, zaplatíte ale k paušální dani 1 400 Kč měsíčně navíc. Oznámit to musíte do 11. ledna 2027, pozdější oznámení neplatí.",
  },
  {
    q: "Co když vypadne internet?",
    a: "Pokladna prodává dál a tržby odešle, až bude připojení zpátky. Zákon na to dává 48 hodin a pokladna Vás upozorní, kdyby lhůta docházela.",
  },
  {
    q: "Potřebuji nový tablet a tiskárnu?",
    a: "Ne nutně. Pokladna běží na běžném tabletu nebo počítači. Tablet ani tiskárna v ceně nejsou, můžete použít svoje, nebo Vám je seženu.",
  },
  {
    q: "Už mám pokladnu od jiné firmy.",
    a: "Pak se nejdřív zeptejte svého dodavatele, jestli Vám evidenci tržeb doplní. Pokud ne, nebo je pro Vás drahý, napište mi.",
  },
];

function SectionKicker({ children }) {
  return (
    <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brown">
      {children}
    </p>
  );
}

function H2({ children }) {
  return (
    <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
      {children}
    </h2>
  );
}

export default function Pokladna() {
  return (
    <section className="relative py-[clamp(3.5rem,2.5rem+5vw,7rem)]">
      <div className="mx-auto max-w-3xl px-6">
        <p className="eyebrow">Pokladna</p>
        <h1 className="mt-4 font-display text-[clamp(2rem,1.3rem+2.8vw,3.2rem)] font-semibold leading-[1.06] text-ink">
          Pokladna připravená na evidenci tržeb
        </h1>
        <p className="mt-5 text-[1.15rem] leading-relaxed text-ink-soft">
          Od 1. ledna 2027 bude znovu povinná evidence tržeb. Mám pro to
          jednoduchou pokladnu, která tržby odesílá sama, a instalací i
          registrací Vás provedu.
        </p>
        {/* stejný snímek běžící pokladny jako na /sluzby */}
        <img
          src="/ilustrace/foto-pokladna-pult.jpg"
          alt="Tablet s pokladnou a tiskárna účtenek na pultu kavárny"
          width={800}
          height={600}
          className="mt-10 w-full rounded-2xl border border-brown/15 object-cover shadow-[0_24px_50px_-28px_rgba(60,40,20,0.45)]"
        />

        <div className="mt-16">
          <SectionKicker>// Co se mění</SectionKicker>
          <H2>Dvě data, která si zapsat</H2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {TERMINY.map((t) => (
              <article
                key={t.datum}
                className="rounded-2xl border border-brown/15 bg-card p-6"
              >
                <p className="font-display text-2xl font-semibold tabular-nums text-clay-deep">
                  {t.datum}
                </p>
                <p className="mt-2 text-[0.98rem] leading-snug text-ink-soft">
                  {t.text}
                </p>
              </article>
            ))}
          </div>
          <ul className="mt-6 space-y-2">
            {EVIDUJE_SE.map((point) => (
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
          <p className="mt-4 text-[0.9rem] text-ink-soft">
            Zdroj:{" "}
            <a
              href="https://eet.gov.cz/"
              className="underline decoration-clay/50 underline-offset-2 hover:text-ink"
              rel="noopener"
            >
              eet.gov.cz
            </a>{" "}
            (Finanční správa)
          </p>
        </div>

        <div className="mt-16">
          <SectionKicker>// Co pokladna umí</SectionKicker>
          <H2>Evidenci vyřeší za Vás</H2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {UMI.map((item) => (
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

        <div className="mt-16">
          <SectionKicker>// Jak to proběhne</SectionKicker>
          <H2>Čtyři kroky a prodáváte</H2>
          <ol className="mt-6 space-y-4">
            {POSTUP.map((krok, i) => (
              <li key={krok} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay/15 font-mono text-sm font-semibold text-clay-deep">
                  {i + 1}
                </span>
                <span className="pt-1 text-[1.02rem] leading-snug text-ink-soft">
                  {krok}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 rounded-2xl border-l-[3px] border-clay bg-card p-6 sm:p-8">
          <SectionKicker>// Cena</SectionKicker>
          <H2>{cena.text}</H2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
            Jednorázová částka zahrnuje instalaci, nastavení evidence tržeb
            a sortimentu a pomoc s registrací. Měsíční poplatek pokrývá provoz,
            aktualizace a podporu; začíná na {cena.monthlyCzk} Kč a roste podle zapnutých
            funkcí a velikosti provozu. Tablet ani tiskárna v ceně nejsou.
            Nejsem plátce DPH, ceny jsou konečné.
          </p>
        </div>

        <div className="mt-16">
          <SectionKicker>// Časté otázky</SectionKicker>
          <H2>Na co se lidé ptají</H2>
          <div className="mt-6 space-y-3">
            {OTAZKY.map((o) => (
              <details
                key={o.q}
                className="group rounded-2xl border border-brown/15 bg-card p-5"
              >
                <summary className="cursor-pointer list-none font-display text-lg font-semibold text-ink">
                  {o.q}
                </summary>
                <p className="mt-2 text-[0.98rem] leading-snug text-ink-soft">
                  {o.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-clay/30 bg-clay/[0.05] p-8 text-center">
          <h2 className="font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
            Chcete to mít vyřešené?
          </h2>
          <p className="mt-3 text-[1.02rem] text-ink-soft">
            Napište mi pár řádků o svém provozu a ozvu se.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-clay px-8 py-4 font-medium text-card shadow-[0_14px_30px_-12px_rgba(192,121,79,0.8)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-clay-deep"
            >
              Napsat mi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
