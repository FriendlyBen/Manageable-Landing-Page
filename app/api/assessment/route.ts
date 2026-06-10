import { NextResponse } from "next/server";

import { getMongoDatabase } from "@/lib/mongodb";
import { enforceRateLimit, validateBotProtection } from "@/lib/request-guard";

export const runtime = "nodejs";

type AssessmentPayload = {
  projects?: unknown;
  staff?: unknown;
  hoursPerDay?: unknown;
  locale?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

function asPositiveNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : null;
}

function asLocale(value: unknown) {
  return value === "zh-CN" ? "zh-CN" : "en";
}

function getKualaLumpurDateParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kuala_Lumpur",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);

  const getPart = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  const year = getPart("year");
  const month = getPart("month");
  const day = getPart("day");
  const hour = getPart("hour");
  const minute = getPart("minute");
  const second = getPart("second");

  return {
    date: `${year}-${month}-${day}`,
    dateTime: `${year}-${month}-${day} ${hour}:${minute}:${second}`,
  };
}

export async function POST(request: Request) {
  const rateLimitResponse = enforceRateLimit(request, "assessment", {
    maxRequests: 20,
    windowMs: 1000 * 60 * 10
  });

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  let payload: AssessmentPayload;

  try {
    payload = (await request.json()) as AssessmentPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const projects = asPositiveNumber(payload.projects);
  const staff = asPositiveNumber(payload.staff);
  const hoursPerDay = asPositiveNumber(payload.hoursPerDay);
  const botProtectionResponse = validateBotProtection({
    honeypot: payload.website,
    startedAt: payload.startedAt
  });

  if (botProtectionResponse) {
    return botProtectionResponse;
  }

  if (!projects || !staff || !hoursPerDay) {
    return NextResponse.json({ error: "Invalid assessment inputs" }, { status: 400 });
  }

  const collectionName = process.env.MONGODB_ASSESSMENT_COLLECTION ?? "Assessment_Inputs";

  try {
    const database = await getMongoDatabase();
    const collection = database.collection(collectionName);
    const now = new Date();
    const klDateTime = getKualaLumpurDateParts(now);

    const result = await collection.insertOne({
      projects,
      staff,
      hoursPerDay,
      locale: asLocale(payload.locale),
      createdAt: now,
      clickedDateKl: klDateTime.date,
      clickedDateTimeKl: klDateTime.dateTime,
      clickedTimeZone: "Asia/Kuala_Lumpur",
    });

    return NextResponse.json({ ok: true, id: result.insertedId.toString() });
  } catch (error) {
    console.error("Failed to save assessment inputs", error);
    return NextResponse.json({ error: "Failed to save assessment inputs" }, { status: 500 });
  }
}
