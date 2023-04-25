import i18next from "i18next";
import { IActiveFilters, IFilter } from "/src/types/IFilter";

const getRatingSlug = (activeFilters: IActiveFilters, key: string) =>
  ["rating", "ratingCount"].includes(key)
    ? ` ${(activeFilters[key] as IFilter).slug}`
    : "";

const isArrayNotEmpty = (activeFilters: IActiveFilters, key: string) =>
  (activeFilters[key] as IFilter[]).length > 0;

const isFilterNotDefault = (activeFilters: IActiveFilters, key: string) =>
  !["all", "0", ""].includes((activeFilters[key] as IFilter).slug);

const getTextSelector = (activeFilters: IActiveFilters, key: string) =>
  (activeFilters[key] as IFilter).text
    ? i18next.t((activeFilters[key] as IFilter).text)
    : (activeFilters[key] as IFilter).slug;

const arrayToString = (activeFilters: IActiveFilters, key: string) =>
  (activeFilters[key] as IFilter[])
    .map((filter) => i18next.t(filter.text))
    .join(", ");

export const updateTextArray = (activeFilters: IActiveFilters, key: string) => {
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

  return i18next.t(`filters.all.${key}`);
};
