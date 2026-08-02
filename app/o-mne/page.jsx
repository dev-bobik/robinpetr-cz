import About from "@/components/about/About";

export const metadata = {
  title: "O mně — Robin Petr",
  description:
    "Kdo za webem stojí a proč dělám vedle sebe hardware i software.",
  alternates: { canonical: "/o-mne" },
};

export default function OMnePage() {
  return (
    <main id="hlavni-obsah">
      <About />
    </main>
  );
}
