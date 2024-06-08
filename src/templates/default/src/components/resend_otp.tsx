// components/resend_otp.tsx
import React from "react";
import { Button } from "./ui/button";

interface ResendOtpProps {
  onResend: () => void;
}

export default function ResendOtp({ onResend }: ResendOtpProps) {
  return (
    <Button onClick={onResend} className="mt-4 text-green-600 hover:underline">
      Resend OTP
    </Button>
  );
}
