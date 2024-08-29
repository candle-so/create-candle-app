import { XIcon } from "lucide-react";
import { ICalendarAvailability } from "schema-interface";
import { Input } from "../ui/input";
import { useState } from "react";

export const AvailabilityTimeRange = ({ defaultAvailability, onDelete, onChange }: { defaultAvailability: ICalendarAvailability; onDelete: () => void; onChange: (availability: ICalendarAvailability) => void }) => {
  const [availabilitys, setAvailability] = useState(defaultAvailability);

  const setStartTime = (e: any) => {
    const _availability = { ...defaultAvailability };
    _availability.startTime = e.target.value;
    setAvailability(_availability);
    onChange(_availability);
  };

  const setEndTime = (e: any) => {
    const _availability = { ...defaultAvailability };
    _availability.endTime = e.target.value;
    setAvailability(_availability);
    onChange(_availability);
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-2">
        <Input className="input-primary-xs" type="time" defaultValue={availabilitys.startTime} onChange={setStartTime} />
        <span>-</span>
        <Input className="input-primary-xs" type="time" defaultValue={availabilitys.endTime} onChange={setEndTime} />
      </div>
      <div className="text-cndl-neutral-700 cursor-pointer" onClick={onDelete}>
        <XIcon className="text-cndl-neutral-400" size={16} />
      </div>
    </div>
  );
};
