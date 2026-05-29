import { NextResponse } from "next/server";
import { addOns, business, services } from "@/lib/business-data";
import { getAvailableSlots } from "@/lib/availability";
import { depositPolicy } from "@/lib/domain";

export function GET() {
  return NextResponse.json({
    schemaVersion: "booking-metadata.v1",
    business,
    services,
    addOns,
    policy: depositPolicy,
    availabilityPreview: getAvailableSlots({ serviceId: services[0].id }),
    actions: {
      createBookingHold: "/api/agent/bookings",
      createCustomerBooking: "/api/bookings",
    },
  });
}
