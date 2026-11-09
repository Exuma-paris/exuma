import type { CalendarMonth } from "@/lib/contact/types";

const MONTH_NAMES = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

/**
 * Les `count` prochains mois à partir du mois courant, chacun habillé de la
 * météo que la palette de la question attache à ce mois de l'année. On ne
 * propose ainsi jamais un mois passé, et le contenu n'a pas de date à tenir
 * à jour.
 */
export function upcomingMonths(
  palette: CalendarMonth[],
  count = 12,
  from = new Date(),
): CalendarMonth[] {
  const weatherByMonth = new Map(
    palette.map((m) => [m.id.slice(-2), m.weather] as const),
  );
  return Array.from({ length: count }, (_, i) => {
    const date = new Date(from.getFullYear(), from.getMonth() + i, 1);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    return {
      id: `${date.getFullYear()}-${mm}`,
      title: MONTH_NAMES[date.getMonth()],
      subtitle: String(date.getFullYear()),
      weather: weatherByMonth.get(mm),
    };
  });
}
