"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCalendarStore = void 0;
// stores/calendar.store.ts
const zustand_1 = require("zustand");
exports.useCalendarStore = (0, zustand_1.create)((set) => ({
    calendar: null,
    setCalendar: (calendar) => set({ calendar: calendar }),
    event: null,
    setEvent: (event) => set({ event: event }),
    availabilities: null,
    setAvailabilities: (availabilities) => set({ availabilities }),
}));
