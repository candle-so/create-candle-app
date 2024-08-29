import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
type UnprotectedRoute = string | RegExp;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const routeCheck = (unprotectedRoutes: UnprotectedRoute[], pathname: string): boolean => {
  // Check if pathname matches any route
  return unprotectedRoutes.some((route) => (typeof route === "string" ? route === pathname : route.test(pathname)));
};
