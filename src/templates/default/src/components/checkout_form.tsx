// components/checkout_form.tsx
import React from "react";
import { Button } from "@/components/ui/button";

export default function CheckoutForm() {
  return (
    <div className="flex-1 bg-white p-6 shadow-lg rounded-lg mb-6 md:mb-0">
      <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="123 Main St"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Anytown"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Postal Code</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="12345"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="USA"
          />
        </div>
        <Button className="w-full">Complete Purchase</Button>
      </form>
    </div>
  );
}
