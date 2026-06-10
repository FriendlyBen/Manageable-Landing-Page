import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { enforceRateLimit, validateBotProtection } from "@/lib/request-guard";

export const runtime = "nodejs";

const recipients = ["bentleyteh@databytes.my", "2001bentleyteh@gmail.com"];

type WorkflowAssessmentPayload = {
  email?: unknown;
  phone?: unknown;
  locale?: unknown;
  website?: unknown;
  startedAt?: unknown;
  assessmentInputs?: {
    projects?: unknown;
    staff?: unknown;
    hoursPerDay?: unknown;
  };
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function asCleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asOptionalAssessmentValue(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
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
      pass,
    },
    from,
  };
}

export async function POST(request: Request) {
  const rateLimitResponse = enforceRateLimit(request, "workflow-assessment", {
    maxRequests: 10,
    windowMs: 1000 * 60 * 10
  });

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  let payload: WorkflowAssessmentPayload;

  try {
    payload = (await request.json()) as WorkflowAssessmentPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = asCleanString(payload.email);
  const phone = asCleanString(payload.phone);
  const botProtectionResponse = validateBotProtection({
    honeypot: payload.website,
    startedAt: payload.startedAt
  });

  if (botProtectionResponse) {
    return botProtectionResponse;
  }

  if (!email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const projects = asOptionalAssessmentValue(payload.assessmentInputs?.projects);
  const staff = asOptionalAssessmentValue(payload.assessmentInputs?.staff);
  const hoursPerDay = asOptionalAssessmentValue(payload.assessmentInputs?.hoursPerDay);
  const locale = payload.locale === "zh-CN" ? "zh-CN" : "en";
  const smtpConfig = getSmtpConfig();

  if (!smtpConfig) {
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: smtpConfig.auth,
  });

  const subject = "MANAGEABLE - WORKFLOW ASSESSMENT";
  const text = [
    "A new workflow assessment request was submitted through manageable.my.",
    "",
    `Email: ${email}`,
    `Phone / WhatsApp: ${phone}`,
    `Locale: ${locale}`,
    "",
    "Assessment inputs:",
    `Projects: ${projects || "-"}`,
    `Staff involved: ${staff || "-"}`,
    `Hours per day: ${hoursPerDay || "-"}`,
  ].join("\n");

  const html = `
    <p>A new workflow assessment request was submitted through <strong>manageable.my</strong>.</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Locale:</strong> ${escapeHtml(locale)}</p>
    <p><strong>Assessment inputs:</strong></p>
    <ul>
      <li><strong>Projects:</strong> ${escapeHtml(projects || "-")}</li>
      <li><strong>Staff involved:</strong> ${escapeHtml(staff || "-")}</li>
      <li><strong>Hours per day:</strong> ${escapeHtml(hoursPerDay || "-")}</li>
    </ul>
  `;

  try {
    await transporter.sendMail({
      from: smtpConfig.from,
      to: recipients,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send workflow assessment email", error);
    return NextResponse.json({ error: "Failed to send workflow assessment email" }, { status: 500 });
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
