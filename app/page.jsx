import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import ContactCTA from "@/components/contact/ContactCTA";

export default function Home() {
  return (
    <main id="hlavni-obsah">
      <Hero />
      <Services />
      <Portfolio />
      <ContactCTA />
    </main>
  );
}
