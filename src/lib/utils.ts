
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function calculateDiscountPercentage(originalPrice: number, currentPrice: number): number {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

export function getRandomSubset<T>(array: T[], size: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
}

// This loads a placeholder image if the main image fails to load
export function handleImageError(event: React.SyntheticEvent<HTMLImageElement, Event>) {
  const img = event.currentTarget;
  img.src = 'https://placehold.co/600x400/222/fff?text=Image+Not+Found';
}
