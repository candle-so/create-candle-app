"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProductsStore = void 0;
// store/products.store.ts
const zustand_1 = require("zustand");
const products_data_1 = require("./_sample_data/products.data");
const defaultProducts = products_data_1.productsData;
exports.useProductsStore = (0, zustand_1.create)((set) => ({
    products: defaultProducts,
    addProduct: (product) => set((state) => ({
        products: [...state.products, product],
    })),
    setProducts: (products) => set(() => ({
        products: products,
    })),
}));
