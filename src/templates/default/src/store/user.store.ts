// stores/user.store.ts
import { create } from "zustand";
import { IUser } from "schema-interface";

interface UserState {
  user: IUser | null;
  setUser: (user: IUser) => void;
  updateUser: (updates: Partial<IUser>) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  updateUser: (updates) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updates } : null,
    })),
  clearUser: () => set({ user: null }),
}));
