"use client";

import Link from "next/link";
import { useState } from "react";

const inputBase =
  "mt-1.5 w-full rounded-xl border border-brown/25 bg-card px-4 py-3 text-ink placeholder:text-ink-soft/60 transition-colors duration-200 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30";
const labelBase =
  "font-mono text-[0.7rem] uppercase tracking-[0.14em] text-brown";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name"),
      contact: fd.get("contact"),
      message: fd.get("message"),
      website: fd.get("website"), // honeypot
    };

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "Odeslání se nepovedlo. Zkuste to prosím znovu.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setError("Odeslání se nepovedlo — zkontrolujte připojení a zkuste to znovu.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-brown/15 bg-card p-6"
      >
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="11" fill="#4e9d5e" opacity="0.15" />
            <path
              d="M7 12.5 10.5 16 17 8.5"
              stroke="#4e9d5e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-display text-xl font-semibold text-ink">
            Díky, odpovídám obvykle do 24 hodin.
          </p>
        </div>
        <p className="mt-2 text-ink-soft">
          Mezitím klidně mrkněte na portfolio nebo mi napište přímo.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 font-mono text-sm text-clay-deep underline decoration-brown/30 underline-offset-4 transition-colors hover:text-clay"
        >
          Napsat další zprávu
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className={labelBase}>
          Jméno
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputBase}
          placeholder="Jak vám mám říkat"
        />
      </div>

      <div>
        <label htmlFor="contact" className={labelBase}>
          E-mail nebo telefon
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          autoComplete="email"
          className={inputBase}
          placeholder="Kam se vám ozvu"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          S čím vám mohu pomoct?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${inputBase} resize-y`}
          placeholder="Pár vět stačí — s čím vám můžu pomoct."
        />
      </div>

      {/* honeypot — skryté pole proti botům */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Web (nevyplňujte)</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm font-medium text-clay-deep">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-stone-600 px-7 py-3.5 font-medium text-beige shadow-[0_14px_30px_-14px_rgba(46,42,34,0.6)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "Odesílám…" : "Odeslat"}
      </button>

      <p className="text-[0.78rem] leading-snug text-ink-soft/80">
        Odesláním beru na vědomí{" "}
        <Link
          href="/ochrana-osobnich-udaju"
          className="underline decoration-brown/30 underline-offset-2 transition-colors hover:text-clay-deep"
        >
          zpracování osobních údajů
        </Link>{" "}
        pro vyřízení mé poptávky.
      </p>
    </form>
  );
}
