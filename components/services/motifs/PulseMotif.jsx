/* Motiv: klidný tep / hlídání. Vodorovná ručně kreslená linka, po ní jemně
   putuje tečka, na konci klidně pulzuje zelené "vše ok". Klid, ne poplach. */

const LINE = "M8 22 C 46 20, 74 24, 104 21 C 128 19, 150 24, 172 21";

export default function PulseMotif({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      aria-hidden="true"
      className={`h-10 w-auto text-brown ${className}`}
    >
      <path d={LINE} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* jemný průběh po lince */}
      <circle
        r="3"
        fill="#e0a23c"
        fillOpacity="0.7"
        className="motion-safe:animate-signal"
        style={{ offsetPath: `path("${LINE}")`, offsetRotate: "0deg" }}
      />

      {/* zelené "vše ok" — klidný pulz */}
      <circle
        cx="186"
        cy="21"
        r="5"
        fill="#4e9d5e"
        className="motion-safe:animate-pad"
        style={{ transformOrigin: "186px 21px" }}
      />
    </svg>
  );
}
