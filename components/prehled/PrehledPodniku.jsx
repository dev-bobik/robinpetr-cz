import Link from "next/link";
import DashboardCard from "@/components/hero/DashboardCard";

/* Sekce na home pod nabídkou — společný přehled, který podnik dostane
   k věrnosti, čidlům i tržbám. Obsah odpovídá modulům platformy
   (Software/platforma/dashboard/src/moduly/registry.tsx).

   VIZUÁL: až bude snímek z běžícího přehledu, ulož ho jako
   public/ilustrace/foto-dashboard.jpg a nastav SNIMEK na tu cestu.
   Do té doby se ukáže kartička z hero sekce (menší, jiný úhel). */
const SNIMEK = null;

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

        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="flex justify-center md:justify-start">
            {SNIMEK ? (
              <img
                src={SNIMEK}
                alt="Přehled podniku: věrnostní program, teploty z čidel a denní tržby na jedné stránce"
                width={1280}
                height={860}
                loading="lazy"
                className="w-full max-w-md rotate-[-1.5deg] rounded-lg border-4 border-white shadow-[0_24px_48px_-24px_rgba(46,42,34,0.5)]"
              />
            ) : (
              <DashboardCard className="rotate-[1.5deg]" />
            )}
          </div>

          <dl className="space-y-6">
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
        </div>

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
            Můžu vám ho ukázat naživo
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
