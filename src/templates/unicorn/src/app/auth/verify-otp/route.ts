import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { createSession } from "@/lib/session";
import { candleResponder } from "@/lib/_requests";
import { getTimezoneFromCookie, saveTimezoneToCookie } from "@/lib/timezone_cookies";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  let data = await req.json();

  let currentTimezone = getTimezoneFromCookie();

  if (!currentTimezone) {
    let url = "https://ipgeolocation.abstractapi.com/v1?api_key=d689dcbcc2534849b96dff4a6c69377e";
    let { data } = await axios.get(url);
    saveTimezoneToCookie(data);
  }

  let response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/auth/otp/verify`, { ...data });
  if (!response.data) return NextResponse.json({ error: "Error creating user" });
  let session: any = createSession(response.data);

  if (session.error) return candleResponder({ result: null, status: 403, error: session.error });

  return candleResponder({ result: session, status: 200, error: null });
}
