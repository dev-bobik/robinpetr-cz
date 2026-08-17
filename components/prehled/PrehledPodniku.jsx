import Link from "next/link";

/* Sekce na home pod nabídkou — společný přehled, který podnik dostane
   k věrnosti, čidlům i tržbám. Obsah odpovídá modulům platformy
   (Software/platforma/dashboard/src/moduly/registry.tsx).

   VIZUÁL: sekce je záměrně bez obrázku. Kartička z hero je vymyšlená grafika
   a tady, kde se popisuje reálný produkt, by lhala. */

const POLOZKY = [
  {
    stitek: "Věrnost",
    text: "Kolik máte zákazníků, kolik bodů se načetlo a kdo se vrací. Bod zákazníkovi načtete přímo tady.",
  },
  {
    stitek: "Teploty",
    text: "Každé čidlo s aktuální teplotou a průběhem za posledních 24 hodin. Když teplota vyjede z mezí, přijde upozornění.",
  },
  {
    stitek: "Tržby",
    text: "Denní tržba a počet prodejů za posledních sedm dní, poskládané z pokladny i e-shopu.",
  },
];

export default function PrehledPodniku() {
  return (
    <section
      id="prehled"
      aria-labelledby="prehled-nadpis"
      className="relative scroll-mt-24 border-t border-brown/10 py-[clamp(4rem,3rem+6vw,7rem)]"
    >
      <div className="relative mx-auto max-w-5xl px-6">
        <p className="eyebrow">Kde to všechno vidíte</p>
        <h2
          id="prehled-nadpis"
          className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] font-semibold leading-[1.08] text-ink"
        >
          Jeden přehled pro celý podnik
        </h2>
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
          Ke každé věci, kterou vám postavím, patří přehled — stránka, kterou si
          otevřete v prohlížeči na telefonu i na počítači. Nemusíte se přihlašovat
          do několika systémů a hlídat, kde co je. Čísla se obnovují sama každou
          minutu.
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-8">
          {POLOZKY.map((p) => (
            <div key={p.stitek}>
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-clay-deep">
                {p.stitek}
              </dt>
              <dd className="mt-1.5 text-[1.02rem] leading-relaxed text-ink-soft">
                {p.text}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
          <span className="font-medium text-ink">
            Přehled se neplatí zvlášť.
          </span>{" "}
          Je součástí měsíční částky u věrnostního systému i u hlídání teplot.
          Zapnuté v něm máte jen to, co u vás skutečně běží.{" "}
          <Link
            href="/kontakt"
            className="font-medium text-clay-deep underline decoration-clay/30 underline-offset-4 transition-colors hover:text-clay"
          >
            Pokud máte zájem, napište
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
