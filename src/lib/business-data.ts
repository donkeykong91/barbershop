export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  deposit: number;
};

export type AddOn = {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
};

export const business = {
  name: "The Barber Shop",
  tagline: "Sharp cuts. Simple booking. No phone tag.",
  location: "123 Main Street, Hometown",
  phone: "(555) 010-2323",
  cancellationPolicy:
    "Cancel or reschedule at least 24 hours before your appointment to keep your deposit eligible for refund.",
  bookingWindowDays: 30,
};

export const services: Service[] = [
  {
    id: "classic-cut",
    name: "Classic Cut",
    description: "A clean haircut finished with neck shave and style.",
    price: 35,
    durationMinutes: 40,
    deposit: 10,
  },
  {
    id: "fade",
    name: "Skin Fade",
    description: "Detailed fade with blend, lineup, and finish.",
    price: 45,
    durationMinutes: 50,
    deposit: 15,
  },
  {
    id: "beard-trim",
    name: "Beard Trim",
    description: "Shape, trim, hot towel, and razor cleanup.",
    price: 25,
    durationMinutes: 25,
    deposit: 0,
  },
];

export const addOns: AddOn[] = [
  {
    id: "hot-towel",
    name: "Hot Towel",
    description: "Steam towel finish before final styling.",
    price: 8,
    durationMinutes: 5,
  },
  {
    id: "lineup",
    name: "Razor Lineup",
    description: "Crisp edge cleanup around hairline and beard.",
    price: 12,
    durationMinutes: 10,
  },
  {
    id: "wash",
    name: "Wash & Style",
    description: "Shampoo, condition, blow dry, and product finish.",
    price: 15,
    durationMinutes: 15,
  },
];

export const availableSlots = [
  "Today · 10:00 AM",
  "Today · 12:30 PM",
  "Tomorrow · 9:30 AM",
  "Tomorrow · 2:00 PM",
  "Friday · 4:30 PM",
];

export function money(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
