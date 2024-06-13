// components/testimonials.tsx
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    quote: "I found the perfect plant for my living room!",
    image: "https://source.unsplash.com/random/100x100?woman",
  },
  {
    id: 2,
    name: "John Smith",
    quote: "Great selection and fantastic service.",
    image: "https://source.unsplash.com/random/100x100?man",
  },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={100}
              height={100}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="italic">{testimonial.quote}</p>
            <h3 className="text-lg font-semibold mt-4">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
