import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Candle from "@/lib/@candle";

const inter = Inter({ subsets: ["latin"] });
const candle = Candle.init({ api_key: process.env.CANDLE_API_KEY || "" });

export const metadata: Metadata = {
  title: "Exotic Plants",
  description: "Explore exotic plants from around the world powered by Candle.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let data = await candle.users.retrieveUser({ id: "user_34a346bed1674838b8d9c846dc124c32" });
  console.log(data);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
