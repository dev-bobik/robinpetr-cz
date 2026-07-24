import { ImageResponse } from "next/og";

/* Náhledová karta pro sdílení odkazu (Open Graph / Twitter).
   Generuje se staticky při buildu do PNG — v barvách webu. */

export const alt = "Robin Petr — digitalizace podniků";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#efe7d5",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              backgroundColor: "#c0794f",
              color: "#f9f4e9",
              fontSize: 42,
              fontWeight: 700,
            }}
          >
            R
          </div>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#9c5e3a",
              fontFamily: "monospace",
            }}
          >
            robinpetr.cz
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              color: "#26231c",
              lineHeight: 1.05,
            }}
          >
            Robin Petr
          </div>
          <div style={{ display: "flex", height: 8, width: 220, backgroundColor: "#c0794f", borderRadius: 4 }} />
          <div style={{ fontSize: 40, color: "#564b40", maxWidth: 900, lineHeight: 1.25 }}>
            Weby, objednávky a chytrý hardware pro malé podniky — od jednoho
            člověka, co to celé propojí.
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#9c5e3a", fontFamily: "monospace" }}>
          Hradec Králové · Pardubice a okolí
        </div>
      </div>
    ),
    { ...size },
  );
}
