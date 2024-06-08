"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCounterStore = exports.useAuthStore = void 0;
const zustand_1 = require("zustand");
exports.useAuthStore = (0, zustand_1.create)((set) => ({
    isLoggedIn: false,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
}));
exports.useCounterStore = (0, zustand_1.create)((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    incrementAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set((state) => ({ count: state.count + 1 }));
    },
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));