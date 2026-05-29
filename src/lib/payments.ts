export type PaymentRecord = {
  id: string;
  appointmentId: string;
  type: "deposit" | "remaining_balance" | "tip" | "refund";
  amount: number;
  status: "pending" | "succeeded" | "failed" | "refunded";
  source: "Stripe" | "Link" | "Payment Link" | "In Person";
};

export const demoPayments: PaymentRecord[] = [
  { id: "pay-001", appointmentId: "appt-1001", type: "deposit", amount: 10, status: "succeeded", source: "Stripe" },
  { id: "pay-002", appointmentId: "appt-1002", type: "remaining_balance", amount: 30, status: "pending", source: "Payment Link" },
  { id: "pay-003", appointmentId: "appt-1001", type: "tip", amount: 8, status: "succeeded", source: "Link" },
];

export function createPaymentLink(appointmentId: string, amount: number, purpose: string) {
  return {
    appointmentId,
    amount,
    purpose,
    url: `/api/payments/checkout?appointmentId=${appointmentId}&amount=${amount}&purpose=${encodeURIComponent(purpose)}`,
    expiresInMinutes: 30,
  };
}
