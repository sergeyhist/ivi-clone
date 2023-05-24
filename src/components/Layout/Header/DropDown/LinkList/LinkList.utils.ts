import { DropDownType } from "/src/components/Layout/Header/Header.utils";
import { TFunction } from "i18next";

export const sortSlugs = (
  list: string[],
  order: DropDownType[],
  selectedGenre: DropDownType
): string[] => {
    return [...list].sort((a, b) =>
      a[order.indexOf(selectedGenre)] > b[order.indexOf(selectedGenre)] ? 1 : -1
    );
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

export const mockGenresSlugs=[
  "drama",
  "fantasy",
  "history",
  "adventure",
  "comedy",
  "melodrama",
  "militant",
  "fiction",
  "thriller",
  "military",
  "western",
  "family",
  "filmnoir",
  "music",
  "horror",
  "detective",
  "documentary",
  "sport",
  "shortfilm",
  "adults"
]

export const mockGenres = [
  "Drama",
  "Fantasy",
  "History",
  "Adventure",
  "Comedy",
  "Melodrama",
  "Militant",
  "Fiction",
  "Thriller",
  "Military",
  "Western",
  "Family",
  "Film noir",
  "Music",
  "Horror",
  "Detective",
  "Documentary",
  "Sport",
  "Short Film",
  "For Adults",
];

export const mockCountries = ["Russian", "American", "Soviet movie"];
export const mockYears = [
  "Movies of 2023",
  "Movies of 2022",
  "Movies of 2021",
  "Movies of 2020",
];

export const moviesCountriesHrefs = [
  "countries=russia",
  "countries=usa",
  "countries=ussr",
];

export const seriesCountriesHrefs = [
  "countries=russia",
  "countries=france&countries=usa&countries=canada&countries=britain",
  "countries=usa",
  "countries=southkorea",
  "countries=turkey",
];

export const cartoonsCountriesHrefs = [
  "countries=ussr",
  "countries=russia",
  "countries=usa",
  "countries=france&countries=usa&countries=canada&countries=britain",
];
