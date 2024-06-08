// components/user_menu.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UserMenu() {
  return (
    <nav className="bg-white shadow-md mt-4 mb-8">
      <div className="container mx-auto px-6 py-4 flex justify-center space-x-6">
        <Link href="/manage_plants">
          <Button>Manage Plants</Button>
        </Link>
        <Link href="/purchase_history">
          <Button>Purchase History</Button>
        </Link>
        <Link href="/profile">
          <Button>Profile</Button>
        </Link>
      </div>
    </nav>
  );
}
