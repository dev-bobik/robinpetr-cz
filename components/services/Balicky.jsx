import Link from "next/link";
import { PRICING, BALICKY, polozkyBalicku } from "@/lib/pricing";

/* Balíčky — hlavní nabídka na /sluzby, nad jednotlivými produkty.
   Pozice není „dělám weby", ale „vybavím provozovnu celou"; balíček je to,
   co ten příběh nese, jednotlivé produkty pod tím jsou to, z čeho se skládá.

   Obsah balíčku se nevypisuje ručně — bere se přes `polozkyBalicku` z id
   v lib/pricing.js, aby se karta nemohla rozejít s ceníkem.

   Poslední balíček v poli je ten „plný" (Restaurace) a dostane barvu značky
   jako hlavní volba. Viz docs/superpowers/specs/2026-09-03-pozice-a-balicky-design.md */

function Check({ accent }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={`mt-0.5 shrink-0 ${accent ? "text-clay-deep" : "text-brown"}`}
    >
      <path
        d="M2.5 7.5 6 11l5.5-7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BalicekCard({ balicek, accent }) {
  const polozky = polozkyBalicku(balicek);

  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-6 shadow-[0_10px_30px_-18px_rgba(46,42,34,0.4)] transition duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8 ${
        accent ? "border-clay/40 bg-clay/[0.05]" : "border-brown/15 bg-card"
      }`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-2xl font-semibold text-ink">
          {balicek.name}
        </h3>
        {accent ? (
          <span className="rounded-full bg-clay/15 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-clay-deep">
            vše dohromady
          </span>
        ) : null}
      </div>
      <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-brown">
        {balicek.proKoho}
      </p>

      <ul className="mt-5 space-y-2.5">
        {polozky.map((p) => (
          <li key={p.id} className="flex gap-2.5 text-[0.98rem] leading-snug text-ink-soft">
            <Check accent={accent} />
            <span>{p.name}</span>
          </li>
        ))}
        <li className="flex gap-2.5 text-[0.98rem] leading-snug text-ink-soft">
          <Check accent={accent} />
          <span>
            Přehled — věrnost, teploty i tržby na jednom místě{" "}
            <span className="text-ink-soft/70">(v ceně)</span>
          </span>
        </li>
      </ul>

      {/* volitelné doplňky se účtují za kus, proto vizuálně oddělené od obsahu */}
      {balicek.volitelne?.length ? (
        <div className="mt-5 rounded-xl bg-beige/60 p-4">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-brown">
            Volitelně navíc
          </p>
          <ul className="mt-2 space-y-1">
            {balicek.volitelne.map((id) => {
              const p = PRICING.find((x) => x.id === id);
              return (
                <li key={id} className="text-[0.92rem] leading-snug text-ink-soft">
                  {p.name} — {p.text}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      {/* cena dole, ať jsou karty zarovnané i při různém počtu položek */}
      <div className="mt-auto pt-6">
        <p
          className={`inline-flex w-fit items-center gap-2 rounded-lg border px-3.5 py-2 font-mono text-[0.85rem] font-medium ${
            accent
              ? "border-clay-deep/40 bg-clay text-card"
              : "border-brown/25 bg-card text-ink"
          }`}
        >
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent ? "bg-card/70" : "bg-brown/40"}`}
          />
          {balicek.text}
        </p>
        <p className="mt-2.5 text-[0.88rem] leading-snug text-ink-soft">
          Oproti jednotlivým službám ušetříte{" "}
          <span className="font-medium text-ink">
            {balicek.usporaOneTimeCzk.toLocaleString("cs-CZ")} Kč
          </span>{" "}
          a{" "}
          <span className="font-medium text-ink">
            {balicek.usporaMonthlyCzk} Kč měsíčně
          </span>
          .
        </p>

        <Link
          href="/kontakt"
          className="group mt-4 inline-flex items-center gap-2 font-mono text-sm font-medium text-clay-deep underline decoration-clay/30 underline-offset-4 transition-colors hover:text-clay"
        >
          Chci {balicek.name.toLowerCase()}
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
    </article>
  );
}

export default function Balicky() {
  return (
    <section className="mx-auto mt-14 max-w-3xl px-6">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brown">
        // Balíčky
      </p>
      <h2 className="mt-3 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.2rem)] font-semibold leading-tight text-ink">
        Nejčastěji vybavím provozovnu celou
      </h2>
      <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
        Jednotlivé věci jde koupit zvlášť, ale dohromady dávají větší smysl —
        a vyjdou levněji.{" "}
        <span className="font-medium text-ink">
          Všechno stavím a spravuju sám, takže to spolu opravdu mluví
        </span>{" "}
        a máte na to jeden kontakt místo čtyř dodavatelů.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {BALICKY.map((b, i) => (
          <BalicekCard
            key={b.id}
            balicek={b}
            /* poslední = plný balíček, dostane barvu značky jako hlavní volba */
            accent={i === BALICKY.length - 1}
          />
        ))}
      </div>

      <p className="mt-6 text-[0.98rem] leading-relaxed text-ink-soft">
        Nehodí se ani jeden?{" "}
        <span className="font-medium text-ink">Poskládáme vlastní.</span> Vyberete
        si z produktů níž jen to, co potřebujete — přehled je v ceně vždycky.
      </p>
    </section>
  );
}
