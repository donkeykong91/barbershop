export type BusinessHours = {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
};

export const availabilitySettings = {
  timezone: "America/Los_Angeles",
  minimumNoticeHours: 4,
  futureBookingWindowDays: 30,
  slotIntervalMinutes: 30,
  bufferMinutes: 10,
  holdDurationMinutes: 5,
  businessHours: [
    { day: "Monday", open: "09:00", close: "17:00" },
    { day: "Tuesday", open: "09:00", close: "17:00" },
    { day: "Wednesday", open: "09:00", close: "17:00" },
    { day: "Thursday", open: "09:00", close: "17:00" },
    { day: "Friday", open: "09:00", close: "18:00" },
    { day: "Saturday", open: "10:00", close: "15:00" },
    { day: "Sunday", open: "00:00", close: "00:00", closed: true },
  ] satisfies BusinessHours[],
  blockedTime: [
    { id: "lunch", label: "Lunch", day: "Weekdays", start: "12:00", end: "12:30" },
    { id: "inventory", label: "Inventory run", day: "Friday", start: "15:00", end: "16:00" },
  ],
};
