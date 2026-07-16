import Link from "next/link";

/* Znovupoužitelná karta přínosu — používá ji sekce na home i budoucí /sluzby.
   Přínos (nadpis) + popis + konkrétní produkty jako "důkaz" (mono štítky).
   Volitelně CTA odkaz. Hover = jemné zvednutí (respektuje prefers-reduced-motion). */

export default function BenefitCard({
  visual,
  title,
  description,
  tags = [],
  cta,
  accent = false,
}) {
  return (
    <article
      className={`group flex flex-col rounded-2xl border p-6 shadow-[0_10px_30px_-18px_rgba(46,42,34,0.45)] transition duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-24px_rgba(46,42,34,0.5)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        accent
          ? "border-clay/35 bg-clay/[0.05] hover:border-clay/60"
          : "border-brown/15 bg-card hover:border-clay/40"
      }`}
    >
      {/* ilustrace plave v pravém horním rohu karty (podle předlohy) */}
      {visual ? <div className="-mr-1 -mt-1 mb-3 flex justify-end">{visual}</div> : null}

      <h3 className="font-display text-xl font-semibold leading-tight text-ink sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-[0.98rem] leading-snug text-ink-soft">
        {description}
      </p>

      {tags.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-brown/15 bg-beige/60 px-2.5 py-1 font-mono text-[0.64rem] uppercase tracking-wide text-brown"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {cta ? (
        <Link
          href={cta.href}
          className="group/cta mt-5 inline-flex items-center gap-1.5 font-mono text-sm font-medium text-clay-deep transition-colors hover:text-clay"
        >
          {cta.label}
          <svg
            width="16"
            height="16"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-200 ease-out group-hover/cta:translate-x-1"
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
