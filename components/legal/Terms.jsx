import { CONTACT } from "@/lib/contact";

/* Všeobecné obchodní podmínky. Zdroj textu: planovani/smlouvy_vzory/obchodni_podminky_VOP.md
   Adresa sídla tu záměrně není (soukromí) — je v živnostenském rejstříku a v podepisovaných
   smlouvách. § 435 NOZ vyžaduje jméno, IČO a údaj o zápisu, ne adresu. */

const PLATNE_OD = "17. 7. 2026";

function Block({ number, title, children }) {
  return (
    <div className="mt-10">
      <h2 className="font-display text-[clamp(1.3rem,1.1rem+1vw,1.7rem)] font-semibold leading-tight text-ink">
        <span className="mr-2 font-mono text-[0.8em] text-brown">{number}.</span>
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[1.02rem] leading-relaxed text-ink-soft">
        {children}
      </div>
    </div>
  );
}

function List({ children }) {
  return <ol className="ml-5 list-decimal space-y-2">{children}</ol>;
}

export default function Terms() {
  return (
    <section className="relative py-[clamp(3.5rem,2.5rem+5vw,7rem)]">
      <div className="mx-auto max-w-3xl px-6">
        <p className="eyebrow">Právní</p>
        <h1 className="mt-4 font-display text-[clamp(1.9rem,1.3rem+2.4vw,2.8rem)] font-semibold leading-[1.08] text-ink">
          Obchodní podmínky
        </h1>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
          Krátce a bez kliček: co platí, když spolu začneme spolupracovat. Když
          vám tu něco nesedí, řekněte — dá se to dohodnout jinak.
        </p>
        <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brown">
          Platné od {PLATNE_OD}
        </p>

        <Block number="1" title="Kdo jsem a pro koho podmínky platí">
          <List>
            <li>
              Poskytovatel:{" "}
              <span className="font-medium text-ink">Robin Petr</span>, IČO{" "}
              {CONTACT.ico}, fyzická osoba zapsaná v živnostenském rejstříku.
              Kontakt:{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-clay-deep underline decoration-brown/30 underline-offset-4 hover:text-clay"
              >
                {CONTACT.email}
              </a>
              ,{" "}
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="text-clay-deep underline decoration-brown/30 underline-offset-4 hover:text-clay"
              >
                {CONTACT.phoneDisplay}
              </a>
              .
            </li>
            <li>
              Podmínky platí pro služby digitalizace provozů: recenze tag,
              věrnostní systém, hlídání teplot (HACCP), weby, online objednávky
              a další služby dle nabídky.
            </li>
            <li>
              <span className="font-medium text-ink">
                Služby jsou určené podnikatelům.
              </span>{" "}
              Objednáním klient potvrzuje, že jedná v rámci své podnikatelské
              činnosti — nejde tedy o spotřebitelskou smlouvu.
            </li>
          </List>
        </Block>

        <Block number="2" title="Jak vzniká smlouva">
          <List>
            <li>
              Ceník na webu je informativní.{" "}
              <span className="font-medium text-ink">
                Smlouva vzniká až potvrzením objednávky
              </span>{" "}
              z mé strany (e-mailem nebo písemně), případně podpisem samostatné
              smlouvy.
            </li>
            <li>
              U větších zakázek (weby, objednávkové systémy) uzavíráme
              samostatnou smlouvu o dílo; tyto podmínky pak platí podpůrně.
            </li>
          </List>
        </Block>

        <Block number="3" title="Ceny a platby">
          <List>
            <li>
              Platí ceny sjednané v potvrzené objednávce.{" "}
              <span className="font-medium text-ink">Nejsem plátce DPH</span> —
              ceny jsou konečné.
            </li>
            <li>
              Splatnost faktur je 14 dní. Jednorázové částky (výroba, instalace)
              jsou splatné při předání, měsíční částky do 14. dne daného měsíce.
            </li>
            <li>
              Při prodlení s platbou delším než 30 dní mohu měsíční služby
              pozastavit do zaplacení.
            </li>
          </List>
        </Block>

        <Block number="4" title="Měsíční služby (provoz, správa, servis)">
          <List>
            <li>
              Měsíční služby běží{" "}
              <span className="font-medium text-ink">na dobu neurčitou</span>.
              Kterákoli strana je může vypovědět bez udání důvodu s výpovědní
              lhůtou 1 měsíc ke konci kalendářního měsíce.
            </li>
            <li>
              Měsíční cena zahrnuje provoz systému, servis a opravy závad, drobné
              úpravy (u webů změny menu, cen, otevírací doby) a komunikaci přímo
              se mnou.
            </li>
            <li>
              Pracuji s odbornou péčí, ale{" "}
              <span className="font-medium text-ink">
                negarantuji nepřetržitou dostupnost
              </span>{" "}
              — služby běží na infrastruktuře třetích stran (hosting, mobilní
              sítě, připojení ve vašem podniku).
            </li>
          </List>
        </Block>

        <Block number="5" title="Hardware">
          <List>
            <li>
              <span className="font-medium text-ink">
                Čidla teploty se pronajímají
              </span>{" "}
              — zůstávají mým majetkem a jsou v ceně měsíční služby. Po skončení
              spolupráce je vrátíte do 14 dnů. Nefunkční kusy vyměňuji zdarma,
              poškození nad rámec běžného opotřebení hradí klient.
            </li>
            <li>
              Stojánky a tagy vyrobené na míru přecházejí do vlastnictví klienta
              zaplacením jednorázové ceny.
            </li>
          </List>
        </Block>

        <Block number="6" title="Hlídání teplot (HACCP)">
          <List>
            <li>
              Systém je{" "}
              <span className="font-medium text-ink">evidenční pomůcka</span>.
              Odpovědnost za plnění povinností HACCP a za stav zboží nese vždy
              provozovatel podniku.
            </li>
            <li>
              Alarm je informativní funkce závislá na dostupnosti sítě a
              napájení. Neodpovídám za škody na zboží vzniklé výpadkem měření,
              sítě nebo napájení.
            </li>
          </List>
        </Block>

        <Block number="7" title="Autorská práva a licence">
          <List>
            <li>
              Dodaný software a weby jsou autorská díla. Klient získává{" "}
              <span className="font-medium text-ink">
                nevýhradní, nepřenosnou licenci
              </span>{" "}
              k užívání pro provoz svého podniku — po dobu trvání smlouvy, u
              jednorázových děl časově neomezenou.
            </li>
            <li>
              Šablony, komponenty a know-how, ze kterých je dílo sestavené,
              zůstávají mně a mohu je použít pro další klienty.
            </li>
            <li>
              Dodané dílo mohu uvádět ve svém portfoliu a referencích, pokud se
              nedohodneme jinak.
            </li>
          </List>
        </Block>

        <Block number="8" title="Odpovědnost">
          <List>
            <li>
              Náhrada škody z jedné události i ze všech událostí za rok je
              omezena částkou, kterou mi klient zaplatil za posledních 12 měsíců.
              Omezení neplatí pro újmu způsobenou úmyslně nebo z hrubé
              nedbalosti.
            </li>
            <li>
              Neodpovídám za škody vzniklé zásahem klienta nebo třetí osoby do
              systému.
            </li>
          </List>
        </Block>

        <Block number="9" title="Osobní údaje">
          <List>
            <li>
              Pokud služba zahrnuje zpracování osobních údajů zákazníků klienta
              (věrnostní systém, objednávky), uzavřeme{" "}
              <span className="font-medium text-ink">
                zpracovatelskou smlouvu
              </span>{" "}
              podle čl. 28 GDPR — je přílohou objednávky.
            </li>
            <li>
              Jak nakládám s údaji z formuláře na tomhle webu, popisují{" "}
              <a
                href="/ochrana-osobnich-udaju"
                className="text-clay-deep underline decoration-brown/30 underline-offset-4 hover:text-clay"
              >
                Zásady zpracování osobních údajů
              </a>
              .
            </li>
          </List>
        </Block>

        <Block number="10" title="Závěrem">
          <List>
            <li>
              Vztah se řídí právem České republiky, zejména občanským zákoníkem.
            </li>
            <li>
              Podmínky mohu přiměřeně měnit; změnu oznámím měsíc předem a klient
              může do její účinnosti smlouvu vypovědět.
            </li>
            <li>
              Kdyby bylo některé ustanovení neplatné, ostatní platí dál.
            </li>
          </List>
        </Block>
      </div>
    </section>
  );
}
