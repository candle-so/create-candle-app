// stores/platform.store.ts
import { create } from "zustand";
import { IPlatform } from "schema-interface";

interface PlatformState {
  platform: IPlatform | null;
  setPlatform: (platform: IPlatform) => void;
  updatePlatform: (updates: Partial<IPlatform>) => void;
  clearPlatform: () => void;
}

export const usePlatformStore = create<PlatformState>((set) => ({
  platform: null,
  setPlatform: (platform) => set({ platform }),
  updatePlatform: (updates) =>
    set((state) => ({
      platform: state.platform ? { ...state.platform, ...updates } : null,
    })),
  clearPlatform: () => set({ platform: null }),
}));
