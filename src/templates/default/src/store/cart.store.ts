// store/carts.tore.ts
import { create } from "zustand";

export type CartItem = {
  id: number;
  name: string;
  image: string;
  price: string;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalItems: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  addToCart: (item: CartItem) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          ),
        };
      } else {
        return {
          cart: [...state.cart, item],
        };
      }
    }),
  removeFromCart: (id: number) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
  totalItems: () =>
    get().cart.reduce((total, item) => total + item.quantity, 0),
}));
