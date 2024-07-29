import React from "react";

export const Terminal = ({ children, hideCircles }: { children: React.ReactNode; hideCircles?: boolean }) => {
  return (
    <div className="bg-cndl-dark text-cndl-neutral-300 p-4 rounded-lg">
      {!hideCircles && (
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-cndl-negative-500"></div>
          <div className="w-3 h-3 rounded-full bg-cndl-accent-500"></div>
          <div className="w-3 h-3 rounded-full bg-cndl-positive-500"></div>
        </div>
      )}
      <div className="py-4 px-2 overflow-auto">{children}</div>
    </div>
  );
};
