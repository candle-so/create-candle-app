"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { HeartIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import { Input } from "../ui/input";
import { usePathname } from "next/navigation";

export const LoggedOutNavigation = () => {
  const pathname = usePathname().slice(1);

  return (
    <nav className="py-4 backdrop-blur sticky top-0 bg-cndl-light bg-opacity-30 z-20">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <div className="md:flex items-center justify-end space-x-8 hidden">
          <div className="p-0.5 border-2 border-cndl-primary-300 rounded-full flex overflow-hidden bg-cndl-light">
            <div className="bg-cndl-primary-800 text-cndl-light w-8 h-8 flex items-center justify-center rounded-full">
              <SearchIcon size={16} />
            </div>
            <Input className="border-none flex-1 text-cndl-primary-800" placeholder="Search for..." />
          </div>

          <div className="flex items-center space-x-3">
            <HeartIcon className="text-cndl-primary-400" size={24} />
            <ShoppingCartIcon className="text-cndl-primary-400" size={24} />
          </div>

          <Link href={`/auth?redirect=${pathname}`}>
            <Button variant="ghost" className="btn-primary">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
