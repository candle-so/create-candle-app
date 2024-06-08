"use client";
// app/checkout/page.tsx
import React from "react";
import { useCartStore } from "@/store/cart.store";
import Navigation from "@/components/navigation";
import OrderSummary from "@/components/order_summary";
import CheckoutForm from "@/components/checkout_form";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);

  return (
    <main>
      <Navigation />
      <div className="container mx-auto p-6 flex flex-col md:flex-row md:space-x-6">
        <CheckoutForm />
        <OrderSummary cart={cart} />
      </div>
    </main>
  );
}
