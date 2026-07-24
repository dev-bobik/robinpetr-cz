import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Kontakt — Robin Petr",
  description:
    "Napište mi — nezávazně kouknu na váš podnik a řeknu rovnou, co dává smysl. Odpovídám osobně, obvykle do 24 hodin.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <main id="hlavni-obsah">
      <Contact />
    </main>
  );
}
