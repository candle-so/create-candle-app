import { create } from "zustand";

type AuthStore = {
  isLoggedIn: boolean;
  authMode: "otp:email" | "otp:verify";
  authEmail: string | undefined;
  setAuthEmail: (email: string) => void;
  setAuthMode: (mode: "otp:email" | "otp:verify") => void;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  authMode: "otp:email",
  authEmail: undefined,
  setAuthMode: (mode) => set({ authMode: mode }),
  setAuthEmail: (email) => set({ authEmail: email }),
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}));
