"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProductStore = void 0;
// stores/platform.store.ts
const zustand_1 = require("zustand");
exports.useProductStore = (0, zustand_1.create)((set) => ({
    product: null,
    products: [],
    setProduct: (product) => set({ product }),
    setProducts: (products) => set({ products }),
    updateProduct: (updates) => set((state) => ({
        product: state.product ? { ...state.product, ...updates } : null,
    })),
    clearProduct: () => set({ product: null }),
}));
