// stores/contract.store.ts
import { create } from "zustand";
import { IContract } from "schema-interface";

interface ContractState {
  contract: IContract | null;
  contracts: IContract[];
  setContract: (contract: IContract) => void;
  setContracts: (contracts: IContract[]) => void;
  updateContract: (updates: Partial<IContract>) => void;
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
