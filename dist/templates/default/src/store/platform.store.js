"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePlatformStore = void 0;
// stores/platform.store.ts
const zustand_1 = require("zustand");
exports.usePlatformStore = (0, zustand_1.create)((set) => ({
    platform: null,
    setPlatform: (platform) => set({ platform }),
    updatePlatform: (updates) => set((state) => ({
        platform: state.platform ? { ...state.platform, ...updates } : null,
    })),
    clearPlatform: () => set({ platform: null }),
}));