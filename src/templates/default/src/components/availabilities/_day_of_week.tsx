import { useCalendarStore } from "@/store/calendar.store";
import { Checkbox } from "../ui/checkbox";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { AvailabilityTimeRange } from "./_availability_time_range";
import Candle from "@candle-so/node";
import candleConfig from "@/lib/candle.config";
import { getAuthTokens } from "@/lib/_cookies";
import { ICalendarAvailability } from "schema-interface";

export const DayOfWeek = ({ day, overrideDate }: { day?: string | null; overrideDate?: Date }) => {
  const candle = Candle.init(candleConfig);

  const availabilities: any = useCalendarStore((state) => state.availabilities);
  const setAvailabilities = useCalendarStore((state) => state.setAvailabilities);
  const calendar = useCalendarStore((state) => state.calendar);

  const [checked, setChecked] = useState(false);
  const [dayAvailabilities, setDayAvailabilities] = useState<any>([]);

  const blankAvailability: any = {
    calendar_id: calendar?.id,
    dayOfWeek: day,
    startTime: "09:00",
    endTime: "17:00",
  };

  const overrideAvailabiliities = async (newAvailabilities: ICalendarAvailability[]) => {
    let { accessToken } = getAuthTokens();
    let { error, data } = await candle.calendars.setUserAvailability([...newAvailabilities], accessToken as string);
    if (!error) return;
    setAvailabilities([...data.availability]);
  };

  const addTimeRow = async () => {
    if (!day) blankAvailability.overrideDate = overrideDate;
    let { accessToken } = getAuthTokens();
    let { error, data } = await candle.calendars.setUserAvailability([...availabilities, blankAvailability], accessToken as string);
    if (error) return;
    setAvailabilities([...data.availability]);
    setDayAvailabilities([...dayAvailabilities, blankAvailability]);
  };

  const removeTimeRow = async (availability_ids: string[]) => {
    const prunedAvailabilities = availabilities.filter((a: any) => !availability_ids.includes(a.id));
    let { accessToken } = getAuthTokens();
    let { error, data } = await candle.calendars.setUserAvailability([...prunedAvailabilities], accessToken as string);
    if (error) return;
    setAvailabilities([...data.availability]);
  };

  const checkRow = async () => {
    setChecked(!checked);
    if (dayAvailabilities.length === 0) {
      await addTimeRow();
    }
    if (dayAvailabilities.length > 0) {
      const availability_ids = dayAvailabilities.map((a: any) => a.id);
      await removeTimeRow(availability_ids);
    }
  };

  const deleteRow = async (availability: ICalendarAvailability) => {
    const _dayAvailability = dayAvailabilities.filter((a: any) => a.id !== availability.id);
    if (_dayAvailability.length === 0) setChecked(false);
    setDayAvailabilities(_dayAvailability);

    await removeTimeRow([availability.id]);
  };

  const updateAvailabilities = (availability: any) => {
    const _availabilities = availabilities.map((a: any) => (a.id === availability.id ? availability : a));
    setAvailabilities(_availabilities);
    overrideAvailabiliities(_availabilities);
  };

  useEffect(() => {
    if (!availabilities) return;

    let _dayAvailabilities = day
      ? availabilities.filter((a: any) => a.dayOfWeek === day)
      : availabilities.filter((a: any) => {
          let incomingOverrideDate: any = overrideDate || null;
          let localOverrideDate = a.overrideDate || null;

          if (incomingOverrideDate) {
            incomingOverrideDate = new Date(incomingOverrideDate);
            const year = incomingOverrideDate.getFullYear();
            const month = String(incomingOverrideDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
            const day = String(incomingOverrideDate.getDate()).padStart(2, "0");
            incomingOverrideDate = `${year}-${month}-${day}`;
          }
          return incomingOverrideDate === localOverrideDate && !a.dayOfWeek;
        });
    setChecked(_dayAvailabilities.length > 0);
    setDayAvailabilities(_dayAvailabilities);
  }, [availabilities, overrideDate]);

  return (
    <div className="flex justify-between items-start w-full space-x-6">
      {day && (
        <div className="flex space-x-3 py-2 items-center">
          <Checkbox id={day} checked={checked} onCheckedChange={checkRow} />
          <label htmlFor={day} className="text-sm font-bold uppercase">
            {day.slice(0, 3)}
          </label>
        </div>
      )}
      <div className="flex-1 py-0.5 space-y-4">
        {!checked && (overrideDate || day) && <div className="text-sm italic py-1.5 text-cndl-neutral-700 pl-4">No times set</div>}
        {!checked && !overrideDate && !day && <div className="text-sm italic py-1.5 text-cndl-neutral-700 pl-4">Select a date</div>}
        {checked && dayAvailabilities?.map((a: any, i: number) => <AvailabilityTimeRange key={i} defaultAvailability={a} onDelete={() => deleteRow(a)} onChange={(availability) => updateAvailabilities(availability)} />)}
      </div>
      {(overrideDate || day) && (
        <div className="text-right py-2">
          <div className="bg-cndl-primary-50 flex p-0.5 cursor-pointer rounded ring-1 ring-cndl-primary-50 ring-offset-4" onClick={() => addTimeRow()}>
            <PlusIcon className="text-cndl-primary-300" size={16} />
          </div>
        </div>
      )}
    </div>
  );
};
