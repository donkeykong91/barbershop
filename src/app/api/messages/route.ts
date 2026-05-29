import { NextResponse } from "next/server";
import { demoThreads } from "@/lib/messages";

export function GET() {
  return NextResponse.json({ threads: demoThreads });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!body.appointmentId || !body.body) {
    return NextResponse.json({ error: "appointmentId and body are required" }, { status: 400 });
  }

  return NextResponse.json({
    messageId: crypto.randomUUID(),
    appointmentId: body.appointmentId,
    deliveryStatus: "queued",
    relay: { sms: "queued", email: "queued" },
  }, { status: 201 });
}
