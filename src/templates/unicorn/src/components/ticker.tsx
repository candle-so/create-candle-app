"use client";
import React from "react";

interface TickerProps {
  values: string[];
}

export const Ticker: React.FC<TickerProps> = ({ values }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap relative bg-cndl-dark font-pacifico md:text-4xl text-2xl text-cndl-light py-4 md:py-8 ">
      <div className="flex space-x-16">
        <div className="flex animate-scroll space-x-16">
          {values.map((value, index) => (
            <div key={index} className="">
              {value}
            </div>
          ))}
        </div>
        <div className="flex animate-scroll space-x-16" aria-hidden="true">
          {values.map((value, index) => (
            <div key={index} className="">
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
