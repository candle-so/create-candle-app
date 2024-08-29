"use client";
import { Auth } from "@/components/auth";
import CndlToast from "@/components/toast";
import { useAuthStore } from "@/store/auth.store";

export default function AuthPage() {
  const authMode = useAuthStore((state) => state.authMode);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <CndlToast />
      <Auth variant={authMode} />
    </div>
  );
}
