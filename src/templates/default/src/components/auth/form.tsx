"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePlatformStore } from "@/store/platform.store";
import { fetchWrapper } from "./_fetch";
import AuthFormEmail from "./_email";
import AuthFormOTP from "./_otp";

export interface IAuthOptions {
  endpoints: {
    emailOTP: string;
    verifyOTP: string;
  };
}

export default function AuthForm({ options, redirect }: { options: IAuthOptions; redirect?: string }) {
  const { push } = useRouter();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setsetOtpSent] = useState(false);

  const platform = usePlatformStore((state) => state.platform);

  const submitEmail = async () => {
    setIsLoading(true);
    const data = { email };
    const userResponse = await fetchWrapper({ url: options.endpoints.emailOTP, method: "POST", data });
    if (userResponse.error) {
      setIsLoading(false);
      return;
    }
    setsetOtpSent(true);
    return;
  };

  const submitOTP = async (token: number) => {
    setIsLoading(true);
    // await onOTPSubmit(token);
    const data = { email, token: token.toString() };
    const authenticatedUser = await fetchWrapper({ url: options.endpoints.verifyOTP, method: "POST", data });
    if (authenticatedUser.error) {
      setsetOtpSent(false);
      return;
    }
    if (authenticatedUser.token) return push(redirect || "/");
    setsetOtpSent(false);
    return;
  };

  return (
    <div className="max-w-sm m-auto mt-20 px-8 pt-5 pb-10 shadow-lg rounded-md border-2 bg-slate-50 border-slate-800 bg-gradient-to-t from-orange-100 via-slate-50 to-white">
      {!otpSent && <AuthFormEmail email={email} setEmail={setEmail} isLoading={isLoading} submitForm={submitEmail} />}
      {otpSent && <AuthFormOTP submitForm={submitOTP} />}
    </div>
  );
}
