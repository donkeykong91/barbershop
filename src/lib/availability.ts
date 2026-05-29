import { addOns, services } from "@/lib/business-data";
import { availabilitySettings } from "@/lib/settings";

export type AvailabilityRequest = {
  serviceId: string;
  addOnIds?: string[];
};

export function getAppointmentDuration({ serviceId, addOnIds = [] }: AvailabilityRequest) {
  const service = services.find((item) => item.id === serviceId) ?? services[0];
  const extras = addOns.filter((item) => addOnIds.includes(item.id));
  return extras.reduce((total, addOn) => total + addOn.durationMinutes, service.durationMinutes);
}

export function getAvailableSlots(request: AvailabilityRequest) {
  const duration = getAppointmentDuration(request);
  const slots = [
    { date: "Today", time: "10:00 AM" },
    { date: "Today", time: "12:30 PM" },
    { date: "Tomorrow", time: "9:30 AM" },
    { date: "Tomorrow", time: "2:00 PM" },
    { date: "Friday", time: "4:30 PM" },
  ];

  return slots.map((slot) => ({
    ...slot,
    label: `${slot.date} · ${slot.time}`,
    durationMinutes: duration,
    bufferMinutes: availabilitySettings.bufferMinutes,
    holdDurationMinutes: availabilitySettings.holdDurationMinutes,
  }));
}
