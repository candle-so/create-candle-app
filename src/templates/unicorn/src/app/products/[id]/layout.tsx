import React from "react";
import { Metadata, Viewport } from "next";

import "react-toastify/dist/ReactToastify.css";

const siteName = "Unicorns Services";
const title = "Unicorns - Description of Unicorns";
const description = "Unicorns - Description of Unicorns";
const url = "https://www.candle.so/";
const image = "https://www.candle.so/images/hero-dashboard.png";
// const imageAlt = "Mockup of Candle dashboard";
// const twitterSite = "@usecandle";
const twitterCreator = "@WithCandleHQ";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  // viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  metadataBase: new URL("https://www.candle.so"),
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    images: [image],
    siteName,
  },
  twitter: {
    title,
    description,
    creator: twitterCreator,
    // site: twitterSite,
    images: [image],
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div className="">{children}</div>;
}
