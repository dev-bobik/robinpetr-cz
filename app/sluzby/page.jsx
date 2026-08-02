import Sluzby from "@/components/services/Sluzby";

export const metadata = {
  title: "Nabídka — Robin Petr",
  description:
    "Přehled toho, co pro podniky dělám: věrnostní systém, hlídání teplot, web, online objednávky, recenze tag i zakázky na míru.",
  alternates: { canonical: "/sluzby" },
};

export default function SluzbyPage() {
  return (
    <main id="hlavni-obsah">
      <Sluzby />
    </main>
  );
}
