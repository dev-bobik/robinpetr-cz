import SchematicBackground from "@/components/schematic/SchematicBackground";
import DashboardCard from "./DashboardCard";

/* Mobilní hero (do md). Vlastní kompaktní layout — vejde se na jednu obrazovku,
   dashboard kartička dole vždy celá viditelná, schéma jemně v pozadí. */
export default function MobileHero() {
  return (
    <section
      aria-labelledby="hero-nadpis-m"
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col overflow-hidden px-5 pb-8 pt-7 min-[500px]:hidden"
    >
      {/* soft blob = hloubka */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-20 h-56 w-56 rounded-full bg-sage/25 blur-3xl"
      />
      <div className="relative z-10 flex flex-1 flex-col">
        {/* ---------------- Copy ---------------- */}
        <h1
          id="hero-nadpis-m"
          className="font-display text-[clamp(1.35rem,5vw,1.75rem)] font-semibold leading-[1.16] text-ink"
        >
          Chytrý hardware a
          <br />
          <span className="whitespace-nowrap">
            software pro{" "}
            <span className="relative inline-block">
              váš podnik.
              {/* jemný ruční akcent jen pod "váš podnik." */}
              <svg
                className="absolute -bottom-1.5 left-0 w-full text-clay"
                viewBox="0 0 120 10"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 6 C 32 3, 84 3, 117 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  pathLength="300"
                  className="motion-safe:[stroke-dasharray:300] motion-safe:[animation:draw-underline_1.4s_var(--ease-out-soft)_0.3s_both]"
                  style={{ "--dash": 300 }}
                />
              </svg>
            </span>
          </span>
        </h1>

        <p className="mt-4 text-[0.95rem] leading-snug text-ink-soft">
          Weby, objednávky, věrnost i chytrý hardware — poskládám a propojím to
          celé do jednoho.{" "}
          <span className="font-medium text-ink">
            Vy se staráte o hosty, o techniku se postarám já.
          </span>
        </p>

        <div className="mt-5 flex items-center gap-3">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 font-medium text-card shadow-[0_12px_26px_-12px_rgba(192,121,79,0.85)] transition-all duration-200 ease-out active:translate-y-0.5"
          >
            Ozvěte se
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
          </a>
          <a
            href="#nabidka"
            className="text-sm font-medium text-ink-soft underline decoration-brown/30 decoration-1 underline-offset-4 transition-colors duration-200 active:text-clay-deep"
          >
            Co nabízím
          </a>
        </div>

        <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs tracking-wide text-ink-soft">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-sage opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sage" />
          </span>
          Beru nové zakázky
        </p>

        {/* ---------------- Dashboard kartička (dole, celá vidět) ---------- */}
        <div className="mt-auto flex justify-center pt-6">
          <DashboardCard
            compact
            className="mx-auto rotate-[-3deg] motion-safe:animate-float-slow"
          />
        </div>

        {/* schéma — horizontální baseline POD kartičkou; přečnívá STEJNĚ za oba okraje */}
        <SchematicBackground
          variant="baseline"
          className="pointer-events-none relative left-1/2 mt-5 -mb-5 w-[110vw] -translate-x-1/2 opacity-90"
        />
      </div>
    </section>
  );
}
