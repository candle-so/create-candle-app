"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeCheck = exports.cn = void 0;
const clsx_1 = require("clsx");
const tailwind_merge_1 = require("tailwind-merge");
function cn(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
exports.cn = cn;
const routeCheck = (unprotectedRoutes, pathname) => {
    // Check if pathname matches any route
    return unprotectedRoutes.some((route) => (typeof route === "string" ? route === pathname : route.test(pathname)));
};
exports.routeCheck = routeCheck;
