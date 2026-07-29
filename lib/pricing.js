/* Jediný zdroj pravdy pro ceny služeb — čte z něj /sluzby (zobrazení pro lidi)
   i StructuredData (schema.org Offer pro vyhledávače a AI agenty), aby se
   ceny nemohly rozejít. Při změně ceníku uprav jen tady. */

export const PRICING = [
  {
    id: "recenze-tag",
    name: "Recenzní NFC tag",
    oneTimeCzk: 690,
    monthlyCzk: null,
    text: "690 Kč s instalací",
  },
  {
    id: "vernost",
    name: "Věrnostní systém",
    oneTimeCzk: 2990,
    monthlyCzk: 490,
    text: "2 990 Kč stojánek na míru + 490 Kč/měs provoz",
  },
  {
    id: "web",
    name: "Web podniku",
    oneTimeCzk: 9900,
    monthlyCzk: 390,
    text: "9 900 Kč + 390 Kč/měs správa",
  },
  {
    id: "objednavky",
    name: "Online objednávky bez provizí",
    oneTimeCzk: 19900,
    oneTimeFrom: true,
    monthlyCzk: 790,
    text: "od 19 900 Kč + 790 Kč/měs, bez provizí",
  },
  {
    id: "eshop",
    name: "E-shop na míru",
    oneTimeCzk: 45000,
    oneTimeFrom: true,
    monthlyCzk: 1500,
    text: "od 45 000 Kč + 1 500 Kč/měs správa",
  },
  {
    id: "haccp",
    name: "Hlídání teplot (HACCP monitoring)",
    oneTimeCzk: 990,
    monthlyCzk: 149,
    text: "990 Kč instalace + 149 Kč/měs za čidlo",
  },
];
