import Terms from "@/components/legal/Terms";

export const metadata = {
  title: "Obchodní podmínky — Robin Petr",
  description:
    "Podmínky spolupráce: vznik smlouvy, ceny, splatnost, měsíční služby, čidla, licence a odpovědnost.",
  alternates: { canonical: "/obchodni-podminky" },
};

export default function ObchodniPodminkyPage() {
  return (
    <main id="hlavni-obsah">
      <Terms />
    </main>
  );
}
