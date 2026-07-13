import SchematicBackground from "@/components/schematic/SchematicBackground";
import ContactForm from "./ContactForm";
import Copyable from "./Copyable";
import { CONTACT } from "@/lib/contact";

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

const directLinkClass =
  "group flex items-center gap-3 rounded-xl border border-brown/15 bg-card px-4 py-3 text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-clay/40 hover:shadow-[0_14px_28px_-18px_rgba(46,42,34,0.5)]";
const directLabelClass =
  "block font-mono text-[0.66rem] uppercase tracking-[0.16em] text-brown";

export default function Contact() {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-nadpis"
      className="relative py-[clamp(4rem,3rem+6vw,8rem)]"
    >
      {/* jemné schéma dole v pozadí */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
        <SchematicBackground
          variant="baseline"
          className="relative left-1/2 w-[110vw] -translate-x-1/2 opacity-20"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <p className="eyebrow">Kontakt</p>
        <h1
          id="kontakt-nadpis"
          className="mt-4 font-display text-[clamp(2rem,1.3rem+2.8vw,3.2rem)] font-semibold leading-[1.06] text-ink"
        >
          Pojďme to probrat
        </h1>
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
          Bere vám něco v podniku zbytečně čas? Nebo vás napadá, co by šlo
          zjednodušit?{" "}
          <span className="font-medium text-ink">Napište mi — nezávazně.</span>
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* formulář */}
          <div>
            <ContactForm />
          </div>

          {/* přímé kontakty */}
          <aside aria-label="Přímé kontakty" className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Copyable
                value={CONTACT.email}
                label="e-mail"
                className={`${directLinkClass} text-left`}
              >
                <span className="text-clay-deep transition-transform duration-200 group-hover:scale-110">
                  <MailIcon />
                </span>
                <span>
                  <span className={directLabelClass}>
                    E-mail · klikněte pro zkopírování
                  </span>
                  <span className="font-medium">{CONTACT.email}</span>
                </span>
              </Copyable>

              <Copyable
                value={CONTACT.phoneDisplay}
                label="telefon"
                className={`${directLinkClass} text-left`}
              >
                <span className="text-clay-deep transition-transform duration-200 group-hover:scale-110">
                  <PhoneIcon />
                </span>
                <span>
                  <span className={directLabelClass}>
                    Telefon · klikněte pro zkopírování
                  </span>
                  <span className="font-medium">{CONTACT.phoneDisplay}</span>
                </span>
              </Copyable>

              {/* Instagram — zatím neaktivní placeholder */}
              <div
                aria-disabled="true"
                className="flex cursor-default items-center gap-3 rounded-xl border border-dashed border-brown/20 bg-card/60 px-4 py-3 text-ink opacity-60"
              >
                <span className="text-brown">
                  <InstagramIcon />
                </span>
                <span>
                  <span className={directLabelClass}>Instagram</span>
                  <span className="font-medium">už brzy</span>
                </span>
              </div>
            </div>

            <p className="font-mono text-xs text-ink-soft">
              {"// Odpovídám obvykle do 24 hodin."}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
