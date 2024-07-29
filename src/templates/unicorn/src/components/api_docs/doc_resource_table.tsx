import { cn } from "@/lib/utils";

export const DocResouceTable = ({ data }: any) => {
  return (
    <div className="w-full overflow-hidden rounded border-2 border-cndl-dark">
      <div className="">
        <div className="flex bg-cndl-dark px-2 py-1 text-cndl-neutral-600">
          <div className="w-1/4">Attribute</div>
          <div className="w-3/4">Description</div>
        </div>
      </div>
      {data.map((row: any, i: number) => (
        <div key={i} className={cn("flex p-2 ", i % 2 === 0 ? "bg-cnfl-light" : "bg-cndl-light")}>
          <div className="w-1/4 ">
            <div className="font-semibold">
              <div>{row.id}</div>
              <div className="text-xs text-cndl-neutral-600 font-light">{row.type}</div>
            </div>
          </div>
          <div className="w-3/4">{row.description}</div>
        </div>
      ))}
    </div>
  );
};
