import SchematicBackground from "@/components/schematic/SchematicBackground";
import DashboardCard from "./DashboardCard";

/* Desktop / tablet hero (md+). Mobil má vlastní MobileHero. */
export default function DesktopHero() {
  return (
    <section
      aria-labelledby="hero-nadpis"
      className="relative hidden flex-col overflow-hidden min-[400px]:flex min-[400px]:min-h-[88vh] min-[400px]:pb-40 min-[400px]:pt-20"
    >
      {/* měkké šalvějové / okrové tvary = hloubka */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[14%] h-80 w-80 rounded-full bg-sage/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-ochre/12 blur-3xl"
      />

      {/* schéma — viditelná vrstva v pozadí přes celou plochu (z-0, pod textem) */}
      <SchematicBackground
        variant="full"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.22]"
      />

      {/* ---------------- Obsah ---------------- */}
      <div className="relative z-10 mx-auto grid w-full max-w-5xl flex-1 grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="max-w-xl">
          <h1
            id="hero-nadpis"
            className="font-display text-[2.6rem] font-semibold leading-[1.1] text-ink lg:text-[3rem]"
          >
            Chytrý hardware a software pro{" "}
            <span className="relative inline-block whitespace-nowrap">
              váš podnik.
              {/* jemný ruční akcent jen pod "váš podnik." */}
              <svg
                className="absolute left-0 top-full mt-1 h-2 w-full text-clay"
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
                />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-[1.35rem] leading-relaxed text-ink-soft">
            Platební terminály, věrnostní systém, chytrá čidla i celý systém
            kolem — zmodernizuju váš provoz na míru.{" "}
            <span className="font-medium text-ink">
              Vy se staráte o hosty, techniku nechte na mně.
            </span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-clay px-8 py-4 text-[1.05rem] font-medium text-card shadow-[0_14px_30px_-12px_rgba(192,121,79,0.8)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-clay-deep hover:shadow-[0_20px_40px_-14px_rgba(168,98,56,0.9)]"
            >
              Ozvěte se
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
            </a>
            <a
              href="#nabidka"
              className="inline-flex items-center gap-2 rounded-full border border-brown/25 px-7 py-4 text-[1.05rem] font-medium text-ink transition-colors duration-200 hover:border-clay hover:text-clay-deep"
            >
              Co nabízím
            </a>
          </div>

          <p className="mt-9 inline-flex items-center gap-2 font-mono text-sm tracking-wide text-ink-soft">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-sage opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sage" />
            </span>
            Přijímám nové provozy
          </p>
        </div>

        {/* vznášející se mini dashboard */}
        <div className="flex justify-center lg:justify-end">
          <DashboardCard className="rotate-[-3deg] motion-safe:animate-float-slow" />
        </div>
      </div>

      {/* scroll indikátor */}
      <a
        href="#nabidka"
        aria-label="Posunout na nabídku"
        className="absolute bottom-5 left-1/2 z-10 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full bg-ink text-beige shadow-md transition-transform duration-200 hover:translate-y-0.5 motion-safe:animate-bounce"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M9 3v11M4.5 9.5 9 14l4.5-4.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
