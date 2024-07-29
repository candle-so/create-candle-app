"use client";

import { cn } from "@/lib/utils";
import { usePlatformStore } from "@/store/platform.store";
import Link from "next/link";

const links = ["overview", "users", "contracts", "transactions", "settings"];

export const PlatformNavigation = ({ tab, platform }: { tab: "overview" | "users" | "contracts" | "transactions" | "settings"; platform: any }) => {
  const setPlatform: any = usePlatformStore((state) => state.setPlatform);
  setPlatform(platform);
  return (
    <div className="w-full border-b-4 border-cndl-primary-50 pt-1">
      <div className="container flex">
        {links.map((link, index) => {
          return (
            <div key={index} className="px-2 relative capitalize">
              <Link className={cn(link === tab ? "font-bold text-cndl-dark" : "text-cndl-neutral-700")} href={link === "settings" ? `/m/${platform.id}/${link}/app` : `/m/${platform.id}/${link}`}>
                {link}
              </Link>
              <div className={cn("absolute -bottom-1 left-0 border-b-4 w-full", link === tab ? "border-cndl-dark" : "border-transparent")} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
