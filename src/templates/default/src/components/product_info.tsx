// components/product_info.tsx
import React from "react";

export default function ProductInfo({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="my-4">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}
