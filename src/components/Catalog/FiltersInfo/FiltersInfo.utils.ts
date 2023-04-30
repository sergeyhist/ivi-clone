import { IActiveFilters, IFilter } from "/src/types/IFilter";

const getRatingSlug = (activeFilters: IActiveFilters, key: string): string =>
  ["rating", "ratingCount"].includes(key)
    ? ` ${(activeFilters[key] as IFilter).slug}`
    : "";

const isArrayNotEmpty = (activeFilters: IActiveFilters, key: string): boolean =>
  (activeFilters[key] as IFilter[]).length > 0;

const isFilterNotDefault = (
  activeFilters: IActiveFilters,
  key: string
): boolean => !["all", "0", ""].includes((activeFilters[key] as IFilter).slug);

const getTextSelector = (activeFilters: IActiveFilters, key: string): string =>
  (activeFilters[key] as IFilter).text
    ? (activeFilters[key] as IFilter).text
    : (activeFilters[key] as IFilter).slug;

const arrayToString = (activeFilters: IActiveFilters, key: string): string =>
  (activeFilters[key] as IFilter[]).map((filter) => filter.text).join(", ");

export const updateTextArray = (
  activeFilters: IActiveFilters,
  key: string
): string => {
  if (
    !Array.isArray(activeFilters[key]) &&
    isFilterNotDefault(activeFilters, key)
  ) {
    return (
      getTextSelector(activeFilters, key) + getRatingSlug(activeFilters, key)
    );
  }

  if (
    Array.isArray(activeFilters[key]) &&
    isArrayNotEmpty(activeFilters, key)
  ) {
    return arrayToString(activeFilters, key);
  }

  return `all.${key}`;
};
