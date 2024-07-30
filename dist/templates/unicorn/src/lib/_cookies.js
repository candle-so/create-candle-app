"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimezoneFromCookie = exports.saveTimezoneToCookie = exports.clearSession = exports.getAuthTokens = exports.createSession = exports.deleteCookie = exports.setCookie = exports.getCookie = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
function isServer() {
    return typeof window === "undefined";
}
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
function deleteCookie(name) {
    if (isServer()) {
        const nextHeaders = require("next/headers");
        const cookieStore = nextHeaders.cookies();
        cookieStore.delete(name);
    }
    else {
        js_cookie_1.default.remove(name);
    }
}
exports.deleteCookie = deleteCookie;
const createSession = (payload) => {
    if (!payload.token || !payload.refreshToken)
        return { error: "Error creating session" };
    setCookie("accessToken", payload.token);
    setCookie("refreshToken", payload.refreshToken);
    return payload;
};
exports.createSession = createSession;
const getAuthTokens = () => {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");
    return { accessToken, refreshToken };
};
exports.getAuthTokens = getAuthTokens;
const clearSession = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    return;
};
exports.clearSession = clearSession;
const saveTimezoneToCookie = (timezoneData) => {
    if (!timezoneData)
        return null;
    const timezone = JSON.stringify(timezoneData);
    setCookie("timezone", timezone);
    return timezoneData;
};
exports.saveTimezoneToCookie = saveTimezoneToCookie;
const getTimezoneFromCookie = () => {
    const currentTimezone = getCookie("timezone");
    if (!currentTimezone)
        return null;
    return JSON.parse(currentTimezone);
};
exports.getTimezoneFromCookie = getTimezoneFromCookie;
