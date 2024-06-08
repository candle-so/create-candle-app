"use client";
// components/profile_info.tsx
import React from "react";
import { useAuthStore } from "@/store";

export default function ProfileInfo() {
  const { isLoggedIn, login, logout } = useAuthStore();

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
      {isLoggedIn ? (
        <div>
          <p>You are logged in.</p>
          <button
            onClick={logout}
            className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={login}
          className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Login
        </button>
      )}
    </div>
  );
}
