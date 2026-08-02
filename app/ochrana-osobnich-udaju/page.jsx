import PrivacyPolicy from "@/components/legal/PrivacyPolicy";

export const metadata = {
  title: "Zásady zpracování osobních údajů — Robin Petr",
  description:
    "Jak nakládám s údaji z kontaktního formuláře: kdo je správce, proč je zpracovávám, jak dlouho je držím a jaká máte práva.",
  alternates: { canonical: "/ochrana-osobnich-udaju" },
};

export default function OchranaOsobnichUdajuPage() {
  return (
    <main id="hlavni-obsah">
      <PrivacyPolicy />
    </main>
  );
}
