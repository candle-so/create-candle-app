"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SettingsAccountSettings } from "./_account_settings";

export const Settings = ({ settingsPage }: { settingsPage: string }) => {
  const { push } = useRouter();
  const [currentPage, setCurrentPage] = useState<"Account Settings" | "Authentication" | "Billing" | "Logs">("Account Settings");

  const setUpPage = () => {
    if (!settingsPage) return push("/settings/account");
    if (!["account", "auth", "billing", "logs"].includes(settingsPage)) return push("/settings/account");
    if (settingsPage === "account") setCurrentPage("Account Settings");
    if (settingsPage === "auth") setCurrentPage("Authentication");
    if (settingsPage === "billing") setCurrentPage("Billing");
    if (settingsPage === "logs") setCurrentPage("Logs");
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
          {/* <Link href="/settings/auth" className={cn(settingsPage === "auth" ? "font-bold text-cndl-dark" : "text-cndl-neutral-700")}>
            Authentication
          </Link>
          <Link href="/settings/billing" className={cn(settingsPage === "billing" ? "font-bold text-cndl-dark" : "text-cndl-neutral-700")}>
            Billing
          </Link>
          <Link href="/settings/logs" className={cn(settingsPage === "logs" ? "font-bold text-cndl-dark" : "text-cndl-neutral-700")}>
            Logs
          </Link> */}
        </div>
      </div>
      {currentPage === "Account Settings" && <SettingsAccountSettings />}
    </div>
  );
};
