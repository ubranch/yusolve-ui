import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getGridBackgroundStyle(bgColor: string, gridColor: string) {
  return `
    background-color: ${bgColor};
    background-image:
      linear-gradient(to right, ${gridColor} 1px, transparent 1px),
      linear-gradient(to bottom, ${gridColor} 1px, transparent 1px);
    background-size: 4rem 4rem;
  `;
}
