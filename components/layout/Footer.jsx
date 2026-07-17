import Link from "next/link";
import { CONTACT } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-brown/15 bg-beige-deep/40">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 sm:grid-cols-2">
        <div>
          <p className="font-display text-lg font-semibold text-ink">Robin Petr</p>
          <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brown">
            digitalizace podniků
          </p>
          {CONTACT.ico ? (
            <p className="mt-4 font-mono text-xs text-ink-soft">
              IČO: {CONTACT.ico}
            </p>
          ) : null}
          <p className="mt-2 font-mono text-[0.68rem] leading-relaxed text-ink-soft/80">
            Fyzická osoba zapsaná v živnostenském rejstříku.
          </p>
        </div>

        <nav
          aria-label="Patička"
          className="flex flex-col gap-2 text-sm text-ink-soft sm:items-end"
        >
          <Link href="/" className="transition-colors hover:text-clay-deep">
            Domů
          </Link>
          <Link href="/sluzby" className="transition-colors hover:text-clay-deep">
            Nabídka
          </Link>
          <Link
            href="/jak-to-funguje"
            className="transition-colors hover:text-clay-deep"
          >
            Jak to funguje
          </Link>
          <Link href="/o-mne" className="transition-colors hover:text-clay-deep">
            O mně
          </Link>
          <Link href="/kontakt" className="transition-colors hover:text-clay-deep">
            Kontakt
          </Link>
          <a
            href={`mailto:${CONTACT.email}`}
            className="transition-colors hover:text-clay-deep"
          >
            {CONTACT.email}
          </a>
        </nav>
      </div>

      <div className="border-t border-brown/10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-6 py-4">
          <p className="font-mono text-[0.7rem] text-ink-soft/70">
            © {year} Robin Petr
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link
              href="/obchodni-podminky"
              className="font-mono text-[0.7rem] text-ink-soft/70 underline decoration-brown/20 underline-offset-4 transition-colors hover:text-clay-deep"
            >
              Obchodní podmínky
            </Link>
            <Link
              href="/ochrana-osobnich-udaju"
              className="font-mono text-[0.7rem] text-ink-soft/70 underline decoration-brown/20 underline-offset-4 transition-colors hover:text-clay-deep"
            >
              Zásady zpracování osobních údajů
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
