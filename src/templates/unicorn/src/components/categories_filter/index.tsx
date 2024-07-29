import { MoreVertical } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ICategory {
  id: string;
  name: string;
  image?: string;
}

export const CategoriesFilter = ({ categories }: { categories: ICategory[] }) => {
  return (
    <div className="flex items-center">
      <div className="min-w-96">
        <div className="flex items-center space-x-6">
          {categories.map((category: ICategory, i: number) => (
            <div key={i} className="flex space-x-2 items-center bg-cndl-primary-50 hover:bg-cndl-primary-500 hover:text-cndl-primary-50 py-1 pl-1 px-4 rounded-full cursor-pointer text-xm">
              <div className="flex items-center justify-center">
                <Avatar className="w-6 h-6 ring-2 ring-cndl-primary-500">
                  <AvatarImage src={category?.image} alt={category?.name} />
                  <AvatarFallback className="bg-cndl-primary-200 text-sm text-cndl-primary-700 font-bold">
                    {category?.name
                      .split(" ")
                      .map((s: any) => s[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="font-bold">{category?.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <Button variant="ghost">
          <MoreVertical />
          <span>More</span>
        </Button>
      </div>
    </div>
  );
};
