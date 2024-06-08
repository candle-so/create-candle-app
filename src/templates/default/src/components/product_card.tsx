// components/product_card.tsx
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { currencify } from "@/lib/currencify";
import { Product } from "@/store/products.store";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="p-4">
      <div className="relative">
        <div className="absolute z-10 top-0 left-2 flex items-center mt-2 bg-slate-800 p-2 rounded-lg bg-opacity-30">
          <Avatar className="w-6 h-6 ring-2 ring-rose-400 ring-offset-2 ring-offset-slate-800">
            <AvatarImage
              src={product.seller.profileImage}
              alt={product.seller.name}
            />
            <AvatarFallback>{product.seller.name[0]}</AvatarFallback>
          </Avatar>
          <p className="text-sm text-white ml-2">{product.seller.name}</p>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {product.images.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  src={image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="px-1 pt-2">
        <div className="text-xs font-semibold text-olive-500">
          {product.category}
        </div>
        <h3 className="text-sm font-bold">{product.name}</h3>

        <div className="flex items-center space-x-2 pt-1">
          <div className="text-gray-700 font-bold text-sm">
            {currencify(Number(product.price) * 17.3)}
          </div>
          <div className="text-sm text-gray-500">
            {product.available} Available
          </div>
        </div>
      </div>
    </div>
  );
}
