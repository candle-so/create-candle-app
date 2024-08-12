import Candle from "@candle-so/node";
import { getAuthTokens } from "../../lib/_cookies";
import { redirect } from "next/navigation";

export default async function OnboardingPage() {
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  let { accessToken } = getAuthTokens();
  const { error } = await candle.users.retrieveUser(accessToken as string);

  if (error) return redirect("/auth");
  return redirect("/");
}
