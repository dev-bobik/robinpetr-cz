/* Jediný zdroj pravdy pro ceny služeb — čte z něj /sluzby (zobrazení pro lidi)
   i StructuredData (schema.org Offer pro vyhledávače a AI agenty), aby se
   ceny nemohly rozejít. Při změně ceníku uprav jen tady. */

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
    monthlyCzk: 590,
    text: "3 490 Kč stojánek na míru + 590 Kč/měsíc provoz",
  },
  {
    /* Obě webové položky musí začínat na „Web podniku" — lead-scanner
       (lib/email-draft.js) na tenhle prefix váže větu o ukázce zdarma
       v cold e-mailu. Při přejmenování by z e-mailů tiše zmizela. */
    id: "web-jedna",
    name: "Web podniku (jedna stránka)",
    oneTimeCzk: 8900,
    monthlyCzk: 390,
    text: "8 900 Kč + 390 Kč/měsíc správa",
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
