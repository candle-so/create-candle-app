import { cookies } from "next/headers";

export const saveTimezoneToCookie = (timezoneData: any) => {
  if (!timezoneData) return null;
  const timezone = JSON.stringify(timezoneData);
  cookies().set("timezone", timezone);
  return timezoneData;
};

export const getTimezoneFromCookie = () => {
  const cookieStore = cookies();
  const currentTimezone: any = cookieStore.get("timezone")?.value;
  if (!currentTimezone) return null;
  return JSON.parse(currentTimezone);
};
