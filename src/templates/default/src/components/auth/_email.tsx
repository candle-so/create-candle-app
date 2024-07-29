import { FingerPrintIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AuthFormEmail({ email, setEmail, isLoading, submitForm }: { email: string; setEmail: (email: string) => void; isLoading: boolean; submitForm: () => Promise<void> }) {
  return (
    <div className="space-y-4">
      <div className="py-6">
        <FingerPrintIcon className="m-auto w-16 h-16 border-2 p-2 ring-8 ring-orange-200 border-slate-800 rounded-full" />
      </div>
      <div className="text-xl font-regular text-center">One Time Password</div>
      <div className="space-y-2 pt-6 text-left pb-2">
        <label htmlFor="email">
          <p className="text-slate-800 text-sm uppercase font-semibold">Enter your email</p>
        </label>
        <Input className="border-2 border-slate-800 bg-white" id="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <p className="text-slate-600 text-xs">You will receive a 6 digit code to verify your email address</p>
      </div>
      <div className="space-y-8 text-left pt-4">
        <Button className="w-full" disabled={isLoading} onClick={submitForm}>
          Send One Time Password
        </Button>
        <p className="text-slate-800 text-sm text-center">
          Powered by{" "}
          <a href="https://candle.so" className="font-semibold text-orange-400">
            Candle
          </a>
        </p>
      </div>
    </div>
  );
}
