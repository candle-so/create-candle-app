// components/hero_section.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const plantGraphic = "/images/plant-graphic.png";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-olive-500 via-rose-200 to-blue-500 text-white py-20">
      <div
        className="absolute inset-0 transform-gpu overflow-hidden blur-3xl -z-10"
        aria-hidden="true"
      >
        <div
          className="relative aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            left: "calc(50% - 18.0625rem)",
            top: "-30%",
          }}
        />
      </div>
      <div className="container mx-auto flex max-w-6xl m-auto flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">
            Exotic Plants from Botánica
          </h1>
          <p className="text-2xl mb-8">
            Discover and order the most exotic plants for your home and garden.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Button className="rounded-none">Order Now</Button>
            <Button className="rounded-none" variant="ghost">
              Learn More
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 p-8">
          <Image
            src={plantGraphic}
            alt="Exotic Plant"
            layout="responsive"
            width={500}
            height={500}
            className="bg-gradient-to-bl from-olive-700 via-yellow-100 to-white bg-opacity-25"
          />
        </div>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 transform-gpu overflow-hidden blur-3xl -z-10"
        aria-hidden="true"
      >
        <div
          className="relative aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            left: "calc(50% + 3rem)",
            top: "calc(100% - 13rem)",
          }}
        />
      </div>
    </section>
  );
}
