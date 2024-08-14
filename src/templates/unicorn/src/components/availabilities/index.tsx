import { useCalendarStore } from "@/store/calendar.store";
import { DayOfWeek } from "./_day_of_week";

export const Availabilities = () => {
  const calendar: any = useCalendarStore((state) => state.calendar);
  const availabilities: any = useCalendarStore((state) => state.availabilities);

  if (!calendar) return null;

  return (
    <div className="w-full space-y-6">
      <DayOfWeek day="sunday" />
      <DayOfWeek day="monday" />
      <DayOfWeek day="tuesday" />
      <DayOfWeek day="wednesday" />
      <DayOfWeek day="thursday" />
      <DayOfWeek day="friday" />
      <DayOfWeek day="saturday" />
    </div>
  );
};
