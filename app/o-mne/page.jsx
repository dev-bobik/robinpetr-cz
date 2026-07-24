import About from "@/components/about/About";

export const metadata = {
  title: "O mně — Robin Petr",
  description:
    "Kdo za tím stojí. Propojuju hardware a software — od posledního odporu na desce až po finální pixel na webu.",
  alternates: { canonical: "/o-mne" },
};

export default function OMnePage() {
  return (
    <main id="hlavni-obsah">
      <About />
    </main>
  );
}
