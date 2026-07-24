import Terms from "@/components/legal/Terms";

export const metadata = {
  title: "Obchodní podmínky — Robin Petr",
  description:
    "Podmínky spolupráce: vznik smlouvy, ceny a splatnost, měsíční služby a výpověď, pronájem čidel, licence ke kódu a odpovědnost.",
  alternates: { canonical: "/obchodni-podminky" },
};

export default function ObchodniPodminkyPage() {
  return (
    <main id="hlavni-obsah">
      <Terms />
    </main>
  );
}
