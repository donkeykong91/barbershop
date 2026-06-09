import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { getAppointmentDuration } from "@/lib/availability";
import { services } from "@/lib/business-data";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const required = ["serviceId", "slot", "customer"];
  const missing = required.filter((key) => !body[key]);

  if (missing.length) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(", ")}` }, { status: 400 });
  }

  const service = services.find((item) => item.id === body.serviceId);
  if (!service) {
    return NextResponse.json({ error: "Unknown serviceId" }, { status: 400 });
  }

  const appointmentId = randomUUID();
  const managementToken = randomUUID();
  const requiresDeposit = service.deposit > 0;

  return NextResponse.json({
    appointmentId,
    status: requiresDeposit ? "Pending Deposit" : "Confirmed",
    durationMinutes: getAppointmentDuration({ serviceId: body.serviceId, addOnIds: body.addOnIds ?? [] }),
    managementUrl: `/appointment/${managementToken}`,
    payment: {
      status: requiresDeposit ? "Deposit Pending Integration" : "No Deposit Required",
      provider: "Stripe placeholder",
      depositRequired: service.deposit,
    },
  }, { status: 201 });
}
