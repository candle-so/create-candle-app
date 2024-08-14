"use client";
import { DayOfWeek } from "@/components/availabilities/_day_of_week";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export const SpecificDatesEditor = ({ applyChanges }: { applyChanges: () => void }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const updateCalendarDate = (date: any) => {
    if (!date) return;
    setDate(date);
  };

  return (
    <div className="space-y-6">
      <h1 className="font-bold text-md text-cndl-dark px-2">Select specific date(s) you want to assign specific hours</h1>
      <Calendar mode="single" selected={date} onSelect={(date) => updateCalendarDate(date)} className="rounded-md border" />
      <p className="text-sm text-cndl-neutral-700 px-2">What hours are you available?</p>
      <DayOfWeek overrideDate={date} />
      <div className="pt-5 space-y-2">
        <Button size="sm" variant="ghost" className="w-full btn-primary" onClick={applyChanges}>
          Apply
        </Button>
        <Button size="sm" variant="ghost" className="w-full">
          Cancel
        </Button>
      </div>
    </div>
  );
};
