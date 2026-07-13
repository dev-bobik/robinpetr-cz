"use client";

import Link from "next/link";
import { useState } from "react";

const inputBase =
  "mt-1.5 w-full rounded-xl border border-brown/25 bg-card px-4 py-3 text-ink placeholder:text-ink-soft/60 transition-colors duration-200 hover:border-brown/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30";
const labelBase =
  "font-mono text-[0.7rem] uppercase tracking-[0.14em] text-brown";

function validate({ name, contact, message }) {
  if (!name) return "Vyplňte prosím jméno.";
  if (!contact) return "Vyplňte prosím e-mail nebo telefon, ať se vám můžu ozvat.";
  if (!message) return "Napište prosím pár slov o tom, s čím potřebujete pomoct.";
  return "";
}

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      contact: String(fd.get("contact") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      website: String(fd.get("website") || ""), // honeypot
    };

    const validationError = validate(payload);
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

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
        className="rounded-2xl border border-brown/15 bg-card p-6 shadow-[0_18px_36px_-24px_rgba(46,42,34,0.4)]"
      >
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
            Díky za zprávu!
          </p>
        </div>
        <p className="mt-3 leading-relaxed text-ink-soft">
          Ozvu se vám obvykle do 24 hodin. Mezitím klidně mrkněte na portfolio,
          nebo mi napište přímo na e-mail.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 font-mono text-sm text-clay-deep underline decoration-brown/30 underline-offset-4 transition-colors duration-200 hover:text-clay"
        >
          Napsat další zprávu
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "submitting"}
      className="relative space-y-5"
    >
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
          placeholder="Jak vám mám říkat?"
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
          placeholder="Kam se vám mám ozvat?"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          S čím vám můžu pomoct?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${inputBase} resize-y`}
          placeholder="Pár vět úplně stačí — detaily doladíme spolu."
        />
      </div>

      {/* honeypot — skryté pole proti botům */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
        <label htmlFor="website">Web (nevyplňujte)</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && error ? (
        <p role="alert" className="text-sm font-medium text-clay-deep">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center gap-2 rounded-full bg-clay px-8 py-3.5 font-medium text-card shadow-[0_14px_30px_-12px_rgba(192,121,79,0.8)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-clay-deep disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "Odesílám…" : "Odeslat zprávu"}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-200 ease-out group-hover:translate-x-1"
        >
          <path
            d="M3.5 9h11M10 4.5 14.5 9 10 13.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <p className="text-[0.78rem] leading-snug text-ink-soft/80">
        Odesláním berete na vědomí{" "}
        <Link
          href="/ochrana-osobnich-udaju"
          className="underline decoration-brown/30 underline-offset-2 transition-colors duration-200 hover:text-clay-deep"
        >
          zpracování osobních údajů
        </Link>{" "}
        pro vyřízení vaší poptávky.
      </p>
    </form>
  );
}
