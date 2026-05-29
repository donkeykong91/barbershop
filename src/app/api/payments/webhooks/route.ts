import { NextResponse } from "next/server";

const processedEvents = new Set<string>();

export async function POST(request: Request) {
  const event = await request.json().catch(() => ({}));
  const eventId = event.id ?? crypto.randomUUID();

  if (processedEvents.has(eventId)) {
    return NextResponse.json({ status: "duplicate_ignored", eventId });
  }

  processedEvents.add(eventId);
  return NextResponse.json({ status: "processed", eventId, appointmentStatusSync: "queued" });
}
