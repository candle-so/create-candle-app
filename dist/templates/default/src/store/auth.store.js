"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthStore = void 0;
const zustand_1 = require("zustand");
exports.useAuthStore = (0, zustand_1.create)((set) => ({
    isLoggedIn: false,
    authMode: "otp:email",
    authEmail: undefined,
    setAuthMode: (mode) => set({ authMode: mode }),
    setAuthEmail: (email) => set({ authEmail: email }),
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
}));
