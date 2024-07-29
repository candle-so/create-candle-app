export const DocSection = ({ h1, h2, children }: { h1?: string; h2?: string; children: any }) => {
  return (
    <div className="border-b border-dashed border-cndl-neutral px-6 pb-8 pt-4">
      {h1 && <h1 className="text-2xl font-bold capitalize">{h1}</h1>}
      {h2 && <h1 className="font-bold text-lg text-cndl-dark">{h2}</h1>}
      <div className="items-start pt-6 lg:flex lg:space-x-8">
        <div className="space-y-2 lg:w-3/5">{children[0]}</div>
        <div className="max-w-md space-y-6 md:sticky md:top-10 lg:w-2/5">{children[1]}</div>
      </div>
    </div>
  );
};
