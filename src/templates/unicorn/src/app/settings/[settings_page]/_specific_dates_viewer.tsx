import { useCalendarStore } from "@/store/calendar.store";
import { useEffect, useState } from "react";

export const SpecificDatesViewer = () => {
  const availabilities: any = useCalendarStore((state) => state.availabilities);

  const [specificDatesAvailabilities, setSpecificDatesAvailabilities] = useState<any[]>([]);

  useEffect(() => {
    const _specificDatesAvailabilities = availabilities.filter((a: any) => !a.dayOfWeek);
    setSpecificDatesAvailabilities(_specificDatesAvailabilities);
  }, [availabilities]);

  return (
    <div className="space-y-8">
      {specificDatesAvailabilities.map((a: any, i: number, arr: any) => {
        if (i !== arr.length - 1) return null;
        return (
          <div key={a.id} className="space-y-2">
            <div className="text-cndl-dark font-bold text-lg">
              {new Date(a.overrideDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex flex-wrap gap-2">
              {specificDatesAvailabilities
                .filter((b: any) => b.overrideDate === a.overrideDate)
                .map((b: any) => {
                  return (
                    <div key={b.id} className="flex space-x-2 bg-cndl-primary-50 text-cndl-primary-400 px-2 py-1 font-bold rounded">
                      <div>{b.startTime.slice(0, 5)}</div>
                      <div>-</div>
                      <div>{b.endTime.slice(0, 5)}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
