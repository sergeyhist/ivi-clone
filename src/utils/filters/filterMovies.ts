import getSortedList from "./getSortedList";
import { getFilteredMovies } from "/src/api/movie";
import { IFilters } from "/src/types/IFilter";
import { IMovie } from "/src/types/IMovie";

const filterMovies = async (
  filters: IFilters,
  sorting: string
): Promise<IMovie[]> => {
  const movies = await getFilteredMovies(filters, 1000);
  if (movies && movies.length > 0) {
    return getSortedList(sorting, movies);
  } else {
    return [];
  }
};

export default filterMovies;
