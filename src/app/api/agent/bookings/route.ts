import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!body.customerApprovalToken && body.paymentRequired !== false) {
    return NextResponse.json({
      status: "approval_required",
      holdId: randomUUID(),
      expiresInMinutes: 5,
      nextAction: "Collect explicit customer approval before payment can complete.",
    }, { status: 202 });
  }

  return NextResponse.json({
    status: "hold_created",
    holdId: randomUUID(),
    expiresInMinutes: 5,
    payment: {
      preferredPath: "Link programmatic payment",
      fallbackPath: "virtual-card checkout",
    },
  }, { status: 201 });
}
