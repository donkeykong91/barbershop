import { demoPayments } from "@/lib/payments";
import { toCsv } from "@/lib/csv";

export function GET() {
  return new Response(toCsv(demoPayments), {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": "attachment; filename=payments.csv",
    },
  });
}
