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
    id: "web",
    name: "Web podniku",
    oneTimeCzk: 9900,
    monthlyCzk: 390,
    text: "9 900 Kč + 390 Kč/měsíc správa",
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
       ~226 Kč, takže paušál za instalaci by se při čtyřech čidlech nezaplatil. */
    id: "haccp",
    name: "Hlídání teplot (HACCP monitoring)",
    oneTimeCzk: 990,
    monthlyCzk: 179,
    text: "990 Kč za čidlo včetně instalace + 179 Kč/měsíc za čidlo",
  },
];
