"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookie = exports.getCookie = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
function isServer() {
    return typeof window === "undefined";
}
// This function retrieves a cookie by name
function getCookie(name) {
    if (isServer()) {
        const nextHeaders = require("next/headers");
        const cookieStore = nextHeaders.cookies();
        return cookieStore.get(name)?.value;
    }
    // Client-side: use document.cookie
    return parseCookie(document.cookie, name);
}
exports.getCookie = getCookie;
// Function to set a cookie
function setCookie(name, value, maxAgeDays = 7) {
    const maxAge = maxAgeDays * 24 * 60 * 60; // Convert days to seconds
    // const cookieValue = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax`;
    if (isServer()) {
        const nextHeaders = require("next/headers");
        const cookieStore = nextHeaders.cookies();
        cookieStore.set(name, value, {
            httpOnly: true,
            sameSite: "strict",
            secure: true,
            maxAge,
        });
        return value;
    }
    js_cookie_1.default.set(name, value, { expires: maxAgeDays });
    return value;
}
exports.setCookie = setCookie;
// Helper function to parse cookies
function parseCookie(cookieString, name) {
    if (!cookieString) {
        return undefined;
    }
    const cookies = cookieString.split(";").reduce((acc, cookie) => {
        const [key, value] = cookie.split("=").map((part) => part.trim());
        acc[key] = decodeURIComponent(value);
        return acc;
    }, {});
    return cookies[name];
}
