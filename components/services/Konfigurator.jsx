"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  PRICING,
  SLEVY,
  WEB_ZEBRIK,
  doplatekNaUroven,
  spoctiNabidku,
} from "@/lib/pricing";

/* Konfigurátor nabídky — klient si naklikne, co chce, a rovnou vidí cenu
   i slevu za to, že si bere víc věcí najednou.

   Nahradil dva pevné balíčky (2026-09-06). Pevné balíčky nutily vybrat si
   ze dvou krabic, do kterých se většina podniků netrefila; tohle nechá vybrat
   cokoli a množstevní slevu spočítá samo.

   Výpočet žije v lib/pricing.js (`spoctiNabidku`), ne tady — je to závazná
   nabídka podle § 1732 odst. 2 NOZ a patří ke zdroji pravdy o cenách. */

const czk = (n) => n.toLocaleString("cs-CZ");

/** Nejvyšší stupeň slevy — do textu, ať klient ví, kam se dá dojít. */
const MAX_SLEVA = Math.max(...SLEVY.map((s) => s.procent));

/** HACCP se účtuje za kus, takže potřebuje počet. Ostatní jsou 1 kus. */
const S_POCTEM = { haccp: { max: 12, jednotka: "čidel", jedno: "čidlo" } };

function Check({ checked, kulaty = false }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-colors duration-200 ${
        kulaty ? "rounded-full" : "rounded-md"
      } ${checked ? "border-clay-deep bg-clay-deep text-card" : "border-brown/30 bg-card"}`}
    >
      {checked && (
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path
            d="M2.5 7.5 6 11l5.5-7.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}

function Stepper({ value, max, jednotka, onChange, popis }) {
  const btn =
    "flex h-8 w-8 items-center justify-center rounded-lg border border-brown/25 bg-card font-mono text-base leading-none text-ink transition-colors hover:border-clay hover:text-clay-deep disabled:opacity-35 disabled:hover:border-brown/25 disabled:hover:text-ink";
  return (
    <div className="mt-3 flex items-center gap-2.5" onClick={(e) => e.preventDefault()}>
      <button
        type="button"
        className={btn}
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        aria-label={`Ubrat ${popis}`}
      >
        −
      </button>
      <span className="min-w-[5.5rem] text-center font-mono text-sm tabular-nums text-ink">
        {value} {jednotka}
      </span>
      <button
        type="button"
        className={btn}
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label={`Přidat ${popis}`}
      >
        +
      </button>
    </div>
  );
}

export default function Konfigurator() {
  /* { [id]: počet }. Klíč chybí = služba není vybraná. Web sem nepatří —
     ten má vlastní stav, protože se z něj vybírá právě jedna úroveň. */
  const [vyber, setVyber] = useState({});
  const [webUroven, setWebUroven] = useState(null);

  const web = useMemo(() => WEB_ZEBRIK.find((u) => u.id === webUroven) ?? null, [webUroven]);

  /* Vybraná úroveň webu vstupuje do výpočtu jako jedna běžná položka. */
  const nabidka = useMemo(
    () => spoctiNabidku(web ? { ...vyber, [web.id]: 1 } : vyber),
    [vyber, web],
  );
  const pocet = nabidka.polozky.length;

  /* Kolik služeb chybí do dalšího stupně slevy — drobná pobídka, ať je vidět,
     že se vyplatí přibrat ještě něco. */
  const dalsiStupen = useMemo(() => {
    const vyssi = [...SLEVY]
      .sort((a, b) => a.minPolozek - b.minPolozek)
      .find((s) => s.minPolozek > pocet);
    return vyssi ? { chybi: vyssi.minPolozek - pocet, procent: vyssi.procent } : null;
  }, [pocet]);

  function prepni(id) {
    setVyber((stav) => {
      const novy = { ...stav };
      if (novy[id]) delete novy[id];
      else novy[id] = 1;
      return novy;
    });
  }

  function nastavPocet(id, hodnota) {
    const max = S_POCTEM[id]?.max ?? 1;
    const orezany = Math.min(Math.max(hodnota, 1), max);
    setVyber((stav) => ({ ...stav, [id]: orezany }));
  }

  return (
    <section className="mx-auto mt-16 max-w-3xl px-6">
      <div>
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brown">
          // Sestavte si nabídku
        </p>
        <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
          Čím víc toho vezmete najednou, tím levněji
        </h2>
        <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
          Zaškrtněte, co by se vám hodilo. Cenu i slevu uvidíte hned —{" "}
          <span className="font-medium text-ink">
            až {MAX_SLEVA} % při čtyřech a víc službách
          </span>
          . Nic tím neobjednáváte.
        </p>
      </div>

      <div className="mt-8">
        {/* ------------------------- web jako žebřík ---------------------------
            Jeden podnik nemůže mít tři weby zároveň, takže se vybírá právě
            jedna úroveň. Po výběru se nižší přestanou nabízet a vyšší se ukážou
            jako doplatek rozdílu. Do počtu služeb pro slevu jde celá skupina
            jednou — povýšení webu není druhá služba. */}
        <div
          className={`rounded-xl border p-4 transition-colors duration-200 sm:p-5 ${
            web ? "border-clay/50 bg-clay/[0.07]" : "border-brown/15 bg-card"
          }`}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <p className="font-medium text-ink">Web</p>
            {web ? (
              <button
                type="button"
                onClick={() => setWebUroven(null)}
                className="font-mono text-[0.74rem] text-ink-soft underline decoration-brown/30 underline-offset-4 transition-colors hover:text-clay-deep"
              >
                Zrušit výběr
              </button>
            ) : (
              <p className="font-mono text-[0.74rem] text-ink-soft">vyberte jednu úroveň</p>
            )}
          </div>

          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {WEB_ZEBRIK.filter((u) => !web || u.uroven >= web.uroven).map((uroven) => {
              const vybrano = web?.id === uroven.id;
              const doplatek = vybrano ? null : doplatekNaUroven(web, uroven);
              return (
                <li key={uroven.id}>
                  <label
                    className={`flex h-full cursor-pointer items-start gap-3 rounded-lg border p-3 transition-all duration-200 ease-out ${
                      vybrano
                        ? "border-clay-deep/45 bg-card"
                        : "border-brown/15 bg-beige/40 hover:border-clay/35"
                    }`}
                  >
                    <input
                      type="radio"
                      name="web-uroven"
                      className="sr-only"
                      checked={vybrano}
                      onChange={() => setWebUroven(uroven.id)}
                    />
                    <Check checked={vybrano} kulaty />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.92rem] font-medium leading-snug text-ink">
                        {uroven.name}
                      </span>
                      <span className="mt-0.5 block font-mono text-[0.75rem] leading-snug text-ink-soft">
                        {doplatek && web ? (
                          <>
                            <span className="text-clay-deep">
                              +{czk(doplatek.oneTimeCzk)} Kč
                              {uroven.oneTimeFrom && " a výš"}
                            </span>
                            {doplatek.monthlyCzk > 0 &&
                              ` · +${czk(doplatek.monthlyCzk)} Kč/měs${uroven.monthlyFrom ? " a výš" : ""}`}
                          </>
                        ) : (
                          <>
                            {czk(uroven.oneTimeCzk)} Kč
                            {uroven.oneTimeFrom && " a výš"}
                            {uroven.monthlyCzk
                              ? ` · ${uroven.monthlyFrom ? "od " : ""}${czk(uroven.monthlyCzk)} Kč/měs`
                              : ""}
                          </>
                        )}
                      </span>
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>

          {web && web.uroven < WEB_ZEBRIK.length && (
            <p className="mt-3 text-[0.8rem] leading-snug text-ink-soft">
              Vyšší úroveň obsahuje tu nižší — doplácíte jen rozdíl, ne celou cenu znovu.
            </p>
          )}
        </div>

        {/* ------------------------------- výběr ------------------------------ */}
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {PRICING.filter((s) => s.skupina !== "web").map((sluzba) => {
            const vybrano = (vyber[sluzba.id] ?? 0) > 0;
            const pocty = S_POCTEM[sluzba.id];
            return (
              <li key={sluzba.id}>
                <label
                  className={`group flex h-full cursor-pointer flex-col rounded-xl border p-4 transition-all duration-200 ease-out ${
                    vybrano
                      ? "border-clay/50 bg-clay/[0.07] shadow-[0_8px_20px_-14px_rgba(168,98,56,0.6)]"
                      : "border-brown/15 bg-card hover:border-clay/35"
                  }`}
                >
                  <span className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={vybrano}
                      onChange={() => prepni(sluzba.id)}
                    />
                    <Check checked={vybrano} />
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium leading-snug text-ink">{sluzba.name}</span>
                      <span className="mt-1 block font-mono text-[0.78rem] leading-snug text-ink-soft">
                        {czk(sluzba.oneTimeCzk)} Kč
                        {sluzba.oneTimeFrom && " a výš"}
                        {sluzba.monthlyCzk ? (
                          <>
                            {" · "}
                            {sluzba.monthlyFrom && "od "}
                            {czk(sluzba.monthlyCzk)} Kč/měs
                          </>
                        ) : (
                          " · bez měsíčního"
                        )}
                        {pocty && " za kus"}
                      </span>
                    </span>
                  </span>

                  {vybrano && pocty && (
                    <Stepper
                      value={vyber[sluzba.id]}
                      max={pocty.max}
                      jednotka={vyber[sluzba.id] === 1 ? pocty.jedno : pocty.jednotka}
                      popis={pocty.jedno}
                      onChange={(v) => nastavPocet(sluzba.id, v)}
                    />
                  )}
                </label>
              </li>
            );
          })}
        </ul>

        {/* ------------------------------ souhrn ------------------------------ */}
        {/* ------------------------------ souhrn ------------------------------
            Pod mřížkou na plnou šířku, ne ve sloupci vedle — sekce tím drží
            stejnou šířku jako zbytek stránky (max-w-3xl) a nerozbíjí rytmus. */}
        <div
          className={`mt-5 rounded-2xl border p-6 transition-colors duration-300 ${
            pocet === 0
              ? "border-dashed border-brown/25 bg-beige/40"
              : "border-brown/20 bg-card shadow-[0_16px_40px_-26px_rgba(46,42,34,0.5)]"
          }`}
        >
          {pocet === 0 ? (
            <p className="text-center text-[0.95rem] text-ink-soft">
              Zaškrtněte výš, co by se vám hodilo — cena se spočítá sama.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:gap-10">
              {/* co je vybrané */}
              <div className="min-w-0">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-brown">
                  Vaše nabídka
                </p>
                <ul className="mt-3 space-y-1.5">
                  {nabidka.polozky.map((p) => (
                    <li
                      key={p.id}
                      className="flex justify-between gap-4 text-[0.9rem] text-ink-soft"
                    >
                      <span className="min-w-0">
                        {p.name}
                        {p.pocet > 1 && <span className="text-ink-soft/70"> × {p.pocet}</span>}
                      </span>
                      <span className="shrink-0 font-mono tabular-nums">
                        {czk(p.oneTimeCzk * p.pocet)} Kč
                      </span>
                    </li>
                  ))}
                </ul>

                {nabidka.procent > 0 && (
                  <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg bg-sage/25 px-3.5 py-2">
                    <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.12em] text-ink">
                      Sleva {nabidka.procent} %
                    </span>
                    <span className="font-mono text-[0.82rem] font-bold tabular-nums text-ink">
                      −{czk(nabidka.jednorazoveSleva)} Kč
                      {nabidka.mesicneSleva > 0 && (
                        <>
                          <span className="mx-1.5 font-normal text-ink-soft">·</span>
                          −{czk(nabidka.mesicneSleva)} Kč/měs
                        </>
                      )}
                    </span>
                  </p>
                )}

                {dalsiStupen && (
                  <p className="mt-3 text-[0.84rem] leading-snug text-ink-soft">
                    Přidejte ještě{" "}
                    <span className="font-medium text-ink">
                      {dalsiStupen.chybi === 1 ? "jednu službu" : `${dalsiStupen.chybi} služby`}
                    </span>{" "}
                    a sleva vyroste na {dalsiStupen.procent} %.
                  </p>
                )}

                {nabidka.odhad && (
                  <p className="mt-3 text-[0.82rem] leading-snug text-ink-soft">
                    Vybrali jste službu s cenou „od" — přesné číslo řeknu po schůzce, dřív než
                    začnu pracovat.
                  </p>
                )}
              </div>

              {/* částky + CTA */}
              <div className="border-t border-brown/15 pt-5 sm:min-w-[13rem] sm:border-l sm:border-t-0 sm:pl-10 sm:pt-0">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink-soft">
                  Jednorázově
                </p>
                <p className="mt-1 flex items-baseline gap-1.5">
                  <span className="font-mono text-[2rem] font-bold leading-none tabular-nums text-ink">
                    {nabidka.odhadJednorazove && (
                      <span className="text-[1.1rem] font-medium">od </span>
                    )}
                    {czk(nabidka.jednorazove)}
                  </span>
                  <span className="font-mono text-sm text-ink-soft">Kč</span>
                </p>
                {nabidka.jednorazoveSleva > 0 && (
                  <p className="mt-1 font-mono text-[0.78rem] text-ink-soft line-through decoration-clay/50">
                    {czk(nabidka.jednorazoveHrube)} Kč
                  </p>
                )}

                {nabidka.mesicneHrube > 0 && (
                  <>
                    <p className="mt-4 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink-soft">
                      Měsíčně
                    </p>
                    <p className="mt-1 flex items-baseline gap-1.5">
                      <span className="font-mono text-[1.4rem] font-bold leading-none tabular-nums text-ink">
                        {nabidka.odhadMesicne && (
                          <span className="text-[0.95rem] font-medium">od </span>
                        )}
                        {czk(nabidka.mesicne)}
                      </span>
                      <span className="font-mono text-sm text-ink-soft">Kč/měs</span>
                    </p>
                    {nabidka.mesicneSleva > 0 && (
                      <p className="mt-1 font-mono text-[0.78rem] text-ink-soft line-through decoration-clay/50">
                        {czk(nabidka.mesicneHrube)} Kč
                      </p>
                    )}
                  </>
                )}

                <Link
                  href="/kontakt"
                  className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay px-6 py-3 font-medium text-card transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-clay-deep"
                >
                  Chci tuhle nabídku
                  <svg
                    width="17"
                    height="17"
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
                <p className="mt-2 text-center text-[0.76rem] text-ink-soft">
                  Nezávazné — ozvu se a probereme to.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
