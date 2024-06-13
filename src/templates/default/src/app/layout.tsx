import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Candle from "@candle-so/node";
const candle = Candle.init({ api_key: process.env.CANDLE_API_KEY || "" });

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  let { data } = await candle.platforms.retrievePlatform();
  const title = data.name;
  const description = data.description;

  return {
    viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    metadataBase: new URL("https://www.candle.so"),
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://www.candle.so/",
      siteName: title,
    },
    twitter: {
      title,
      description,
      creator: "@candle_so",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
