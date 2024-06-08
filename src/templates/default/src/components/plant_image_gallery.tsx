// components/plant_image_gallery.tsx
import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type PlantImageGalleryProps = {
  images: string[];
};

export default function PlantImageGallery({ images }: PlantImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      <div className="mb-4">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  src={image}
                  alt={`Plant Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => setActiveImage(image)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={200}
              height={150}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
