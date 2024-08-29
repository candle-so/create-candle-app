"use client";
import Candle from "@candle-so/node";
import candleConfig from "@/lib/candle.config";
import { AuthenticatedNavigation } from "./_authenticated";
import { LoggedOutNavigation } from "./_logged_out";
import { getAuthTokens } from "@/lib/_cookies";
import { useUserStore } from "@/store/user.store";
import { useEffect, useState } from "react";
import { usePathname, redirect } from "next/navigation";
import { routeCheck } from "@/lib/utils";

const unprotectedRoutes = ["/", /^\/products\/prod_[a-zA-Z0-9]+$/];

export const Navigation = ({ breadcrumbs }: { breadcrumbs?: any[] }) => {
  const pathname = usePathname();
  const candle = Candle.init(candleConfig);
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
    if (routeCheck(unprotectedRoutes, pathname)) return setIsLoaded(true);
    if (!routeCheck(unprotectedRoutes, pathname) && !me) {
      redirect(`/auth?redirect=${pathname.slice(1)}`);
    }
  }, [isLoaded]);

  if (!me) return <LoggedOutNavigation />;
  if (me) return <AuthenticatedNavigation breadcrumbs={breadcrumbs} />;
};
