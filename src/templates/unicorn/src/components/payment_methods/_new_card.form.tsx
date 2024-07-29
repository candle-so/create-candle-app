import React, { useRef, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { fetchWrapper } from "@/lib/_fetch";
import { Button } from "../ui/button";
import { usePaymentStore } from "@/store/payment.store";
// import { PaymentMethodContext } from "@/context/payment-method.context";

export default function NewPaymentMethodForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [buttonText, setButtonText] = useState("Save New Card");
  const [isLoading, setIsLoading] = useState(false);

  const paymentMethods = usePaymentStore((state) => state.paymentMethods);
  const setPaymentMethods = usePaymentStore((state) => state.setPaymentMethods);
  const setPaymentState = usePaymentStore((state) => state.setPaymentState);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // handleError(submitError);
      return;
    }
    let { clientSecret } = await fetchWrapper({ url: `users/client-secret`, method: "POST" });

    const paymentElement: any = elements.getElement(PaymentElement);

    if (!paymentElement) {
      // Handle the case where the payment element is not found
      setIsLoading(false);
      return;
    }

    //

    const { setupIntent } = await stripe.confirmSetup({
      elements,
      clientSecret,
      redirect: "if_required",
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_URL}/onboarding/payment`,
      },
    });

    if (setupIntent?.status === "succeeded") {
      let _paymentMethods = await fetchWrapper({ url: `users/payment-methods/${setupIntent.payment_method}/default`, method: "PUT" });
      setPaymentMethods(_paymentMethods);
      setIsLoading(false);
      setPaymentState("list");
    }
  };

  const cancelAddingMethod = () => {
    if (paymentMethods && paymentMethods.length > 0) return setPaymentState("list");
    setPaymentState("new_pm");
  };

  const updateButtonText = (e: any) => {
    if (e.value.type === "card") setButtonText("Save New Card");
    if (e.value.type === "us_bank_account") setButtonText("Save New Bank Account");
  };

  return (
    <form ref={formRef} className="space-y-1" onSubmit={(event) => handleSubmit(event)}>
      <div className="max-w-md pt-2">
        <PaymentElement onChange={updateButtonText} />
      </div>
      {/* {buttonText.toLowerCase().includes("card") && <p className="text-xs font-light text-slate-500">Candle will only charges your card on behalf of the business you are paying.</p>} */}
      {isLoading && <>Loading...</>}
      <div className="space-y-4 pt-8">
        <Button className=" w-full" type="submit" disabled={!stripe}>
          {buttonText}
        </Button>
        <div className="text-center">
          {isLoading && <>Loading...</>}
          <Button className="w-full" onClick={cancelAddingMethod} variant="ghost">
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
}
