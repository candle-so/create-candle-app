"use client";
import { useState } from "react";
import { ProductTile } from "./_product_tile";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { IProduct } from "schema-interface";

const sortBy = [
  { name: "Newest", value: "newest" },
  { name: "Oldest", value: "oldest" },
  { name: "Relevance", value: "relevance" },
  { name: "Popularity", value: "popularity" },
];

export const ProductList = ({ products }: { products: IProduct[] }) => {
  const [sortByValue, setSortByValue] = useState(sortBy[0].value);

  return (
    <div className="space-y-8 pb-16">
      <div className="flex justify-between pb-8 border-b border-cndl-primary-100">
        <div className=""></div>
        <div className="relative">
          <Select onValueChange={(value) => setSortByValue(value)} defaultValue={sortByValue}>
            <SelectTrigger className="relative bg-cndl-neutral-100 font-bold rounded-full text-cndl-neutral-700">
              <SelectValue placeholder="Type of Application" />
            </SelectTrigger>
            <SelectContent className="relative space-x-2">
              {sortBy.map((sortByType, index) => (
                <SelectItem key={index} value={sortByType.value}>
                  Sort by {sortByType.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductTile key={index} product={product} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Button variant="ghost" className="btn-primary">
          Show More
        </Button>
      </div>
    </div>
  );
};
