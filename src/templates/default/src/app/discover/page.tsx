"use client";

// app/discover/page.tsx
import React, { useState } from "react";
import SidebarFilter from "@/components/sidebar_filter";
import ProductCard from "@/components/product_card";
import { useProductsStore } from "@/store/products.store";
import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DiscoverPage() {
  const products = useProductsStore((state) => state.products);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main>
      <Navigation />
      <div className="container mx-auto p-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">
          <Button
            className="mb-4 md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
          {showFilters || (
            <div className="hidden md:block px-4">
              <SidebarFilter />
            </div>
          )}
          {showFilters && (
            <div className="md:hidden">
              <SidebarFilter />
            </div>
          )}
        </div>
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link href={`/plant/${product.id}`} target="_blank" key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
