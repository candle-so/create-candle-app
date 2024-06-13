// components/how_it_works.tsx
import React from "react";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Discover Exotic Plants",
      description:
        "Browse through our extensive collection of rare and exotic plants from around the world.",
      image: "/images/hiw-1.webp",
    },
    {
      id: 2,
      title: "Request Screening",
      description:
        "Request detailed information and screening for your chosen plants to ensure quality.",
      image: "/images/hiw-2.webp",
    },
    {
      id: 3,
      title: "Easy Checkout",
      description:
        "Secure and seamless checkout process for a hassle-free shopping experience.",
      image: "/images/hiw-3.webp",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-tr from-olive-800 to-slate-900 bg-olive-800 text-white">
      <div className="container mx-auto text-center mb-12 space-y-2">
        <h2 className="text-4xl font-light mb-4">How It Works</h2>
        <p className="text-lg text-slate-300">
          Discover, screen, and buy exotic plants with ease.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 py-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={step.image}
              alt={step.title}
              width={150}
              height={150}
              className="mb-6 rounded-lg"
            />
            <h3 className="text-xl font-regular mb-2 text-left">
              {step.title}
            </h3>
            <p className="text-slate-300 text-left">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
