# robinpetr.cz

Osobní web / vizitka — **Robin Petr, digitalizace provozů** (weby, objednávkové
systémy a chytrý hardware pro malé provozy).

> Aktuální stav: veřejné stránky jsou hotové pro základní prezentaci a kontakt.
> Portfolio zůstává dočasně schované, dokud nebudou publikovatelné reference.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- `next/font` — Fraunces (nadpisy) · Hanken Grotesk (text) · Space Mono (popisky)
- Čistě statické (žádné runtime závislosti navíc)

## Vizuální směr

„Maker's notebook" — teplá béžová paleta, ručně kreslené technické schéma
v pozadí, jemné animace (vše respektuje `prefers-reduced-motion`).

Hero má dva samostatné layouty se stejným stylem:

- `MobileHero` (do 400 px)
- `DesktopHero` (od 400 px)

## Veřejné stránky

- `/` — úvod (hero, nabídka, CTA)
- `/sluzby` — detail nabídky
- `/jak-to-funguje`
- `/proc-ja`
- `/o-mne`
- `/kontakt`
- `/obchodni-podminky`
- `/ochrana-osobnich-udaju`

## Vývoj

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # produkční build
npm run start    # spuštění produkčního buildu
```

## Struktura

```
app/                 # layout, routy stránek, SEO soubory (robots/sitemap)
components/
  layout/            # Header, Footer
  hero/              # MobileHero, DesktopHero, DashboardCard
  services/          # sekce nabídky + detail /sluzby
  how-it-works/      # obsah stránky /jak-to-funguje
  why-me/            # obsah stránky /proc-ja
  contact/           # kontakt + formulář
  legal/             # obchodní podmínky a ochrana osobních údajů
  seo/               # structured data
docs/
  stranka-proc-ja.md # podklad pro argumentaci stránky /proc-ja
```
