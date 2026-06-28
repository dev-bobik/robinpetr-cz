/* ==========================================================================
   SchematicBackground — ručně kreslené schéma jako VIDITELNÁ vrstva v pozadí
   za celým herem. Vodiče a součástky rozprostřené po celé ploše (i za textem),
   nízká průhlednost → "prosvítá", text nad ním zůstává čitelný.
   - variant="full"    → desktop (landscape, bohatší)
   - variant="compact" → mobil (portrait, decentnější)
   Čistě SVG + CSS. Dekorativní → aria-hidden. Popisky sedí u součástek.
   ========================================================================== */

function RoughDefs({ id, scale = 4, freq = 0.008, octaves = 1 }) {
  return (
    <filter id={id} x="-8%" y="-40%" width="116%" height="180%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency={freq}
        numOctaves={octaves}
        seed="4"
        result="noise"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="noise"
        scale={scale}
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  );
}

function Pads({ pads }) {
  return (
    <g fill="currentColor" className="text-clay">
      {pads.map(([cx, cy], i) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="6"
          className="motion-safe:animate-pad"
          style={{
            animationDelay: `${(i % 5) * 0.5}s`,
            transformOrigin: `${cx}px ${cy}px`,
          }}
        />
      ))}
    </g>
  );
}

function Signal({ rail }) {
  return (
    <circle
      r="6"
      className="motion-safe:animate-signal text-ochre"
      fill="currentColor"
      style={{ offsetPath: `path("${rail}")`, offsetRotate: "0deg" }}
    />
  );
}

function Labels({ items, size }) {
  return (
    <g
      fill="currentColor"
      className="text-brown"
      fontFamily="var(--font-mono)"
      fontSize={size}
    >
      {items.map(([x, y, t, rot = 0]) => (
        <text key={t} x={x} y={y} transform={`rotate(${rot} ${x} ${y})`}>
          {t}
        </text>
      ))}
    </g>
  );
}

/* ------------------------------ FULL ----------------------------------- */
function FullCircuit({ filterId }) {
  const topBus = "M40 120 C 320 108, 560 132, 820 118 S 1120 110, 1180 124";
  return (
    <>
      <g
        filter={`url(#${filterId})`}
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brown"
      >
        {/* sběrnice a propojky rozprostřené po ploše */}
        <path d={topBus} />
        <path d="M30 660 C 320 648, 580 676, 880 658 S 1130 652, 1180 664" />
        <path d="M150 120 C 144 300, 156 480, 150 660" />
        <path d="M1040 118 C 1046 300, 1034 480, 1040 658" />
        <path d="M600 124 C 606 240, 594 320, 600 392" />
        <path d="M540 478 C 538 560, 542 612, 540 658" />

        {/* R1 — rezistor na horní sběrnici */}
        <path d="M300 120 L316 108 L332 132 L348 108 L364 132 L380 108 L396 120" />
        {/* C1 — kondenzátor na horní sběrnici */}
        <path d="M852 102 L852 134" />
        <path d="M872 102 L872 134" />
        {/* R2 — rezistor na levé propojce */}
        <path d="M150 286 L138 300 L162 318 L138 336 L162 354 L150 368" />
        {/* IC1 — čip uprostřed */}
        <rect x="530" y="392" width="140" height="86" rx="8" />
        <path d="M560 392 L560 380 M600 392 L600 380 M640 392 L640 380" />
        <path d="M560 478 L560 490 M600 478 L600 490 M640 478 L640 490" />
        {/* čidlo teploty na pravé propojce */}
        <circle cx="1040" cy="300" r="22" />
        <path d="M1031 305 L1040 292 L1049 305" />
      </g>

      <Pads
        pads={[
          [40, 120],
          [1180, 124],
          [150, 120],
          [1040, 118],
          [600, 124],
          [820, 118],
          [150, 660],
          [1040, 658],
          [540, 478],
        ]}
      />

      <Labels
        size="16"
        items={[
          [52, 104, "5V", -2],
          [330, 96, "R1", 2],
          [846, 150, "C1", -1],
          [176, 322, "R2", 0],
          [574, 442, "IC1", -1],
          [1072, 306, "θ°C", 2],
          [52, 686, "GND", -2],
        ]}
      />

      <Signal rail={topBus} />
    </>
  );
}

