/* Motiv: kutilství / stavění na míru. Ručně kreslený šroubovák + šroub,
   který se jemně "sešroubovává" (otáčí sem tam). */

export default function BuildMotif({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 48"
      fill="none"
      aria-hidden="true"
      className={`h-11 w-auto text-brown ${className}`}
    >
      {/* šroubovák */}
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* rukojeť */}
        <path d="M20 16 L46 18" strokeWidth="6" />
        {/* dřík + hrot */}
        <path d="M46 18 L86 25" strokeWidth="2.4" />
      </g>

      {/* šroub — jemně se otáčí */}
      <g
        className="motion-safe:[animation:screw-turn_3.6s_ease-in-out_infinite]"
        style={{ transformOrigin: "128px 26px" }}
      >
        <circle cx="128" cy="26" r="11" stroke="currentColor" strokeWidth="2" />
        <path
          d="M119 26 L137 26"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="128" cy="26" r="2" fill="#e0a23c" />
      </g>
    </svg>
  );
}
