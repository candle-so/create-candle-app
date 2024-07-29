"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.dynamic = void 0;
const server_1 = require("next/server");
const axios_1 = __importDefault(require("axios"));
const session_1 = require("@/lib/session");
const _requests_1 = require("@/lib/_requests");
const timezone_cookies_1 = require("@/lib/timezone_cookies");
exports.dynamic = "force-dynamic";
async function POST(req) {
    let data = await req.json();
    let currentTimezone = (0, timezone_cookies_1.getTimezoneFromCookie)();
    if (!currentTimezone) {
        let url = "https://ipgeolocation.abstractapi.com/v1?api_key=d689dcbcc2534849b96dff4a6c69377e";
        let { data } = await axios_1.default.get(url);
        (0, timezone_cookies_1.saveTimezoneToCookie)(data);
    }
    let response = await axios_1.default.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/auth/otp/verify`, { ...data });
    if (!response.data)
        return server_1.NextResponse.json({ error: "Error creating user" });
    let session = (0, session_1.createSession)(response.data);
    if (session.error)
        return (0, _requests_1.candleResponder)({ result: null, status: 403, error: session.error });
    return (0, _requests_1.candleResponder)({ result: session, status: 200, error: null });
}
exports.POST = POST;
