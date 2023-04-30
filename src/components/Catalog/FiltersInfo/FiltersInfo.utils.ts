import { IActiveFilters, IFilter } from "/src/types/IFilter";

export const getRatingSlug = (
  activeFilters: IActiveFilters,
  key: string
): string =>
  ["rating", "ratingCount"].includes(key)
    ? ` ${(activeFilters[key] as IFilter).slug}`
    : "";

export const isArrayNotEmpty = (
  activeFilters: IActiveFilters,
  key: string
): boolean => (activeFilters[key] as IFilter[]).length > 0;

export const isFilterNotDefault = (
  activeFilters: IActiveFilters,
  key: string
): boolean => !["all", "0", ""].includes((activeFilters[key] as IFilter).slug);
