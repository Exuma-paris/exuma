import {
  BadgeCheck,
  CalendarDays,
  Clock,
  Euro,
  FileText,
  Languages,
  Plane,
  Sparkles,
  Star,
  Syringe,
} from "lucide-react";
import type { IconName } from "@/lib/destination/types";

export function renderIcon(name: IconName) {
  switch (name) {
    case "plane":
      return <Plane />;
    case "clock":
      return <Clock />;
    case "euro":
      return <Euro />;
    case "fileText":
      return <FileText />;
    case "syringe":
      return <Syringe />;
    case "calendarDays":
      return <CalendarDays />;
    case "languages":
      return <Languages />;
    case "badgeCheck":
      return <BadgeCheck />;
    case "sparkles":
      return <Sparkles />;
    case "star":
      return <Star />;
  }
}
