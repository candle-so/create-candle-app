// app/login/page.tsx

import { AuthPage } from "@/components/auth";
import Candle from "@candle-so/node";
const candle = Candle.init({ api_key: process.env.CANDLE_API_KEY || "" });

export default async function LoginPage() {
  let { data: platform } = await candle.platforms.retrievePlatform();
  return (
    <main>
      <AuthPage platform={platform} />
    </main>
  );
}
