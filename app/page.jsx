import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import ContactCTA from "@/components/contact/ContactCTA";
import StructuredData from "@/components/seo/StructuredData";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="hlavni-obsah">
      <StructuredData />
      <Hero />
      <Services />
      <Portfolio />
      <ContactCTA />
    </main>
  );
}
