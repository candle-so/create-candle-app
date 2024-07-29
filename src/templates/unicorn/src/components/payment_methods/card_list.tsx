import { useState } from "react";
import { BankAccountPreview, CreditCardPreview } from "./payment_method_preview";
import { fetchWrapper } from "@/lib/_fetch";
import { cn } from "@/lib/utils";
import { PlusIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { usePaymentStore } from "@/store/payment.store";

export default function CardList() {
  const [isLoading, setIsLoading] = useState(false);
  const paymentMethods = usePaymentStore((state) => state.paymentMethods);
  const setPaymentMethods = usePaymentStore((state) => state.setPaymentMethods);
  const setPaymentState = usePaymentStore((state) => state.setPaymentState);

  const selectPaymentMethod = async (paymentMethod: any) => {
    setIsLoading(true);
    let _paymentMethods = await fetchWrapper({ url: `users/payment-methods/${paymentMethod.stripePaymentMethodId}/default`, method: "PUT" });
    if (_paymentMethods.error) return;
    setPaymentMethods(_paymentMethods.sort((pm: any) => (pm.isDefault === true ? -1 : 1)));
    setPaymentState("list");
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-cndl-light bg-opacity-90">Loading...</div>}
      {/* <h2 className="text-md font-semibold text-cndl-dark">Edit payment methods</h2> */}
      <div className="space-y-4">
        {paymentMethods.map((paymentMethod: any, i: number) => {
          return (
            <div key={i} className={cn("flex items-center space-x-2 border-2 border-cndl-primary-300 rounded p-2 bg-cndl-primary-300 text-cndl-primary-900", paymentMethod.isDefault ? "" : "opacity-30 hover:opacity-90")}>
              <div className="flex-1" onClick={() => selectPaymentMethod(paymentMethod)}>
                {paymentMethod.type === "us_bank_account" && <BankAccountPreview paymentMethod={paymentMethod} />}
                {paymentMethod.type === "card" && <CreditCardPreview paymentMethod={paymentMethod} />}
              </div>
              <XIcon size={20} className="text-cndl-negative-100" />
            </div>
          );
        })}

        <Button variant="ghost" className="w-full space-x-2" onClick={() => setPaymentState("new_pm")}>
          <span>
            <PlusIcon size={20} />
          </span>
          <span>Another Payment Method</span>
        </Button>
      </div>
    </div>
  );
}
