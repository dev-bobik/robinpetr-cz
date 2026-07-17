# Stránka „Proč já" — podklad, strategie a prompt

Dokument ke stránce, která odpovídá na námitku *„proč u tebe, a ne u nějaké hotové platformy?"*
Slouží k tomu, aby návštěvník, který si tuhle otázku klade, dostal odpověď dřív, než odejde ke konkurenci — **a přitom aby ho stránka sama k té konkurenci nenavedla.**

- **Web:** robinpetr.cz (Next.js 15 App Router, React 19, Tailwind v4, nasazení Cloudflare/OpenNext)
- **Navržený slug:** `/proc-ja`
- **Data ověřena:** 2026-07 (ceníky se mění — čísla ber jako orientační, před použitím v jednání přeověř)

---

## 1. Nejdůležitější princip: čísla konkurence NEPATŘÍ na web

Tohle je jádro celé stránky a nejčastější chyba. Přesně to, čeho se právem bojíš:

> Když na svůj web napíšeš „Shopify od 499 Kč / Shoptet od 396 Kč", uděláš tři věci najednou:
> 1. dáš návštěvníkovi **jméno konkurenta**, které si dosud nemusel spojit,
> 2. dáš mu **číslo**, které vypadá níž než tvoje cena (protože je to nájem, ne pořízení),
> 3. **rozhodneš za něj, že se rozhoduje podle ceny** — a v té hře vždycky vyhraje ten nejlevnější, což nikdy nebudeš ty.

**Pravidlo:** konkrétní ceny a jména platforem si nech do osobního jednání (tam jsou tvoje munice — viz sekce 4). Na veřejné stránce mluv **o principu**, ne o cenníku cizí firmy. „Hotové platformy", „krabicová řešení", „pronájem šablony" — obecně. Nedělej konkurenci reklamu a nedávej klientovi nápad, kam odejít.

---

## 2. Šest pravidel, aby stránka neodháněla

1. **Nepřerámovávej na cenu, přerámuj na hodnotu a čas.** Ne „jsem dražší, ale…". Místo toho: *co za ty peníze dostanu a kolik mě to bude stát za tři roky.* Levné bývá dražší, než vypadá — ale ukaž to na principu (nájem běží donekonečna), ne na cizích číslech.

2. **Nejmenuj konkurenci.** Viz sekce 1.

3. **Odpověz na námitku dřív, než ji vysloví.** Návštěvník si myslí „proč tolik?" — stránka tu otázku položí za něj a hned na ni odpoví. Tím vezmeš námitce sílu (v psychologii „preemptive framing").

4. **Přesuň váhu na to, co se nedá porovnat cenovkou.** Vlastnictví, jeden člověk, co zvedne telefon, čeština, řešení na míru, rychlost. Tyhle věci u platformy nekoupíš za žádné peníze — takže se v nich neporovnává cena.

5. **Žádná tabulka „já vs. oni".** Srovnávací tabulka nutí k porovnávání po řádcích a vždycky v ní bude řádek, kde je někdo lepší nebo levnější. Místo toho vyprávěj příběh dvou cest (koupím × pronajímám si).

6. **Kvalifikuj, ale neposílej pryč.** Přiznat „nejsem pro každého" buduje důvěru. Ale ne „na tohle vám stačí Shopify" — tím posíláš zákazníka konkurenci. Správně: *„Pokud chcete nejlevnější krabici a zbytek si nastavit sám, nejsem to já. Jsem pro ty, kdo chtějí mít klid a jednoho parťáka."* Kvalifikuje to, aniž bys ukázal dveře.

---

## 3. Doporučená struktura stránky

Drž tón webu: věcný, lidský, sebejistý bez chvástání (jako „Pět kroků, žádná věda" / „Neprodávám krabičky, řeším potřebu"). Sekce:

1. **Eyebrow + nadpis, který položí otázku za návštěvníka.**
   Ne defenzivní „Proč jsem dražší". Spíš: *„Proč stavět na míru, když existují hotové krabice?"* — a hned pod tím klidná, sebejistá odpověď v jedné větě.

