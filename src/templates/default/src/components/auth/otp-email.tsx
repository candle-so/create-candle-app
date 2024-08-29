import Candle from "@candle-so/node";
import candleConfig from "@/lib/candle.config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/auth.store";
import { MoveRightIcon } from "lucide-react";
import { useState } from "react";

const GoogleIcon = () => {
  return (
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_97_889" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="19">
        <rect y="0.700195" width="18" height="18" fill="white" />
      </mask>
      <g mask="url(#mask0_97_889)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.3541 8.23132H15.75V8.2002H9V11.2002H13.2386C12.6203 12.9466 10.9586 14.2002 9 14.2002C6.51488 14.2002 4.5 12.1853 4.5 9.7002C4.5 7.21507 6.51488 5.2002 9 5.2002C10.1471 5.2002 11.1908 5.63295 11.9854 6.33982L14.1067 4.21845C12.7673 2.97007 10.9755 2.2002 9 2.2002C4.85813 2.2002 1.5 5.55832 1.5 9.7002C1.5 13.8421 4.85813 17.2002 9 17.2002C13.1419 17.2002 16.5 13.8421 16.5 9.7002C16.5 9.19732 16.4482 8.70645 16.3541 8.23132Z"
          fill="#E78A55"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.36475 6.20932L4.82887 8.01645C5.49562 6.36569 7.11037 5.2002 9 5.2002C10.1471 5.2002 11.1907 5.63295 11.9854 6.33982L14.1067 4.21845C12.7672 2.97007 10.9755 2.2002 9 2.2002C6.11925 2.2002 3.621 3.82657 2.36475 6.20932Z"
          fill="#E6463C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.00012 17.2005C10.9374 17.2005 12.6976 16.4591 14.0285 15.2535L11.7072 13.2892C10.9542 13.8596 10.0182 14.2005 9.00012 14.2005C7.04937 14.2005 5.39299 12.9566 4.76899 11.2207L2.32324 13.1051C3.56449 15.534 6.08524 17.2005 9.00012 17.2005Z"
          fill="#58BD47"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.3541 8.23132H15.75V8.2002H9V11.2002H13.2386C12.9416 12.0391 12.402 12.7624 11.706 13.2893C11.7064 13.2889 11.7068 13.2889 11.7071 13.2886L14.0284 15.2528C13.8641 15.4021 16.5 13.4502 16.5 9.7002C16.5 9.19732 16.4482 8.70645 16.3541 8.23132Z"
          fill="#8559EC"
        />
      </g>
    </svg>
  );
};
export const AuthOTPEmail = () => {
  const candle = Candle.init(candleConfig);
  const setAuthMode = useAuthStore((state) => state.setAuthMode);
  const setAuthEmail = useAuthStore((state) => state.setAuthEmail);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const sendOTPCode = async () => {
    const data = { email };
    const userResponse = await candle.auth.requestOtpViaEmail(data);
    if (userResponse.error) {
      setIsLoading(false);
      return;
      // return setToasts([...toasts, { status: "error", message: "Error creating user" }]);
    }
    setAuthMode("otp:verify");
    setAuthEmail(email);
  };

  return (
    <div className="space-y-6">
      {/* <div className="">
        <Button variant="ghost" className="flex w-full bg-cndl-light justify-center items-center rounded-full  space-x-2">
          <GoogleIcon />
          <span>Continue with Google</span>
        </Button>
      </div>
      <div className="flex space-x-2 items-center text-sm text-cndl-neutral-700">
        <div className="flex-1 h-0.5 bg-cndl-neutral-700 rounded-full"></div>
        <div className="">Or use OTP</div>
        <div className="flex-1 h-0.5 bg-cndl-neutral-700 rounded-full"></div>
      </div> */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-cndl-neutral-800 font-bold">
          Email<sup className="text-cndl-negative-500">*</sup>
        </label>
        <Input className="input-primary" type="email" id="email" placeholder="john.doe@example.so" onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>
      <div className="pt-4">
        <Button className="w-full space-x-2 btn-primary" onClick={sendOTPCode} disabled={!email || isLoading}>
          <span>Send OTP Code</span> <MoveRightIcon />
        </Button>
      </div>
      <div className="text-xs font-cndl-neutral-700 p-2">By Signing up to Candle, means you agree to our Privacy Policy and Terms of Service</div>
    </div>
  );
};
