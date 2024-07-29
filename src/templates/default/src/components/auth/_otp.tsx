import { FingerPrintIcon } from "@heroicons/react/24/outline";
import { OTPInput, SlotProps } from "input-otp";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function AuthFormOTP({ submitForm }: { submitForm: (token: number) => void }) {
  return (
    <div className="space-y-4">
      <div className="py-6">
        <FingerPrintIcon className="m-auto w-16 h-16 border-2 p-2 ring-8 ring-orange-200 border-slate-800 rounded-full" />
      </div>
      <div className="text-xl font-regular text-center">One Time Password</div>
      <div className="space-y-2 pt-6 text-left pb-2">
        <OTPInput
          onComplete={submitForm}
          maxLength={6}
          containerClassName="group flex items-center justify-center has-[:disabled]:opacity-30"
          render={({ slots }: { slots: SlotProps[] }) => (
            <>
              <div className="flex space-x-2">
                {slots.slice(0, 3).map((slot, idx) => (
                  <Slot key={idx} {...slot} />
                ))}
              </div>

              <FakeDash />

              <div className="flex space-x-2">
                {slots.slice(3).map((slot, idx) => (
                  <Slot key={idx} {...slot} />
                ))}
              </div>
            </>
          )}
        />
        <p className="text-slate-600 text-xs">You will receive a 6 digit code to verify your email address</p>
      </div>
      <div className="space-y-8 text-left pt-4">
        <Button className="w-full">Submit</Button>
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

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "relative h-14 w-10 text-[2rem] bg-white",
        "flex items-center justify-center",
        "transition-all duration-300",
        "group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20",
        "outline-accent-foreground/20 outline outline-0",
        props.isActive ? "rounded border-2 border-orange-400" : "rounded border-2 border-slate-800"
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}

function FakeCaret() {
  return (
    <div className="pointer-events-none absolute inset-0 flex animate-ping items-center justify-center pb-2">
      <div className="h-full w-full border-2 border-orange-400 border-opacity-10" />
    </div>
  );
}

function FakeDash() {
  return (
    <div className="flex w-10 items-center justify-center">
      <div className="h-1 w-3 rounded-full bg-orange-400" />
    </div>
  );
}
