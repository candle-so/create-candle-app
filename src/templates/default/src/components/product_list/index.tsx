"use client";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ProductTile } from "./_product_tile";
import { Button } from "../ui/button";
import { useProductStore } from "@/store/products.store";
import Candle from "@candle-so/node";
// import { productsData } from "@/app/_data/index.data";

const sortBy = [
  { name: "Newest", value: "newest" },
  { name: "Oldest", value: "oldest" },
  { name: "Relevance", value: "relevance" },
  { name: "Popularity", value: "popularity" },
];

export const ProductList = () => {
  const candle = Candle.init({ api_key: process.env.NEXT_PUBLIC_CANDLE_API_KEY || "", debug: true });
  const products = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);
  const [sortByValue, setSortByValue] = useState(sortBy[0].value);

  const fetchProducts = async () => {
    let { error, data } = await candle.products.listProducts();
    if (error) {
      return;
    }
    // setProducts(productsData as any);
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product: any, index: number) => (
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
