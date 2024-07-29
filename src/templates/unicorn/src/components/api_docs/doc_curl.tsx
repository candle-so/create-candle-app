import SyntaxHighlighter from "react-syntax-highlighter";
import { ascetic } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CopyCheckIcon, CopyIcon } from "lucide-react";

const generateCurlCommand = (endpoint: any) => {
  let curl = `curl -X ${endpoint.method} https://api.candle.so/v1${endpoint.path}`;
  curl = curl + `\n --header 'authorization: Bearer {API_KEY}'`;
  curl = curl + `\n --header 'content-type: application/json'`;

  if (endpoint.query) curl = curl + `?${endpoint.query.map((param: any) => `${param.id}=${param.sample}`).join("&")}`;

  let body: any = {};

  if (endpoint.body) {
    endpoint.body.forEach((param: any) => {
      body[param.id] = param.sample;
    });
    curl = curl + `\n --data-raw '${JSON.stringify(body, null, 2)}'`;
  }

  return curl;
};

export const DocCurl = ({ endpoint }: any) => {
  const [curlCopied, setCurlCopied] = useState(false);

  const curl = generateCurlCommand(endpoint);

  const copyKeyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    let message = "copied test key to clipboard";
    setCurlCopied(true);
  };

  return (
    <div className="w-full overflow-hidden rounded border-2 border-cndl-dark bg-cnfl-light">
      <div className="flex w-full items-center justify-between border-b border-cndl-neutral-dark border-opacity-30 bg-cndl-dark px-2 py-2 text-cnfl-light">
        <div className="flex items-center space-x-1">
          <div
            className={cn(
              "font-montserrat text-sm font-semibold uppercase",
              (() => {
                if (endpoint.method === "POST") return "text-sky-500";
                if (endpoint.method === "GET") return "text-cndl-positive-500";
                if (endpoint.method === "PUT") return "text-cndl-accent-500";
                if (endpoint.method === "DELETE") return "text-cndl-negative-500";
                return "";
              })()
            )}
          >
            {endpoint.method}
          </div>
          <div className="text-xs font-thin text-cndl-neutral-600">{endpoint.path}</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-sm font-light">curl</div>
          <div className="" onClick={() => copyKeyToClipboard(curl)}>
            {curlCopied ? <CopyCheckIcon size={20} className="cursor-pointer text-cndl-positive-500" /> : <CopyIcon size={20} className="cursor-pointer text-cndl-neutral-900" />}
          </div>
        </div>
      </div>
      <div className="p-4">
        <SyntaxHighlighter language="bash" style={ascetic}>
          {curl}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
