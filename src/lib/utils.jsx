// src/lib/utils.js

// A helper to merge class names (optional, but commonly used)
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
