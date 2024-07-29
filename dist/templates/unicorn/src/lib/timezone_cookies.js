"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimezoneFromCookie = exports.saveTimezoneToCookie = void 0;
const headers_1 = require("next/headers");
const saveTimezoneToCookie = (timezoneData) => {
    if (!timezoneData)
        return null;
    const timezone = JSON.stringify(timezoneData);
    (0, headers_1.cookies)().set("timezone", timezone);
    return timezoneData;
};
exports.saveTimezoneToCookie = saveTimezoneToCookie;
const getTimezoneFromCookie = () => {
    const cookieStore = (0, headers_1.cookies)();
    const currentTimezone = cookieStore.get("timezone")?.value;
    if (!currentTimezone)
        return null;
    return JSON.parse(currentTimezone);
};
exports.getTimezoneFromCookie = getTimezoneFromCookie;
