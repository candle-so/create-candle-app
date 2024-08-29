// stores/platform.store.ts
import { create } from "zustand";
import { IPlatform } from "schema-interface";

interface PlatformState {
  platform: IPlatform | null;
  platforms: IPlatform[];
  platformKeys: string[];
  setPlatform: (platform: IPlatform) => void;
  setPlatforms: (platforms: IPlatform[]) => void;
  setPlatformKeys: (platformKeys: string[]) => void;
  updatePlatform: (updates: Partial<IPlatform>) => void;
  clearPlatform: () => void;
}

export const usePlatformStore = create<PlatformState>((set) => ({
  platform: null,
  platforms: [],
  platformKeys: [],
  setPlatform: (platform) => set({ platform }),
  setPlatforms: (platforms) => set({ platforms }),
  setPlatformKeys: (platformKeys) => set({ platformKeys }),
  updatePlatform: (updates) =>
    set((state) => ({
      platform: state.platform ? { ...state.platform, ...updates } : null,
    })),
  clearPlatform: () => set({ platform: null }),
}));
