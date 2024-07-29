"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTransactionStore = void 0;
// stores/transaction.store.ts
const zustand_1 = require("zustand");
exports.useTransactionStore = (0, zustand_1.create)((set) => ({
    transaction: null,
    transactions: [],
    setTransaction: (transaction) => set({ transaction }),
    setTransactions: (transactions) => set({ transactions }),
    updateTransaction: (updates) => set((state) => ({
        transaction: state.transaction ? { ...state.transaction, ...updates } : null,
    })),
    clearTransaction: () => set({ transaction: null }),
}));
