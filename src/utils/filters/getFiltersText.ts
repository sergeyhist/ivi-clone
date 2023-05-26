import { i18n } from "next-i18next";
import { filterDefaults } from "./filtersVariables";
import { IFilters } from "/src/types/IFilter";

const isRating = (key: string): boolean =>
  ["rating", "assessments"].includes(key);

const isArrayNotEmpty = (filters: IFilters, key: string): boolean =>
  (filters[key] as string[]).length > 0;

const isFilterNotDefault = (filters: IFilters, key: string): boolean =>
  !filterDefaults.includes(filters[key] as string);

const getText = (filters: IFilters, key: string): string => {
  if (!isRating(key)) {
    return (
      i18n?.t(`${key}:${filters[key] as string}`) || (filters[key] as string)
    );
  } else {
    const translateType = key === "rating" ? "ratingFrom" : "ratingCountFrom";
    return `${
      i18n?.t(`filters:${translateType}`) || (filters[key] as string)
    } ${filters[key] as string}`;
  }
};

const arrayToString = (filters: IFilters, key: string): string =>
  (filters[key] as string[])
    .map((filter) => i18n?.t(`${key}:${filter}`) || filter)
    .join(", ");

const updateTextArray = (filters: IFilters, key: string): string => {
  if (!Array.isArray(filters[key]) && isFilterNotDefault(filters, key)) {
    return getText(filters, key);
  }

  if (Array.isArray(filters[key]) && isArrayNotEmpty(filters, key)) {
    return arrayToString(filters, key);
  }

  return i18n?.t(`filters:all.${key}`) || "all";
};

export const getFiltersText = (
  filters: IFilters,
  actor: string | undefined = undefined,
  director: string | undefined = undefined
): string => {
  return Object.keys(filters)
    .map(
      (key: string) =>
        (key === "actor" && actor) ||
        (key === "director" && director) ||
        updateTextArray(filters, key)
    )
    .join(", ");
};
