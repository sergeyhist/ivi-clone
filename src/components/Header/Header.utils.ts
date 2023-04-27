import {IGenreFilters, IGenreLinks} from "/src/types/IGenre";
import {cartoonsGenres, moviesGenres, seriesGenres} from "/src/locales/genresDropDownData";

export type DropDownType = "movies" | "series" | "cartoons" | "tv" | "notification" | "profile" | "subscription" | "";

export const getGenreLinks = (genre: DropDownType): IGenreFilters => {
  switch (genre) {
    case "movies":
      return moviesGenres as IGenreFilters;
    case "series":
      return seriesGenres as IGenreFilters;
    case "cartoons":
      return cartoonsGenres as IGenreFilters;
    default:
      return {genres: [], countries: [], years: []};
  }
}

export const getLinksSectionTitles = (title: keyof IGenreFilters, selectedGenre: DropDownType): IGenreLinks => {
  const links = getGenreLinks(selectedGenre)[title];
  return {title, links} as IGenreLinks;
}