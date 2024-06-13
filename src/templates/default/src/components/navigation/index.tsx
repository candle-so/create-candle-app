"use client";
// components/navigation.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store";
import { useCartStore } from "@/store/cart.store";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePlatformStore } from "@/store/platform.store";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const login = useAuthStore((state) => state.login);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const totalItems = useCartStore((state) => state.totalItems());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const platform = usePlatformStore((state) => state.platform);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">
          <Link href="/">{platform?.name}</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <input type="text" placeholder="Search plants..." className="px-4 py-2 border rounded" />
          {isLoggedIn ? (
            <div className="flex items-center space-x-6">
              <Link href="/discover" className="text-gray-600 hover:text-green-600">
                Discover
              </Link>
              <Link href="/cart" className={cn("relative text-gray-600 hover:text-green-600", totalItems > 0 ? "pr-3" : "")}>
                Cart
                {totalItems > 0 && <span className="absolute top-0 -right-2 inline-flex items-center justify-center py-1 px-2 text-xs font-bold leading-none text-rose-500 bg-white bg-opacity-15 ">{totalItems}</span>}
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-green-600">
                Profile
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              <Link href="/login" className="text-gray-600 hover:text-green-600">
                Login
              </Link>
              <Button onClick={login}>Sign Up</Button>
            </div>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            {isMenuOpen ? <XMarkIcon className="h-6 w-6 text-green-600" /> : <Bars3Icon className="h-6 w-6 text-green-600" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <input type="text" placeholder="Search plants..." className="px-4 py-2 border rounded" />
            {isLoggedIn ? (
              <>
                <Link href="/discover" className="text-gray-600 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>
                  Discover
                </Link>
                <Link href="/cart" className="relative text-gray-600 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>
                  Cart
                  {totalItems > 0 && <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{totalItems}</span>}
                </Link>
                <Link href="/profile" className="text-gray-600 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-600 hover:text-green-600" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
                <Button onClick={login}>Sign Up</Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
