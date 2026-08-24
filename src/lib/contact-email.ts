import nodemailer from "nodemailer";

export type ContactSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function requiredEnv(name: string) {
  const value = import.meta.env[name] ?? process.env[name];
  if (!value) throw new Error(`${name} no esta configurada.`);
  return value;
}

function booleanEnv(value: string | undefined, fallback: boolean) {
  if (!value) return fallback;
  return value === "true";
}

function numberEnv(value: string | undefined, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function createTransport() {
  return nodemailer.createTransport({
    host: requiredEnv("SMTP_HOST"),
    port: numberEnv(import.meta.env.SMTP_PORT ?? process.env.SMTP_PORT, 465),
    secure: booleanEnv(import.meta.env.SMTP_SECURE ?? process.env.SMTP_SECURE, true),
    auth: {
      user: requiredEnv("SMTP_USER"),
      pass: requiredEnv("SMTP_PASS"),
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// Palette pulled from src/layouts/Layout.astro's :root tokens, same dark
// background / blue-purple gradient the site itself uses (Contact.astro's
// .text-gradient), so the email doesn't look like a generic form-builder send.
const C = {
  bg: "#111418",
  card: "#181c22",
  border: "#2a3038",
  foreground: "#f8fafc",
  muted: "#9aa4b2",
  primary: "#3b82f6",
  purple: "#a855f7",
};

function buildSubject(data: ContactSubmission) {
  return `Portfolio · Nuevo mensaje de ${data.firstName} ${data.lastName}`;
}

function buildHtml(data: ContactSubmission) {
  const c = C;
  const name = escapeHtml(`${data.firstName} ${data.lastName}`.trim());
  const email = escapeHtml(data.email);
  const message = escapeHtml(data.message).replaceAll("\n", "<br/>");

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="dark" />
    <meta name="supported-color-schemes" content="dark" />
    <title>${escapeHtml(buildSubject(data))}</title>
  </head>
  <body style="margin:0;padding:0;background:${c.bg};font-family:'Courier New',ui-monospace,monospace;color:${c.foreground};">
    <div style="padding:32px 14px;background:${c.bg};">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;background:${c.card};border:1px solid ${c.border};border-radius:12px;overflow:hidden;">
        <tr>
          <td style="padding:0;background:linear-gradient(90deg,${c.primary} 0%,${c.purple} 100%);height:6px;line-height:6px;font-size:0;">&nbsp;</td>
        </tr>
        <tr>
          <td style="padding:28px 28px 8px 28px;">
            <div style="display:inline-block;padding:5px 10px;border-radius:4px;background:${c.primary}22;color:${c.primary};font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
              ernestonunez.dev · contacto
            </div>
            <h1 style="margin:16px 0 4px 0;font-size:22px;color:${c.foreground};">Nuevo mensaje del formulario</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 28px 0 28px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid ${c.border};font-size:12px;color:${c.muted};text-transform:uppercase;letter-spacing:0.06em;">Nombre</td>
              </tr>
              <tr>
                <td style="padding:2px 0 12px 0;font-size:15px;color:${c.foreground};font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid ${c.border};font-size:12px;color:${c.muted};text-transform:uppercase;letter-spacing:0.06em;">Email</td>
              </tr>
              <tr>
                <td style="padding:2px 0 12px 0;font-size:15px;">
                  <a href="mailto:${email}" style="color:${c.primary};text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid ${c.border};font-size:12px;color:${c.muted};text-transform:uppercase;letter-spacing:0.06em;">Mensaje</td>
              </tr>
              <tr>
                <td style="padding:10px 0 0 0;font-size:14px;line-height:1.7;color:${c.foreground};">${message}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 28px 28px 28px;">
            <a href="mailto:${email}" style="display:inline-block;background:${c.primary};color:#ffffff;text-decoration:none;padding:10px 18px;border-radius:6px;font-size:13px;font-weight:700;">
              Responder a ${escapeHtml(data.firstName)}
            </a>
            <p style="margin:16px 0 0 0;font-size:11px;color:${c.muted};">
              Enviado desde el formulario de contacto en ernestonunez.dev
            </p>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`;
}

function buildText(data: ContactSubmission) {
  return [
    `Nuevo mensaje del formulario de contacto (ernestonunez.dev)`,
    "",
    `Nombre: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    "",
    "Mensaje:",
    data.message,
  ].join("\n");
}

export async function sendContactEmail(data: ContactSubmission) {
  const to = (import.meta.env.CONTACT_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL ?? "enm2071@gmail.com") as string;
  const transporter = createTransport();

  await transporter.sendMail({
    from: requiredEnv("EMAIL_FROM"),
    to,
    replyTo: data.email,
    subject: buildSubject(data),
    html: buildHtml(data),
    text: buildText(data),
  });
}
