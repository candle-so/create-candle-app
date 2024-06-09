// store/products.store.ts
import { create } from "zustand";
import { productsData } from "./_sample_data/products.data";

type User = {
  name: string;
  profileImage: string;
};

type Review = {
  user: User;
  rating: number;
  comment: string;
};

export type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  seller: User;
  available: number;
  images: string[];
  sizes: string[];
  shippingInfo: string;
  description: string;
  scientificName: string;
  origin: string;
  careInstructions: string;
  reviews: Review[];
  relatedProducts: number[]; // IDs of related products
};

type ProductsStore = {
  products: Product[];
  addProduct: (product: Product) => void;
  setProducts: (products: Product[]) => void;
};

const defaultProducts: any = productsData;

export const useProductsStore = create<ProductsStore>((set) => ({
  products: defaultProducts,
  addProduct: (product: Product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  setProducts: (products: Product[]) =>
    set(() => ({
      products: products,
    })),
}));
