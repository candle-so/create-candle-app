"use client";
import { useEffect, useState } from "react";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { getAuthTokens } from "@/lib/_cookies";
import Candle from "@candle-so/node";
import { ICalendarAvailability, IProduct } from "schema-interface";
import { useUserStore } from "@/store/user.store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCalendarStore } from "@/store/calendar.store";
import { addDaysToDate, calculateTimeDifference, formatDate } from "@/lib/time";
import { useCartStore } from "@/store/cart.store";
import { Edit } from "lucide-react";

export const Availability = ({ user_id, product, cta }: { user_id: string; product: IProduct; cta: string }) => {
  const pathname = usePathname().slice(1);
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  const me: any = useUserStore((state) => state.me);
  const setCart: any = useCartStore((state) => state.setCart);
  const [calendarFrom, setCalendarFrom] = useState<Date | undefined>();
  const [calendarTo, setCalendarTo] = useState<Date | undefined>();
  const [disabledDayOfWeek, setDisabledDayOfWeek] = useState<number[]>([]);
  const setAvailabilities: any = useCalendarStore((state) => state.setAvailabilities);
  const availabilities: any = useCalendarStore((state) => state.availabilities);

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
    setAvailabilities(data.availability);
  };

  const calculateQuantityFromAvailability = () => {
    const dow = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const hoursAvailablePerDOW: any = {};

    if (!availabilities || !availabilities.length) return 0;
    if (!calendarFrom || !calendarTo) return 0;

    for (let i = 0; i < dow.length; i++) {
      const day = dow[i];
      availabilities
        .filter((availability: ICalendarAvailability) => availability.dayOfWeek && availability.dayOfWeek === day)
        .forEach((availability: ICalendarAvailability) => {
          const hoursAvailable = calculateTimeDifference({
            t1: availability.startTime,
            t2: availability.endTime,
            limiter: "hours",
            format: "HH:mm:ss",
          });
          hoursAvailablePerDOW[day] = hoursAvailablePerDOW[day] ? hoursAvailablePerDOW[day] + hoursAvailable : hoursAvailable;
        });
    }

    const totalDays = calculateTimeDifference({
      t1: new Date(calendarFrom as Date).toISOString(),
      t2: new Date(calendarTo as Date).toISOString(),
      limiter: "days",
    });

    let quantity = 0;

    for (let i = 0; i < totalDays + 1; i++) {
      const dateString = addDaysToDate({ startDate: new Date(calendarFrom as Date).toISOString(), days: i });
      let day = formatDate({ dateString }).day.toLocaleLowerCase();
      let dayIndex = formatDate({ dateString }).dayIndex;

      if (!disabledDayOfWeek.includes(dayIndex)) {
        quantity += hoursAvailablePerDOW[day] || 0;
      }
    }

    return quantity;
  };

  const addProductToCart = async () => {
    if (!me) return;

    const quantity = calculateQuantityFromAvailability();

    let { accessToken } = getAuthTokens();
    const { error, data } = await candle.carts.addProductToUserCart(product.id, { quantity, startDate: calendarFrom, endDate: calendarTo }, accessToken as string);
    if (error) return;
    setCart(data);
  };

  const getCart = async () => {
    if (!me) return;
    let { accessToken } = getAuthTokens();
    const { error, data } = await candle.carts.retrieveUserCart(accessToken as string);
    if (error) return;
    setCart(data);
  };

  const updateCalendarDate = (dateRange: { from: any; to: any } | undefined) => {
    if (!dateRange) return;
    const { from, to } = dateRange;
    setCalendarFrom(from);
    setCalendarTo(to);
  };

  useEffect(() => {
    if (!me) return setDisabledDayOfWeek([0, 1, 2, 3, 4, 5, 6]);
    getUserAvailability();
    getCart();
  }, [me]);

  return (
    <div className="space-y-2">
      <div className="pt-4 flex items-center justify-between pb-8">
        <h2 className="font-pacifico text-2xl">My Availability</h2>

        {me && product.user_id !== me?.id && (
          <Button className="w-full max-w-xs btn-primary space-x-2" onClick={addProductToCart}>
            {cta}
          </Button>
        )}
        {me && product.user_id === me?.id && (
          <Link href={`/settings/products`} className="max-w-xs p-2 flex items-center space-x-2">
            <span>
              <Edit size={16} />
            </span>
            <span>Edit Product</span>
          </Link>
        )}
      </div>
      <div className="bg-cndl-light ring-2 ring-cndl-primary-50 ring-offset-4 rounded-2xl relative overflow-hidden">
        {!me && (
          <div className="absolute w-full h-full backdrop-blur-sm z-50">
            <div className="flex w-full h-full items-center justify-center bg-cndl-dark bg-opacity-10">
              <Button className="w-full max-w-xs btn-primary space-x-2 hover:no-underline" variant="link" onClick={addProductToCart}>
                <Link href={`/auth?redirect=${pathname}`}>Sign in to continue</Link>
              </Button>
            </div>
          </div>
        )}
        <Calendar mode="range" numberOfMonths={2} selected={{ from: calendarFrom, to: calendarTo }} disabled={[{ before: new Date() }, { dayOfWeek: disabledDayOfWeek }]} onSelect={(dateRange: any) => updateCalendarDate(dateRange)} />
      </div>
      <div className="pt-4 text-cndl-neutral-700 italic">
        Available for <span className="font-bold text-cndl-dark">{calculateQuantityFromAvailability()}</span> hours total
      </div>
    </div>
  );
};
