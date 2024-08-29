// stores/user.store.ts
import { create } from "zustand";

interface PaymentState {
  paymentMethods: any[];
  setPaymentMethods: (paymentMethods: any[]) => void;
  paymentState: "new_pm" | "list";
  setPaymentState: (paymentState: "new_pm" | "list") => void;
}

export const usePaymentStore = create<PaymentState>((set) => ({
  paymentMethods: [],
  setPaymentMethods: (paymentMethods) => set({ paymentMethods }),
  paymentState: "new_pm",
  setPaymentState: (paymentState) => set({ paymentState }),
}));
