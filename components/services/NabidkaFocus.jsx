"use client";

import { useEffect } from "react";

/* Vodorovná nabídka produktů řízená scrollem (desktop, ≥1024px).
   Běží jen tam, kde je sekce přilepená a uživatel nemá vypnutý pohyb;
   jinak nedělá nic a zůstává svislý stack (viz .services* v globals.css).

   Dvě části:
   1) Posun stopy = čistá funkce scroll pozice. Nemá vlastní stav, který by se
      mohl se scrollem rozejít, takže sekce nejde „přeskočit".
   2) Dosedání na produkt po zastavení scrollu — aby se nedalo zůstat stát
      mezi dvěma produkty.

   Proč zrovna takhle (dvě slepé uličky předtím):
   - Dorovnání spouštěné časovačem po ~140 ms ticha se pralo se setrvačností
     scrollu: momentum ještě dojížděl, skript už táhl jinam → sekalo to.
     Řeší to událost `scrollend`, která přijde až když dojede úplně všechno.
   - Dorovnání na *nejbližší* produkt stahovalo uživatele zpátky, když popojel
     jen kousek dopředu. Proto se cíl vybírá podle směru pohybu: stačí popojet
     o pětinu kroku a dosedne se na další, ne zpátky na předchozí. */

const CENTER = 1.06; // zvětšení produktu přesně ve středu
const EDGE = 0.86; // zmenšení nejvzdálenějšího produktu
const DIM = 0.5; // o kolik zprůhlední nejvzdálenější
const COMMIT = 0.2; // jakou část kroku stačí ujet, aby se dosedlo na další
const FALLBACK_IDLE = 260; // ms ticha (prohlížeče bez `scrollend`)

