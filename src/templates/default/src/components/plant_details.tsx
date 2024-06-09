// components/plant_details.tsx
import { Product } from "@/store/products.store";
import React from "react";

export default function PlantDetails({ product }: { product: Product }) {
  return (
    <div className="mb-6">
      <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
      <p className="text-2xl text-gray-700 mb-4">{product.price}</p>
      <p className="text-lg text-gray-600 mb-2">Category: {product.category}</p>
      <p className="text-lg text-gray-600 mb-2">Seller: {product?.seller?.name}</p>
      <p className="text-lg text-gray-600">Available: {product.available}</p>
    </div>
  );
}
