import Sluzby from "@/components/services/Sluzby";

export const metadata = {
  title: "Nabídka — Robin Petr",
  description:
    "Balíčky pro kompletní digitalizaci provozovny — web, pokladna, věrnostní systém, digitální vizitka a hlídání teplot. Všechno od jednoho dodavatele, nebo si vyberte jen část.",
  alternates: { canonical: "/sluzby" },
};

export default function SluzbyPage() {
  return (
    <main id="hlavni-obsah">
      <Sluzby />
    </main>
  );
}
