import { db } from "@/db";
import { leads } from "@/db/schema";

export const dynamic = "force-dynamic";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim() || null;
  const phone = String(body.phone ?? "").trim() || null;
  const role = String(body.role ?? "").trim() || null;
  const message = String(body.message ?? "").trim() || null;
  const type = String(body.type ?? "contact").trim() || "contact";

  if (!name || name.length > 160) {
    return Response.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }
  if (!email || !isEmail(email)) {
    return Response.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  try {
    await db.insert(leads).values({ type, name, email, company, phone, role, message });
  } catch (err) {
    console.error("Failed to save lead", err);
    return Response.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }

  // Optional: send notification email via Resend if configured.
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      const from = process.env.RESEND_FROM || "RecruitOxide <onboarding@resend.dev>";
      await resend.emails.send({
        from,
        to: "hello@recruitoxide.com",
        replyTo: email,
        subject: `New ${type} lead — ${name}`,
        text: [
          `Type: ${type}`,
          `Name: ${name}`,
          `Email: ${email}`,
          company ? `Company: ${company}` : "",
          phone ? `Phone: ${phone}` : "",
          role ? `Role: ${role}` : "",
          message ? `\nMessage:\n${message}` : "",
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } catch (err) {
      // Don't fail the request if email delivery has an issue — the lead is saved.
      console.error("Resend email failed", err);
    }
  }

  return Response.json({ ok: true });
}