/* ----------------------------- COMPACT --------------------------------- */
function CompactCircuit({ filterId }) {
  const leftRail = "M120 90 C 114 280, 126 470, 120 650";
  return (
    <>
      <g
        filter={`url(#${filterId})`}
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brown"
      >
        {/* sběrnice + propojky přes celou výšku */}
        <path d="M30 90 C 160 80, 300 100, 430 88" />
        <path d="M30 650 C 180 640, 300 666, 440 652" />
        <path d={leftRail} />
        <path d="M360 88 C 366 280, 354 470, 360 650" />
        <path d="M236 90 C 242 200, 224 280, 230 330" />
        <path d="M230 400 C 228 520, 232 590, 230 650" />

        {/* R1 — na horní sběrnici */}
        <path d="M150 90 L164 78 L178 102 L192 78 L206 102 L220 90" />
        {/* IC1 — čip uprostřed */}
        <rect x="170" y="330" width="120" height="70" rx="7" />
        <path d="M200 330 L200 320 M230 330 L230 320 M260 330 L260 320" />
        <path d="M200 400 L200 410 M230 400 L230 410 M260 400 L260 410" />
        {/* C1 — kondenzátor na pravé propojce */}
        <path d="M344 292 L376 292" />
        <path d="M344 308 L376 308" />
        {/* čidlo teploty na levé propojce */}
        <circle cx="120" cy="468" r="20" />
        <path d="M112 473 L120 461 L128 473" />
      </g>

      <Pads
        pads={[
          [30, 90],
          [430, 88],
          [120, 90],
          [360, 88],
          [230, 400],
          [120, 650],
          [360, 650],
        ]}
      />

      <Labels
        size="16"
        items={[
          [40, 76, "5V", -2],
          [150, 70, "R1", 2],
          [238, 376, "IC1", -1],
          [384, 300, "C1", 0],
          [56, 474, "θ°C", 2],
          [40, 678, "GND", -2],
        ]}
      />

      <Signal rail={leftRail} />
    </>
  );
}

/* ------------------------------ CORNER --------------------------------- */
/* Minimální motiv do spodního koutu: jeden krátký tenký vodič + 2 body. */
function CornerCircuit({ filterId }) {
  return (
    <>
      <g
        filter={`url(#${filterId})`}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brown"
      >
        <path d="M14 44 C 72 36, 142 50, 206 38" />
      </g>
      <Pads
        pads={[
          [14, 44],
          [206, 38],
        ]}
      />
    </>
  );
}

/* ----------------------------- BASELINE -------------------------------- */
/* Horizontální schéma 5V — R1 — C1 — IC1 — GND, ručně malované, na šířku.
   Pájecí body barevně jako na předloze (hlinka/okrová, GND zelená). */
function BaselineCircuit({ filterId }) {
  /* Symetrické rozložení kolem středu (340): 5V(40) R1(170) C1(340) IC1(510) GND(640).
     Vodič bleeduje stejně za oba okraje (-20 a 700). */
  const rail = "M-40 71 C 120 64, 240 77, 340 70 C 440 64, 560 77, 720 70";
  return (
    <>
      <g
        filter={`url(#${filterId})`}
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brown"
      >
        {/* hlavní vodič */}
        <path d={rail} />
        {/* R1 — rezistor (střed 170) */}
        <path d="M132 70 L146 58 L162 82 L178 58 L194 82 L208 70" />
        {/* C1 — kondenzátor (střed 340) */}
        <path d="M332 54 L332 86" />
        <path d="M352 54 L352 86" />
        {/* IC1 — čip s nožičkami (střed 510) */}
        <rect x="460" y="50" width="100" height="40" rx="6" />
        <path d="M485 50 L485 40 M510 50 L510 40 M535 50 L535 40" />
        <path d="M485 90 L485 100 M510 90 L510 100 M535 90 L535 100" />
      </g>

      {/* pájecí body — barevné */}
      <g>
        {[
          [40, 70, "#c0794f"],
          [170, 70, "#e0a23c"],
          [510, 70, "#e0a23c"],
          [640, 70, "#4e9d5e"],
        ].map(([cx, cy, fill], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="6"
            fill={fill}
            className="motion-safe:animate-pad"
            style={{
              animationDelay: `${(i % 3) * 0.6}s`,
              transformOrigin: `${cx}px ${cy}px`,
            }}
          />
        ))}
      </g>

      {/* popisky u součástek */}
      <g
        fill="currentColor"
        className="text-brown"
        fontFamily="var(--font-mono)"
        fontSize="15"
      >
        <text x="28" y="52" transform="rotate(-2 28 52)">5V</text>
        <text x="156" y="48" transform="rotate(2 156 48)">R1</text>
        <text x="326" y="46" transform="rotate(-2 326 46)">C1</text>
        <text x="486" y="40" transform="rotate(-1 486 40)">IC1</text>
        <text x="616" y="52" transform="rotate(2 616 52)">GND</text>
      </g>

      <Signal rail={rail} />
    </>
  );
}

const VIEWBOX = {
  full: "0 0 1200 780",
  compact: "0 0 460 720",
  corner: "0 0 220 70",
  baseline: "0 0 680 120",
};

export default function SchematicBackground({ variant = "full", className = "" }) {
  const v = VIEWBOX[variant] ? variant : "full";
  const filterId = `rough-${v}`;
  return (
    <svg
      className={className}
      viewBox={VIEWBOX[v]}
      fill="none"
      preserveAspectRatio={
        v === "corner" || v === "baseline" ? "xMidYMid meet" : "xMidYMid slice"
      }
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {v === "baseline" ? (
          <RoughDefs id={filterId} scale={6.5} freq={0.011} octaves={1} />
        ) : (
          <RoughDefs id={filterId} />
        )}
      </defs>
      {v === "compact" ? (
        <CompactCircuit filterId={filterId} />
      ) : v === "corner" ? (
        <CornerCircuit filterId={filterId} />
      ) : v === "baseline" ? (
        <BaselineCircuit filterId={filterId} />
      ) : (
        <FullCircuit filterId={filterId} />
      )}
    </svg>
  );
}
