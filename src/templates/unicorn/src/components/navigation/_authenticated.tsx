"use client";
import Link from "next/link";
import { Logo } from "../logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useUserStore } from "@/store/user.store";

export const AuthenticatedNavigation = ({ me, breadcrumbs }: { me: any; breadcrumbs: any }) => {
  const setMe: any = useUserStore((state) => state.setMe);

  setMe(me);

  return (
    <nav className="py-4 backdrop-blur sticky top-0 bg-cndl-light bg-opacity-30 z-20">
      <div className="container flex justify-between items-center">
        <div className="flex space-x-4 items-end">
          <Link href="/">
            <Logo />
          </Link>
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
          <div className="space-x-4 hidden md:flex">
            <Link href="/settings/account">Settings</Link>
          </div>
          <div className="flex items-center">
            <Avatar className="w-7 h-7 ring-offset-2 ring-2 ring-cndl-accent-500">
              <AvatarImage src={me?.image} alt={me?.name} />
              <AvatarFallback className="bg-cndl-primary-200 text-sm text-cndl-primary-700 font-bold capitalize">
                {(me?.name || me.email)
                  .split(" ")
                  .map((s: any) => s[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
};
