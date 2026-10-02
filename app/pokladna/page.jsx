import Pokladna from "@/components/pokladna/Pokladna";

export const metadata = {
  title: "Pokladna s evidencí tržeb — Robin Petr",
  description:
    "Od 1. ledna 2027 bude znovu povinná evidence tržeb. Jednoduchá pokladna na tablet nebo počítač, která tržby odesílá sama a funguje i bez internetu.",
  alternates: { canonical: "/pokladna" },
};

export default function PokladnaPage() {
  return (
    <main id="hlavni-obsah">
      <Pokladna />
    </main>
  );
}
