"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.middleware = void 0;
const server_1 = require("next/server");
const _cookies_1 = require("./lib/_cookies");
// This function can be marked `async` if using `await` inside
function middleware(request) {
    let { accessToken } = (0, _cookies_1.getAuthTokens)();
    // console.log("=====>>>", accessToken, request.nextUrl.pathname);
    return server_1.NextResponse.next();
    // return NextResponse.redirect(new URL("/", request.url));
}
exports.middleware = middleware;
// See "Matching Paths" below to learn more
exports.config = {
    // matcher: '/about/:path*',
    matcher: "/:path*",
};
