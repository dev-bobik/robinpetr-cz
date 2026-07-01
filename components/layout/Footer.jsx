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
            digitalizace provozů
          </p>
          {CONTACT.ico ? (
            <p className="mt-4 font-mono text-xs text-ink-soft">
              IČO: {CONTACT.ico}
            </p>
          ) : null}
        </div>

        <nav
          aria-label="Patička"
          className="flex flex-col gap-2 text-sm text-ink-soft sm:items-end"
        >
          <Link href="/" className="transition-colors hover:text-clay-deep">
            Domů
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
        <p className="mx-auto max-w-5xl px-6 py-4 font-mono text-[0.7rem] text-ink-soft/70">
          © {year} Robin Petr
        </p>
      </div>
    </footer>
  );
}
