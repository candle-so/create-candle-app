"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTime = exports.formatTime = exports.formatDateUTC = exports.formatDate = exports.calculateRelativeHumanTime = exports.simplifyTime = exports.addDaysToDate = exports.addToTime = exports.getDateFormat = exports.transformDateFormat = exports.calculateTimeDifference = exports.humanifyDateRanges = exports.isDateInRange = exports.inReferenceToDate = exports.shiftTimezone = exports.getTimezone = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const tz_lookup_1 = __importDefault(require("tz-lookup"));
let defaultData = { dateString: null, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone };
const getTimezone = (geo, defaultTimezone) => {
    return geo.latitude && geo.longitude ? (0, tz_lookup_1.default)(geo.latitude, geo.longitude) : defaultTimezone || "America/New_York";
};
exports.getTimezone = getTimezone;
const shiftTimezone = ({ date, format, fromTimezone = "UTC", toTimezone = "UTC" }) => {
    let m = moment_timezone_1.default.tz(date, format, fromTimezone);
    return m.tz(toTimezone).format(format);
};
exports.shiftTimezone = shiftTimezone;
// check if a date is the same as a reference date
const inReferenceToDate = ({ referenceDate, date, format }) => {
    let m = moment_timezone_1.default.tz(date, format || "YYYY-MM-DD HH:mm:ssZ", "UTC");
    let ref = referenceDate ? moment_timezone_1.default.tz(referenceDate, format || "YYYY-MM-DD HH:mm:ssZ", "UTC") : moment_timezone_1.default.tz("UTC");
    if (m.isBefore(ref))
        return "past";
    if (m.isAfter(ref))
        return "future";
    if (m.isSame(ref))
        return "same";
    return "same";
};
exports.inReferenceToDate = inReferenceToDate;
const isDateInRange = ({ rangeStart, rangeEnd, date, format }) => {
    let m = moment_timezone_1.default.tz(date, format || "YYYY-MM-DD HH:mm:ssZ", "UTC");
    let start = moment_timezone_1.default.tz(rangeStart, format || "YYYY-MM-DD HH:mm:ssZ", "UTC");
    let end = moment_timezone_1.default.tz(rangeEnd, format || "YYYY-MM-DD HH:mm:ssZ", "UTC");
    if (m.isBefore(start))
        return false;
    if (m.isAfter(end))
        return false;
    return true;
};
exports.isDateInRange = isDateInRange;
const humanifyDateRanges = ({ tstart, tEnd }) => {
    // Check the format fo the dates
    let tStartDate = (0, exports.transformDateFormat)(tstart, "YYYY-MM-DD HH:mm:ssZ", "MMMM Do YYYY");
    let tEndDate = (0, exports.transformDateFormat)(tEnd, "YYYY-MM-DD HH:mm:ssZ", "MMMM Do YYYY");
    let tStartTime = (0, exports.transformDateFormat)(tstart, "YYYY-MM-DD HH:mm:ssZ", "h:mma");
    let tEndTime = (0, exports.transformDateFormat)(tEnd, "YYYY-MM-DD HH:mm:ssZ", "h:mma");
    let dateReference = (0, exports.inReferenceToDate)({ referenceDate: tStartDate, date: tEndDate, format: "MMMM Do YYYY" });
    if (dateReference === "same")
        return `${tStartDate} from ${tStartTime} to ${tEndTime}`;
    if (dateReference === "past")
        return `From ${tStartDate} ${tStartTime} to ${tEndDate} ${tEndTime}`;
    if (dateReference === "future")
        return `From ${tStartDate} ${tStartTime} to ${tEndDate} ${tEndTime}`;
    // if (tStartDate.isSame(tEndDate)) return `From ${tStartDate} ${tStartTime} to ${tStartTime}`;
    // if (tStartDate.isBefore(tEndDate)) return `From ${tStartDate} ${tStartTime} to ${tEndDate} ${tEndTime}`;
    // if (tStartDate.isAfter(tEndDate)) return `From ${tEndDate} ${tStartTime} to ${tStartDate} ${tEndTime}`;
    return `From ${tStartDate} ${tStartTime} to ${tEndDate} ${tEndTime}`;
};
exports.humanifyDateRanges = humanifyDateRanges;
const calculateTimeDifference = ({ t1, t2, limiter, format }) => {
    const time1 = (0, moment_timezone_1.default)(t1, format || "YYYY-MM-DD HH:mm:ssZ");
    const time2 = (0, moment_timezone_1.default)(t2, format || "YYYY-MM-DD HH:mm:ssZ");
    let difference;
    difference = time2.diff(time1, limiter, true);
    return +difference.toFixed(2);
};
exports.calculateTimeDifference = calculateTimeDifference;
const transformDateFormat = (date, inputFormat, outputForat) => {
    let m = moment_timezone_1.default.tz(date, inputFormat, "UTC");
    return m.format(outputForat);
};
exports.transformDateFormat = transformDateFormat;
const getDateFormat = (dateString) => {
    // Attempt to parse the string with various common formats
    const formats = ["YYYY-MM-DD", "DD-MM-YYYY", "MM/DD/YYYY", "YYYY/MM/DD"];
    for (const format of formats) {
        try {
            (0, moment_timezone_1.default)(dateString, format);
            return format; // Return the format if parsing is successful
        }
        catch (error) {
            // Ignore parsing errors and continue trying other formats
        }
    }
    // If none of the common formats match, return an empty string
    return "";
};
exports.getDateFormat = getDateFormat;
const addToTime = (t1, addition, limiter) => {
    let m;
    try {
        m = moment_timezone_1.default.tz(t1, "YYYY-MM-DD HH:mm:ssZ", "UTC");
    }
    catch (error) {
        m = moment_timezone_1.default.tz(t1, "HH:mm:ssZ", "UTC");
    }
    m.add(addition, limiter);
    let days = m.diff(moment_timezone_1.default.tz(t1, "HH:mm:ssZ", "UTC"), "days");
    let time = m.format("HH:mm:ssZ");
    let timeUTC = m.format("YYYY-MM-DD HH:mm:ssZ");
    return { days, time, timeUTC };
};
exports.addToTime = addToTime;
const addDaysToDate = ({ startDate, days, format }) => {
    let m = moment_timezone_1.default.tz(startDate, format || "YYYY-MM-DD HH:mm:ssZ", "UTC");
    m.add(days, "days");
    return m.format(format || "YYYY-MM-DD HH:mm:ssZ");
};
exports.addDaysToDate = addDaysToDate;
const simplifyTime = (time) => {
    const time24 = moment_timezone_1.default.tz(time, "HH:mm:ssZ", "UTC").format("HH:mm");
    const time12 = moment_timezone_1.default.tz(time, "HH:mm:ssZ", "UTC").format("h:mm A");
    const timeH = moment_timezone_1.default.tz(time, "HH:mm:ssZ", "UTC").format("ha");
    return { time24, time12, timeH };
};
exports.simplifyTime = simplifyTime;
const calculateRelativeHumanTime = (seconds) => {
    let isFuture = false;
    if (seconds < 0) {
        isFuture = true;
        seconds = seconds * -1;
    }
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const months = Math.floor(days / 30);
    const formatTime = (time) => {
        let { months, hours, minutes, seconds } = time;
        if (days > 30)
            return { relativeTime: `${months} ${months === 1 ? "mth" : "mths"} ago`, relativeTimeLong: `${months} ${months === 1 ? "month" : "months"} ago` };
        if (days > 0)
            return { relativeTime: `${days} ${days === 1 ? "day" : "days"} ago`, relativeTimeLong: `${days} ${days === 1 ? "day" : "days"} ago` };
        if (hours > 0)
            return { relativeTime: `${hours} ${hours === 1 ? "hr" : "hrs"} ago`, relativeTimeLong: `${hours} ${hours === 1 ? "hour" : "hours"} ago` };
        if (minutes > 0)
            return { relativeTime: `${minutes} ${minutes === 1 ? "min" : "mins"} ago`, relativeTimeLong: `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago` };
        if (seconds > 0)
            return { relativeTime: `${seconds} ${seconds === 1 ? "sec" : "secs"} ago`, relativeTimeLong: `${seconds} ${seconds === 1 ? "second" : "seconds"} ago` };
        return { relativeTime: "now", relativeTimeLong: "just now" };
    };
    let time = formatTime({ months, hours, minutes, seconds });
    if (isFuture)
        time = {
            relativeTime: `in ${time.relativeTime}`.replace(" ago", ""),
            relativeTimeLong: `in ${time.relativeTimeLong}`.replace(" ago", ""),
        };
    return time;
};
exports.calculateRelativeHumanTime = calculateRelativeHumanTime;
const formatDate = ({ dateString, timezone } = defaultData) => {
    timezone = timezone || (0, exports.getTimezone)({});
    let momentLocal = dateString ? moment_timezone_1.default.tz(dateString, "YYYY-MM-DD HH:mm", timezone) : moment_timezone_1.default.tz(timezone);
    const seconds = moment_timezone_1.default.tz(timezone).diff(momentLocal, "seconds");
    const isToday = momentLocal.isSame(moment_timezone_1.default.tz(timezone), "day");
    const isFuture = momentLocal.isAfter();
    const isPast = momentLocal.isBefore();
    //
    let cndlDate = {
        timezone,
        daysInMonth: momentLocal.daysInMonth(),
        UTC_ISO: momentLocal.toISOString(),
        day: momentLocal.format("dddd"),
        dayIndex: momentLocal.day(),
        month: momentLocal.format("MMMM"),
        monthIndex: momentLocal.month(),
        year: momentLocal.year(),
        fullDate: momentLocal.format("MMMM Do YYYY"),
        time: momentLocal.format("h:mm A"),
        time24: momentLocal.format("HH:mm"),
        hours: Number(momentLocal.format("HH")),
        minutes: Number(momentLocal.format("mm")),
        date: momentLocal.date(),
        isToday,
        isFuture,
        isPast,
        monthStartsOn: momentLocal.startOf("month").format("dddd"),
        monthStartsOnIndex: momentLocal.startOf("month").day(),
        nextMonth: momentLocal.add(1, "month").startOf("month").format("YYYY-MM-DDTHH:mm:ss"),
        lastMonth: momentLocal.subtract(2, "month").startOf("month").format("YYYY-MM-DDTHH:mm:ss"),
        ...(0, exports.calculateRelativeHumanTime)(seconds),
    };
    return cndlDate;
};
exports.formatDate = formatDate;
const formatDateUTC = ({ dateString, timezone } = defaultData) => {
    timezone = timezone || (0, exports.getTimezone)({});
    let momentLocal = dateString ? moment_timezone_1.default.tz(dateString, "YYYY-MM-DD HH:mm", "UTC").tz(timezone) : moment_timezone_1.default.tz(timezone);
    const seconds = moment_timezone_1.default.tz(timezone).diff(momentLocal, "seconds");
    const isToday = momentLocal.isSame(moment_timezone_1.default.tz(timezone), "day");
    const isFuture = momentLocal.isAfter();
    const isPast = momentLocal.isBefore();
    let cndlDate = {
        timezone,
        daysInMonth: momentLocal.daysInMonth(),
        UTC_ISO: momentLocal.toISOString(),
        day: momentLocal.format("dddd"),
        dayIndex: momentLocal.day(),
        month: momentLocal.format("MMMM"),
        monthIndex: momentLocal.month(),
        year: momentLocal.year(),
        fullDate: momentLocal.format("MMMM Do YYYY"),
        time: momentLocal.format("h:mm A"),
        time24: momentLocal.format("HH:mm"),
        hours: Number(momentLocal.format("HH")),
        minutes: Number(momentLocal.format("mm")),
        date: momentLocal.date(),
        isToday,
        isFuture,
        isPast,
        monthStartsOn: momentLocal.startOf("month").format("dddd"),
        monthStartsOnIndex: momentLocal.startOf("month").day(),
        nextMonth: momentLocal.add(1, "month").startOf("month").format("YYYY-MM-DDTHH:mm:ss"),
        lastMonth: momentLocal.subtract(2, "month").startOf("month").format("YYYY-MM-DDTHH:mm:ss"),
        ...(0, exports.calculateRelativeHumanTime)(seconds),
    };
    return cndlDate;
};
exports.formatDateUTC = formatDateUTC;
const formatTime = (time) => {
    if (!time)
        return "---";
    // Parse the time and ignore the timezone offset
    const [timePart] = time.split("+");
    const [hours, minutes] = timePart.split(":");
    // Convert the hours to a number
    const hoursNumber = Number(hours);
    // Determine if the time is AM or PM
    const period = hoursNumber < 12 ? "am" : "pm";
    // Convert the hours to 12-hour format
    const hours12 = hoursNumber % 12 || 12;
    // Return the formatted time
    return `${hours12}:${minutes}${period}`;
};
exports.formatTime = formatTime;
const parseTime = (hrtime) => {
    const latency = (hrtime[0] * 1e9 + hrtime[1]) / 1e6;
    return latency.toFixed(3);
};
exports.parseTime = parseTime;
