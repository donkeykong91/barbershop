import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!body.appointmentId || !body.amount || !body.reason) {
    return NextResponse.json({ error: "appointmentId, amount, and reason are required" }, { status: 400 });
  }

  return NextResponse.json({
    refundId: crypto.randomUUID(),
    status: "refund_requested",
    audit: { action: "payment.refund", reason: body.reason },
  }, { status: 201 });
}
