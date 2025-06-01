import { Luggage, Calendar, CarFront } from "lucide-react";

export const sections = [
  {
    title: "Reiseplan",
    description:
      "Plan your journey, book flights, and organize transportation details for your Swedish adventure.",
    href: "/travel-plan",
    icon: CarFront,
    color: "bg-pink-50 dark:bg-pink-950/20",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  {
    title: "Program",
    description:
      "Create day-by-day plans, discover activities, and make the most of your time together.",
    href: "/itinerary",
    icon: Calendar,
    color: "bg-rose-50 dark:bg-rose-950/20",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  {
    title: "Pakkeliste",
    description:
      "Never forget essentials again. Collaborative packing lists for the perfect trip preparation.",
    href: "/packing-list",
    icon: Luggage,
    color: "bg-fuchsia-50 dark:bg-fuchsia-950/20",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
  },
];
