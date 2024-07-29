"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTokens = exports.createSession = exports.clearSession = void 0;
const headers_1 = require("next/headers");
const clearSession = () => {
    (0, headers_1.cookies)().delete("accessToken");
    (0, headers_1.cookies)().delete("refreshToken");
    return;
};
exports.clearSession = clearSession;
const createSession = (authenticatedUser) => {
    if (!authenticatedUser.token || !authenticatedUser.refreshToken) {
        return { error: "Error creating session" };
    }
    (0, headers_1.cookies)().set("accessToken", authenticatedUser.token);
    (0, headers_1.cookies)().set("refreshToken", authenticatedUser.refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });
    return authenticatedUser;
};
exports.createSession = createSession;
const getUserTokens = () => {
    const cookieStore = (0, headers_1.cookies)();
    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;
    return { accessToken, refreshToken };
};
exports.getUserTokens = getUserTokens;
