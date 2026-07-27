import HowItWorks from "@/components/how-it-works/HowItWorks";
import ScrollCafe from "@/components/scroll-cafe/ScrollCafe";

export const metadata = {
  title: "Jak to funguje — Robin Petr",
  description:
    "Lidsky vysvětleno, co dělám: propojený software i vlastní hardware pro podniky. Věrnostní systém, objednávky, dashboard, hlídání teplot — jeden ucelený systém od jednoho člověka.",
  alternates: { canonical: "/jak-to-funguje" },
};

export default function JakToFungujePage() {
  return (
    <main id="hlavni-obsah">
      <ScrollCafe />
      <HowItWorks />
    </main>
  );
}
