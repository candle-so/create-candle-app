// components/plant_categories.tsx
import React from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Indoor Plants",
    image: "https://source.unsplash.com/random/600x400?indoor-plants",
  },
  {
    id: 2,
    name: "Outdoor Plants",
    image: "https://source.unsplash.com/random/600x400?outdoor-plants",
  },
  {
    id: 3,
    name: "Succulents",
    image: "https://source.unsplash.com/random/600x400?succulents",
  },
];

export default function PlantCategories() {
  return (
    <section className="container mx-auto my-12">
      <h2 className="text-3xl font-bold mb-6">Plant Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-4 rounded-lg shadow-md text-center"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={600}
              height={400}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
