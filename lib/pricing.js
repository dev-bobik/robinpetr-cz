/* Jediný zdroj pravdy pro ceny služeb — čte z něj /sluzby (zobrazení pro lidi)
   i StructuredData (schema.org Offer pro vyhledávače a AI agenty), aby se
   ceny nemohly rozejít. Při změně ceníku uprav jen tady.

   Ceny jsou duplikované ještě na třech místech, která se musí srovnat ručně:
   - public/pricing.md                              (ceník pro AI agenty / llms.txt)
   - automatizace/skripty/lead-scanner/lib/ceny.js  (texty cold e-mailů)
   - planovani/plan_podnikani.md                    (shrnutí v poznámkách)
   Pořadí je vždy: nejdřív tenhle soubor, pak zbytek. */

export const PRICING = [
  {
    id: "vizitka",
    name: "Digitální vizitka",
    oneTimeCzk: 990,
    monthlyCzk: null,
    text: "990 Kč včetně instalace",
  },
  {
    id: "vernost",
    name: "Věrnostní systém",
    oneTimeCzk: 3490,
    /* Sníženo z 590 Kč (2026-09-03) spolu se zavedením balíčků — provoz nás
       nestojí nic (Cloudflare free tier) a nižší částka je snáz stravitelná.
       Viz docs/superpowers/specs/2026-09-03-pozice-a-balicky-design.md */
    monthlyCzk: 490,
    text: "3 490 Kč stojánek na míru + 490 Kč/měsíc provoz",
  },
  {
    /* Obě webové položky musí začínat na „Web podniku" — lead-scanner
       (lib/email-draft.js) na tenhle prefix váže větu o ukázce zdarma
       v cold e-mailu. Při přejmenování by z e-mailů tiše zmizela. */
    id: "web-jedna",
    name: "Web podniku (jedna stránka)",
    oneTimeCzk: 8900,
    monthlyCzk: 290,
    text: "8 900 Kč + 290 Kč/měsíc správa",
  },
  {
    /* Pevná cena, ne „od" — proto v `how` na /sluzby musí zůstat počet
       stránek v ceně (5). Bez limitu by 11 900 Kč platilo i pro deset
       stránek; inzerovaná cena je podle § 1732 odst. 2 NOZ závazná. */
    id: "web-vice",
    name: "Web podniku (víc stránek)",
    oneTimeCzk: 11900,
    monthlyCzk: 390,
    text: "11 900 Kč + 390 Kč/měsíc správa",
  },
  {
    /* Spuštěno do prodeje 2026-09-03. Nacenění proti konkurenci: Storyous má
       základní tarif od 690 Kč/měs bez DPH a Professional za 2 990 Kč/měs;
       Dotykačka si k licenci bere 0,79–0,99 % z každé platby kartou.
       690 Kč/měs je schválně na úrovni nejlevnějšího tarifu Storyous —
       naše pokladna přitom umí to, co je u nich až v Professional, běží
       offline a nebere procenta.

       Jednorázových 4 900 Kč kryje nastavení sortimentu, zaškolení obsluhy
       a tiskárnu. Je pod webem (8 900 Kč) schválně: web je práce na míru,
       pokladna je hotový software a nízký vstup má přivést klienty.

       POZOR: tablet ani termotiskárna v ceně NEJSOU — musí to zaznít
       v nabídce, jinak z toho bude spor. */
    id: "pokladna",
    name: "Pokladna",
    oneTimeCzk: 4900,
    monthlyCzk: 690,
    text: "4 900 Kč zavedení + 690 Kč/měsíc provoz",
  },
  {
    id: "objednavky",
    name: "Online objednávky",
    oneTimeCzk: 14900,
    oneTimeFrom: true,
    monthlyCzk: 690,
    text: "od 14 900 Kč + 690 Kč/měsíc, bez provizí",
  },
  {
    id: "eshop",
    name: "E-shop na míru",
    oneTimeCzk: 34900,
    oneTimeFrom: true,
    monthlyCzk: 1290,
    text: "od 34 900 Kč + 1 290 Kč/měsíc správa",
  },
  {
    /* Ceny jsou za KUS čidla, ne za zakázku — materiál na jedno čidlo stojí
       ~226 Kč, takže paušál za instalaci by se při čtyřech čidlech nezaplatil.

       Jednorázová část musí unést i zakázku na JEDNO čidlo: při 990 Kč zbylo
       po materiálu ~760 Kč na cestu, instalaci a nastavení, což je práce
       zadarmo. 1 290 Kč nechá ~1 060 Kč a jedno čidlo dává smysl taky. */
    id: "haccp",
    name: "Hlídání teplot (HACCP monitoring)",
    oneTimeCzk: 1290,
    monthlyCzk: 179,
    text: "1 290 Kč za čidlo včetně instalace + 179 Kč/měsíc za čidlo",
  },
];

/* Balíčky — hlavní nabídka (2026-09-03). Pozice není „dělám weby", ale
   „vybavím provozovnu celou", a balíček je to, co ten příběh nese. Jednotlivé
   produkty výš zůstávají v nabídce jako to, z čeho se balíček skládá, a pro
   klienty, kteří chtějí jen část („sestav si vlastní").

   Řez mezi balíčky je podle KOHO SE TÝKAJÍ, ne podle víc/míň: „Podnik" je
   digitální základ pro jakýkoli obor, „Restaurace" je plný gastro provoz.

   Věrnostní stojánek je záměrně už v základním balíčku — bez něj je základ
   zase jen „web + přehled", tedy přesně to, co umí každý webař.

   E-shop a online objednávky do balíčků NEPATŘÍ: míří na prodejny a rozvoz,
   ne na gastro pult. Dostupné jsou přes „sestav si vlastní".

   Detaily a odůvodnění cen:
   docs/superpowers/specs/2026-09-03-pozice-a-balicky-design.md */
export const BALICKY = [
  {
    id: "balicek-podnik",
    name: "Podnik",
    proKoho: "pro jakýkoli obor",
    oneTimeCzk: 11900,
    monthlyCzk: 690,
    text: "11 900 Kč + 690 Kč/měsíc",
    /* id z PRICING výš — ať se obsah balíčku nemůže rozejít s ceníkem */
    obsahuje: ["web-jedna", "vizitka", "vernost"],
    /* Samostatně 13 380 Kč + 780 Kč/měs → úspora 1 480 Kč a 90 Kč/měs */
    usporaOneTimeCzk: 1480,
    usporaMonthlyCzk: 90,
  },
  {
    id: "balicek-restaurace",
    name: "Restaurace",
    proKoho: "pro gastro provozy",
    oneTimeCzk: 15900,
    monthlyCzk: 1190,
    text: "15 900 Kč + 1 190 Kč/měsíc",
    obsahuje: ["web-jedna", "vizitka", "vernost", "pokladna"],
    /* Samostatně 18 280 Kč + 1 470 Kč/měs → úspora 2 380 Kč a 280 Kč/měs.
       Upgrade z „Podniku" stojí +4 000 Kč a +500 Kč/měs, tedy míň než
       dokoupit pokladnu zvlášť (4 900 + 690) — záměr, tlačí to nahoru. */
    usporaOneTimeCzk: 2380,
    usporaMonthlyCzk: 280,
    /* HACCP čidla jsou volitelný doplněk, ne součást — účtují se za kus */
    volitelne: ["haccp"],
  },
];

/* Pomocník pro komponenty: z id v `obsahuje` udělá položky ceníku. */
export const polozkyBalicku = (balicek) =>
  balicek.obsahuje.map((id) => PRICING.find((p) => p.id === id));
