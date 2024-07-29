"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.dynamic = void 0;
const node_1 = __importDefault(require("@candle-so/node"));
const session_1 = require("@/lib/session");
const response_1 = require("@/lib/response");
const candle = node_1.default.init({ api_key: process.env.CANDLE_API_KEY || "" });
exports.dynamic = "force-dynamic";
async function POST(req) {
    let data = await req.json();
    const { status, error, data: result } = await candle.auth.verifyOTP({ email: data.email, token: data.token });
    if (error)
        return (0, response_1.apiResponse)({ status, error });
    let session = (0, session_1.createSession)(result);
    if (session.error)
        return (0, response_1.apiResponse)({ status, error: session.error });
    return (0, response_1.apiResponse)({ status, result: session });
}
exports.POST = POST;
