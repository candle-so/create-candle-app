"use client";
// components/featured_plants.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { useProductsStore } from "@/store/products.store";
import ProductCard from "./product_card";

export default function FeaturedPlants() {
  const plants = useProductsStore((state) => state.products);

  // return (
  //   <section className="container mx-auto my-12">
  //     <h2 className="text-3xl font-bold mb-6">Featured Plants</h2>
  //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //       {plants.slice(0, 3).map((plant) => (
  //         <Link href={`/plant/${plant.id}`} key={plant.id}>
  //           <ProductCard product={plant} />
  //         </Link>
  //       ))}
  //     </div>
  //   </section>
  // );

  return (
    <section className="container mx-auto my-12">
      <h2 className="text-3xl font-light mb-6 px-4 text-slate-600">
        Featured Plants
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {plants.slice(0, 4).map((plant) => (
          <Link href={`/plant/${plant.id}`} key={plant.id}>
            <ProductCard product={plant} />
          </Link>
        ))}
      </div>
    </section>
  );
}
