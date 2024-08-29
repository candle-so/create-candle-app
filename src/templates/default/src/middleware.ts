import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuthTokens } from "./lib/_cookies";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let { accessToken } = getAuthTokens();
  // console.log("=====>>>", accessToken, request.nextUrl.pathname);
  return NextResponse.next();
  // return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  // matcher: '/about/:path*',
  matcher: "/:path*",
};
