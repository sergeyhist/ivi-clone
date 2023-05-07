import { IFilters } from "/src/types/IFilter";

export const compareFilters = (first: IFilters, second: IFilters): boolean =>
  Object.keys(first).reduce((condition, filter) => {
    const a: string =
      typeof first[filter] === "string"
        ? (first[filter] as string)
        : (first[filter] as string[]).join();

    const b: string =
      typeof second[filter] === "string"
        ? (second[filter] as string)
        : (second[filter] as string[]).join();

    return a !== b ? (condition = true) : condition;
  }, false);
