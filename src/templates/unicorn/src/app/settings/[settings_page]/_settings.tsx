"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SettingsAccountSettings } from "./_account_settings";
import { SettingsAvailabilitySettings } from "./_account_availability";
import { SettingsProductsSettings } from "./_account_products";

export const Settings = ({ settingsPage }: { settingsPage: string }) => {
  const { push } = useRouter();

  const setUpPage = () => {
    if (!settingsPage) return push("/settings/account");
    if (!["account", "availability", "products", "wallet", "logs"].includes(settingsPage)) return push("/settings/account");
  };

  useEffect(() => {
    setUpPage();
  }, []);

  return (
    <div className="container flex py-20">
      <div className="w-2/12 h-full p-4 space-y-8">
        <h2 className="text-3xl font-pacifico">Settings</h2>
        <div className="gap-3 grid grid-rows-4">
          <Link href="/settings/account" className={cn(settingsPage === "account" ? "font-bold text-cndl-dark" : "text-cndl-neutral-700")}>
            Account Settings
          </Link>
          <Link href="/settings/availability" className={cn(settingsPage === "availability" ? "font-bold text-cndl-dark" : "text-cndl-neutral-700")}>
            Availability
          </Link>
          <Link href="/settings/products" className={cn(settingsPage === "products" ? "font-bold text-cndl-dark" : "text-cndl-neutral-700")}>
            Products
          </Link>
          <Link href="/settings/wallet" className={cn(settingsPage === "wallet" ? "font-bold text-cndl-dark" : "text-cndl-neutral-700")}>
            Wallet
          </Link>
          {/* <Link href="/settings/logs" className={cn(settingsPage === "logs" ? "font-bold text-cndl-dark" : "text-cndl-neutral-700")}>
            Logs
          </Link> */}
        </div>
      </div>
      {settingsPage === "account" && <SettingsAccountSettings />}
      {settingsPage === "availability" && <SettingsAvailabilitySettings />}
      {settingsPage === "products" && <SettingsProductsSettings />}
    </div>
  );
};
