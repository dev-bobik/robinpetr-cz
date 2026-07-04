"use client";

import { useState } from "react";

/* Klikací prvek, který zkopíruje `value` do schránky a krátce ukáže potvrzení.
   Zachovává vlastní obsah (children) i styl (className). */
export default function Copyable({ value, label = "hodnotu", className = "", children }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // fallback pro starší prohlížeče
      const el = document.createElement("textarea");
      el.value = value;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
      } catch {
        /* nic */
      }
      document.body.removeChild(el);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Kopírovat ${label}: ${value}`}
      className={`relative ${className}`}
    >
      {children}
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink px-2.5 py-1 font-mono text-[0.68rem] text-beige shadow-md transition-all duration-200 ${
          copied ? "opacity-100" : "-translate-y-1 opacity-0"
        }`}
      >
        Zkopírováno!
      </span>
    </button>
  );
}
