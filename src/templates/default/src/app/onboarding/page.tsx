import Candle from "@candle-so/node";
import { getAuthTokens } from "@/lib/_cookies";
import { redirect } from "next/navigation";
import candleConfig from "@/lib/candle.config";

export default async function OnboardingPage() {
  const candle = Candle.init(candleConfig);
  let { accessToken } = getAuthTokens();
  const { error } = await candle.users.retrieveUser(accessToken as string);

  if (error) return redirect("/auth");
  return redirect("/");
}
