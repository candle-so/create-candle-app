"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePaymentStore = void 0;
// stores/user.store.ts
const zustand_1 = require("zustand");
exports.usePaymentStore = (0, zustand_1.create)((set) => ({
    paymentMethods: [],
    setPaymentMethods: (paymentMethods) => set({ paymentMethods }),
    paymentState: "new_pm",
    setPaymentState: (paymentState) => set({ paymentState }),
}));
