import Link from "next/link";

/* Lehká sticky hlavička — malé jméno vlevo, navigace vpravo.
   Velké jméno "Robin Petr" je na stránce O mně. */

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brown/10 bg-beige/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="group flex items-baseline gap-2.5">
          <span className="font-display text-lg font-semibold text-ink">
            Robin Petr
          </span>
          <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.18em] text-brown sm:inline">
            — digitalizace provozů
          </span>
        </Link>

        <nav className="flex items-center gap-5 sm:gap-7">
          <Link
            href="/o-mne"
            className="text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-clay-deep"
          >
            O mně
          </Link>
          <Link
            href="/#kontakt"
            className="rounded-full border border-brown/25 px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:border-clay hover:text-clay-deep"
          >
            Ozvěte se
          </Link>
        </nav>
      </div>
    </header>
  );
}
