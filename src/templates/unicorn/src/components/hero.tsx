import React from "react";
import { cn } from "@/lib/utils";

export const Hero = ({ height, children }: { height?: "full" | "half"; children: React.ReactNode }) => {
  let heroHeight;
  if (!height || height === "full") heroHeight = "h-[calc(100vh-16rem)]";
  if (height === "half") heroHeight = "h-[calc(100vh/2.2)]";

  return <section className={cn(heroHeight, "flex items-center justify-center bg-gradient-to-tr from-cndl-primary-200 via-cndl-secondary-100 to-cndl-secondary-200")}>{children}</section>;
};
