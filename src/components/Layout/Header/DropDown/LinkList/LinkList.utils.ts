import { DropDownType } from "/src/components/Layout/Header/Header.utils";

export const sortSlugs = (
  list: string[],
  order: DropDownType[],
  selectedGenre: DropDownType
): string[] => {
  return [...list].sort((a, b) =>
    a[order.indexOf(selectedGenre)] > b[order.indexOf(selectedGenre)] ? 1 : -1
  );
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
): { [key: string]: string } => {
  switch (category) {
    case "movies":
      return moviesCountriesHrefs;
    case "series":
      return seriesCountriesHrefs;
  }
  return cartoonsCountriesHrefs;
};

export const yearsList = ["2023", "2022", "2021", "2020"];

const foreign =
  "countries=france&countries=usa&countries=canada&countries=britain";

export const moviesCountriesHrefs = {
  russia: "countries=russia",
  usa: "countries=usa",
  ussr: "countries=ussr",
};

export const seriesCountriesHrefs = {
  russia: "countries=russia",
  foreign: foreign,
  usa: "countries=usa",
  korea: "countries=southkorea",
  turkey: "countries=turkey",
};

export const cartoonsCountriesHrefs = {
  ussr: "countries=ussr",
  russia: "countries=russia",
  usa: "countries=usa",
  foreign: foreign,
};
