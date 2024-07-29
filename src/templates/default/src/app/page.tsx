// app/page.tsx

import { LandingPage } from "@/components/landing";
import Candle from "@candle-so/node";
const candle = Candle.init({ api_key: process.env.CANDLE_API_KEY || "" });

export default async function RootPage() {
  let { data: platform, error } = await candle.platforms.retrievePlatform();

  if (error) return <main>Marketplace does not exist</main>;

  return (
    <main>
      <LandingPage platform={platform} />;
    </main>
  );
}
