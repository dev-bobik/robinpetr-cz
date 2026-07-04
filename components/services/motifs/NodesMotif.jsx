/* Motiv: propojení (web · objednávky · cenovky). Ručně kreslené uzly spojené
   tenkými linkami, po nich putuje tečka (tok dat). Jediné místo s tímto
   obvodovým motivem. */

const FLOW = "M20 24 L96 12 L176 24 L96 37 Z";

export default function NodesMotif({ className = "" }) {
  return (
    <svg
      viewBox="0 0 196 48"
      fill="none"
      aria-hidden="true"
      className={`h-11 w-auto text-brown ${className}`}
    >
      {/* propojky */}
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 24 C 55 20, 70 14, 94 12" />
        <path d="M22 25 C 55 29, 72 34, 94 37" />
        <path d="M98 12 C 130 15, 150 20, 174 23" />
        <path d="M98 37 C 130 34, 150 28, 174 25" />
      </g>

      {/* uzly */}
      <g>
        <circle cx="20" cy="24" r="4.5" fill="#c0794f" />
        <circle cx="96" cy="12" r="4.5" fill="#9fad8b" />
        <circle cx="96" cy="37" r="4.5" fill="#e0a23c" />
        <circle cx="176" cy="24" r="4.5" fill="#c0794f" />
      </g>

      {/* tok dat */}
      <circle
        r="3.2"
        fill="#e0a23c"
        className="motion-safe:animate-signal"
        style={{ offsetPath: `path("${FLOW}")`, offsetRotate: "0deg" }}
      />
    </svg>
  );
}
