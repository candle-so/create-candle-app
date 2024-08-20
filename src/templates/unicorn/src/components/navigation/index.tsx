"use client";
import Candle from "@candle-so/node";
import { AuthenticatedNavigation } from "./_authenticated";
import { LoggedOutNavigation } from "./_logged_out";
import { getAuthTokens } from "@/lib/_cookies";
import { useUserStore } from "@/store/user.store";
import { useEffect, useState } from "react";
import { usePathname, redirect } from "next/navigation";

const unprotectedRoutes = ["/"];

export const Navigation = ({ breadcrumbs }: { breadcrumbs?: any[] }) => {
  const pathname = usePathname();
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  const [isLoaded, setIsLoaded] = useState(false);

  const me = useUserStore((state) => state.me);
  const setMe: any = useUserStore((state) => state.setMe);

  const getMe = async () => {
    let { accessToken } = getAuthTokens();
    const { error, data: me } = await candle.users.retrieveUser(accessToken as string);
    if (error) return setIsLoaded(true);
    setMe(me);
    setIsLoaded(true);
  };

  useEffect(() => {
    if (me) return setIsLoaded(true);
    getMe();
  }, [me]);

  useEffect(() => {
    if (!isLoaded) return;
    if (unprotectedRoutes.includes(pathname)) return setIsLoaded(true);
    if (!unprotectedRoutes.includes(pathname) && !me) {
      redirect(`/auth?redirect=${pathname.slice(1)}`);
    }
  }, [isLoaded]);

  if (!me) return <LoggedOutNavigation />;
  if (me) return <AuthenticatedNavigation breadcrumbs={breadcrumbs} />;
};
