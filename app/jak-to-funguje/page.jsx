import HowItWorks from "@/components/how-it-works/HowItWorks";

export const metadata = {
  title: "Jak to funguje — Robin Petr",
  description:
    "Lidsky vysvětleno, co dělám: propojený software i vlastní hardware pro podniky. Věrnostní systém, objednávky, dashboard, hlídání teplot — jeden ucelený systém od jednoho člověka.",
};

export default function JakToFungujePage() {
  return (
    <main id="hlavni-obsah">
      <HowItWorks />
    </main>
  );
}
