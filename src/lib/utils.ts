import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // clsx handles the conditionals/arrays/objects, twMerge handles the Tailwind conflicts
  return twMerge(clsx(inputs));
}
