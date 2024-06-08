// components/welcome_banner.tsx
import React from "react";
import Image from "next/image";

export default function WelcomeBanner() {
  return (
    <section className="relative bg-green-600 text-white py-20">
      <div className="absolute inset-0">
        <Image
          src="https://source.unsplash.com/random/1200x600?plants"
          alt="Welcome Banner Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-transparent opacity-70"></div>
      </div>
      <div className="relative container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Discover Exotic Plants</h1>
        <p className="text-xl mb-8">
          Search and filter through a variety of exotic plants.
        </p>
      </div>
    </section>
  );
}
