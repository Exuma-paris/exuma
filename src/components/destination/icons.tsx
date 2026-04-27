import {
  CalendarDays,
  Clock,
  Euro,
  FileText,
  Languages,
  Plane,
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
  }
}
