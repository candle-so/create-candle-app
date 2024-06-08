"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCartStore = void 0;
// store/carts.tore.ts
const zustand_1 = require("zustand");
exports.useCartStore = (0, zustand_1.create)((set, get) => ({
    cart: [],
    addToCart: (item) => set((state) => {
        const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            return {
                cart: state.cart.map((cartItem) => cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                    : cartItem),
            };
        }
        else {
            return {
                cart: [...state.cart, item],
            };
        }
    }),
    removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
    })),
    clearCart: () => set({ cart: [] }),
    totalItems: () => get().cart.reduce((total, item) => total + item.quantity, 0),
}));
