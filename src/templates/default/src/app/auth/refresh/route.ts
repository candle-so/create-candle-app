import { NextRequest } from "next/server";
import Candle from "@candle-so/node";
import axios from "axios";
import { apiResponse } from "@/lib/response";

const candle = Candle.init({ api_key: process.env.CANDLE_API_KEY || "" });

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  let data = await req.json();
  // const { status, error, data: result } = await candle.auth.refresh({ email: data.email });
  // return apiResponse({ status, result, error });
}
