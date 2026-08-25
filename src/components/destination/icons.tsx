import {
  CheckVerified01 as BadgeCheck,
  Calendar as CalendarDays,
  Clock,
  CurrencyEuro as Euro,
  File02 as FileText,
  Translate01 as Languages,
  Phone,
  Plane,
  Stars01 as Sparkles,
  Star01 as Star,
  Sun,
  MedicalCross as Syringe,
} from "@untitledui/icons";
import type { IconName } from "@/lib/destination/types";

export function renderIcon(name: IconName) {
  switch (name) {
    case "plane":
      return <Plane />;
    case "clock":
      return <Clock />;
    case "phone":
      return <Phone />;
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
    case "sun":
      return <Sun />;
    case "badgeCheck":
      return <BadgeCheck />;
    case "sparkles":
      return <Sparkles />;
    case "star":
      return <Star />;
  }
}
