import HowItWorks from "@/components/how-it-works/HowItWorks";
import ScrollCafe from "@/components/scroll-cafe/ScrollCafe";

export const metadata = {
  title: "Jak to funguje — Robin Petr",
  description:
    "Jak probíhá spolupráce a co dostanete: weby, objednávky, věrnost, hlídání teplot i další jednoduchý hardware pro podniky.",
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
