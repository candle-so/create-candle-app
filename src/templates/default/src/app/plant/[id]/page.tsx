"use client";
// app/plant/[id]/page.tsx
import React, { useState } from "react";
import { useProductsStore } from "@/store/products.store";
import PlantImageGallery from "@/components/plant_image_gallery";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import RelatedProducts from "@/components/related_products";
import Navigation from "@/components/navigation";
import AddToCartButton from "@/components/add_to_cart_button";
import RequestScreeningButton from "@/components/request_screening_button";
import { cn } from "@/lib/utils";
import { currencify } from "@/lib/currencify";

export default function PlantPage({ params }: { params: { id: string } }) {
  const product = useProductsStore((state) =>
    state.products.find((product) => product.id === Number(params.id))
  );

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");

  if (!product) return <div>Loading...</div>;

  return (
    <main>
      <Navigation />
      <div className="container mx-auto p-6 flex flex-col md:flex-row space-x-6">
        <div className="w-full md:w-1/2 pt-4">
          <PlantImageGallery images={product.images} />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center pb-4 px-2">
            <Avatar className="w-6 h-6 ring-2 ring-rose-400 ring-offset-2 ring-offset-slate-800">
              <AvatarImage
                src={product.seller.profileImage}
                alt={product.seller.name}
              />
              <AvatarFallback>{product.seller.name[0]}</AvatarFallback>
            </Avatar>
            <p className="text-sm  ml-2">{product.seller.name}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg text-gray-700 mb-2">
              Price: {currencify(product.price)}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              Scientific Name: {product.scientificName}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              Origin: {product.origin}
            </p>
          </div>
          <div className="mb-4 max-w-sm">
            <label className="block text-gray-700 mb-2">Size</label>
            <div className="grid grid-cols-3 gap-4">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "ghost"}
                  className={cn(
                    "p-2 bg-white text-olive-500 font-semibold",
                    selectedSize === size
                      ? "ring-2 ring-olive-500"
                      : "bg-white text-black"
                  )}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <p className="text-lg text-gray-700">Shipping Information</p>
            <p className="text-sm text-gray-500">{product.shippingInfo}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg text-gray-700">Description</p>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg text-gray-700">Care Instructions</p>
            <p className="text-sm text-gray-500">{product.careInstructions}</p>
          </div>

          <div className="flex space-x-4 mt-8 items-center">
            <AddToCartButton product={product} />
            <RequestScreeningButton productId={product.id} />
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-bold mb-2">Reviews</h2>
            {product.reviews.map((review, index) => (
              <div key={index} className="flex items-center mb-4">
                <Avatar>
                  <AvatarImage
                    src={review.user.profileImage}
                    alt={review.user.name}
                  />
                  <AvatarFallback>{review.user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="text-sm font-bold">{review.user.name}</p>
                  <p className="text-sm text-gray-500">
                    Rating: {review.rating}/5
                  </p>
                  <p className="text-sm text-gray-500">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto p-6">
        <RelatedProducts relatedProductIds={product.relatedProducts} />
      </div>
    </main>
  );
}
