"use client";

import Navigation from "@/components/navigation";
import { usePlatformStore } from "@/store/platform.store";

import AuthForm, { IAuthOptions } from "./form";

export const AuthPage = ({ platform }: { platform: any }) => {
  const setPlatform = usePlatformStore((state) => state.setPlatform);
  setPlatform(platform);

  const options: IAuthOptions = {
    endpoints: {
      emailOTP: "auth/email-otp",
      verifyOTP: "auth/verify-otp",
    },
  };

  return (
    <>
      <Navigation />
      <AuthForm options={options} />
    </>
  );
};
