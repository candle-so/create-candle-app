import { HeartIcon } from "lucide-react";
import { currencify } from "@/lib/currencify";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IProductWithUser } from "@/app/page";

export const ProductTile = ({ product }: { product: IProductWithUser }) => {

  return (
    <div className="max-w-sm bg-cndl-light rounded-xl p-4 space-y-3 ring-4 ring-offset-2 ring-transparent hover:ring-2 hover:ring-cndl-primary-100 cursor-pointer">
      <div className="flex items-start">
        <div className="flex-1 flex items-center space-x-4">
          <div className="">
            <Avatar className="w-10 h-10 ring-2 ring-cndl-primary-300 ring-offset-4">
              <AvatarImage src={product.user?.image} alt={product.user?.name} />
              {product.user?.name && (
                <AvatarFallback className="bg-cndl-primary-200 text-cndl-primary-700 font-bold text-lg">
                  {product.user?.name
                    .split(" ")
                    .map((s: any) => s[0])
                    .join("")}
                </AvatarFallback>
              )}
            </Avatar>
          </div>
          <div className="flex-1 pt-2">
            <div className="text-cndl-dark font-bold text-lg">{product.user?.name}</div>
            <div className="text-cndl-primary-500 text-sm">{product.name}</div>
            <div className="text-cndl-neutral-700 text-xs flex space-x-2">
              <div className="">{currencify(product.price / 100)}</div>
              <div className="">{product.user?.timezone.replace("_", " ")}</div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-cndl-light to-cndl-primary-50 rounded-full flex items-center justify-center h-8 w-8">
          <HeartIcon className="text-cndl-primary-500" size={16} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {product.tags?.map((tag: any) => (
          <div key={tag} className="p-1">
            <div className="text-cndl-neutral-800 text-sm font-bold px-2 py-1 bg-cndl-neutral-200 rounded-md">{tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
