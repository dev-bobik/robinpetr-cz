import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
  return (
    <main id="hlavni-obsah">
      <Hero />
      {/* sekce "Co nabízím" přijde sem, až bude */}
      <Portfolio />
    </main>
  );
}
