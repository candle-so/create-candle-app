import Image from "next/image";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Ticker } from "@/components/ticker";
import { WhyStripeConnect } from "@/components/why_stripe_connect";
import { HowToCode } from "@/components/how_to_code";
import { BuiltWithCandle } from "@/components/built_with_candle";
import { MailingListSubscriber } from "@/components/mailing_list_subscriber";
import { Pricing } from "@/components/pricing";
import { FAQs } from "@/components/faqs";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navigation variant="logged-out" />
      <Hero height="full">
        <div className="container md:flex md:items-center md:px-20 md:space-x-10">
          <div className="flex-1 space-y-3 md:space-y-5">
            <h1 className="md:text-5xl text-2xl font-bold text-cndl-primary-900 leading-tight md:leading-none">Magical experiences powered by Stripe Connect.</h1>
            <h2 className="md:text-2xl text-cndl-neutral-900 md:leading-8">Use our tools or hire us to build powerful platforms powered by Stripe Connect. </h2>
            <div className="flex pt-4 space-x-6">
              <Button variant="default">Build with Candle</Button>
              <Button variant="secondary">Hire a designer</Button>
            </div>
          </div>
          <div className="flex-1 pt-8">
            <div className="border-8 border-opacity-40 border-cndl-secondary-300 rounded-xl">
              <Image className="w-full rounded-lg shadow-xl" width={1000} height={1000} objectFit="contain" src="/images/hero-dashboard.png" alt="What you could be doing" />
            </div>
          </div>
        </div>
      </Hero>
      <div className="bg-cndl-dark">
        <Ticker values={["Platforms", "Communities", "Marketplaces", "Talent Agencies", "Service Agencies", "Property Management"]} />
      </div>
      <WhyStripeConnect />
      <HowToCode />
      <BuiltWithCandle />
      <MailingListSubscriber />
      <Pricing />
      <div className="pt-4" id="faqs">
        <FAQs />
      </div>
      <Footer />
    </main>
  );
}
