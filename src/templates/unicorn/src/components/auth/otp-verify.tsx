import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchWrapper } from "@/lib/_fetch";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { useAuthStore } from "@/store/auth.store";

export const AuthOTPVerify = () => {
  const { push } = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const authEmail = useAuthStore((state) => state.authEmail);

  const sendOTPCode = async (otpCode: number) => {
    const data = { email: authEmail, token: otpCode.toString() };
    const authenticatedUser = await fetchWrapper({ isLocal: true, url: "auth/verify-otp", method: "POST", data });
    if (authenticatedUser.error) {
      setIsLoading(false);
      return;
    }
    if (authenticatedUser.token) return push("/onboarding");
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 rounded flex items-center justify-center">
        <InputOTP maxLength={6} className="m-auto" onComplete={sendOTPCode}>
          <InputOTPGroup className="gap-1">
            <InputOTPSlot index={0} className="text-xl border-none bg-cndl-secondary-100" />
            <InputOTPSlot index={1} className="text-xl border-none bg-cndl-secondary-100" />
            <InputOTPSlot index={2} className="text-xl border-none bg-cndl-secondary-100" />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup className="gap-1">
            <InputOTPSlot index={3} className="text-xl border-none bg-cndl-secondary-100" />
            <InputOTPSlot index={4} className="text-xl border-none bg-cndl-secondary-100" />
            <InputOTPSlot index={5} className="text-xl border-none bg-cndl-secondary-100" />
          </InputOTPGroup>
        </InputOTP>
      </div>
      {/* <div className="pt-6">
        <Button className="w-full space-x-2" onClick={(code)=>sendOTPCode()} disabled={isLoading}>
          <span>Verify OTP Code</span> <CheckCheckIcon />
        </Button>
      </div> */}
      <div className="text-xs font-cndl-neutral-700 p-2">By Signing up to Candle, means you agree to our Privacy Policy and Terms of Service</div>
    </div>
  );
};
