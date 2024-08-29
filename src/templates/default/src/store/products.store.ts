// stores/platform.store.ts
import { create } from "zustand";
import { IProduct } from "schema-interface";

interface ProductState {
  product: IProduct | null;
  products: IProduct[];
  setProduct: (product: IProduct) => void;
  setProducts: (products: IProduct[]) => void;
  updateProduct: (updates: Partial<IProduct>) => void;
  clearProduct: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  product: null,
  products: [],
  setProduct: (product) => set({ product }),
  setProducts: (products) => set({ products }),
  updateProduct: (updates) =>
    set((state) => ({
      product: state.product ? { ...state.product, ...updates } : null,
    })),
  clearProduct: () => set({ product: null }),
}));
