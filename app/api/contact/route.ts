import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { enforceRateLimit, validateBotProtection } from "@/lib/request-guard";

export const runtime = "nodejs";

const recipients = ["bentleyteh@databytes.my", "2001bentleyteh@gmail.com"];

type ContactPayload = {
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function asCleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getSmtpConfig() {
  const host = process.env.CONTACT_SMTP_HOST;
  const port = process.env.CONTACT_SMTP_PORT;
  const user = process.env.CONTACT_SMTP_USER;
  const pass = process.env.CONTACT_SMTP_PASS;
  const from = process.env.CONTACT_SMTP_FROM ?? "bentleyteh@databytes.my";

  if (!host || !port || !user || !pass) {
    return null;
  }

  return {
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: {
      user,
      pass
    },
    from
  };
}

export async function POST(request: Request) {
  const rateLimitResponse = enforceRateLimit(request, "contact", {
    maxRequests: 10,
    windowMs: 1000 * 60 * 10
  });

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const company = asCleanString(payload.company);
  const email = asCleanString(payload.email);
  const phone = asCleanString(payload.phone);
  const message = asCleanString(payload.message);
  const botProtectionResponse = validateBotProtection({
    honeypot: payload.website,
    startedAt: payload.startedAt
  });

  if (botProtectionResponse) {
    return botProtectionResponse;
  }

  if (!company || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const smtpConfig = getSmtpConfig();

  if (!smtpConfig) {
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: smtpConfig.auth
  });

  const subject = `MANAGEABLE ENQUIRY - ${email}`;
  const text = [
    "A new contact enquiry was submitted through manageable.my.",
    "",
    `Company: ${company}`,
    `Work email: ${email}`,
    `Phone number: ${phone}`,
    `Message: ${message || "-"}`,
  ].join("\n");

  const html = `
    <p>A new contact enquiry was submitted through <strong>manageable.my</strong>.</p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Work email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone number:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Message:</strong><br />${escapeHtml(message || "-").replace(/\n/g, "<br />")}</p>
  `;

  try {
    await transporter.sendMail({
      from: smtpConfig.from,
      to: recipients,
      replyTo: email,
      subject,
      text,
      html
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact form email", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
