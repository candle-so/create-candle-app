import { NextRequest } from "next/server";
import Candle from "@candle-so/node";
import { createSession } from "@/lib/session";
import { apiResponse } from "@/lib/response";
const candle = Candle.init({ api_key: process.env.CANDLE_API_KEY || "" });

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  let data = await req.json();
  const { status, error, data: result } = await candle.auth.verifyOTP({ email: data.email, token: data.token });

  if (error) return apiResponse({ status, error });

  let session: any = createSession(result);

  if (session.error) return apiResponse({ status, error: session.error });

  return apiResponse({ status, result: session });
}
