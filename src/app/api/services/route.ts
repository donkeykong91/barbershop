import { NextResponse } from "next/server";
import { addOns, services } from "@/lib/business-data";

export function GET() {
  return NextResponse.json({ services, addOns });
}
