"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = void 0;
const _fetch_1 = require("@/lib/_fetch");
const navigation_1 = require("next/navigation");
const getMe = async () => {
    let response = await (0, _fetch_1.fetchWrapper)({ url: "users/me", method: "GET" });
    if (response.error)
        return (0, navigation_1.redirect)("/auth");
    if (!response.created)
        return (0, navigation_1.redirect)("/onboarding");
    return response;
};
exports.getMe = getMe;
