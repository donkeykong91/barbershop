import { randomUUID } from "node:crypto";
import { AppointmentStatus } from "@/lib/domain";

export type Appointment = {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  service: string;
  time: string;
  status: AppointmentStatus;
  paymentStatus: string;
  rescheduleCount: number;
  secureToken: string;
};

export const demoAppointments: Appointment[] = [
  {
    id: "appt-1001",
    customerName: "Marcus Reed",
    customerPhone: "555-010-2323",
    customerEmail: "marcus@example.com",
    service: "Classic Cut",
    time: "Today · 10:00 AM",
    status: "Confirmed",
    paymentStatus: "Deposit Paid",
    rescheduleCount: 0,
    secureToken: "demo-token",
  },
  {
    id: "appt-1002",
    customerName: "Luis Carter",
    customerPhone: "555-010-4545",
    customerEmail: "luis@example.com",
    service: "Skin Fade",
    time: "Today · 12:30 PM",
    status: "Upcoming",
    paymentStatus: "Pending Final Balance",
    rescheduleCount: 1,
    secureToken: randomUUID(),
  },
];

export function transitionAppointmentStatus(current: AppointmentStatus, requested: AppointmentStatus) {
  const allowed: Record<AppointmentStatus, AppointmentStatus[]> = {
    "Slot Available": ["Slot Held"],
    "Slot Held": ["Pending Payment", "Confirmed", "Slot Available"],
    "Pending Payment": ["Confirmed", "Canceled", "Slot Available"],
    Confirmed: ["Upcoming", "Canceled", "No-Show"],
    Upcoming: ["Checked In", "Canceled", "No-Show"],
    "Checked In": ["Completed"],
    Completed: ["Final Payment Due", "Final Payment Paid"],
    "Final Payment Due": ["Final Payment Paid"],
    "Final Payment Paid": ["Refunded"],
    Canceled: ["Refunded", "Deposit Forfeited", "No Penalty"],
    "No-Show": ["Deposit Forfeited", "No Penalty"],
    Refunded: [],
    "Deposit Forfeited": [],
    "No Penalty": [],
  };

  return allowed[current].includes(requested);
}
