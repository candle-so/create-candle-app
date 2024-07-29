// stores/contract.store.ts
import { create } from "zustand";
import { IContact } from "schema-interface";

interface ContractState {
  contract: IContact | null;
  contracts: IContact[];
  setContract: (contract: IContact) => void;
  setContracts: (contracts: IContact[]) => void;
  updateContract: (updates: Partial<IContact>) => void;
  clearContract: () => void;
}

export const useContractStore = create<ContractState>((set) => ({
  contract: null,
  contracts: [],
  setContract: (contract) => set({ contract }),
  setContracts: (contracts) => set({ contracts }),
  updateContract: (updates) =>
    set((state) => ({
      contract: state.contract ? { ...state.contract, ...updates } : null,
    })),
  clearContract: () => set({ contract: null }),
}));
