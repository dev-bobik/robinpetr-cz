# robinpetr.cz

Osobní web / vizitka — **Robin Petr, digitalizace provozů** (weby, objednávkové
systémy a chytrý hardware pro malé provozy).

> Stav: rozpracováno. Hotová je úvodní **hero** sekce; další sekce přibývají.

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
app/                 # layout, stránka, design tokeny (globals.css)
components/
  layout/Header      # sticky hlavička
  hero/              # MobileHero, DesktopHero, DashboardCard
  schematic/         # ručně kreslené SVG schéma (varianty: full/compact/baseline)
```
