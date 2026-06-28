import MobileHero from "./MobileHero";
import DesktopHero from "./DesktopHero";

/* Hero má dva samostatné layouty se stejným stylem:
   - MobileHero  (do md)
   - DesktopHero (md+) */
export default function Hero() {
  return (
    <>
      <MobileHero />
      <DesktopHero />
    </>
  );
}
