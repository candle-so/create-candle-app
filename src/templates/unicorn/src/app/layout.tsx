import React from "react";
import { Metadata, Viewport } from "next";

import Script from "next/script";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const siteName = "Candle";
const title = "Candle - Infrastructure for building marketplaces";
const description = "For people building marketplaces; helping them ship faster without getting in their way.";
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
  return (
    <html lang="en">
      <head>
        <Script id="segment-script">
          {`!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");i.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="${process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY}";;analytics.SNIPPET_VERSION="5.2.0"; analytics.load("${process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY}"); analytics.page();}}();`}
        </Script>
        <Script id="hotjar-script">
          {`(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:3861340,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>
      </head>
      <body className="font-anonymous_pro">{children}</body>
    </html>
  );
}
