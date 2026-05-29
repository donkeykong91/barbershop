import { NextResponse } from "next/server";
import { notificationEvents } from "@/lib/domain";

export function GET() {
  return NextResponse.json({ supportedEvents: notificationEvents });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!notificationEvents.includes(body.event)) {
    return NextResponse.json({ error: "Unsupported notification event" }, { status: 400 });
  }

  return NextResponse.json({ notificationId: crypto.randomUUID(), status: "queued", event: body.event }, { status: 202 });
}
