import { NextResponse } from "next/server";
import { permissions, roles } from "@/lib/domain";

export function GET() {
  return NextResponse.json({
    authenticated: false,
    demoUser: { role: "Owner/Admin", permissions: permissions["Owner/Admin"] },
    availableRoles: roles,
    note: "Replace demo mode with a production auth provider before launch.",
  });
}
