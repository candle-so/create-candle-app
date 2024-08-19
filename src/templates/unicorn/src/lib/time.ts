import moment from "moment-timezone";
import tzlookup from "tz-lookup";

type Hrtime = [number, number];

interface ICandleDateInput {
  dateString?: string | null;
  timezone?: string;
}

interface ICandleDate {
  timezone: string;
  day: string;
  dayIndex: number;
  date: number;
  month: string;
  monthIndex: number;
  nextMonth: string;
  lastMonth: string;
  monthStartsOn: string;
  monthStartsOnIndex: number;
  daysInMonth: number;
  year: number;
  fullDate: string;
  time: string;
  time24: string;
  hours: number;
  minutes: number;
  UTC_ISO: string;
  isToday: boolean;
  isFuture: boolean;
  isPast: boolean;
  relativeTime: string;
  relativeTimeLong: string;
}

let defaultData: ICandleDateInput = { dateString: null, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone };

export const getTimezone = (geo: any, defaultTimezone?: string) => {
  return geo.latitude && geo.longitude ? tzlookup(geo.latitude, geo.longitude) : defaultTimezone || "America/New_York";
};

export const shiftTimezone = ({ date, format, fromTimezone = "UTC", toTimezone = "UTC" }: { date: string; format: string; fromTimezone?: string; toTimezone?: string }) => {
  let m = moment.tz(date, format, fromTimezone);
  return m.tz(toTimezone).format(format);
};

// check if a date is the same as a reference date
export const inReferenceToDate = ({ referenceDate, date, format }: { referenceDate?: string | null; date: string; format?: string | null }): "past" | "same" | "future" => {
  let m = moment.tz(date, format || "YYYY-MM-DD HH:mm:ssZ", "UTC");
  let ref = referenceDate ? moment.tz(referenceDate, format || "YYYY-MM-DD HH:mm:ssZ", "UTC") : moment.tz("UTC");

  if (m.isBefore(ref)) return "past";
  if (m.isAfter(ref)) return "future";
  if (m.isSame(ref)) return "same";
  return "same";
};

export const isDateInRange = ({ rangeStart, rangeEnd, date, format }: { rangeStart: string; rangeEnd: string; date: string; format?: string }): boolean => {
  let m = moment.tz(date, format || "YYYY-MM-DD HH:mm:ssZ", "UTC");
  let start = moment.tz(rangeStart, format || "YYYY-MM-DD HH:mm:ssZ", "UTC");
  let end = moment.tz(rangeEnd, format || "YYYY-MM-DD HH:mm:ssZ", "UTC");
  if (m.isBefore(start)) return false;
  if (m.isAfter(end)) return false;
  return true;
};

export const humanifyDateRanges = ({ tstart, tEnd }: { tstart: string; tEnd: string }): string => {
  // Check the format fo the dates
  let tStartDate = transformDateFormat(tstart, "YYYY-MM-DD HH:mm:ssZ", "MMMM Do YYYY");
  let tEndDate = transformDateFormat(tEnd, "YYYY-MM-DD HH:mm:ssZ", "MMMM Do YYYY");

  let tStartTime = transformDateFormat(tstart, "YYYY-MM-DD HH:mm:ssZ", "h:mma");
  let tEndTime = transformDateFormat(tEnd, "YYYY-MM-DD HH:mm:ssZ", "h:mma");

  let dateReference = inReferenceToDate({ referenceDate: tStartDate, date: tEndDate, format: "MMMM Do YYYY" });

  if (dateReference === "same") return `${tStartDate} from ${tStartTime} to ${tEndTime}`;
  if (dateReference === "past") return `From ${tStartDate} ${tStartTime} to ${tEndDate} ${tEndTime}`;
  if (dateReference === "future") return `From ${tStartDate} ${tStartTime} to ${tEndDate} ${tEndTime}`;

  // if (tStartDate.isSame(tEndDate)) return `From ${tStartDate} ${tStartTime} to ${tStartTime}`;
  // if (tStartDate.isBefore(tEndDate)) return `From ${tStartDate} ${tStartTime} to ${tEndDate} ${tEndTime}`;
  // if (tStartDate.isAfter(tEndDate)) return `From ${tEndDate} ${tStartTime} to ${tStartDate} ${tEndTime}`;

  return `From ${tStartDate} ${tStartTime} to ${tEndDate} ${tEndTime}`;
};

export const calculateTimeDifference = ({ t1, t2, limiter, format }: { t1: string; t2: string; format?: string | null; limiter: "months" | "days" | "hours" | "minutes" | "seconds" }): number | any => {
  const time1 = moment(t1, format || "YYYY-MM-DD HH:mm:ssZ");
  const time2 = moment(t2, format || "YYYY-MM-DD HH:mm:ssZ");
  let difference: number;
  difference = time2.diff(time1, limiter, true);
  return +difference.toFixed(2);
};