2. **Dvě cesty: pronajímáš si, nebo to vlastníš.**
   Jádro. Bez jmen. Krabicová platforma = platíš každý měsíc napořád a nic ti nezůstane; přestaneš platit → web zhasne. U mě zaplatíš za postavení a web je tvůj — běží dál i beze mě. *(Podmínka: tohle piš jen když reálně jedeš model „klient vlastní" — doména a účet na klienta, kód předáš. Jinak to není pravda, viz sekce 4.)*

3. **Co u krabice nekoupíš (za žádné peníze).**
   3–4 karty (vizuál jako `BenefitCard`): *Vlastníte to. Jeden člověk, co zvedne telefon a mluví česky. Na míru, ne šablona jako soused. Rychlost, kterou pozná i Google.*

4. **„Levné bývá dražší, než vypadá" — princip, ne čísla.**
   Nájem, který nikdy neskončí; cena, co roste s tím, jak podnik roste; placené doplňky, které se nasčítají; vstupní práh (šablona + nastavení + napojení), který stejně někdo musí zaplatit. Vše obecně. **Volitelně** malá kalkulačka „kolik utratíte za pronájem platformy za 3 roky" — počítá jen měsíční nájem × 36, bez jmen, ať si částku návštěvník uvědomí sám.

5. **Pro koho nejsem (kvalifikace).**
   Krátce, upřímně, podle pravidla 6. Zvyšuje důvěru u správných klientů.

6. **CTA na `/kontakt`** ve stejném stylu jako jinde (`CtaLink`) — „Ozvěte se, nezávazně to probereme".

---

## 4. Zásobárna faktů (pro tebe do jednání — NE doslova na web)

Tvoje munice do osobního hovoru, kde už čísla použít můžeš. **Ověřeno 2026-07, přeověř před použitím.**

### Provoz platforem (roční platba)
- **Shopify:** Basic ~499 Kč/měs, Grow ~1 370, Advanced ~7 130. Bez zřizovacího poplatku, ale placená šablona ~$100–500 jednorázově a prázdný admin si někdo musí nastavit.
- **Shoptet** (tvůj reálný konkurent v ČR): Basic ~396 Kč/měs (limit **100 produktů**), Business ~1 341 (1 000 produktů), Profi ~2 241 (5 000). Skok Basic→Business je 3,4× — trest za růst.

### Platební brány (platí se u tebe i u nich — vyřaď z debaty)
- **Comgate** 0,79–0,99 % + 0–149 Kč/měs (nad 100k obratu paušál 0)
- **GoPay** 0,95 % + 80 Kč/měs (0 nad 50k obratu)
- **Stripe** 1,5 % + 6,50 Kč, žádný paušál
- **Shopify Payments** 1,9 % + 6,50 Kč — **2× dražší než české brány**; jiná brána u Shopify = +2 % navíc. (Pozor: Shopify Payments už v ČR funguje, argument „2 % vždy navíc" neplatí — platí jen při cizí bráně.)

### Tvůj provoz (Cloudflare)
- Free tier: 100k requestů/den, D1 5 mil. čtení/den — **malý e-shop se do zdarma vejde**. Reálně platíš jen doménu ~300 Kč/rok. Placený plán až od $5/měs, když podnik hodně naroste.

### Modelový e-shop za 3 roky (80 produktů, obrat 100k/měs), jen platforma+provoz
- **U tebe:** ~20 000 postavení + 500/měs paušál = **~38 000 Kč**, a web je klientův.
- **Krabice s doplňky:** nájem + appky **~40 000–50 000 Kč**, klient nevlastní nic.
- **Nejlevnější krabice (šablona, do 100 produktů):** ~21 000 Kč — na papíře nejlevnější. Tady neprodáváš cenou, ale vlastnictvím, rychlostí a podporou. Buď na to připravený.

### Rozhodnutí, které musíš udělat dřív než stránku napíšeš: vlastnictví vs. správa
- **Model A — klient vlastní:** doména a Cloudflare účet na klienta, kód předáš. Přestane platit paušál → web běží dál. Věta „vlastníte to, nejste na mně závislý" je **pravdivá**. → Tohle je tvůj nejsilnější odlišovač, doporučeno.
- **Model B — spravuješ to ty:** vše na tvých účtech, klient platí za provoz. Přestane platit → zhasne to jako u platformy. Pak větu o vlastnictví **na web psát nesmíš**.
- Sekce 2 struktury (dvě cesty) i karta „Vlastníte to" platí **jen pro model A**.

### Co je remíza (nedělej z toho páku)
- **Klikací admin** klient dostane u tebe i u platformy — produkty, ceny, texty si mění sám. Neprodávej to jako výhodu ani nevýhodu.

---

## 5. Hotový prompt na vytvoření stránky

Až budeš chtít stránku postavit, zkopíruj Claudovi tenhle blok. Je psaný tak, aby fungoval i v novém sezení.

```
Postav novou stránku „Proč já" na webu robinpetr.cz (moje_programy/muj_web).
Cíl stránky: odpovědět návštěvníkovi na námitku „proč u tebe, a ne u hotové
platformy?" tak, aby neodešel ke konkurenci — a aby ho stránka sama ke
konkurenci nenavedla.

PŘED PSANÍM si přečti docs/stranka-proc-ja.md v tomhle repu — sekce 1, 2 a 3
jsou závazné (žádná jména konkurence ani jejich ceny na stránce; princip
„pronajímáš si vs. vlastníš"; žádná srovnávací tabulka; námitku zodpovědět
preemptivně). Sekce 4 je jen pro moje jednání, NE na web.

NEJDŘÍV se mě zeptej: jedu model A (klient vlastní web) nebo model B
(spravuju to já)? Podle odpovědi se řídí, zda smí stránka tvrdit „vlastníte
to / běží dál i beze mě". Když model B, tuhle linku vynech.

Technika (drž konvence repa):
- Stránka: app/proc-ja/page.jsx — Server Component, export metadata
  (title + description, česky), importuje jednu komponentu z components/.
- Komponenta: components/why-me/ProcJa.jsx podle vzoru
  components/how-it-works/HowItWorks.jsx (SectionKicker s „// popisek",
  CtaLink na /kontakt, max-w-3xl, sekce oddělené mt-16).
- Navigace: přidej { label: "Proč já", href: "/proc-ja" } do pole NAV
  v components/layout/Header.jsx (za „Jak to funguje").
- Design tokeny (Tailwind v4, definované v app/globals.css): barvy beige,
  beige-deep, ink, ink-soft, clay, clay-deep, brown, card, sage, ochre;
  fonty font-display (serif nadpisy), font-body, font-mono (eyebrow/labely);
  utility .eyebrow. Žádné nové barvy, drž paletu.
- Karty výhod styluj jako components/services/BenefitCard.jsx.
- Sekce a jejich pořadí vezmi z docs/stranka-proc-ja.md sekce 3.
- ŽÁDNÉ kreslení objektů v CSS (kruhy+gradienty ≠ ilustrace) — jen ikony/SVG.

Tón: věcný, lidský, sebejistý bez chvástání — jako existující stránky
(„Pět kroků, žádná věda", „Neprodávám krabičky, řeším potřebu"). Žádné
billboardové fráze.

Texty: po napsání je protáhni skillem stop-slop (odstranit AI vatu).
Argumentaci a rámování opři o skilly pricing, offers a marketing-psychology
(TCO/kotvení na 3 roky, loss aversion u nájmu, reason-why). Hero efekt
neřeš — tohle je textová stránka.

Nakonec: npm run build v moje_programy/muj_web ať projde. Nedeployuj,
jen ověř build; nasazení dělám já přes npm run deploy.
```

---

## 6. Po vytvoření zkontroluj

- [ ] Odkaz „Proč já" je v hlavičce (desktop i mobil) a míří na `/proc-ja`
- [ ] Na stránce není jediné jméno konkurenta ani jejich cena
- [ ] Není tam tabulka „já vs. oni"
- [ ] Tvrzení o vlastnictví sedí na zvolený model (A/B)
- [ ] `npm run build` prošel
- [ ] Texty prošly přes stop-slop
- [ ] Nasazení: `npm run deploy` (děláš ty)
```
