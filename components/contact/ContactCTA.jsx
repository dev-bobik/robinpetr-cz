import Link from "next/link";
import { CONTACT } from "@/lib/contact";

/* Krátká kontaktní výzva na home (dole). Plný formulář je na /kontakt. */

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
          Pojďme to probrat
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">
          Přijde vám, že vám v podniku něco zbytečně bere čas? Nebo vás napadá,
          co by šlo zjednodušit?{" "}
          <span className="font-medium text-ink">Napište mi nezávazně.</span>
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-clay px-8 py-4 font-medium text-card shadow-[0_14px_30px_-12px_rgba(192,121,79,0.8)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-clay-deep"
          >
            Napsat zprávu
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

        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-sm text-ink-soft">
          <a
            href={`mailto:${CONTACT.email}`}
            className="underline decoration-brown/30 underline-offset-4 transition-colors hover:text-clay-deep"
          >
            {CONTACT.email}
          </a>
          <a
            href={`tel:${CONTACT.phoneHref}`}
            className="underline decoration-brown/30 underline-offset-4 transition-colors hover:text-clay-deep"
          >
            {CONTACT.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
