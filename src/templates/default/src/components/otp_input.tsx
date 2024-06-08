// components/otp_input.tsx
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface OtpInputProps {
  onOtpSubmit: (otp: string) => void;
}

export default function OtpInput({ onOtpSubmit }: OtpInputProps) {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOtpSubmit(otp);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mt-4">
      <Input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        required
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      <Button
        type="submit"
        className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Verify OTP
      </Button>
    </form>
  );
}
