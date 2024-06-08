// components/add_to_cart_button.tsx
import React, { useState } from "react";
import { useCartStore } from "@/store/cart.store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@/store/products.store";

type AddToCartButtonProps = {
  product: Product; // Replace with the appropriate Product type
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state: any) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.images[0], // Use the first image from the images array
      price: product.price,
      quantity,
    });
  };

  return (
    <div className="flex items-center bg-slate-900 rounded space-x-3">
      <div className="flex justify-between items-center pl-4 space-x-2 py-0.5 rounded-md">
        <button
          className="text-2xl text-white"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
        >
          -
        </button>
        <Input
          type="text"
          className="shadow-none w-8 text-center border-none focus:border-none focus:ring-0 focus:outline-none text-white"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button
          className="text-2xl text-white"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
};

export default AddToCartButton;
