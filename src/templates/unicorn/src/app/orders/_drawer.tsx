import { ContextDrawer } from "@/components/context_drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState } from "react";

export const OrdersDrawer = ({ me, onDrawClose }: { me: any; onDrawClose: (e: any) => void }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawerTitle = (
    <div className="flex space-x-2">
      <span className="font-bold">Products /</span>
      <span className="text-cndl-neutral-700 font-normal">New product</span>
    </div>
  );

  return (
    <ContextDrawer open={openDrawer} title={drawerTitle} onCloseDraw={onDrawClose}>
      <div className="p-4 space-y-8">
        <div className="flex items-start space-x-8">
          <div className="pt-2">
            <Avatar className="w-20 h-20 ring-4 ring-cndl-accent-500">
              <AvatarImage src={me?.image} alt={me?.name} />
              <AvatarFallback className="bg-cndl-primary-200 text-4xl text-cndl-primary-700 font-bold">
                {me?.name
                  .split(" ")
                  .map((s: any) => s[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="">
            <div className="text-lg text-cndl-dark font-bold">{me?.name}</div>
            <div className="text-cndl-neutral-700 text-md">@{me?.username}</div>
            <div className="text-cndl-neutral-700 text-md underline">
              <Link href={`mailto:${me?.email}`}>{me?.email}</Link>
            </div>
            <div className="text-cndl-neutral-700 text-md">{me?.phone}</div>
          </div>
        </div>
        <div className="border-b-4 border-cndl-primary-50 pt-4 px-4">
          <div className="flex space-x-4">
            Links...
            {/* {links.map((link, index) => {
              return (
                <div key={index} className="relative">
                  <Button
                    onClick={() => updateURL(`/m/${platform.id}/users/${me.id}/${link}`)}
                    variant="link"
                    className={cn("border-none ring-0 p-0 px-2 text-md hover:no-underline focus-visible:ring-0 capitalize", link === activeTab ? "text-cndl-dark font-bold" : "text-cndl-neutral-700")}
                  >
                    {link}
                  </Button>
                  <div className={cn("absolute -bottom-1 left-0 border-b-4 w-full", link === activeTab ? "border-cndl-dark" : "border-transparent")} />
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </ContextDrawer>
  );
};
