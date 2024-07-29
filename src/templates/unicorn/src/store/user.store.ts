// stores/user.store.ts
import { create } from "zustand";
import { IUser } from "schema-interface";

interface UserState {
  me: IUser | null;
  user: IUser | null;
  users: IUser[];
  setMe: (user: IUser) => void;
  setUser: (user: IUser) => void;
  setUsers: (users: IUser[]) => void;
  updateUser: (updates: Partial<IUser>) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  me: null,
  user: null,
  users: [],
  setMe: (user) => set({ me: user }),
  setUser: (user) => set({ user }),
  setUsers: (users) => set({ users }),
  updateUser: (updates) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updates } : null,
    })),
  clearUser: () => set({ user: null }),
}));
