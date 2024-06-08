"use client";
// app/cart/page.tsx
import React from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart.store";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const totalCost = cart.reduce(
    (acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  return (
    <main>
      <Navigation />
      <div className="container mx-auto p-6 flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center mb-6 border-b pb-4"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded"
                  />
                  <div className="ml-4 flex-1">
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-gray-600">{item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <Button
                      variant="outline"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-full md:w-1/3 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Total Items:</span>
            <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Total Cost:</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>
          <Button onClick={handleCheckout} className="w-full">
            Proceed to Checkout
          </Button>
          <Button variant="outline" onClick={clearCart} className="w-full mt-2">
            Clear Cart
          </Button>
        </div>
      </div>
    </main>
  );
}
