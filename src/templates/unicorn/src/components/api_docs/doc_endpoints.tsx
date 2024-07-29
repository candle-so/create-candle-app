import { convertURLEncodedToPlusEncoded } from "@/lib/anchor_helpers";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const DocEndpoints = ({ doc }: any) => {
  const { endpoints, resource } = doc;
  return (
    <div className="space-y-4">
      <h2 className="text-md inline-block border-b-2 border-cndl-dark font-bold">Endpoints</h2>
      <div className="overflow-auto rounded py-4 text-cnfl-light">
        {endpoints.map((endpoint: any, i: number) => (
          <Link
            onClick={() => {
              let _hash = `#${resource} ${endpoint.title}`.replaceAll(" ", "+").toLocaleLowerCase();
            }}
            href={`#${convertURLEncodedToPlusEncoded(`${resource} ${endpoint.title}`)}`}
            className="cndl-transitions flex cursor-pointer p-1 hover:bg-cndl-light"
            key={i}
          >
            <div
              className={cn(
                "w-1/7 rounded p-1 text-right text-xs font-bold",
                (() => {
                  if (endpoint.method === "POST") return "text-sky-700";
                  if (endpoint.method === "GET") return "text-cndl-positive-500";
                  if (endpoint.method === "PUT") return "text-cndl-accent-500";
                  if (endpoint.method === "DELETE") return "text-cndl-negative-500";
                  return "";
                })()
              )}
            >
              {endpoint.method}
            </div>
            <div className="text-cndl-neutral-600"> {endpoint.path}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
