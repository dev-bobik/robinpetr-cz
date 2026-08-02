import Link from "next/link";
import Copyable from "./Copyable";
import { CONTACT } from "@/lib/contact";

/* Krátká kontaktní výzva na home (dole). Plný formulář je na /kontakt. */

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 text-brown">
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m3.5 6 6.5 4.5L16.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 text-brown">
      <path
        d="M6.5 3.5 4 4c-.7.2-1.1.9-1 1.6.4 2.6 1.6 5 3.4 6.9 1.9 1.8 4.3 3 6.9 3.4.7.1 1.4-.3 1.6-1l.5-2.5-3-1.2-1.4 1.4a10 10 0 0 1-3.7-3.7L8.7 6.5 6.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 text-ink-soft transition-colors group-hover:text-clay-deep">
      <rect x="7" y="7" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CHIP =
  "group inline-flex items-center gap-2.5 rounded-full border border-brown/20 bg-card px-5 py-2.5 text-[0.95rem] text-ink shadow-[0_10px_24px_-18px_rgba(46,42,34,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:border-clay hover:text-clay-deep";

export default function ContactCTA() {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-cta-nadpis"
      className="relative border-t border-brown/10 py-[clamp(4rem,3rem+6vw,7rem)]"
    >
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow justify-center">Kontakt</p>
        <h2
          id="kontakt-cta-nadpis"
          className="mt-4 font-display text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] font-semibold leading-[1.08] text-ink"
        >
          Napište mi, co řešíte
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
          Bere vám něco v podniku zbytečně čas? Nebo už víte, co by šlo
          zjednodušit? <span className="font-medium text-ink">Napište mi.</span>
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-clay px-8 py-4 font-medium text-card shadow-[0_14px_30px_-12px_rgba(192,121,79,0.8)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-clay-deep"
          >
            Napsat mi
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
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Copyable value={CONTACT.email} label="e-mail" className={CHIP}>
            <MailIcon />
            {CONTACT.email}
            <CopyIcon />
          </Copyable>
          <Copyable value={CONTACT.phoneDisplay} label="telefon" className={`${CHIP} font-mono`}>
            <PhoneIcon />
            {CONTACT.phoneDisplay}
            <CopyIcon />
          </Copyable>
        </div>
        <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft">
          Kliknutím zkopírujete
        </p>
      </div>
    </section>
  );
}
