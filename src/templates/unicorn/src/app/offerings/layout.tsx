import React from "react";

import { Navigation } from "@/components/navigation";

export default async function OfferingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
}
