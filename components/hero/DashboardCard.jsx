/* Ukázka reálného produktu — mini dashboard podniku z vlastního systému.
   Lehce nakloněná, jemně se vznáší. Čísla v mono = tech styl.
   Zelená jen na ✓ a šipku, jinak paleta.
   `compact`    = menší varianta pro mobil.
   `translucent`= lehce průhledné pozadí (schéma prosvítá).
   `backdrop`   = vrstva za obsahem (ručně kreslené schéma), oříznutá do kartičky. */

const GREEN = "#4e9d5e";

function ArrowUp({ className = "" }) {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path
        d="M7 11V3M3.5 6.5 7 3l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Check({ className = "", style }) {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className} style={style}>
      <path
        d="M2.5 7.5 6 11l5.5-7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DashboardCard({
  className = "",
  compact = false,
  translucent = false,
  backdrop = null,
}) {
  const s = compact
    ? {
        width: "w-[clamp(13rem,60vw,15.5rem)]",
        pad: "p-3.5",
        label: "text-[0.58rem]",
        gap: "mt-3",
        trzby: "text-[1.45rem]",
        kc: "text-[0.8rem]",
        badge: "text-[0.58rem]",
        tilePad: "p-2.5",
        tileLabel: "text-[0.52rem]",
        tileVal: "text-base",
        status: "text-[0.62rem]",
      }
    : {
        width: "w-[clamp(17rem,72vw,24rem)]",
        pad: "p-6",
        label: "text-[0.8rem]",
        gap: "mt-5",
        trzby: "text-[2.4rem]",
        kc: "text-lg",
        badge: "text-[0.78rem]",
        tilePad: "p-4",
        tileLabel: "text-[0.74rem]",
        tileVal: "text-2xl",
        status: "text-[0.85rem]",
      };

  const bg = translucent ? "bg-card/70" : "bg-card";
  const tileBg = translucent ? "bg-beige/40" : "bg-beige/70";

  return (
    <div
      className={`${s.width} relative overflow-hidden rounded-2xl border border-brown/15 ${bg} ${s.pad} shadow-[0_28px_60px_-28px_rgba(46,42,34,0.45)] ${className}`}
      style={{ "--tilt": "-3deg" }}
    >
      {/* schéma za obsahem (oříznuté do kartičky) */}
      {backdrop ? (
        <div className="pointer-events-none absolute inset-0 z-0">{backdrop}</div>
      ) : null}

      <div className="relative z-10">
        {/* hlavička */}
        <div className="flex items-center justify-between">
          <p className={`font-mono ${s.label} uppercase tracking-[0.16em] text-brown`}>
            Přehled podniku
          </p>
          <span className="flex gap-1" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
          </span>
        </div>

        {/* Ušetřeno za měsíc — dominantní */}
        <div className={s.gap}>
          <p className={`font-mono ${s.label} uppercase tracking-[0.14em] text-ink-soft`}>
            Ušetřeno za měsíc
          </p>
          <div className="mt-1 flex items-end gap-2">
            <span className={`font-mono ${s.trzby} font-bold leading-none text-ink`}>
              8&nbsp;400
              <span className={`ml-1 ${s.kc} font-medium text-ink-soft`}>Kč</span>
            </span>
          </div>
        </div>

        {/* dva menší údaje vedle sebe */}
        <div className={`${s.gap} grid grid-cols-2 gap-2.5`}>
          <div className={`flex flex-col justify-center rounded-xl border border-brown/10 ${tileBg} ${s.tilePad}`}>
            <p className={`font-mono ${s.tileLabel} uppercase tracking-[0.1em] text-ink-soft`}>
              Zákazníci tento měsíc
            </p>
            <p className={`mt-1 font-mono ${s.tileVal} font-bold text-ink`}>312</p>
            <p
              className={`mt-0.5 inline-flex items-center gap-0.5 font-mono ${s.badge} font-bold`}
              style={{ color: GREEN }}
            >
              <ArrowUp />
              18&nbsp;%
            </p>
          </div>
          <div className={`flex flex-col justify-center rounded-xl border border-brown/10 ${tileBg} ${s.tilePad}`}>
            <p className={`font-mono ${s.tileLabel} uppercase tracking-[0.1em] text-ink-soft`}>
              Věrnostní karty
            </p>
            <p className={`mt-1 font-mono ${s.tileVal} font-bold text-ink`}>87</p>
            <p className={`mt-0.5 font-mono ${s.badge} font-medium text-ink-soft`}>
              aktivních
            </p>
          </div>
        </div>

        {/* status dole */}
        <div className={`${s.gap} flex items-center gap-1.5 border-t border-brown/15 pt-3`}>
          <Check style={{ color: GREEN }} />
          <span
            className={`font-mono ${s.status} font-bold uppercase tracking-wider`}
            style={{ color: GREEN }}
          >
            Vše běží
          </span>
        </div>
      </div>
    </div>
  );
}
