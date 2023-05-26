export const isBrowser = (
  window: (Window & typeof globalThis) | undefined
): boolean => typeof window !== "undefined";
