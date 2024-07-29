"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.dynamic = void 0;
const node_1 = __importDefault(require("@candle-so/node"));
const candle = node_1.default.init({ api_key: process.env.CANDLE_API_KEY || "" });
exports.dynamic = "force-dynamic";
async function POST(req) {
    let data = await req.json();
    // const { status, error, data: result } = await candle.auth.refresh({ email: data.email });
    // return apiResponse({ status, result, error });
}
exports.POST = POST;
