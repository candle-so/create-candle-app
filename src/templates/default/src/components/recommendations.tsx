// components/recommendations.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const recommendations = [
  {
    id: 1,
    name: "Aloe Vera",
    image: "https://source.unsplash.com/random/600x400?aloe-vera",
    price: "$15",
  },
  {
    id: 2,
    name: "Bonsai Tree",
    image: "https://source.unsplash.com/random/600x400?bonsai-tree",
    price: "$50",
  },
  {
    id: 3,
    name: "Orchid",
    image: "https://source.unsplash.com/random/600x400?orchid",
    price: "$25",
  },
];

export default function Recommendations() {
  return (
    <section className="container mx-auto my-12">
      <h2 className="text-3xl font-bold mb-6">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((plant) => (
          <Link href={`/plant/${plant.id}`} key={plant.id}>
            <Card className="cursor-pointer">
              <Image
                src={plant.image}
                alt={plant.name}
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="text-center">
                <h3 className="text-xl font-semibold mt-4">{plant.name}</h3>
                <p className="text-green-600 mt-2">{plant.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
