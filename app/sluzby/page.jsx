import Sluzby from "@/components/services/Sluzby";

export const metadata = {
  title: "Nabídka — Robin Petr",
  description:
    "Co pro váš podnik postavím: věrnostní systém, hlídání teplot (HACCP), web a online objednávky, recenze tag i řešení na míru. Software i hardware od jednoho člověka.",
};

export default function SluzbyPage() {
  return (
    <main id="hlavni-obsah">
      <Sluzby />
    </main>
  );
}
