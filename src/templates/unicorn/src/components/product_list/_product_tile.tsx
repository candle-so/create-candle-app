import Image from "next/image";
import { HeartIcon, StarIcon } from "lucide-react";
import { iProduct } from "../product_list";
import { currencify } from "@/lib/currencify";

export const ProductTile = ({ product }: { product: iProduct }) => {
  return (
    <div className="max-w-sm">
      <div className="bg-cndl-light rounded-xl p-4 space-y-6">
        <div className="flex items-center justify-between">
          <div className="">{product.isPopular && <span className="inline-flex font-pacifico items-center px-3 py-1 rounded-full text-sm font-medium text-cndl-primary-500 bg-gradient-to-b from-cndl-light to-cndl-primary-50">Popular</span>}</div>
          <div className="">
            <div className="p-2 bg-gradient-to-b from-cndl-light to-cndl-primary-50 rounded-full flex items-center justify-center">
              <HeartIcon className="text-cndl-primary-500" size={20} />
            </div>
          </div>
        </div>
        <div className="w-full relative h-48 rounded-2xl overflow-hidden">
          <Image fill={true} objectFit="cover" objectPosition={"center"} src={product.image} alt={product?.title} />
        </div>
      </div>
      <div className="px-2 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-cndl-dark">{product.title}</div>
          <div className="flex items-center text-sm font-bold space-x-2 bg-cndl-light rounded-full px-2 py-1  ">
            <StarIcon className="text-cndl-accent-500" size={16} />
            <span>{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="text-cndl-neutral-800 text-sm font-bold">{product.summary}</div>
        <div className="text-lg font-bold text-cndl-primary-800 flex items-center space-x-1 pt-3">
          <span>{currencify(product.price)}</span>
          <span>/</span>
          <span>{product.metering}</span>
        </div>
      </div>
    </div>
  );
};
