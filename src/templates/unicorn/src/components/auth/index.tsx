import { AuthOTPEmail } from "./otp-email";
import { Logo } from "../logo";
import { AuthOTPVerify } from "./otp-verify";
import { useToastStore } from "@/store/toast.store";
// import { useEffect } from "react";

export const Auth = ({ variant }: { variant?: "otp:email" | "otp:verify" }) => {
  const toasts = useToastStore((state) => state.toasts);
  const setToasts = useToastStore((state) => state.setToasts);

  const loadToast = () => {
    if (toasts.length > 0) {
      // setToasts([...toasts, { status: "error", message: "Error creating user" }]);
    }
  };

  return (
    <div className="max-w-sm h-full sm:h-auto bg-cndl-secondary-50 p-8 rounded-lg flex items-center">
      <div className="space-y-6">
        <div className="">
          <Logo />
        </div>
        <div className="">
          <h1 className="text-2xl">Start Your 30-Day Free Trial Today.</h1>
          <p className="text-xs uppercase text-cndl-neutral-800">No credit card required.</p>
        </div>
        {(!variant || variant === "otp:email") && <AuthOTPEmail />}
        {variant === "otp:verify" && <AuthOTPVerify />}
      </div>
    </div>
  );
};
