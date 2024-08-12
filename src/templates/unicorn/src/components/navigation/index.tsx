import Candle from "@candle-so/node";
import { AuthenticatedNavigation } from "./_authenticated";
import { LoggedOutNavigation } from "./_logged_out";
import { getAuthTokens } from "@/lib/_cookies";

export const Navigation = async ({ breadcrumbs }: { breadcrumbs?: any[] }) => {
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  let { accessToken } = getAuthTokens();
  const { error, data: me } = await candle.users.retrieveUser(accessToken as string);

  if (error || !me) return <LoggedOutNavigation />;
  if (me) return <AuthenticatedNavigation me={me} breadcrumbs={breadcrumbs} />;
};
