import { Fraunces, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ViewportScaler from "@/components/layout/ViewportScaler";

/* Display — teplý charakterní serif (drží řemeslný pocit) */
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
});

/* Body — čisté, přátelské */
const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-hanken",
  display: "swap",
});

/* Mono — techy popisky, eyebrow, schéma labely */
const spaceMono = Space_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://robinpetr.cz"),
  title: "Robin Petr — digitalizace provozů",
  description:
    "Weby, objednávkové systémy a chytrý hardware pro malé provozy — od jednoho člověka, co to celé propojí.",
  openGraph: {
    title: "Robin Petr — digitalizace provozů",
    description:
      "Weby, objednávkové systémy a chytrý hardware pro malé provozy — od jednoho člověka, co to celé propojí.",
    url: "https://robinpetr.cz",
    siteName: "Robin Petr",
    locale: "cs_CZ",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#efe7d5",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  const fontVars = `${fraunces.variable} ${hanken.variable} ${spaceMono.variable}`;
  return (
    <html lang="cs" className={fontVars}>
      <body className="font-body antialiased">
        <ViewportScaler />
        <a className="skip-link" href="#hlavni-obsah">
          Přeskočit na obsah
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
