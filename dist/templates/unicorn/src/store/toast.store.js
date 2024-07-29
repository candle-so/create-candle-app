"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToastStore = void 0;
const zustand_1 = require("zustand");
exports.useToastStore = (0, zustand_1.create)((set) => ({
    toasts: [],
    setToasts: (toasts) => set({ toasts }),
}));
