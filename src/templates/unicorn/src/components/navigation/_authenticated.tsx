"use client";
import Link from "next/link";
import Candle from "@candle-so/node";
import { Logo } from "../logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useUserStore } from "@/store/user.store";
import { useCartStore } from "@/store/cart.store";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import { getAuthTokens } from "@/lib/_cookies";
import { useEffect } from "react";

export const AuthenticatedNavigation = ({ breadcrumbs }: { breadcrumbs: any }) => {
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  const me = useUserStore((state) => state.me);
  const cart: any = useCartStore((state) => state.cart);
  const setCart: any = useCartStore((state) => state.setCart);

  const getUserCart = async () => {
    let { accessToken } = getAuthTokens();
    const { error, data } = await candle.carts.retrieveUserCart(accessToken as string);
    if (error) return;
    setCart(data);
  };

  useEffect(() => {
    if (cart) return;
    getUserCart();
  }, [cart]);

  if (!me) return null;

  return (
    <nav className="py-4 backdrop-blur sticky top-0 bg-cndl-light bg-opacity-30 z-20">
      <div className="container flex justify-between items-center">
        <div className="flex space-x-4 items-end">
          <Link href="/">
            <Logo />
          </Link>
          <div className="space-x-4 hidden md:flex">{/* <Link href="/offerings">Sell</Link> */}</div>
          {breadcrumbs && (
            <div className="flex gap-4 items-center text-cndl-neutral-700">
              {breadcrumbs.map((crumb: any) => (
                <Link key={crumb.name} href={crumb.href} className="capitalize">
                  / {crumb.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center space-x-3 px-4">
            <div className="">
              <HeartIcon className="text-cndl-primary-400" size={24} />
            </div>
            <Link href="/cart">
              <div className="relative">
                {cart?.items?.length > 0 && <div className="absolute -right-3 -top-2 text-cndl-negative-200 bg-cndl-negative-600 font-bold flex w-5 h-5 rounded-full justify-center items-center">{cart?.items?.length}</div>}
                <ShoppingCartIcon className="text-cndl-primary-400" size={24} />
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/settings/account">
              <Avatar className="w-7 h-7 ring-offset-2 ring-2 ring-cndl-accent-500">
                <AvatarImage src={me?.image} alt={me?.name} />
                <AvatarFallback className="bg-cndl-primary-200 text-sm text-cndl-primary-700 font-bold capitalize">
                  {(me?.name || me.email)
                    .split(" ")
                    .map((s: any) => s[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
