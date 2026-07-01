import { NextResponse } from "next/server";

/* Kontaktní formulář — odesílá e-mail přes Resend REST API (bez SDK).
   Konfigurace přes env:
     RESEND_API_KEY     (povinné)  — https://resend.com
     CONTACT_TO_EMAIL   (povinné)  — kam chodí poptávky
     CONTACT_FROM_EMAIL (volitelné) — jinak onboarding@resend.dev
*/

const MAX = { name: 120, contact: 160, message: 4000 };

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 });
  }

  // honeypot — boti vyplní skryté pole; tiše je odmítneme
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const contact = String(data.contact ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !contact || !message) {
    return NextResponse.json(
      { error: "Vyplňte prosím jméno, kontakt i zprávu." },
      { status: 400 },
    );
  }
  if (
    name.length > MAX.name ||
    contact.length > MAX.contact ||
    message.length > MAX.message
  ) {
    return NextResponse.json(
      { error: "Zpráva je příliš dlouhá." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error(
      "Kontaktní formulář není nakonfigurován: chybí RESEND_API_KEY nebo CONTACT_TO_EMAIL.",
    );
    return NextResponse.json(
      { error: "Formulář zatím není nakonfigurován. Napište mi prosím přímo e-mailem." },
      { status: 503 },
    );
  }

  const from =
    process.env.CONTACT_FROM_EMAIL || "Web robinpetr.cz <onboarding@resend.dev>";
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        ...(isEmail ? { reply_to: contact } : {}),
        subject: `Nová poptávka z webu — ${name}`,
        text: `Jméno: ${name}\nKontakt: ${contact}\n\nZpráva:\n${message}\n`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend selhal:", res.status, detail);
      return NextResponse.json(
        { error: "Odeslání se teď nepovedlo. Zkuste to prosím znovu nebo napište přímo." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Chyba při odesílání kontaktu:", err);
    return NextResponse.json(
      { error: "Něco se pokazilo. Zkuste to prosím znovu." },
      { status: 500 },
    );
  }
}
