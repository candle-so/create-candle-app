// stores/user.store.ts
import { ICart, ICartItem } from "schema-interface";
import { create } from "zustand";

interface CartState {
  cart: ICart | null;
  setCart: (cart: ICart) => void;
  cartItems: ICartItem[];
  setCartItems: (cartItems: ICartItem[]) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: null,
  setCart: (cart: ICart) => set((state) => ({ ...state, cart })),
  cartItems: [],
  setCartItems: (cartItems: ICartItem[]) => set({ cartItems }),
}));
