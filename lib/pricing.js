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
    skupina: "web",
    uroven: 1,
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
    skupina: "web",
    uroven: 2,
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
    skupina: "web",
    uroven: 3,
    name: "Online objednávky",
    oneTimeCzk: 14900,
    oneTimeFrom: true,
    monthlyCzk: 690,
    text: "od 14 900 Kč + 690 Kč/měsíc, bez provizí",
  },
  {
    id: "eshop",
    skupina: "web",
    uroven: 4,
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

/* Množstevní sleva místo pevných balíčků (2026-09-06).
   Původně tu byly dva hotové balíčky („Podnik" a „Restaurace"). Nahradily je
   stupně slevy, ze kterých si klient poskládá vlastní kombinaci v konfigurátoru
   na /sluzby — pevné balíčky nutily vybrat si z dvou krabic, tohle nechá
   vybrat cokoli a odmění to samo.

   Stupně jsou schválně hrubé a v procentech, aby šly říct jednou větou
   a klient si je uměl spočítat v hlavě.

   Sníženo 2026-09-06 z 5/10/15 % na 3/6/10 %. Původní stupně kopírovaly
   slevu z dřívějších pevných balíčků, jenže balíček se sjednával jednou;
   konfigurátor slevu rozdává každému, kdo si naklikne víc věcí, a při
   nulové marži na měsíčním provozu se to nemá kam vejít. Deset procent
   je pořád vidět a je z čeho ustoupit při vyjednávání.

   POZOR: inzerovaná cena je podle § 1732 odst. 2 NOZ závazná nabídka. Součet,
   který konfigurátor ukáže, je tedy nabídka — proto se u položek účtovaných
   „od …" (e-shop, objednávky) musí celý výsledek označit jako „od". */
export const SLEVY = [
  { minPolozek: 4, procent: 10 },
  { minPolozek: 3, procent: 6 },
  { minPolozek: 2, procent: 3 },
];

/** Sleva v procentech pro daný počet vybraných služeb (0 = žádná). */
export function slevaProPocet(pocet) {
  return SLEVY.find((s) => pocet >= s.minPolozek)?.procent ?? 0;
}

/* Web je ŽEBŘÍK, ne čtyři nezávislé volby — jeden podnik nemůže mít zároveň
   jednostránkový web, vícestránkový a e-shop. Vyšší úroveň vždycky obsahuje
   nižší, takže se vybírá právě jedna:

     1. jedna stránka  →  2. víc stránek  →  3. objednávky  →  4. e-shop

   V konfigurátoru se to projeví takhle: po výběru úrovně se nižší přestanou
   nabízet a vyšší se ukážou jako doplatek rozdílu, ne za plnou cenu.

   Do počtu služeb pro množstevní slevu se celá skupina počítá **jednou** —
   povýšení webu není druhá služba a nesmí slevu nafouknout. */
export const WEB_ZEBRIK = PRICING.filter((p) => p.skupina === "web").sort(
  (a, b) => a.uroven - b.uroven,
);

/** Rozdíl proti právě vybrané úrovni webu — podklad pro „+3 000 Kč". */
export function doplatekNaUroven(zVybrane, naVyssi) {
  if (!zVybrane) return { oneTimeCzk: naVyssi.oneTimeCzk, monthlyCzk: naVyssi.monthlyCzk ?? 0 };
  return {
    oneTimeCzk: naVyssi.oneTimeCzk - zVybrane.oneTimeCzk,
    monthlyCzk: (naVyssi.monthlyCzk ?? 0) - (zVybrane.monthlyCzk ?? 0),
  };
}

/**
 * Spočítá nabídku z vybraných služeb.
 *
 * `vyber` je objekt `{ [id]: pocet }` — u většiny služeb 1, u HACCP počet čidel.
 * Vrací částky před slevou, slevu i po slevě, zvlášť jednorázově a měsíčně.
 */
export function spoctiNabidku(vyber) {
  const polozky = PRICING.filter((p) => (vyber[p.id] ?? 0) > 0).map((p) => ({
    ...p,
    pocet: vyber[p.id],
  }));

  const jednorazoveHrube = polozky.reduce((s, p) => s + p.oneTimeCzk * p.pocet, 0);
  const mesicneHrube = polozky.reduce((s, p) => s + (p.monthlyCzk ?? 0) * p.pocet, 0);

  /* Sleva se počítá z POČTU RŮZNÝCH SLUŽEB, ne z počtu kusů — čtyři čidla
     jsou pořád jedna služba. Jinak by se dala sleva „vyrobit" objednáním
     čtyř nejlevnějších čidel. */
  const procent = slevaProPocet(polozky.length);

  const jednorazoveSleva = Math.round((jednorazoveHrube * procent) / 100);
  const mesicneSleva = Math.round((mesicneHrube * procent) / 100);

  return {
    polozky,
    procent,
    jednorazoveHrube,
    mesicneHrube,
    jednorazoveSleva,
    mesicneSleva,
    jednorazove: jednorazoveHrube - jednorazoveSleva,
    mesicne: mesicneHrube - mesicneSleva,
    /* Když je ve výběru položka účtovaná „od", není výsledek pevná cena. */
    odhad: polozky.some((p) => p.oneTimeFrom),
  };
}
