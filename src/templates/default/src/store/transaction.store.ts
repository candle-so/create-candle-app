// stores/transaction.store.ts
import { create } from "zustand";
import { ITransaction } from "schema-interface";

interface TransactionState {
  transaction: ITransaction | null;
  transactions: ITransaction[];
  setTransaction: (transaction: ITransaction) => void;
  setTransactions: (transactions: ITransaction[]) => void;
  updateTransaction: (updates: Partial<ITransaction>) => void;
  clearTransaction: () => void;
}

export const useTransactionStore = create<TransactionState>((set) => ({
  transaction: null,
  transactions: [],
  setTransaction: (transaction) => set({ transaction }),
  setTransactions: (transactions) => set({ transactions }),
  updateTransaction: (updates) =>
    set((state) => ({
      transaction: state.transaction ? { ...state.transaction, ...updates } : null,
    })),
  clearTransaction: () => set({ transaction: null }),
}));
