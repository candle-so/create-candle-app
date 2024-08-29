"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserStore = void 0;
// stores/user.store.ts
const zustand_1 = require("zustand");
exports.useUserStore = (0, zustand_1.create)((set) => ({
    me: null,
    user: null,
    users: [],
    setMe: (user) => set({ me: user }),
    setUser: (user) => set({ user }),
    setUsers: (users) => set({ users }),
    updateUser: (updates) => set((state) => ({
        user: state.user ? { ...state.user, ...updates } : null,
    })),
    clearUser: () => set({ user: null }),
}));
