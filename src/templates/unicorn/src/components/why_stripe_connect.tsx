import { Code2Icon, MoveRightIcon, ScaleIcon, SplitIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const WhyStripeConnect = () => {
  return (
    <div className="w-full md:flex justify-between px-8 md:px-0 py-16 md:py-32 space-y-8 md:space-y-none">
      <div className="flex-1 max-w-3xl order-first md:order-last md:pl-8 md:pt-8">
        <div className="overflow-hidden p-4 md:p-0">
          <div className="md:w-[calc(100%+20%)]">
            <Image unoptimized width={1000} height={1000} className="w-full" objectFit="contain" src="/images/why-stripe-connect-dashboard.png" alt="What you could be doing" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end items-center md:pr-16 ">
        <div className="space-y-6">
          <div className="max-w-md md:space-y-4 space-y-2">
            <h3 className="md:text-3xl text-2xl md:leading-10 font-bold">Unleashed power for your applications.</h3>
            <p className="text-cndl-neutral-900">Building applications powered by stripe connect has never been easier.</p>
          </div>
          <div className="max-w-md space-y-6">
            <div className="flex bg-cndl-neutral-50 p-2 rounded-md items-center space-x-4">
              <div className="w-14 h-14 bg-cndl-light text-cndl-secondary-500 flex items-center justify-center">
                <SplitIcon />
              </div>
              <div className="flex-1">
                <div className="font-bold text-cndl-dark">Seamless Payment Integrations</div>
                <div className="text-cndl-primary-500 text-xs">Automatically handle complex payment scenarios like split payments, marketplace transactions, and pooled payments with minimal code.</div>
              </div>
            </div>
            <div className="flex bg-cndl-neutral-50 p-2 rounded-md items-center space-x-4">
              <div className="w-14 h-14 bg-cndl-light text-cndl-secondary-500 flex items-center justify-center">
                <Code2Icon />
              </div>
              <div className="flex-1">
                <div className="font-bold text-cndl-dark">Developer-Friendly Experience</div>
                <div className="text-cndl-primary-500 text-xs">
                  Provide a comprehensive suite of developer tools, including CLI utilities like <code>npx create-candle-app</code>, SDKs like <code>@candle-so/node</code>, and detailed, easy-to-understand API documentation.
                </div>
              </div>
            </div>
            <div className="flex bg-cndl-neutral-50 p-2 rounded-md items-center space-x-4">
              <div className="w-14 h-14 bg-cndl-light text-cndl-secondary-500 flex items-center justify-center">
                <ScaleIcon />
              </div>
              <div className="flex-1">
                <div className="font-bold text-cndl-dark">Built-In Compliance and Security</div>
                <div className="text-cndl-primary-500 text-xs">
                  Leverage Stripe&apos;s robust compliance and security features, including KYC (Know Your Customer), AML (Anti-Money Laundering), and PCI compliance, seamlessly integrated into the product.
                </div>
              </div>
            </div>
            <div className="">
              <Link className="w-full px-4 inline-flex items-center justify-end space-x-2" href="/blog">
                <span>Read more on our blog</span>
                <span>
                  <MoveRightIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
