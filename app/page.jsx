import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import ContactCTA from "@/components/contact/ContactCTA";

export default function Home() {
  return (
    <main id="hlavni-obsah">
      <Hero />
      {/* sekce "Co nabízím" přijde sem, až bude */}
      <Portfolio />
      <ContactCTA />
    </main>
  );
}
