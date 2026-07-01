/* Sekce O mně — editorial layout: vlevo identita (fotka + jméno + "datasheet"
   úspěchů), vpravo příběh. Styl maker's notebook (béžová, Fraunces, mono). */

const CREDENTIALS = [
  {
    label: "Haxagon",
    value: "1. místo v kraji · 5. v celostátním finále",
    color: "#c0794f",
  },
  {
    label: "Vedení",
    value: "předseda studentské rady na gymnáziu",
    color: "#9fad8b",
  },
  {
    label: "Dělám rukama",
    value: "pájení · vlastní elektronika · modulární roboti",
    color: "#e0a23c",
  },
];

export default function About() {
  return (
    <section
      id="o-mne"
      aria-labelledby="o-mne-nadpis"
      className="relative border-t border-brown/10 py-[clamp(4rem,3rem+6vw,8rem)]"
    >
      {/* měkký tvar = hloubka — ve vlastní clip-vrstvě, ať nerozbije sticky sloupec */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-sage/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <p className="eyebrow">02 — O mně</p>
        <h2
          id="o-mne-nadpis"
          className="mt-4 font-display text-[clamp(1.9rem,1.2rem+2.6vw,3rem)] font-semibold leading-[1.08] text-ink"
        >
          Kdo za tím stojí
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* -------- Identita: fotka + jméno + datasheet (sticky) -------- */}
          <aside className="order-2 flex flex-wrap items-center gap-x-4 gap-y-5 lg:order-none lg:sticky lg:top-24 lg:block lg:self-start">
            {/* portrét — na desktopu nahoře; na mobilu vedle výčtu (order-2) */}
            <div className="order-2 w-28 shrink-0 overflow-hidden rounded-2xl border border-clay/40 shadow-[0_18px_40px_-22px_rgba(46,42,34,0.4)] lg:w-full lg:max-w-[15rem]">
              {/* nahraď souborem public/foto.* */}
              <img
                src="/foto.png"
                alt="Robin Petr"
                width="400"
                height="500"
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>

            {/* jméno + tagline — na mobilu nahoře přes celou šířku (order-1) */}
            <div className="order-1 w-full lg:mt-6">
              <div className="inline-block">
                <p className="font-display text-[clamp(2rem,1.4rem+2.4vw,2.8rem)] font-semibold leading-none text-ink">
                  Robin Petr
                </p>
                {/* ruční podtržení */}
                <svg
                  className="mt-2 h-2 w-full text-clay"
                  viewBox="0 0 200 10"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 6 C 50 3, 150 3, 197 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <p className="mt-3 font-mono text-sm tracking-wide text-brown">
                hardware <span className="text-ink-soft">×</span> software
              </p>
            </div>

            {/* datasheet úspěchů — na mobilu vedle fotky (order-3, flex-1) */}
            <dl className="order-3 flex-1 space-y-6 lg:mt-8 lg:w-full">
              {CREDENTIALS.map((c) => (
                <div key={c.label} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: c.color }}
                  />
                  <div>
                    <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-brown">
                      {c.label}
                    </dt>
                    <dd className="mt-0.5 font-mono text-sm leading-snug text-ink">
                      {c.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>

          {/* -------- Příběh -------- */}
          <div className="order-1 max-w-[60ch] space-y-7 text-[1.05rem] leading-relaxed text-ink-soft lg:order-none">
            <p>
              Ahoj, jsem Robin. Většina lidí dělá buď čistě weby, nebo samotný
              hardware.{" "}
              <span className="font-medium text-ink">
                Já tyhle dva světy propojuju.
              </span>{" "}
              Naprogramuju vám e-shop s platební bránou a klidně k němu na
              prodejně fyzicky připojím terminál, čidlo nebo tiskárnu účtenek.{" "}
              <span className="font-medium text-ink">
                Všechno máte od jednoho člověka
              </span>
              , takže odpadá klasické dohadování několika dodavatelů o tom, proč
              to jako celek nefunguje.
            </p>
            <p className="max-sm:hidden">
              Věci dělám rukama odmalička. Pájím, navrhuju vlastní elektroniku a
              stavím modulární roboty. Takže když řeknu, že pro vás něco vymyslím,
              není to jen kód na obrazovce, který po mně bude muset někdo jiný
              oživit.
            </p>

            {/* pull-quote — silné místo, jemný akcent */}
            <blockquote className="border-l-[3px] border-clay pl-5 font-display text-[clamp(1.25rem,1rem+1vw,1.6rem)] font-medium leading-snug text-ink">
              Vím přesně, jak věci fungují — od posledního odporu na desce až po
              finální pixel na webu.
            </blockquote>

            {/* fotka setupu — placeholder, nahraď public/setup.jpg */}
            <figure className="max-w-[13.2rem] rotate-[-1deg] lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-clay/40 shadow-[0_18px_40px_-22px_rgba(46,42,34,0.4)]">
                <img
                  src="/setup.svg"
                  alt="Pracovní stůl — pájení a stavba elektroniky"
                  width="640"
                  height="400"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <figcaption className="mt-2 pl-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-brown">
                // u mě na stole
              </figcaption>
            </figure>

            <p>
              Jako student mám čerstvý přehled o technologiích, které se používají
              dneska, ne před deseti lety. Na každé zakázce mi extrémně záleží,
              protože si na ní buduju jméno. Díky tomu ode mě dostanete{" "}
              <span className="font-medium text-ink">
                přímou, soustředěnou práci bez agenturní přirážky
              </span>{" "}
              a zdlouhavého kolování projektu mezi deseti lidmi.
            </p>
            <p>
              Mám za sebou reálné a funkční projekty — od klasických webů po
              e-shopy. Programoval jsem i interní aplikace pro naši školu. Že umím
              věci dotáhnout do konce a vzít za ně odpovědnost, ukazuje i to, že
              vedu studentskou radu na našem gymnáziu. A pokud jde o technickou
              hloubku a kyberbezpečnost, mluví za mě výsledky:{" "}
              <span className="font-medium text-ink">
                1. místo v kraji a 5. místo v celostátním finále soutěže Haxagon.
              </span>
            </p>

            {/* závěr — měkká karta */}
            <p className="rounded-2xl border border-brown/15 bg-card p-5 text-[1.1rem] text-ink">
              Zkrátka: získáte parťáka, který rozumí technice i byznysu a postará
              se o to, aby vám to celé fungovalo a vy jste to vůbec nemuseli řešit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
