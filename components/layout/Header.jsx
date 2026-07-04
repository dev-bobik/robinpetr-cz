"use client";

import Link from "next/link";
import { useState } from "react";

/* Sticky hlavička s responzivním menu (na mobilu hamburger). */

const NAV = [
  { label: "Domů", href: "/" },
  { label: "Nabídka", href: "/sluzby" },
  { label: "Jak to funguje", href: "/jak-to-funguje" },
  { label: "O mně", href: "/o-mne" },
  // Portfolio se přidá později
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brown/10 bg-beige/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        <Link href="/" onClick={close} className="flex items-baseline gap-2.5">
          <span className="font-display text-lg font-semibold text-ink">
            Robin Petr
          </span>
          <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.18em] text-brown lg:inline">
            — digitalizace podniků
          </span>
        </Link>

        {/* desktop navigace */}
        <nav className="hidden items-center gap-6 sm:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-clay-deep"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="rounded-full border border-brown/25 px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:border-clay hover:text-clay-deep"
          >
            Ozvěte se
          </Link>
        </nav>

        {/* mobilní přepínač */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink transition-colors hover:bg-brown/5 sm:hidden"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* mobilní panel */}
      {open ? (
        <nav className="border-t border-brown/10 bg-beige/95 px-6 py-3 sm:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="block py-2.5 text-[0.95rem] font-medium text-ink transition-colors hover:text-clay-deep"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={close}
            className="mt-2 inline-flex rounded-full border border-brown/25 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-clay hover:text-clay-deep"
          >
            Ozvěte se
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
