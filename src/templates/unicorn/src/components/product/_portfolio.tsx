"use client";
import { useRef } from "react";
import Image from "next/image";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

const portfolio = [
  {
    image: "/images/build_image_1.png",
  },
  {
    image: "/images/build_image_2.png",
  },
  {
    image: "/images/build_image_3.png",
  },
  {
    image: "/images/build_image_1.png",
  },
  {
    image: "/images/build_image_2.png",
  },
  {
    image: "/images/build_image_3.png",
  },
];

export const Portfolio = () => {
  const carouselApiRef = useRef<CarouselApi | null>(null);

  return (
    <div className="container max-w-7xl space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-pacifico">Portfolio</h3>
        <div className="flex items-center space-x-10 bg-cndl-light px-4 py-2 rounded-full ring-2 ring-offset-4 ring-cndl-primary-50">
          <MoveLeftIcon size={24} className="text-cndl-dark" onClick={() => carouselApiRef.current?.scrollPrev()} />
          <MoveRightIcon size={24} className="text-cndl-dark" onClick={() => carouselApiRef.current?.scrollNext()} />
        </div>
      </div>
      <div className="m-auto">
        <Carousel setApi={(api) => (carouselApiRef.current = api)} opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {portfolio.map((app, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-6">
                <Image className="w-full rounded-3xl" width={1000} height={1000} objectFit="cover" src={app.image} alt="What you could be doing" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
