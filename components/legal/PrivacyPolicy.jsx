import { CONTACT } from "@/lib/contact";

/* Zásady zpracování osobních údajů (GDPR). Informační povinnost správce.
   Placeholdery [ … ] doplní Robin po založení živnosti. */

const ICO = CONTACT.ico || "[IČO — doplním]";

function Block({ title, children }) {
  return (
    <div className="mt-10">
      <h2 className="font-display text-[clamp(1.3rem,1.1rem+1vw,1.7rem)] font-semibold leading-tight text-ink">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[1.02rem] leading-relaxed text-ink-soft">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <section className="relative py-[clamp(3.5rem,2.5rem+5vw,7rem)]">
      <div className="mx-auto max-w-3xl px-6">
        <p className="eyebrow">Právní</p>
        <h1 className="mt-4 font-display text-[clamp(1.9rem,1.3rem+2.4vw,2.8rem)] font-semibold leading-[1.08] text-ink">
          Zásady zpracování osobních údajů
        </h1>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
          Když mi napíšete přes formulář, e-mail nebo telefon, zpracovávám vaše
          údaje jen v nezbytné míře a férově. Tady je přehledně, co s nimi dělám.
        </p>

        <Block title="Kdo je správce">
          <p>
            <span className="font-medium text-ink">Robin Petr</span>, IČO {ICO}
            {CONTACT.address ? `, se sídlem ${CONTACT.address}` : ""}. Fyzická
            osoba zapsaná v živnostenském rejstříku.
          </p>
          <p>
            Kontakt:{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-clay-deep underline decoration-brown/30 underline-offset-4 hover:text-clay"
            >
              {CONTACT.email}
            </a>
            .
          </p>
        </Block>

        <Block title="Jaké údaje a proč">
          <p>
            Z kontaktního formuláře zpracovávám <strong>jméno</strong>,{" "}
            <strong>e-mail nebo telefon</strong> a <strong>obsah zprávy</strong>.
            Slouží mi jen k tomu, abych vám mohl odpovědět a probrat vaši
            poptávku. Nepoužívám je k hromadnému rozesílání ani je neprodávám.
          </p>
        </Block>

        <Block title="Na jakém základě">
          <p>
            Údaje zpracovávám na základě{" "}
            <span className="font-medium text-ink">oprávněného zájmu</span>{" "}
            (odpovědět na vaši zprávu) a{" "}
            <span className="font-medium text-ink">
              jednání před uzavřením smlouvy
            </span>{" "}
            (když řešíme spolupráci).
          </p>
        </Block>

        <Block title="Jak dlouho je uchovávám">
          <p>
            Jen po dobu nutnou k vyřízení poptávky a přiměřenou dobu poté
            (nejdéle 1 rok od poslední komunikace), pak je smažu. Pokud spolu
            začneme spolupracovat, řídí se uchování dobou spolupráce a zákonnými
            lhůtami.
          </p>
        </Block>

        <Block title="Komu se údaje dostanou">
          <p>
            Nikomu je záměrně nepředávám. Technicky je zpracovávají jen mí
            zpracovatelé, kteří provozují nástroje, na kterých web běží:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>
              <span className="font-medium text-ink">Resend</span> — odeslání
              e-mailu z formuláře.
            </li>
            <li>
              <span className="font-medium text-ink">Cloudflare</span> — hosting
              webu.
            </li>
          </ul>
          <p>
            Oba jsou mimo EU (USA) a zpracování je kryté standardními smluvními
            doložkami.
          </p>
        </Block>

        <Block title="Vaše práva">
          <p>Kdykoli máte právo:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>vědět, jaké údaje o vás mám (přístup),</li>
            <li>nechat je opravit nebo doplnit,</li>
            <li>nechat je vymazat nebo omezit jejich zpracování,</li>
            <li>vznést námitku proti zpracování,</li>
            <li>
              podat stížnost u{" "}
              <a
                href="https://www.uoou.gov.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-clay-deep underline decoration-brown/30 underline-offset-4 hover:text-clay"
              >
                Úřadu pro ochranu osobních údajů
              </a>
              .
            </li>
          </ul>
          <p>
            Stačí mi napsat na{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-clay-deep underline decoration-brown/30 underline-offset-4 hover:text-clay"
            >
              {CONTACT.email}
            </a>
            .
          </p>
        </Block>

        <Block title="Dobrovolnost">
          <p>
            Vyplnění formuláře je dobrovolné. Bez kontaktu vám ale nedokážu
            odpovědět — tolik to potřebuji.
          </p>
        </Block>

        <Block title="Cookies a analytika">
          <p>
            Web nepoužívá žádné sledovací ani reklamní cookies. Pro základní,
            anonymní statistiku návštěvnosti používám{" "}
            <span className="font-medium text-ink">Cloudflare Web Analytics</span>{" "}
            — bez cookies a bez sledování jednotlivců. Pokud bych někdy nasadil
            analytiku s cookies (např. Google Analytics), vyžádám si nejdřív váš
            souhlas.
          </p>
        </Block>
      </div>
    </section>
  );
}
