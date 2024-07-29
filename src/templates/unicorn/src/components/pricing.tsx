import { CheckCircle2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plans = [
  {
    name: "basic",
    features: ["up to 100 customers", "up to 10 products", "Help center access", "Email support"],
    price: {
      monthly: "79",
      yearly: "790",
    },
    cta: "Choose Plan",
  },
  {
    name: "pro",
    popular: true,
    features: ["up to 1000 customers", "up to 100 products", "Help center access", "Priority email support"],
    price: {
      monthly: "129",
      yearly: "1290",
    },
    cta: "Choose Plan",
  },
  {
    name: "business",
    features: ["fully custumised configuration", "Help center access", "Email support"],
    note: "custom features based on your needs",
    cta: "Contact Sales",
  },
];

export const Pricing = () => {
  return (
    <div className="text-cndl-dark py-16">
      <div className="container text-center max-w-5xl md:space-y-8">
        <div className="space-y-3">
          <h3 className="text-3xl font-pacifico">Pricing</h3>
          <p>Free for 30 days, cancel anytime.</p>
        </div>
        <div className="md:grid md:grid-cols-3 grid-flow-col gap-6 space-y-4 md:space-y-0">
          {plans.map((plan) => (
            <div key={plan.name} className={cn(!plan.popular ? "p-6" : "")}>
              <div className={cn("bg-cndl-light rounded-xl p-4 space-y-4 flex flex-col items-center border-4 relative h-full shadow-lg", plan.popular ? "border-cndl-accent-500" : "border-cndl-neutral-400")}>
                <h4 className="capitalize font-bold">{plan.name}</h4>
                <div className="text-left space-y-3">
                  {plan.features?.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <span>
                        <CheckCircle2Icon className="bg-cndl-secondary-600 text-cndl-light rounded-full" size={20} />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex pb-24 items-end">
                  {plan.price && (
                    <>
                      <span className="text-3xl font-bold font-pacifico">${plan?.price?.monthly}</span>
                      <span className="text-sm">/mo</span>
                    </>
                  )}
                </div>

                <div className="w-full absolute left-0 bottom-0 px-4 pt-20 pb-4 space-y-2">
                  {plan?.price && <div className="font-bold text-sm">Free for 30 days</div>}
                  {plan?.note && <div className="">{plan.note}</div>}
                  <Link href={`/auth?plan=${plan.name}`} className="w-full">
                    <Button className="w-full" variant={plan.popular ? "default" : "secondary"}>
                      {plan.cta}
                    </Button>
                  </Link>
                  {plan.popular && <div className="text-sm font-bold text-cndl-accent-500">Most Popular</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-cndl-neutral-700">Cancel at any time.</div>
      </div>
    </div>
  );
};
