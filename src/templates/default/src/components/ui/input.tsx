import * as React from "react";
import { cn } from "@/lib/utils"; // Utility for class names

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <input ref={ref} className={cn("flex w-full px-2 placeholder:text-neutral-400 text-cndl-dark focus-visible:outline-none", className)} {...props} />;
});

Input.displayName = "Input";
export { Input };
