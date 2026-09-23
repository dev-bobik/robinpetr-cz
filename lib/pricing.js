/* Jediný zdroj pravdy pro ceny služeb — čte z něj /sluzby (zobrazení pro lidi)
   i StructuredData (schema.org Offer pro vyhledávače a AI agenty), aby se
   ceny nemohly rozejít. Při změně ceníku uprav jen tady.

   Ceny jsou duplikované ještě na třech místech, která se musí srovnat ručně:
   - public/pricing.md                              (ceník pro AI agenty / llms.txt)
   - automatizace/skripty/lead-scanner/lib/ceny.js  (texty cold e-mailů)
   - planovani/plan_podnikani.md                    (shrnutí v poznámkách)
   - components/services/Sluzby.jsx                 (částky uvnitř vět „how")
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
       v cold e-mailu. Při přejmenování by z e-mailů tiše zmizela.

       Paušál zvednutý 2026-09-08 z 290 na 390 Kč/měs. Důvod: každý takový
       web se od teď staví rovnou s admin panelem, ve kterém si klient sám
       mění texty, aktuality a ceny — to je práce a provoz navíc oproti
       čistě statické stránce. Vyplynulo z jednání s Férovou palačinkárnou
       (NutsLove), která si o panel aktualit řekla sama.

       Jednorázová cena je od 2026-09-17 „od" (oneTimeFrom) — platí to pro
       VŠECHNY weby v žebříku. 8 900 Kč je základ a obsahuje všechno běžné
       (design, menu, fotky, mapa, kontakt, aktuality, správa, napojení na
       vlastní pokladnu/věrnost). Rozhodnuto 2026-09-17: ŽÁDNÝ ceník
       příplatků — navíc se platí jen věci na míru (rezervace s termíny,
       víc provozoven, propojení s cizími systémy) podle rozsahu. Důvod „od"
       MUSÍ zůstat napsaný v `how` na /sluzby a v public/pricing.md —
       samotné „od" bez vysvětlení je podle § 1732 odst. 2 NOZ vymahatelné
       na spodní částce. */
    id: "web-jedna",
    skupina: "web",
    uroven: 1,
    name: "Web podniku (jedna stránka)",
    oneTimeCzk: 8900,
    oneTimeFrom: true,
    monthlyCzk: 390,
    text: "od 8 900 Kč podle přidaných funkcí + 390 Kč/měsíc správa",
  },
  {
    /* „Od" stejně jako u jednostránkového webu (2026-09-17). Počet stránek
       v základu (5) musí v `how` na /sluzby zůstat i tak — je to hranice,
       od které se cena zvedá, bez ní by 11 900 Kč platilo i pro deset
       stránek. */
    id: "web-vice",
    skupina: "web",
    uroven: 2,
    name: "Web podniku (víc stránek)",
    oneTimeCzk: 11900,
    oneTimeFrom: true,
    monthlyCzk: 390,
    text: "od 11 900 Kč podle přidaných funkcí + 390 Kč/měsíc správa",
  },
  {
    /* Spuštěno do prodeje 2026-09-03. Nacenění proti konkurenci: Storyous má
       základní tarif od 690 Kč/měs bez DPH a Professional za 2 990 Kč/měs;
       Dotykačka si k licenci bere 0,79–0,99 % z každé platby kartou.

       Sníženo 2026-09-07 z 4 900 Kč + 690 Kč/měs na 3 900 Kč + 390 Kč/měs.
       390 Kč/měs jde výrazně pod nejlevnější tarif Storyous, přitom naše
       pokladna umí to, co je u nich až v Professional, běží offline
       a nebere procenta z plateb kartou.

       Jednorázových 3 900 Kč kryje nastavení sortimentu a zaškolení obsluhy.
       Je pod webem (8 900 Kč) schválně: web je práce na míru, pokladna je
       hotový software a nízký vstup má přivést klienty. Jednorázová část je
       PEVNÁ, „od" se týká jen měsíčního provozu (monthlyFrom).

       Nad 390 Kč jde provoz podle zapnutých funkcí a velikosti provozu.
       Ten důvod MUSÍ zůstat napsaný i na /sluzby (Sluzby.jsx, `how`)
       a v public/pricing.md: samotné „od" bez vysvětlení je u paušálu
       podle § 1732 odst. 2 NOZ vymahatelné na spodní částce.

       POZOR: tablet ani termotiskárna v ceně NEJSOU — musí to zaznít
       v nabídce, jinak z toho bude spor. */
    id: "pokladna",
    name: "Pokladna",
    oneTimeCzk: 3900,
    monthlyCzk: 390,
    monthlyFrom: true,
    text: "3 900 Kč zavedení + od 390 Kč/měsíc provoz",
  },
  {
    id: "objednavky",
    skupina: "web",
    uroven: 3,
    name: "Online objednávky",
    oneTimeCzk: 14900,
    oneTimeFrom: true,
    monthlyCzk: 690,
    text: "od 14 900 Kč podle přidaných funkcí + 690 Kč/měsíc provoz",
  },
  {
    /* Přidáno 2026-09-23. Jediný e-shop od 34 900 Kč byl pro menší podniky
       předimenzovaný cenou i rozsahem — cukrárna, která posílá poštou pár
       desítek položek, nepotřebuje varianty, slevové kódy ani feedy na
       srovnávače. Tenhle stupeň staví na `moje_programy/eshop-sablona`,
       takže se dodává konfigurací, ne programováním.

       Rozsah: do 50 produktů, košík, sklad s rezervací, platba kartou
       (Stripe) / převodem / dobírkou, doprava PPL na adresu a ParcelShop
       + osobní odběr, admin pro klienta, právní texty. Zásilkovna v šabloně
       zatím NENÍ (`lib/shipping/` má jen `ppl.js`) — proto se u tohoto
       stupně neinzeruje a patří do „na míru".

       Cena je „od" (oneTimeFrom) jako u ostatních webů, takže podle § 1732
       odst. 2 NOZ MUSÍ být jmenovitě vypsané, co ji zvedá — v `how` na
       /sluzby i v public/pricing.md. Bez toho vysvětlení je „od" vymahatelné
       na 19 900 Kč. Co je na seznamu „na míru" (varianty, slevové kódy,
       Zásilkovna, feedy, fakturace, druhý jazyk), NENÍ příplatek — je to
       vyšší stupeň.

       890 Kč/měs sedí mezi Shoptet Basic (533 Kč s DPH, ale bez správy
       a s provizí ShoptetPay 1,19–1,99 % z transakce) a Business
       (1 804 Kč s DPH), a je o 200 Kč nad objednávkami — rozdíl kryje
       dopravu, sklad a odpovědnost za zásilkový prodej. */
    id: "eshop-zaklad",
    skupina: "web",
    uroven: 4,
    name: "E-shop (základ)",
    oneTimeCzk: 19900,
    oneTimeFrom: true,
    monthlyCzk: 890,
    text: "od 19 900 Kč podle přidaných funkcí + 890 Kč/měsíc správa",
  },
  {
    id: "eshop",
    skupina: "web",
    uroven: 5,
    name: "E-shop na míru",
    oneTimeCzk: 34900,
    oneTimeFrom: true,
    monthlyCzk: 1290,
    text: "od 34 900 Kč podle přidaných funkcí + 1 290 Kč/měsíc správa",
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
   „od …" musí jako „od" označit ta částka, které se to týká, a jen ta:
   jednorázová u všech webů v žebříku (oneTimeFrom), měsíční u pokladny
   (monthlyFrom). Sloučit obojí do jednoho příznaku nejde — z pevných
   3 900 Kč za pokladnu by se stalo „od 3 900 Kč". */
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

     1. jedna stránka → 2. víc stránek → 3. objednávky → 4. e-shop (základ)
     → 5. e-shop na míru

   Hranice mezi objednávkami a e-shopem je fyzická: objednávky = zákazník si
   zboží VYZVEDNE (žádná doručovací adresa), e-shop = zboží se POSÍLÁ
   dopravcem. Vlastní rozvoz kurýrem je doplněk nad objednávkami, ne e-shop.

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
    /* Když je ve výběru položka účtovaná „od", není výsledek pevná cena.
       Jednorázová a měsíční nejistota se sledují ZVLÁŠŤ a nesmí se slučovat:
       pokladna má pevných 3 900 Kč a „od" jen u provozu, weby naopak.
       `odhad` je souhrn jen pro vysvětlující větu, ne pro čísla. */
    odhadJednorazove: polozky.some((p) => p.oneTimeFrom),
    odhadMesicne: polozky.some((p) => p.monthlyFrom),
    odhad: polozky.some((p) => p.oneTimeFrom || p.monthlyFrom),
  };
}
