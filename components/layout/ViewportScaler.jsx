"use client";

import { useEffect } from "react";

/* "PC, jen zmenšené" pro úzké displeje.
   - šířka displeje < 400 px → mobilní layout (width=device-width)
   - 400–1023 px            → vykreslí desktop v šířce 1024 a prohlížeč ho
                              nativně zmenší na displej (ostré, ne rozmazané)
   - >= 1024 px             → normální desktop 1:1

   Klíčuje se podle window.screen.width (neměnné vůči viewport metě → žádná
   smyčka). Funguje na reálných zařízeních i v emulaci zařízení v DevTools. */

const FULL_WIDTH = 1024;
const MOBILE_MAX = 500;
const DESKTOP = `width=${FULL_WIDTH}`;
const DEVICE = "width=device-width, initial-scale=1";

export default function ViewportScaler() {
  useEffect(() => {
    const meta = document.querySelector('meta[name="viewport"]');
    if (!meta) return;

    const apply = () => {
      const w = window.screen?.width || window.innerWidth;
      const content = w >= MOBILE_MAX && w < FULL_WIDTH ? DESKTOP : DEVICE;
      if (meta.getAttribute("content") !== content) {
        meta.setAttribute("content", content);
      }
    };

    apply();
    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);
    return () => {
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);
    };
  }, []);

  return null;
}
