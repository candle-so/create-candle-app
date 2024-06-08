// components/order_summary.tsx
import React from "react";
import { CartItem } from "@/store/cart.store";
import Image from "next/image";

type OrderSummaryProps = {
  cart: CartItem[];
};

export default function OrderSummary({ cart }: OrderSummaryProps) {
  const totalCost = cart.reduce(
    (acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  return (
    <div className="w-full md:w-1/3 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center mb-4">
          <Image
            src={item.image}
            alt={item.name}
            width={50}
            height={50}
            className="rounded"
          />
          <div className="ml-4">
            <p className="text-lg font-bold">{item.name}</p>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <p className="text-gray-600">Price: {item.price}</p>
          </div>
        </div>
      ))}
      <div className="flex justify-between mt-4">
        <span>Total Cost:</span>
        <span>${totalCost.toFixed(2)}</span>
      </div>
    </div>
  );
}
