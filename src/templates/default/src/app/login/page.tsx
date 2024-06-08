"use client";
// app/login/page.tsx
import EmailInput from "@/components/email_input";
import OtpInput from "@/components/otp_input";
import ResendOtp from "@/components/resend_otp";
import { useAuthStore } from "@/store";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { push } = router;
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const login = useAuthStore((state) => state.login);

  const handleEmailSubmit = (email: string) => {
    setEmail(email);
    setEmailSubmitted(true);
    setOtpSent(true);
    // Simulate sending OTP here
  };

  const handleOtpSubmit = (otp: string) => {
    // Handle OTP verification here
    if (otp === "123456") {
      login();
      push("/");
    }
  };

  const handleResendOtp = () => {
    setOtpSent(true);
    // Simulate resending OTP here
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">Login</h1>
      {!emailSubmitted ? (
        <EmailInput onEmailSubmit={handleEmailSubmit} />
      ) : (
        <>
          <OtpInput onOtpSubmit={handleOtpSubmit} />
          <ResendOtp onResend={handleResendOtp} />
        </>
      )}
    </main>
  );
}
