export const DocEndpointParams = ({ endpoint }: any) => {
  const { params, description } = endpoint;
  return (
    <div className="space-y-2 pb-4">
      <div className="pb-4 opacity-70">{description}</div>
      <h3 className="text-md text-cndl-neutral-700 pt-4 font-semibold">Parameters:</h3>
      {params.length === 0 && <div className="rounded border border-dashed border-cndl-neutral-dark bg-cndl-light p-4 text-cndl-neutral-600">No parameters</div>}
      {params.length !== 0 && (
        <div className="w-full space-y-4">
          {params.map((row: any, i: number) => (
            <div key={i} className="rounded border border-dashed border-cndl-neutral p-2">
              <div className="w-1/4 ">
                <div className="flex items-center space-x-1">
                  <div className="font-bold">{row.id}</div>
                  <div className="text-xs font-light text-cndl-neutral-600">{row.type}</div>
                </div>
              </div>
              <div className="w-3/4">{row.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
