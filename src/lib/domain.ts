export const appointmentStatuses = [
  "Slot Available",
  "Slot Held",
  "Pending Payment",
  "Confirmed",
  "Upcoming",
  "Checked In",
  "Completed",
  "Final Payment Due",
  "Final Payment Paid",
  "Canceled",
  "No-Show",
  "Refunded",
  "Deposit Forfeited",
  "No Penalty",
] as const;

export type AppointmentStatus = (typeof appointmentStatuses)[number];

export const roles = ["Customer/Guest", "Customer-Side Agent", "Barber", "Owner/Admin"] as const;
export type Role = (typeof roles)[number];

export const permissions: Record<Role, string[]> = {
  "Customer/Guest": ["appointment:read-own", "appointment:cancel-own", "appointment:reschedule-once", "message:create-own", "payment:pay-own"],
  "Customer-Side Agent": ["metadata:read-public", "booking:create-hold", "payment:initiate-with-approval"],
  Barber: ["appointments:manage-day", "calendar:manage", "messages:reply", "walkins:create", "blocked-time:manage"],
  "Owner/Admin": ["*"],
};

export type AuditEntry = {
  id: string;
  actor: string;
  action: string;
  target: string;
  oldValue?: string;
  newValue?: string;
  reason?: string;
  timestamp: string;
};

export const demoAuditLog: AuditEntry[] = [
  {
    id: "audit-001",
    actor: "owner@example.com",
    action: "availability.update",
    target: "Friday hours",
    oldValue: "09:00-17:00",
    newValue: "09:00-18:00",
    reason: "Extended Friday evening bookings",
    timestamp: new Date().toISOString(),
  },
];

export const depositPolicy = {
  mode: "required" as "required" | "optional" | "disabled",
  defaultAmount: 10,
  cancellationWindowHours: 24,
  lateCancellationOutcome: "Deposit Forfeited" as AppointmentStatus,
  noShowOutcome: "Deposit Forfeited" as AppointmentStatus,
};

export const notificationEvents = [
  "booking.confirmed",
  "appointment.reminder",
  "appointment.canceled",
  "appointment.rescheduled",
  "payment.receipt",
  "payment.refund",
  "deposit.forfeited",
  "message.created",
];

export const monitoringMetrics = [
  "booking_page_visit",
  "booking_started",
  "booking_completed",
  "booking_abandoned",
  "payment_succeeded",
  "payment_failed",
  "link_approval_delayed",
  "link_approval_declined",
  "link_approval_expired",
  "notification_failed",
];
