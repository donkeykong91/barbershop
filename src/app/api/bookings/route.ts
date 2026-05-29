import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { getAppointmentDuration } from "@/lib/availability";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const required = ["serviceId", "slot", "customer"];
  const missing = required.filter((key) => !body[key]);

  if (missing.length) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(", ")}` }, { status: 400 });
  }

  const appointmentId = randomUUID();
  const managementToken = randomUUID();

  return NextResponse.json({
    appointmentId,
    status: "Confirmed",
    durationMinutes: getAppointmentDuration({ serviceId: body.serviceId, addOnIds: body.addOnIds ?? [] }),
    managementUrl: `/appointment/${managementToken}`,
    payment: {
      status: "Deposit Pending Integration",
      provider: "Stripe placeholder",
    },
  }, { status: 201 });
}
