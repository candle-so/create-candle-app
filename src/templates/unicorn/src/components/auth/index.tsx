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
    <div className="max-w-sm h-full sm:h-auto border-2 border-cndl-primary-500 p-8 rounded-2xl flex items-center shadow-2xl">
      <div className="space-y-6">
        <div className="">
          <Logo />
        </div>
        <div className="">
          <h1 className="text-2xl">Find Unicorn builders</h1>
          <p className="text-xs uppercase text-cndl-neutral-800">No credit card required.</p>
        </div>
        {(!variant || variant === "otp:email") && <AuthOTPEmail />}
        {variant === "otp:verify" && <AuthOTPVerify />}
      </div>
    </div>
  );
};
