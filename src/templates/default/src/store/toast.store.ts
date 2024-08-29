import { create } from "zustand";
import { IToast } from "toast-interface";

type ToastStore = {
  toasts: IToast[];
  setToasts: (toasts: IToast[]) => void;
};

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [] as IToast[],
  setToasts: (toasts) => set({ toasts }),
}));
