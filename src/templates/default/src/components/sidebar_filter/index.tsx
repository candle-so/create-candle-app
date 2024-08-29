import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface iFilter {
  label: string;
  values: string[];
}

export const SidebarFilters = ({ filters }: { filters: iFilter[] }) => {
  return (
    <div className="h-full bg-cndl-light rounded-xl px-4 pt-4 pb-40 space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-cndl-dark">Filter</h3>
        <Button className="bg-cndl-primary-100 text-cndl-primary-500 rounded-full" variant="ghost">
          Reset
        </Button>
      </div>

      {filters.map((filter, i) => (
        <div key={i} className="space-y-4">
          <h3 className="font-bold">{filter.label}</h3>
          <div className="rounded-full flex overflow-hidden bg-cndl-neutral-100">
            <div className="text-cndl-neutral-500 w-8 h-8 flex items-center justify-center rounded-full">
              <SearchIcon size={16} />
            </div>
            <Input className="border-none flex-1 text-cndl-primary-800 bg-cndl-neutral-100" placeholder={`Find a ${filter.label}`} />
          </div>
          <div className="space-y-1">
            {filter.values.map((value, i) => (
              <div key={i} className="flex items-center justify-start space-x-2 cursor-pointer p-1 hover:bg-cndl-primary-50">
                <Input className="w-auto" name={value} value={value} id={value} type="checkbox" />
                <label htmlFor={value} className="flex-1 cursor-pointer">
                  {value}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
