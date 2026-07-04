/* Motiv: sbírání razítek (věrnost). 10 koleček, 7 vyplněných hlinkově,
   plní se decentně jedno po druhém ve smyčce. Reduced-motion → staticky 7/10. */

const TOTAL = 10;
const FILLED = 7;
const cx = (i) => 12 + i * 19.3;

export default function StampsMotif({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      aria-hidden="true"
      className={`h-10 w-auto text-brown ${className}`}
    >
      {/* obrysy razítek (lehce od ruky) */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <circle key={`o-${i}`} cx={cx(i)} cy="20" r="7.4" />
        ))}
      </g>
      {/* vyplněná razítka — animovaně naskakují */}
      <g fill="#c0794f">
        {Array.from({ length: FILLED }).map((_, i) => (
          <circle
            key={`f-${i}`}
            cx={cx(i)}
            cy="20"
            r="5.6"
            className="motion-safe:[animation:stamp-fill_4.2s_ease-in-out_infinite]"
            style={{
              animationDelay: `${i * 0.28}s`,
              transformOrigin: `${cx(i)}px 20px`,
            }}
          />
        ))}
      </g>
    </svg>
  );
}
