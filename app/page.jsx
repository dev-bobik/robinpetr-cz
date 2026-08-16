import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import PrehledPodniku from "@/components/prehled/PrehledPodniku";
// Portfolio dočasně skryto — přidá se, až budou reálné reference (komponenta zůstává v components/portfolio)
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
      <PrehledPodniku />
      <ContactCTA />
    </main>
  );
}
