"use client";
import Link from "next/link";
import Candle from "@candle-so/node";
import candleConfig from "@/lib/candle.config";
import { Logo } from "../logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useUserStore } from "@/store/user.store";
import { useCartStore } from "@/store/cart.store";
import { ChevronDownIcon, DoorOpenIcon, HeartIcon, ShoppingCartIcon } from "lucide-react";
import { clearSession, getAuthTokens } from "@/lib/_cookies";
import { useEffect } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const generalLinks = [
  {
    href: "/orders",
    name: "Order History",
  },
  {
    href: "/sales",
    name: "Sales History",
  },
];
const SettingsLinks = [
  {
    href: "/settings/account",
    name: "Account",
  },
];

export const AuthenticatedNavigation = ({ breadcrumbs }: { breadcrumbs: any }) => {
  const candle = Candle.init(candleConfig);
  const me = useUserStore((state) => state.me);
  const cart: any = useCartStore((state) => state.cart);
  const setCart: any = useCartStore((state) => state.setCart);

  const getUserCart = async () => {
    let { accessToken } = getAuthTokens();
    const { error, data } = await candle.carts.retrieveUserCart(accessToken as string);
    if (error) return;
    setCart(data);
  };

  const doSignOut = async () => {
    clearSession();
    window.location.href = "/";
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
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none p-1 rounded-2xl">
                <div className="flex items-center space-x-1">
                  <Avatar className="w-7 h-7 ring-offset-2 ring-2 ring-cndl-accent-500">
                    <AvatarImage src={me?.image} alt={me?.name} />
                    <AvatarFallback className="bg-cndl-primary-200 text-sm text-cndl-primary-700 font-bold capitalize">
                      {(me?.name || me.email)
                        .split(" ")
                        .map((s: any) => s[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDownIcon size={20} className="text-cndl-primary-400" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 w-52 shadow-none border-none ring-2 ring-offset-4 ring-offset-cndl-neutral-50 rounded-sm ring-cndl-primary-200" align="end">
                <DropdownMenuLabel className="font-pacifico text-cndl-primary-700">Requests</DropdownMenuLabel>
                {generalLinks.map((link: any) => (
                  <DropdownMenuItem key={link.href} className="hover:bg-cndl-primary-100 p-0">
                    <Link className="w-full p-2 rounded-sm hover:bg-cndl-primary-50 hover:text-cndl-primary-700" href={link.href}>
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="font-pacifico text-cndl-primary-700">Settings</DropdownMenuLabel>
                {SettingsLinks.map((link: any) => (
                  <DropdownMenuItem key={link.href} className="hover:bg-cndl-primary-100 p-0">
                    <Link className="w-full p-2 rounded-sm hover:bg-cndl-primary-50 hover:text-cndl-primary-700" href={link.href}>
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-0 flex items-center justify-start">
                  <Button variant="ghost" className="w-full flex font-bold items-center justify-start space-x-2 px-1" onClick={doSignOut}>
                    <DoorOpenIcon size={16} /> <span>Sign out</span>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
