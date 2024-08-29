import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import Candle from "@candle-so/node";
import { Orders } from "./_orders";

export default async function OrdersPage() {
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });

  return (
    <main className="bg-gradient-to-b from-cndl-light to-cndl-primary-50">
      <Navigation />
      <div className="container max-w-7xl pt-8 pb-16 m-auto min-h-screen">
        <Orders />
      </div>
    </main>
  );
}