export default function NabidkaFocus() {
  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const wrap = document.querySelector(".services");
    const track = document.querySelector(".services__track");
    if (!wrap || !track) return;

    let cells = [];
    /* translateX, při kterém je produkt i přesně uprostřed obrazovky */
    let offsets = [];
    let pinY = 0; // scrollY, kde se sekce přilepí
    let range = 1; // kolik scrollu sekce v přilepeném stavu zabere
    let dir = 1; // poslední směr pohybu (+1 dolů, −1 nahoru)
    let lastY = 0;
    let selfScrolling = false; // dosedání spustil tenhle skript
    let idleTimer = 0;

    const hasScrollEnd = "onscrollend" in window;
    const isActive = () => mqDesktop.matches && !mqReduce.matches;

    /* Bez šířky svislého scrollbaru — innerWidth ho započítává, takže by byl
       „střed obrazovky" o pár pixelů vedle a produkt by nikdy nesedl přesně. */
    const viewportWidth = () => document.documentElement.clientWidth;

    const measure = () => {
      cells = Array.from(track.querySelectorAll(".services__cell"));
      pinY = Math.round(wrap.getBoundingClientRect().top + window.scrollY);
      range = Math.max(1, wrap.offsetHeight - window.innerHeight);
      offsets = cells.map(
        (c) => viewportWidth() / 2 - (c.offsetLeft + c.offsetWidth / 2),
      );
    };

    const progress = () =>
      Math.min(1, Math.max(0, (window.scrollY - pinY) / range));

    const render = () => {
      if (cells.length === 0) return;
      const steps = cells.length - 1;

      let x;
      if (steps < 1) {
        x = offsets[0];
      } else {
        // celá část = index produktu, zbytek = rozpracovaný přechod k dalšímu
        const pos = progress() * steps;
        const i = Math.min(steps - 1, Math.floor(pos));
        x = offsets[i] + (offsets[i + 1] - offsets[i]) * (pos - i);
      }
      track.style.transform = `translateX(${x}px)`;

      /* Vzdálenost od středu jde spočítat z offsetů — bez čtení layoutu,
         takže tohle nenutí prohlížeč každý snímek přepočítávat stránku. */
      const half = viewportWidth() / 2;
      for (let k = 0; k < cells.length; k++) {
        const norm = Math.min(Math.abs(x - offsets[k]) / half, 1);
        const fs = CENTER - norm * (CENTER - EDGE);
        cells[k].style.setProperty("--fs", fs.toFixed(3));
        cells[k].style.setProperty("--fo", (1 - norm * DIM).toFixed(3));
        cells[k].style.zIndex = String(Math.round(fs * 100));
      }
    };

    const settle = () => {
      if (!isActive() || cells.length < 2) return;
      const y = window.scrollY;
      if (y < pinY - 2 || y > pinY + range + 2) return; // mimo sekci — nechat být

      const steps = cells.length - 1;
      const pos = progress() * steps;
      const i = Math.floor(pos);
      const frac = pos - i;

      /* Cíl podle směru pohybu — proto to netahá zpátky proti záměru. */
      let idx;
      if (dir > 0) idx = frac >= COMMIT ? i + 1 : i;
      else idx = frac <= 1 - COMMIT ? i : i + 1;
      idx = Math.max(0, Math.min(steps, idx));

      const target = Math.round(pinY + (idx / steps) * range);
      if (Math.abs(y - target) < 2) return;
      selfScrolling = true;
      window.scrollTo({ top: target, behavior: "smooth" });
    };

    const onScroll = () => {
      if (!isActive()) return;
      const y = window.scrollY;
      if (y !== lastY) {
        dir = y > lastY ? 1 : -1;
        lastY = y;
      }
      /* Synchronně, ne přes requestAnimationFrame: scroll události chodí stejně
         po snímcích a render nečte layout, takže je to levné — a stopa za
         scrollem nezaostane o snímek. */
      render();

      if (!hasScrollEnd) {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(onScrollEnd, FALLBACK_IDLE);
      }
    };

    /* Přijde, až dojede úplně všechno včetně setrvačnosti — proto se dosedání
       nemá s čím prát a nesekne to. */
    const onScrollEnd = () => {
      if (selfScrolling) {
        selfScrolling = false; // tohle byl náš vlastní dojezd
        return;
      }
      settle();
    };

    /* Jakmile uživatel sáhne na scroll, náš dojezd přestat hlídat — ať mu
       stránka „neujíždí pod rukou". */
    const onUserInput = () => {
      selfScrolling = false;
    };

    const onResize = () => {
      measure();
      render();
    };

    /* Uložené pozice produktů platí jen do nejbližší změny layoutu. Fotky
       a fonty doběhnou až po prvním měření a stopu posunou — pak se produkt
       nezastavil uprostřed, ale kus vedle („ujelo to do strany").
       ResizeObserver na stopě takovou změnu zachytí a přeměří. */
    const ro = new ResizeObserver(() => {
      measure();
      render();
    });

    const reset = () => {
      clearTimeout(idleTimer);
      selfScrolling = false;
      track.style.transform = "";
      for (const cell of cells) {
        cell.style.removeProperty("--fs");
        cell.style.removeProperty("--fo");
        cell.style.removeProperty("z-index");
      }
    };

    const start = () => {
      measure();
      if (cells.length === 0) return;
      lastY = window.scrollY;
      render();
      ro.observe(track);
      /* fotky se načtou až po prvním měření → po každé přeměřit */
      for (const im of track.querySelectorAll("img")) {
        if (!im.complete) im.addEventListener("load", onResize, { once: true });
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
      window.addEventListener("wheel", onUserInput, { passive: true });
      window.addEventListener("touchstart", onUserInput, { passive: true });
      window.addEventListener("keydown", onUserInput);
      if (hasScrollEnd) window.addEventListener("scrollend", onScrollEnd);
    };

    const stop = () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("wheel", onUserInput);
      window.removeEventListener("touchstart", onUserInput);
      window.removeEventListener("keydown", onUserInput);
      if (hasScrollEnd) window.removeEventListener("scrollend", onScrollEnd);
      reset();
    };

    const onChange = () => {
      stop();
      if (isActive()) start();
    };

    if (isActive()) start();
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
