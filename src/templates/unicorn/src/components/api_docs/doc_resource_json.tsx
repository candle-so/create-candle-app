import SyntaxHighlighter from "react-syntax-highlighter";
import { ascetic } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const DocResouceJSON = ({ title, data }: any) => {
  const transform: any = (data: any) => {
    let result: any = {};
    for (let i = 0; i < data.length; i++) result[data[i].id] = data[i].sample;
    return result;
  };

  return (
    <div className="w-full overflow-hidden rounded border-2 border-cndl-dark bg-cnfl-light">
      <div className="flex w-full justify-between border-b border-cndl-neutral-dark border-opacity-30 bg-cndl-dark px-4 py-2 text-cnfl-light">{title}</div>
      <div className="p-4">
        <SyntaxHighlighter language="json" style={ascetic}>
          {JSON.stringify(transform(data), null, 2)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