export const transformDateFormat = (date: string, inputFormat: string, outputForat: string) => {
  let m = moment.tz(date, inputFormat, "UTC");
  return m.format(outputForat);
};

export const getDateFormat = (dateString: string) => {
  // Attempt to parse the string with various common formats
  const formats = ["YYYY-MM-DD", "DD-MM-YYYY", "MM/DD/YYYY", "YYYY/MM/DD"];
  for (const format of formats) {
    try {
      moment(dateString, format);
      return format; // Return the format if parsing is successful
    } catch (error) {
      // Ignore parsing errors and continue trying other formats
    }
  }

  // If none of the common formats match, return an empty string
  return "";
};

export const addToTime = (t1: string, addition: number, limiter: "hours" | "minutes" | "seconds"): { days: number; time: string; timeUTC: string } => {
  let m: any;
  try {
    m = moment.tz(t1, "YYYY-MM-DD HH:mm:ssZ", "UTC");
  } catch (error) {
    m = moment.tz(t1, "HH:mm:ssZ", "UTC");
  }

  m.add(addition, limiter);
  let days = m.diff(moment.tz(t1, "HH:mm:ssZ", "UTC"), "days");
  let time = m.format("HH:mm:ssZ");
  let timeUTC = m.format("YYYY-MM-DD HH:mm:ssZ");
  return { days, time, timeUTC };
};

export const addDaysToDate = ({ startDate, days, format }: { startDate: string; days: number; format?: string }) => {
  let m = moment.tz(startDate, format || "YYYY-MM-DD HH:mm:ssZ", "UTC");
  m.add(days, "days");
  return m.format(format || "YYYY-MM-DD HH:mm:ssZ");
};

export const simplifyTime = (time: string) => {
  const time24 = moment.tz(time, "HH:mm:ssZ", "UTC").format("HH:mm");
  const time12 = moment.tz(time, "HH:mm:ssZ", "UTC").format("h:mm A");
  const timeH = moment.tz(time, "HH:mm:ssZ", "UTC").format("ha");
  return { time24, time12, timeH };
};

export const calculateRelativeHumanTime = (seconds: number) => {
  let isFuture = false;
  if (seconds < 0) {
    isFuture = true;
    seconds = seconds * -1;
  }
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const months = Math.floor(days / 30);

  const formatTime = (time: { months: number; hours: number; minutes: number; seconds: number }) => {
    let { months, hours, minutes, seconds } = time;
    if (days > 30) return { relativeTime: `${months} ${months === 1 ? "mth" : "mths"} ago`, relativeTimeLong: `${months} ${months === 1 ? "month" : "months"} ago` };
    if (days > 0) return { relativeTime: `${days} ${days === 1 ? "day" : "days"} ago`, relativeTimeLong: `${days} ${days === 1 ? "day" : "days"} ago` };
    if (hours > 0) return { relativeTime: `${hours} ${hours === 1 ? "hr" : "hrs"} ago`, relativeTimeLong: `${hours} ${hours === 1 ? "hour" : "hours"} ago` };
    if (minutes > 0) return { relativeTime: `${minutes} ${minutes === 1 ? "min" : "mins"} ago`, relativeTimeLong: `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago` };
    if (seconds > 0) return { relativeTime: `${seconds} ${seconds === 1 ? "sec" : "secs"} ago`, relativeTimeLong: `${seconds} ${seconds === 1 ? "second" : "seconds"} ago` };
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

export const formatDate = ({ dateString, timezone }: ICandleDateInput = defaultData): ICandleDate => {
  timezone = timezone || getTimezone({});
  let momentLocal = dateString ? moment.tz(dateString, "YYYY-MM-DD HH:mm", timezone) : moment.tz(timezone);
  const seconds = moment.tz(timezone).diff(momentLocal, "seconds");
  const isToday = momentLocal.isSame(moment.tz(timezone), "day");
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
    ...calculateRelativeHumanTime(seconds),
  };

  return cndlDate;
};

export const formatDateUTC = ({ dateString, timezone }: ICandleDateInput = defaultData): ICandleDate => {
  timezone = timezone || getTimezone({});
  let momentLocal = dateString ? moment.tz(dateString, "YYYY-MM-DD HH:mm", "UTC").tz(timezone) : moment.tz(timezone);
  const seconds = moment.tz(timezone).diff(momentLocal, "seconds");
  const isToday = momentLocal.isSame(moment.tz(timezone), "day");
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
    ...calculateRelativeHumanTime(seconds),
  };

  return cndlDate;
};

export const formatTime = (time?: string | null): string => {
  if (!time) return "---";
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

export const parseTime = (hrtime: Hrtime): string => {
  const latency: number = (hrtime[0] * 1e9 + hrtime[1]) / 1e6;

  return latency.toFixed(3);
};
