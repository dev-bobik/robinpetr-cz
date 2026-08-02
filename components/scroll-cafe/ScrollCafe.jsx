"use client";

import { useEffect, useRef, useState } from "react";

/* Podpisový scroll-frame prvek — video (průlet systémem) rozřezané na snímky,
   scrubované scrollem. Scrollytelling ve stylu stránky: video v krémovém
   „okně" (tři tečky sage/ochre/clay jako DashboardCard) vpravo, vlevo měnící
   se text + svislý seznam fází. Canvas cover-fit (skill scroll-frame-sekvence).
   Snímky v public/scroll-cafe/ (vodoznak odříznut v ffmpegu). Zatím náhled —
   stojánek/maskot ve videu ještě nejsou finální. */

const TOTAL = 100;
const framePath = (i) => `/scroll-cafe/frame_${String(i).padStart(3, "0")}.webp`;

const PHASES = [
  {
    at: 0.0,
    kicker: "Web",
    title: "Web, díky kterému vás lidé najdou",
    text: "Menu, otevírací doba, fotky a kontakt přehledně na jednom místě. Změny za vás udělám já.",
  },
  {
    at: 0.24,
    kicker: "Objednávky",
    title: "Objednávky bez provizí navíc",
    text: "Zákazník objedná z mobilu a vám se to ukáže v pokladně. Peníze zůstávají u vás.",
  },
  {
    at: 0.47,
    kicker: "Teploty",
    title: "Lednice pod dohledem",
    text: "Čidla měří teploty nonstop a záznamy pro HACCP se vedou samy. O výpadku víte hned.",
  },
  {
    at: 0.66,
    kicker: "Věrnost",
    title: "Věrnost, která vrací lidi",
    text: "Zákazník přiloží telefon a přičte se mu bod. Žádné plastové kartičky ani aplikace navíc.",
  },
];

export default function ScrollCafe() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const imgsRef = useRef([]);
  const loadedRef = useRef(0);
  const lastIdxRef = useRef(-1);
  const [canvasReady, setCanvasReady] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function sizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
    }

    function drawFrame(idx) {
      const img = imgsRef.current[idx];
      if (!img || !img.naturalWidth) return;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      const cw = canvas.width;
      const ch = canvas.height;
      const iW = img.naturalWidth;
      const iH = img.naturalHeight;
      const s = Math.max(cw / iW, ch / iH);
      const dw = iW * s;
      const dh = iH * s;
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    }

    function getProgress() {
      const max = wrap.offsetHeight - window.innerHeight;
      if (max <= 0) return 0;
      const scrolled = -wrap.getBoundingClientRect().top;
      return Math.min(Math.max(scrolled / max, 0), 1);
    }

    function render() {
      if (!loadedRef.current) return;
      const p = getProgress();
      const idx = Math.min(TOTAL - 1, Math.floor(p * TOTAL));
      if (idx !== lastIdxRef.current) {
        drawFrame(idx);
        lastIdxRef.current = idx;
        if (!canvasReady) setCanvasReady(true);
      }
      let ph = 0;
      for (let i = 0; i < PHASES.length; i++) {
        if (p >= PHASES[i].at) ph = i;
      }
      setPhase((prev) => (prev === ph ? prev : ph));
    }

    for (let i = 0; i < TOTAL; i++) {
      const img = new Image();
      img.onload = () => {
        loadedRef.current += 1;
        if (loadedRef.current === 1) {
          sizeCanvas();
          drawFrame(0);
          setCanvasReady(true);
        }
      };
      img.src = framePath(i + 1);
      imgsRef.current[i] = img;
    }

    sizeCanvas();

    if (reduce) {
      const check = setInterval(() => {
        if (imgsRef.current[0]?.naturalWidth) {
          drawFrame(0);
          setCanvasReady(true);
          clearInterval(check);
        }
      }, 100);
      return () => clearInterval(check);
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        render();
        ticking = false;
      });
    }
    function onResize() {
      sizeCanvas();
      lastIdxRef.current = -1;
      render();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    render();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = PHASES[phase];

  return (
    <section
      ref={wrapRef}
      aria-label="Jeden propojený systém — od webu po věrnostní stojánek"
      className="relative"
      style={{ height: "260vh" }}
    >
      <style>{`@keyframes scEnter{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>

      {/* měkké tvary = hloubka (oříznutá vrstva, ať nerozbije sticky) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-6%] top-[18%] h-72 w-72 rounded-full bg-sage/25 blur-3xl" />
        <div className="absolute right-[-4%] bottom-[16%] h-80 w-80 rounded-full bg-ochre/12 blur-3xl" />
      </div>

      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-x-10 gap-y-10 px-6 py-14 lg:grid-cols-[0.78fr_1.22fr]">
          {/* ---- Text + seznam fází ---- */}
          <div className="order-2 lg:order-1">
            <p className="eyebrow">Jeden propojený systém</p>

            <div key={phase} style={{ animation: "scEnter .45s ease both" }}>
              <p className="mt-4 flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-clay-deep">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-clay font-bold text-card">
                  {phase + 1}
                </span>
                {current.kicker}
                <span className="text-ink-soft/50">/ {PHASES.length}</span>
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.7rem,1.2rem+1.8vw,2.5rem)] font-semibold leading-[1.12] text-ink">
                {current.title}
              </h2>
              <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
                {current.text}
              </p>
            </div>
          </div>

          {/* ---- Video jako krémové „okno" ve stylu stránky ---- */}
          <div className="order-1 lg:order-2">
            <figure className="relative rounded-2xl border border-brown/15 bg-card p-2.5 shadow-[0_34px_70px_-30px_rgba(46,42,34,0.5)]">
              {/* titulek okna */}
              <figcaption className="flex items-center justify-between px-2 pb-2.5 pt-1">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-sage" />
                  <span className="h-2 w-2 rounded-full bg-ochre" />
                  <span className="h-2 w-2 rounded-full bg-clay" />
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-brown">
                  Živý provoz
                </span>
              </figcaption>

              {/* obrazovka */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-ink ring-1 ring-brown/10">
                <img
                  src={framePath(1)}
                  alt=""
                  width="1178"
                  height="662"
                  loading="eager"
                  fetchPriority="high"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ visibility: canvasReady ? "hidden" : "visible" }}
                />
                <canvas
                  ref={canvasRef}
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              {/* spodní lišta okna — kontext + vyvážení výšky */}
              <div className="flex items-center gap-2 px-2 pb-1 pt-3">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "#4e9d5e" }}
                  aria-hidden="true"
                />
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink-soft">
                  Web · objednávky · teploty · věrnost — jeden systém
                </span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
