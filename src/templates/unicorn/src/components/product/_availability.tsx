"use client";
import { useEffect, useState } from "react";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { getAuthTokens } from "@/lib/_cookies";
import Candle from "@candle-so/node";
import { ICalendarAvailability } from "schema-interface";
import { useUserStore } from "@/store/user.store";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Availability = ({ user_id, product_id, cta }: { user_id: string; product_id: string; cta: string }) => {
  const pathname = usePathname().slice(1);
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  const me: any = useUserStore((state) => state.me);
  const [calendarFrom, setCalendarFrom] = useState<Date | undefined>();
  const [calendarTo, setCalendarTo] = useState<Date | undefined>();
  const [disabledDayOfWeek, setDisabledDayOfWeek] = useState<number[]>([]);
  const updateCalendarDate = (from: any, to: any) => {
    setCalendarFrom(from);
    setCalendarTo(to);
  };

  const disableDOW = (availabilities: ICalendarAvailability[]) => {
    let dow = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const availableDOW = availabilities.map((availability) => availability.dayOfWeek);
    let _dow = dow.filter((day: any) => !availableDOW.includes(day));
    const dowIndex = _dow.map((day: any) => dow.indexOf(day));
    setDisabledDayOfWeek(dowIndex);
  };

  const getUserAvailability = async () => {
    let { accessToken } = getAuthTokens();
    const { error, data } = await candle.calendars.retrieveUserAvailability(user_id, accessToken as string);
    if (error) return;

    disableDOW(data.availability);
  };

  const addProductToCart = async () => {
    if (!me) return;

    let { accessToken } = getAuthTokens();
    const { error, data } = await candle.carts.addProductToUserCart(product_id, {}, accessToken as string);
    console.log("addProductToCart", error, data);
  };

  useEffect(() => {
    if (!me) return setDisabledDayOfWeek([0, 1, 2, 3, 4, 5, 6]);
    getUserAvailability();
  }, [me]);

  return (
    <div className="space-y-2">
      <div className="pt-4 flex items-center justify-between pb-8">
        <h2 className="font-pacifico text-2xl">My Availability</h2>

        {!me && (
          <Button className="w-full max-w-xs btn-primary space-x-2 hover:no-underline" variant="link" onClick={addProductToCart}>
            <Link href={`/auth?redirect=${pathname}`}>Sign in to continue</Link>
          </Button>
        )}

        {me && (
          <Button className="w-full max-w-xs btn-primary space-x-2" onClick={addProductToCart}>
            {cta}
          </Button>
        )}
      </div>

      <div className="p-2 bg-cndl-light ring-2 ring-cndl-primary-50 ring-offset-4 rounded-2xl">
        <Calendar mode="range" numberOfMonths={2} selected={{ from: calendarFrom, to: calendarTo }} disabled={[{ before: new Date() }, { dayOfWeek: disabledDayOfWeek }]} onSelect={({ from, to }: any) => updateCalendarDate(from, to)} />
      </div>
    </div>
  );
};
