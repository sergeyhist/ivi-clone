import getSortedList from "./getSortedList";
import { getFilteredMovies } from "/src/api/movie";
import { store } from "/src/store";
import {
  setFilteredMovies,
  setIsMoviesLoading,
} from "/src/store/slices/filtersSlice";
import { IFilters } from "/src/types/IFilter";
import { IMovie } from "/src/types/IMovie";

const filterMovies = (filters: IFilters, sorting: string): void => {
  getFilteredMovies(filters, 1000)?.then((movies: IMovie[] | undefined) => {
    movies && movies.length > 0
      ? store.dispatch(setFilteredMovies(getSortedList(sorting, movies)))
      : store.dispatch(setFilteredMovies([]));
    store.dispatch(setIsMoviesLoading(false));
  });
};

export default filterMovies;
