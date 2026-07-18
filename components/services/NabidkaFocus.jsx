"use client";

import { useEffect } from "react";

/* Zvětšení produktu ve středu obrazovky při vodorovném scrollu Nabídky.
   Běží jen na desktopu, kde je vodorovný scroll aktivní (≥1024px,
   podpora scroll-driven animací, zapnutý pohyb). Jinak nedělá nic —
   karty zůstávají v plné velikosti (--fs/--fo mají v CSS default 1).
   Nastavuje jen CSS proměnné, samotný pohyb zůstává čisté CSS. */

const SHRINK = 0.16; // o kolik se zmenší nejvzdálenější karta
const DIM = 0.4; // o kolik zprůhlední

export default function NabidkaFocus() {
  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const supported = CSS.supports("animation-timeline", "scroll()");

    const track = document.querySelector(".services__track");
    if (!track) return;
    const cells = Array.from(track.querySelectorAll(".services__cell"));
    if (cells.length === 0) return;

    let raf = 0;

    const reset = () => {
      for (const cell of cells) {
        cell.style.removeProperty("--fs");
        cell.style.removeProperty("--fo");
      }
    };

    const update = () => {
      raf = 0;
      const centerX = window.innerWidth / 2;
      for (const cell of cells) {
        const rect = cell.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const norm = Math.min(Math.abs(cardCenter - centerX) / centerX, 1);
        cell.style.setProperty("--fs", (1 - norm * SHRINK).toFixed(3));
        cell.style.setProperty("--fo", (1 - norm * DIM).toFixed(3));
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const isActive = () =>
      mqDesktop.matches && supported && !mqReduce.matches;

    const start = () => {
      if (!isActive()) return;
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    };

    const stop = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      reset();
    };

    const onChange = () => {
      stop();
      start();
    };

    start();
    mqDesktop.addEventListener("change", onChange);
    mqReduce.addEventListener("change", onChange);

    return () => {
      stop();
      mqDesktop.removeEventListener("change", onChange);
      mqReduce.removeEventListener("change", onChange);
    };
  }, []);

  return null;
}
