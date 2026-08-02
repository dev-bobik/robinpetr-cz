import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Kontakt — Robin Petr",
  description:
    "Napište mi, co řešíte. Podívám se na to a osobně odpovím, obvykle do 24 hodin.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <main id="hlavni-obsah">
      <Contact />
    </main>
  );
}
