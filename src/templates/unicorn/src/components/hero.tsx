import React from "react";

export const Hero = ({ children }: { children: React.ReactNode }) => {
  return <section className="h-[calc(100vh/1.7)] flex items-center justify-center py-16">{children}</section>;
};
