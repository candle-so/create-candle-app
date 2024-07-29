"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContractStore = void 0;
// stores/contract.store.ts
const zustand_1 = require("zustand");
exports.useContractStore = (0, zustand_1.create)((set) => ({
    contract: null,
    contracts: [],
    setContract: (contract) => set({ contract }),
    setContracts: (contracts) => set({ contracts }),
    updateContract: (updates) => set((state) => ({
        contract: state.contract ? { ...state.contract, ...updates } : null,
    })),
    clearContract: () => set({ contract: null }),
}));
