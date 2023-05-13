import { DropDownType } from "/src/components/Layout/Header/Header.utils";
import { TFunction } from "i18next";

export type linksSection = "genres" | "countries" | "years";

export const sortSlugs = (
  list: string[],
  order: DropDownType[],
  selectedGenre: DropDownType
): string[] => {
  if (list)
    return [...list].sort((a, b) =>
      a[order.indexOf(selectedGenre)] > b[order.indexOf(selectedGenre)] ? 1 : -1
    );
  return [];
};

export const localizeAndLimitList = (
  list: string[],
  prefix: string,
  limit: number,
  t: TFunction
): string[] => {
  return list
    .map((slug) => {
      return t(`${prefix}:${slug}`);
    })
    .slice(0, limit);
};

export const makeLinksFromSlugs = (
  list: string[],
  referLink: string
): string[] => {
  return list.map((slug) => {
    return `${referLink}=${slug}`;
  });
};

export const getCountriesLinksByCategory = (
  category: DropDownType
): string[] => {
  switch (category) {
    case "movies":
      return moviesCountriesHrefs;
    case "series":
      return seriesCountriesHrefs;
  }
  return cartoonsCountriesHrefs;
};

const moviesCountriesHrefs = [
  "countries=russia",
  "countries=usa",
  "countries=ussr",
];

const seriesCountriesHrefs = [
  "countries=russia",
  "countries=france&countries=usa&countries=canada&countries=britain",
  "countries=usa",
  "countries=southkorea",
  "countries=turkey",
];

const cartoonsCountriesHrefs = [
  "countries=ussr",
  "countries=russia",
  "countries=usa",
  "countries=france&countries=usa&countries=canada&countries=britain",
];
