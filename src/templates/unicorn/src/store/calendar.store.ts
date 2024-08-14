// stores/calendar.store.ts
import { create } from "zustand";
import { ICalendar, ICalendarAvailability, ICalendarEvent } from "schema-interface";

interface CalendarState {
  calendar: ICalendar | null;
  setCalendar: (calendar: ICalendar) => void;
  event: ICalendarEvent | null;
  setEvent: (event: ICalendarEvent) => void;
  availabilities: ICalendarAvailability[] | null;
  setAvailabilities: (availabilities: ICalendarAvailability[]) => void;
}

export const useCalendarStore = create<CalendarState>((set) => ({
  calendar: null,
  setCalendar: (calendar) => set({ calendar: calendar }),
  event: null,
  setEvent: (event) => set({ event: event }),
  availabilities: null,
  setAvailabilities: (availabilities) => set({ availabilities }),
}));
