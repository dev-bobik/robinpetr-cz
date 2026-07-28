import ProcJa from "@/components/why-me/ProcJa";

export const metadata = {
  title: "Proč já — Robin Petr",
  description:
    "Proč dává smysl řešení na míru místo hotové krabice. Věcně, lidsky a bez marketingové omáčky.",
  alternates: { canonical: "/proc-ja" },
};

export default function ProcJaPage() {
  return (
    <main id="hlavni-obsah">
      <ProcJa />
    </main>
  );
}