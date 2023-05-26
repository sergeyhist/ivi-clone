export const isBrowser = (window: boolean | undefined): boolean =>
  window ? true : false;
