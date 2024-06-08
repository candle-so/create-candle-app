// components/request_screening_button.tsx
import React from "react";
import { Button } from "@/components/ui/button";

type RequestScreeningButtonProps = {
  productId: number;
};

export default function RequestScreeningButton({
  productId,
}: RequestScreeningButtonProps) {
  const handleRequestScreening = () => {
    // Implement request screening logic here
    console.log("Requesting screening for product", productId);
  };

  return (
    <Button variant="outline" onClick={handleRequestScreening}>
      Contact Seller
    </Button>
  );
}
