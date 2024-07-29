"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.candleResponder = void 0;
// import { headers } from "next/headers";
const server_1 = require("next/server");
const candleResponder = ({ result, status, error }) => {
    if (status > 499)
        return server_1.NextResponse.json(error, { status });
    if (error)
        return server_1.NextResponse.json(error, { status });
    return server_1.NextResponse.json(result, { status });
};
exports.candleResponder = candleResponder;
