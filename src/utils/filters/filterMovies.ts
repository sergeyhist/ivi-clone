import { getFilteredMovies } from "/src/api/movie";
import { IFilters } from "/src/types/IFilter";
import { IMovie } from "/src/types/IMovie";

import { mockMovies } from "../mocks/movies";

import getSortedList from "./getSortedList";

const filterMovies = async (
  filters: IFilters,
  sorting: string
): Promise<IMovie[]> => {
  const movies = await getFilteredMovies(filters, 1000);
  if (movies && movies.length > 0) {
    return getSortedList(sorting, movies);
  } else {
    let result: IMovie[] = mockMovies;

    result = result.filter((movie) =>
      filters.genres.length > 0
        ? movie.genres.reduce(
            (res, genre) =>
              filters.genres.includes(genre.slug) ? (res = true) : res,
            false
          )
        : true
    );

    result = result.filter((movie) =>
      filters.countries.length > 0
        ? movie.countries.reduce(
            (res, genre) =>
              filters.countries.includes(genre.slug) ? (res = true) : res,
            false
          )
        : true
    );

    result = result.filter((movie) =>
      filters.year.length > 0
        ? movie.year >= +(filters.year as string).split("-")[0] &&
          movie.year <= +(filters.year as string).split("-")[0]
        : true
    );

    result = result.filter((movie) =>
      filters.rating.length > 0 ? movie.rating >= +filters.rating : true
    );

    result = result.filter((movie) =>
      filters.assessments.length > 0
        ? movie.assessments >= +filters.assessments
        : true
    );

    return getSortedList(sorting, result);
  }
};

export default filterMovies;
