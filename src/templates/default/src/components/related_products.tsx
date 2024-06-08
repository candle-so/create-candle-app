// components/related_products.tsx
import React from "react";
import { useProductsStore } from "@/store/products.store";
import ProductCard from "@/components/product_card";

type RelatedProductsProps = {
  relatedProductIds: number[];
};

export default function RelatedProducts({
  relatedProductIds,
}: RelatedProductsProps) {
  const products = useProductsStore((state) =>
    state.products.filter((product) => relatedProductIds.includes(product.id))
  );

  return (
    <div className="w-full mt-6">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
