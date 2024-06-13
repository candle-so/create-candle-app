// components/cta_button.tsx
import React from "react";
import { Button } from "../ui/button";

export default function CtaButton() {
  return (
    <div className="text-center my-12">
      <Button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition">Explore Now</Button>
    </div>
  );
}
