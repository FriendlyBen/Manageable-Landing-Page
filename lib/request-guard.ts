import { NextResponse } from "next/server";

type RateLimitOptions = {
  maxRequests: number;
  windowMs: number;
};

type BotProtectionOptions = {
  honeypot: unknown;
  startedAt: unknown;
  minAgeMs?: number;
  maxAgeMs?: number;
};

type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

const globalForRateLimit = globalThis as typeof globalThis & {
  __manageableRateLimitStore?: Map<string, RateLimitEntry>;
};

const rateLimitStore = globalForRateLimit.__manageableRateLimitStore ?? new Map<string, RateLimitEntry>();

if (!globalForRateLimit.__manageableRateLimitStore) {
  globalForRateLimit.__manageableRateLimitStore = rateLimitStore;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function pruneExpiredEntries(now: number) {
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.expiresAt <= now) {
      rateLimitStore.delete(key);
    }
  }
}

export function enforceRateLimit(
  request: Request,
  routeKey: string,
  { maxRequests, windowMs }: RateLimitOptions
) {
  const now = Date.now();
  pruneExpiredEntries(now);

  const clientIp = getClientIp(request);
  const storeKey = `${routeKey}:${clientIp}`;
  const currentEntry = rateLimitStore.get(storeKey);

  if (!currentEntry || currentEntry.expiresAt <= now) {
    rateLimitStore.set(storeKey, {
      count: 1,
      expiresAt: now + windowMs,
    });
    return null;
  }

  if (currentEntry.count >= maxRequests) {
    const retryAfterSeconds = Math.max(1, Math.ceil((currentEntry.expiresAt - now) / 1000));
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfterSeconds),
        },
      }
    );
  }

  currentEntry.count += 1;
  rateLimitStore.set(storeKey, currentEntry);
  return null;
}

export function validateBotProtection({
  honeypot,
  startedAt,
  minAgeMs = 1500,
  maxAgeMs = 1000 * 60 * 60 * 24,
}: BotProtectionOptions) {
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ error: "Bot submission rejected" }, { status: 400 });
  }

  if (typeof startedAt !== "number" || !Number.isFinite(startedAt)) {
    return NextResponse.json({ error: "Missing form timing" }, { status: 400 });
  }

  const ageMs = Date.now() - startedAt;

  if (ageMs < minAgeMs || ageMs > maxAgeMs) {
    return NextResponse.json({ error: "Invalid submission timing" }, { status: 400 });
  }

  return null;
}
