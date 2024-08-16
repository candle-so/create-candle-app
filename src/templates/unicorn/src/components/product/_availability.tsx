"use client";
import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { CalendarClockIcon } from "lucide-react";

export const Availability = () => {
  const [calendarFrom, setCalendarFrom] = useState<Date | undefined>();
  const [calendarTo, setCalendarTo] = useState<Date | undefined>();
  const updateCalendarDate = (from: any, to: any) => {
    setCalendarFrom(from);
    setCalendarTo(to);
  };
  return (
    <div className="space-y-2">
      <div className="pt-4 flex items-center justify-between pb-8">
        <h2 className="font-pacifico text-2xl">My Availability</h2>
        <Button className="w-full max-w-xs btn-primary space-x-2">
          <CalendarClockIcon size={16} />
          <span>Hire Me</span>
        </Button>
      </div>

      <div className="p-2 bg-cndl-light ring-2 ring-cndl-primary-50 ring-offset-4 rounded-2xl">
        <Calendar mode="range" numberOfMonths={2} selected={{ from: calendarFrom, to: calendarTo }} onSelect={({ from, to }: any) => updateCalendarDate(from, to)} />
      </div>
    </div>
  );
};
