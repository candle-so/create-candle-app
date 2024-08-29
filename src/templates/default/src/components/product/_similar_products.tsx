"use client";
import { useEffect } from "react";
import { useProductStore } from "@/store/products.store";
import Candle from "@candle-so/node";
import candleConfig from "@/lib/candle.config";
import { ProductTile } from "../product_list/_product_tile";

export const SimilarProducts = () => {
  const candle = Candle.init(candleConfig);
  const products = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product: any, index: number) => (
          <ProductTile key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
