import {declOfNum} from "/src/utils/declOfNum";

export const getMovieDeclination = (
  movies: number,
  locale: string | undefined
): string => {
  return locale === "ru"
    ? declOfNum(movies, ["фильм", "фильма", "фильмов"])
    : declOfNum(movies, ["movie", "movies", "movies"]);
};