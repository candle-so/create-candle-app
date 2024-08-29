import React, { useRef, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { Button } from "../ui/button";
import { usePaymentStore } from "@/store/payment.store";
import Candle from "@candle-so/node";
import { getAuthTokens } from "@/lib/_cookies";

export default function NewPaymentMethodForm() {
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  const formRef = useRef<HTMLFormElement>(null);
  const [buttonText, setButtonText] = useState("Save New Card");
  const [isLoading, setIsLoading] = useState(false);
  let { accessToken } = getAuthTokens();

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
    let { error, data } = await candle.users.setUserClientSecret(accessToken as string);
    if (error) return;
    const clientSecret = data.clientSecret;

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
      const { error, data: _paymentMethods } = await candle.users.setUserPaymentMethodAsDefault(setupIntent.payment_method as string, accessToken as string);
      if (error) return;
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
        <Button className="btn-primary" type="submit" disabled={!stripe}>
          {buttonText}
        </Button>
        <Button onClick={cancelAddingMethod} variant="ghost">
          Cancel
        </Button>
      </div>
    </form>
  );
}
