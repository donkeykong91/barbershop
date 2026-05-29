import { demoAppointments } from "@/lib/appointments";
import { toCsv } from "@/lib/csv";

export function GET() {
  return new Response(toCsv(demoAppointments), {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": "attachment; filename=appointments.csv",
    },
  });
}
