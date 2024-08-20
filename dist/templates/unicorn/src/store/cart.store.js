"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCartStore = void 0;
const zustand_1 = require("zustand");
exports.useCartStore = (0, zustand_1.create)((set) => ({
    cart: null,
    setCart: (cart) => set((state) => ({ ...state, cart })),
    cartItems: [],
    setCartItems: (cartItems) => set({ cartItems }),
}));
