import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();

  if (!email || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender: {
        name: "Portfolio Contact",
        email: process.env.CONTACT_TO_EMAIL,
      },
      to: [{ email: process.env.CONTACT_TO_EMAIL }],
      replyTo: { email },
      subject: `[Portfolio] ${subject}`,
      textContent: `From: ${email}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    console.error("Brevo API error:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
