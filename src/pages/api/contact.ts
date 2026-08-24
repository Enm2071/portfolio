import type { APIRoute } from "astro";

import { sendContactEmail } from "../../lib/contact-email";

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = { name: 80, email: 200, message: 4000 };

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  // Hidden honeypot field — real visitors never fill it, bots usually do.
  if (typeof payload.website === "string" && payload.website.trim() !== "") {
    return json({ ok: true }, 200);
  }

  const firstName = typeof payload.firstName === "string" ? payload.firstName.trim() : "";
  const lastName = typeof payload.lastName === "string" ? payload.lastName.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!firstName || !lastName || !email || !message) {
    return json({ ok: false, error: "missing_fields" }, 400);
  }
  if (!EMAIL_RE.test(email) || email.length > MAX_LEN.email) {
    return json({ ok: false, error: "invalid_email" }, 400);
  }
  if (firstName.length > MAX_LEN.name || lastName.length > MAX_LEN.name) {
    return json({ ok: false, error: "invalid_name" }, 400);
  }
  if (message.length > MAX_LEN.message) {
    return json({ ok: false, error: "message_too_long" }, 400);
  }

  try {
    await sendContactEmail({ firstName, lastName, email, message });
  } catch (error) {
    console.error("[contact] failed to send email", error);
    return json({ ok: false, error: "send_failed" }, 502);
  }

  return json({ ok: true }, 200);
};
