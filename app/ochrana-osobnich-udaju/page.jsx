import PrivacyPolicy from "@/components/legal/PrivacyPolicy";

export const metadata = {
  title: "Zásady zpracování osobních údajů — Robin Petr",
  description:
    "Jak nakládám s osobními údaji z kontaktního formuláře — správce, účel, doba uchování, zpracovatelé a vaše práva.",
  alternates: { canonical: "/ochrana-osobnich-udaju" },
};

export default function OchranaOsobnichUdajuPage() {
  return (
    <main id="hlavni-obsah">
      <PrivacyPolicy />
    </main>
  );
}
