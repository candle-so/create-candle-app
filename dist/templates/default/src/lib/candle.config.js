"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const candleConfig = {
    api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "",
    debug: process.env.NEXT_PUBLIC_LOCAL_DEVELOPMENT ? true : false || false,
    host: process.env.NEXT_PUBLIC_API_URL || "https://api.candle.so",
};
exports.default = candleConfig;
