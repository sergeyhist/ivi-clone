import { i18n } from "next-i18next";
import { filterDefaults } from "./filtersVariables";
import { IFilters } from "/src/types/IFilter";

const isRating = (key: string) => ["rating", "assessments"].includes(key);

const isArrayNotEmpty = (filters: IFilters, key: string): boolean =>
  (filters[key] as string[]).length > 0;

const isFilterNotDefault = (filters: IFilters, key: string): boolean =>
  !filterDefaults.includes(filters[key] as string);

const getText = (filters: IFilters, key: string): string => {
  if (filters[key] && !isRating(key)) {
    return i18n?.t(`${key}:${filters[key] as string}`) || "";
  }

  if (filters[key] && isRating(key)) {
    return (
      i18n?.t(
        `filters:${key === "rating" ? "ratingFrom" : "ratingCountFrom"}`
      ) +
      " " +
      `${filters[key] as string}`
    );
  }

  return filters[key] as string;
};

const arrayToString = (filters: IFilters, key: string): string =>
  (filters[key] as string[])
    .map((filter) => i18n?.t(`${key}:${filter}`))
    .join(", ");

const updateTextArray = (filters: IFilters, key: string): string => {
  if (!Array.isArray(filters[key]) && isFilterNotDefault(filters, key)) {
    return getText(filters, key);
  }

  if (Array.isArray(filters[key]) && isArrayNotEmpty(filters, key)) {
    return arrayToString(filters, key);
  }

  return i18n?.t(`filters:all.${key}`) || "";
};

export const getFiltersText = (filters: IFilters) => {
  return Object.keys(filters)
    .map((key: string) => updateTextArray(filters, key))
    .join(", ");
};
