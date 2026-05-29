import { NextResponse } from "next/server";
import { getAvailableSlots } from "@/lib/availability";
import { availabilitySettings } from "@/lib/settings";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!body.serviceId) {
    return NextResponse.json({ error: "serviceId is required" }, { status: 400 });
  }

  return NextResponse.json({
    settings: {
      timezone: availabilitySettings.timezone,
      minimumNoticeHours: availabilitySettings.minimumNoticeHours,
      futureBookingWindowDays: availabilitySettings.futureBookingWindowDays,
      slotIntervalMinutes: availabilitySettings.slotIntervalMinutes,
      bufferMinutes: availabilitySettings.bufferMinutes,
    },
    slots: getAvailableSlots({ serviceId: body.serviceId, addOnIds: body.addOnIds ?? [] }),
  });
}
