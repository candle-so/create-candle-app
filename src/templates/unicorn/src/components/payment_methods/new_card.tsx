// import { PaymentMethodContext } from "@/context/payment-method.context";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import NewPaymentMethodForm from "./_new_card.form";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function NewCard({ defautMethodTypes }: { defautMethodTypes?: string[] }) {
  if (!defautMethodTypes) defautMethodTypes = ["card", "us_bank_account"];

  return (
    <div className="space-y-4">
      <p className="text-xs text-slate-500">Add a new payment method</p>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "setup",
          currency: "usd",
          payment_method_types: defautMethodTypes,
        }}
      >
        <NewPaymentMethodForm />
      </Elements>
    </div>
  );
}
